// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Create Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // ✅ backend can use process.env
});

// POST /api/recipe
app.post("/api/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;
    const SYSTEM_PROMPT = `
      You are an assistant that receives a list of ingredients and suggests a recipe.
      Format your response in Markdown.
    `;

    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `I have ${ingredients.join(", ")}. Please give me a recipe!`,
        },
      ],
    });

    res.json({ recipe: response.content[0].text });
  } catch (err) {
    console.error("❌ Error generating recipe:", err);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Backend running on http://localhost:${PORT}`)
);
