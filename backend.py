from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from rapidfuzz import process
import google.generativeai as genai
import os

app = Flask(__name__)
CORS(app)

genai.configure(
    api_key=os.environ.get("GEMINI_API_KEY")
)
model = genai.GenerativeModel(
    "models/gemini-flash-latest"
)

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

def search_gaia(query, top_k=30):

    matches = process.extract(
        query,
        documents,
        limit=top_k
    )

    rows = []

    for match in matches:
        index = match[2]
        rows.append(df.iloc[index])

    return rows


def build_context(query):
    rows = search_gaia(query)
    context = ""
    for row in rows:
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

Use ONLY the information below whenever possible.

Atlas Information
-----------------
{context}

User Question:
{question}

Answer clearly.
If the atlas does not contain enough information,
say so before giving a general explanation.
"""

    response = model.generate_content(prompt)

    return response.text

@app.route("/")

def home():
    return "GAIA Backend Running"

@app.route("/ask", methods=["POST"])

def ask():

    question = request.json["question"]
    answer = ask_gaia(question)
    return jsonify({
        "answer": answer
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
