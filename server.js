const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/analyze', async (req, res) => {
  try {
    const { logText } = req.body;

    if (!logText || logText.trim() === '') {
      return res.status(400).json({ error: 'Log text is required' });
    }

    const prompt = `You are a SOC analyst. Analyze the following logs for signs of intrusion, unusual access patterns, or suspicious activity. Provide a clear and concise summary.\n\nLogs:\n${logText}`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo', 
    });

    const result = completion.choices[0].message.content;
    res.json({ result });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to analyze log' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});