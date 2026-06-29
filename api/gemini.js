// api/gemini.js — Vercel Serverless Function
// This keeps your Gemini API key safe on the server side.
// The key is stored in Vercel Environment Variables, never in your code.

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured on server" });
  }

  const { type, b64, mimeType, prompt } = req.body;

  if (!type || !prompt) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Build the parts array depending on whether an image is included
    const parts = [];
    if (b64 && mimeType) {
      parts.push({ inline_data: { mime_type: mimeType, data: b64 } });
    }
    parts.push({ text: prompt });

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig:
            type === "chat"
              ? { temperature: 0.7, maxOutputTokens: 200 }
              : type === "scan"
              ? { temperature: 0.1 }
              : { temperature: 0.05, topP: 0.8 },
        }),
      }
    );

    const data = await geminiRes.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    return res.status(200).json({ text });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
