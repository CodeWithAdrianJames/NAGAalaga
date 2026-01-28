import { GoogleGenAI } from "@google/genai"
import { Request, Response } from "express"

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

export const triageSymptoms = async (req: Request, res: Response) => {
  try {
    const { symptoms } = req.body

    if (!symptoms) {
      return res.status(400).json({ error: "Symptoms are required" })
    }

    const prompt = `
You are Bicol-First Smart Triage AI.

The user is a pregnant mother.

Analyze the following symptoms and classify into exactly ONE:

SAFE
MONITOR
EMERGENCY

Also provide short advice.

Respond strictly in JSON:

{
  "status": "SAFE | MONITOR | EMERGENCY",
  "message": "short explanation",
  "advice": "clear next steps"
}

Symptoms:
${symptoms}
`

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    })

    const raw = response.text

if (!raw) {
  return res.status(500).json({ error: "Empty AI response" })
}

const cleaned = raw.replace(/```json|```/g, "").trim()

const parsed = JSON.parse(cleaned)

parsed.status = parsed.status.trim().toUpperCase()

res.json(parsed)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "AI triage failed" })
  }
}
