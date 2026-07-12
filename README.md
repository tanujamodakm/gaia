# <span style="color:#11b5ae;">GAIA</span> ![Website](https://img.shields.io/badge/Live-Website-11b5ae?style=for-the-badge)

**Click here to access the website:** https://gaiacp.netlify.app/

---

## Overview

The **Great Awakening Intelligence Atlas (GAIA)** is a data visualization and knowledge organization project that transforms the original Great Awakening Map into a structured, searchable dataset. The project involved manually extracting information from the map, organizing it into a relational Excel dataset, and developing an interactive Power BI dashboard to analyze nodes, clusters, categories, and relationships. Rather than presenting the map as a static infographic, the project converts it into a navigable knowledge base for exploration and pattern analysis.

---

## Project Objectives

The primary objective of this project was to convert an unstructured visual map into a structured dataset that could be explored through interactive analytics. The project focused on building a consistent data model while learning modern business intelligence techniques.

- Transform a complex infographic into structured data.
- Create a searchable knowledge graph.
- Organize concepts into clusters and hierarchical relationships.
- Build an interactive dashboard using Power BI.
- Perform basic network and relationship analysis.

---

## Dataset Preparation

The dataset was created entirely through manual extraction and organization of information from the original map. Every topic, concept, and relationship was assigned unique identifiers and categorized to create a structured relational dataset suitable for visualization and analysis.

The final dataset includes:

- Cluster IDs and Cluster Names
- Node IDs and Node Names
- Parent and Child relationships
- Categories and Subcategories
- Position and Layout information
- Relationship metadata

---

## Dashboard Development

The structured Excel dataset was imported into Microsoft Power BI to create an interactive dashboard. Multiple visualizations were developed to summarize the dataset and allow users to explore clusters, categories, and network relationships through filters and cross-interactions.

The dashboard includes:

- Dataset summary statistics
- Category distribution
- Cluster distribution
- Parent and Child node analysis
- Network connection statistics
- Interactive filtering and slicing
- Relationship tables
- Dynamic drill-down exploration

---

## AI Assistant (GAIA)

The website also includes an integrated AI assistant powered by Google's Gemini API. The chatbot allows users to ask natural language questions about the Great Awakening Intelligence Atlas and receive contextual responses based on the structured dataset.

Instead of searching manually through the map, users can interact with GAIA conversationally to explore concepts, clusters, categories, and relationships. The backend uses Flask together with RapidFuzz-based dataset retrieval to identify relevant records before generating a response with Gemini.

### Features

- Interactive AI chatbot
- Natural language question answering
- Context-aware responses from the structured dataset
- Gemini API integration
- Flask backend deployed on Render
- Responsive chat interface for desktop and mobile devices

---

## AI Assistant Preview

*Screenshots of the AI chatbot interface will be added here.*

---

## Screenshots

The following screenshots demonstrate different stages of the project, from data preparation to interactive visualization.

### Website Preview

The website was first designed in Figma before development.

*(Insert Website Screenshot)*

---

## Sample Excel Dataset

The following screenshots show a portion of the manually structured dataset used to build the Power BI dashboard.

*(Insert Dataset Screenshot)*

---

## Dashboard Demonstration

A short demonstration showcasing the interactive features of the Power BI dashboard, including filtering, cross-highlighting, and navigation.

*(Insert Dashboard GIF / Video)*

---

## Tools and Technologies

The project combines spreadsheet-based data preparation with business intelligence tools for visualization.

- Microsoft Excel
- Microsoft Power BI
- Power Query
- DAX
- Python
- Flask
- Google Gemini API
- RapidFuzz
- HTML
- CSS
- JavaScript
- GitHub
- Render
- Netlify

---

## Dataset Summary

*(Insert Dataset Summary Image)*

---

## Learning Experience

This project marked my first experience using Microsoft Power BI. Coming from a background of working primarily with Microsoft Excel, it provided an opportunity to understand how business intelligence platforms extend traditional spreadsheet analysis. While Excel is effective for data organization, calculations, and static reporting, Power BI introduces interactive visualizations, data modeling, cross-filtering, dynamic dashboards, and drill-down analysis. Working on this project helped me understand the advantages of transforming structured datasets into interactive analytical reports that make complex information easier to explore and interpret.

Building the AI assistant further expanded the project by combining business intelligence with modern generative AI. It provided practical experience in developing a Flask backend, integrating the Gemini API, designing conversational interfaces, deploying web applications, and connecting structured datasets with large language models to create an interactive exploration experience.

---

## Acknowledgement

This project was developed as a data organization and visualization exercise using the Great Awakening Map as the source material. The focus of the project is on demonstrating data extraction, data modeling, interactive visualization, and AI-assisted exploration techniques. The project does not endorse or validate the claims represented in the original source material.
