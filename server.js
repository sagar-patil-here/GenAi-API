import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  res.send("Server is running!");
});
// Define the /api/chat endpoint
app.post("/api/chat", async (req, res) => {
  // Use the message provided by the client or default to a prompt
  const prompt = req.body.message || "Explain how AI works";

  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    res.json({ reply: text });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(8080, "0.0.0.0", () => {
  console.log("Server running on port 8080");
});

