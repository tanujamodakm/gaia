from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer
from dotenv import load_dotenv
import os
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

load_dotenv()
genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)
llm = genai.GenerativeModel("models/gemini-flash-latest")

df = pd.read_excel("gaia_dataset.xlsx")

df["search_text"] = (
    df["Node_Name"].fillna("").astype(str) + " " +
    df["Category"].fillna("").astype(str) + " " +
    df["Subcategory"].fillna("").astype(str) + " " +
    df["Cluster_Name"].fillna("").astype(str) + " " +
    df["Node_Type"].fillna("").astype(str) + " " +
    df["Connected_To"].fillna("").astype(str)
)

documents = df["search_text"].tolist()

embed_model = SentenceTransformer(
    "sentence-transformers/all-MiniLM-L6-v2"
)

doc_embeddings = embed_model.encode(
    documents,
    show_progress_bar=True
)

def search_gaia(query, top_k=50):
    query_embedding = embed_model.encode([query])[0]

    similarities = np.dot(
        doc_embeddings,
        query_embedding
    )

    top_indices = np.argsort(similarities)[::-1][:top_k]
    return df.iloc[top_indices]

def build_context(query):
    results = search_gaia(query)
    context = ""
    for _, row in results.iterrows():

        context += f"""
Node: {row['Node_Name']}
Category: {row['Category']}
Subcategory: {row['Subcategory']}
Cluster: {row['Cluster_Name']}
Type: {row['Node_Type']}
Connected To: {row['Connected_To']}
Relationship: {row['Relationship_Type']}

"""

    return context

def ask_gaia(question):
    context = build_context(question)
    prompt = f"""
You are GAIA (Great Awakening Intelligence Atlas).

Atlas Information:

{context}

User Question:

{question}

Answer using the atlas information.
If nothing relevant exists, answer generally.
"""

    response = llm.generate_content(prompt)

    return response.text

@app.route("/ask", methods=["POST"])
def ask():
    question = request.json["question"]
    answer = ask_gaia(question)

    return jsonify({
        "answer": answer
    })

@app.route("/")
def home():
    return "GAIA Backend Running"

if __name__ == "__main__":
    app.run(debug=True)
