from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from backend.model_context import OmChatbot
from backend.store_persona import store_persona
from backend.vectorstore import init_qdrant
import uvicorn
import signal
import sys
import gc
import asyncio
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize resources
    try:
        init_qdrant()
        store_persona()
        gc.collect()  # Force garbage collection
    except Exception as e:
        print(f"Startup error: {str(e)}")
        sys.exit(1)
    yield
    # Shutdown: Clean up resources
    gc.collect()

app = FastAPI(lifespan=lifespan)

# Enable CORS for the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    prompt: str

class ChatResponse(BaseModel):
    response: str

@app.get("/")
async def root():
    return {"message": "OmBot is running!"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        bot = OmChatbot()
        response = bot.run(request.prompt)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def handle_shutdown(signum, frame):
    print("\nShutting down gracefully...")
    gc.collect()  # Final cleanup
    sys.exit(0)

# Register shutdown handlers
signal.signal(signal.SIGINT, handle_shutdown)
signal.signal(signal.SIGTERM, handle_shutdown)

if __name__ == "__main__":
    config = uvicorn.Config(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        workers=1,  # Limit workers to reduce resource usage
        limit_concurrency=10,  # Limit concurrent connections
        loop="asyncio",
        timeout_keep_alive=30,  # Reduce keep-alive timeout
    )
    server = uvicorn.Server(config)
    server.run()