import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ==========================
// CONFIG GEMINI
// ==========================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// ==========================
// ROTA GERAR SIMULADO
// ==========================

app.post("/gerar-simulado", async (req, res) => {

  const { materia, quantidade } = req.body;

  if (!materia || !quantidade) {
    return res.status(400).json({ erro: "Materia e quantidade são obrigatórias" });
  }

  try {

    const prompt = `
    Gere ${quantidade} questões de múltipla escolha sobre ${materia}.

    Regras:
    - 4 alternativas
    - Apenas 1 correta
    - Não repetir perguntas
    - Para cada questão, inclua uma sugestão de resolução

    Responda APENAS com JSON válido no formato:

    [
      {
        "pergunta": "texto da pergunta",
        "alternativas": ["A) ...", "B) ...", "C) ...", "D) ..."],
        "resposta_correta": "A",
        "sugestao": "Sugestão de como resolver"
      }
    ]
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    let text = response.text;

    // Remove possíveis blocos ```json
    text = text.replace(/```json/g, "")
               .replace(/```/g, "")
               .trim();

    const json = JSON.parse(text);

    res.json(json);

  } catch (error) {
    console.error("Erro Gemini:", error);
    res.status(500).json({ erro: "Erro ao gerar simulado" });
  }

});

// ==========================

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});