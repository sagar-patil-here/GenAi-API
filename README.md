# 💬 AI Chatbot – Powered by Gemini API

## Project Live On : https://gen-ai-api-black.vercel.app/

## Overview
This is an AI-powered chatbot application that uses Google's **Gemini API** to generate responses based on user queries. The chatbot is designed to be interactive and efficient, providing real-time responses.

## Features
- 🔹 **Natural Language Processing (NLP)**
- 🔹 **Responsive UI**
- 🔹 **Real-time AI Chat**
- 🔹 **Secure API Handling with .env**
- 🔹 **Lightweight and Fast**

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **AI Integration:** Gemini API

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sagar-patil-here/GenAi-API.git
cd GenAi-API
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the project root and add your API key:
```env
GEMINI_API_KEY=your_api_key_here
```
**⚠️ Important:** Never share your API key. Add `.env` to `.gitignore` to prevent accidental uploads.

### 4️⃣ Run the Project
```sh
npm start
```

## Deployment
To deploy, follow these steps:
- Use **Vercel, Heroku, or Netlify** for hosting.
- Ensure **environment variables** are set in the hosting provider.

## How to Push Code to GitHub Without Exposing API Key

### 1️⃣ Add `.env` to `.gitignore`
```sh
echo "*.env" >> .gitignore
```

### 2️⃣ Commit & Push Code
```sh
git add .
git commit -m "Initial commit"
git push origin main
```

## Troubleshooting
If you get the `failed to push some refs` error:
```sh
git pull origin main --rebase
git push origin main
```

## License
This project is **MIT Licensed**.

---
📌 Developed by [Sagar Patil](https://github.com/sagar-patil-here)

