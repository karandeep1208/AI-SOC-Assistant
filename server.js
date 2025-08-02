const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/analyze', async (req, res) => {
  try {
    const { logText } = req.body;

    if (!logText || logText.trim() === '') {
      return res.status(400).json({ error: 'Log text is required' });
    }

    const prompt = `You are a SOC analyst. Analyze the following logs for signs of intrusion, unusual access patterns, or suspicious activity. Provide a clear and concise summary.\n\nLogs:\n${logText}`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      }
    );

    const result = response.data.candidates[0].content.parts[0].text;
    res.json({ result });

  } catch (error) {
    console.error('Gemini Error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to analyze log' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});