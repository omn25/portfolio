# chatbot/tools.py
import os
from dotenv import load_dotenv
from langchain.agents import Tool
from langchain_ollama import OllamaLLM as Ollama
from backend.vectorstore import get_persona_retriever

load_dotenv()

def get_persona_tool():
    """Tool for retrieving information about Om's background and experiences."""
    return Tool(
        name="persona_info",
        func=lambda q: get_persona_retriever().get_relevant_documents(q),
        description="Use this tool to get information about Om's background, experiences, projects, and interests."
    )
