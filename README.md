🤖 ChatGPT Clone – AI Chatbot Web App

A full-stack AI chatbot built using JavaScript, Node.js, Express, and the Groq LLM API.
This project demonstrates how real-world AI applications securely connect a frontend UI with a backend server to interact with large language models.

🚀 Features

ChatGPT-style chat interface
Real-time AI responses
Secure backend (API keys never exposed to browser)
Uses Groq’s high-speed large language models
Modern full-stack architecture

🛠 Tech Stack

Frontend

HTML
CSS
JavaScript

Backend

Node.js
Express
Groq API

🧠 How It Works
Browser (UI)
    ↓
Node.js Server (Express)
    ↓
Groq LLM API
    ↓
AI Response
    ↓
Back to UI

The browser never talks directly to the AI API — all requests go through the backend to keep the API key secure.

⚙️ Setup & Run Locally
1️⃣ Clone the repo
git clone https://github.com/YOUR_USERNAME/chatgpt-clone.git
cd chatgpt-clone

2️⃣ Install dependencies
npm install

3️⃣ Add API Key

GROQ_API_KEY=your_groq_api_key_here

4️⃣ Start the server
node server.js

5️⃣ Open the website
Open index.html in your browser
Start chatting with AI 🎉

📸 Screenshots

<img width="891" height="880" alt="image" src="https://github.com/user-attachments/assets/6026bdd0-2312-45a2-99f1-f43ab777f4d7" />


🎯 What I Learned

How real AI web apps are built
How to securely use AI APIs
Handling CORS and backend proxies
Connecting frontend & backend
Working with large language models

🔮 Future Improvements

Chat history
User login
UI enhancements
Online deployment

🙌 Acknowledgements
Powered by Groq LLM API
