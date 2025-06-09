from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams
from qdrant_client.models import Filter, FieldCondition, MatchValue
from dotenv import load_dotenv
from datetime import datetime
import os
import uuid
from qdrant_client.http.models import PointStruct
from qdrant_client.http.models import PayloadSchemaType
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_qdrant import Qdrant as LangQdrant
from langchain.schema import Document
from langchain_huggingface import HuggingFaceEmbeddings
import json


load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

client = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY")
)


embedding_model = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
COLLECTION = "ombot_persona"

def clear_tool_usage_collection():
    client.delete_collection(collection_name=COLLECTION)

def init_qdrant():
    clear_tool_usage_collection()

    client.recreate_collection(
        collection_name=COLLECTION,
        vectors_config=VectorParams(size=384, distance=Distance.COSINE)
    )


def store_documents(docs: list[str], namespace: str):
    splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=50)
    points = []

    for doc in docs:
        for chunk in splitter.split_text(doc):
            vector = embedding_model.embed_query(chunk)
            points.append(PointStruct(
                id=str(uuid.uuid4()),
                vector=vector,
                payload={"content": chunk, "namespace": namespace}
            ))

    client.upsert(collection_name=COLLECTION, points=points)

    search = client.scroll(
    collection_name=COLLECTION,
    limit=5,
    with_payload=True
    )

    for point in search[0]:
        print("[📄] Stored Document Payload:")
        print(json.dumps(point.payload, indent=2))


def get_persona_retriever():
    vectorstore = LangQdrant(
        client=client,
        collection_name=COLLECTION,
        embeddings=embedding_model,
        content_payload_key="content"
    )

    return vectorstore.as_retriever(search_kwargs={"k": 3})