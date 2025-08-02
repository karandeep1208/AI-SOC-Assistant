# ⚔️ AI SOC Log Analyzer Assistant

A lightweight web-based tool that uses AI to help Security Operations Center (SOC) analysts analyze server and system logs for threats, suspicious activity, and remediation suggestions.

Built using Node.js, Express, Gemini API (Google AI), and a simple HTML/CSS frontend.

---

## 🚀 Features

- 🔍 Log analysis using Google Gemini AI
- ⚠️ Detects brute-force attempts, port scans, malware behavior, privilege escalation, and more
- 🧠 AI-generated summaries, threat reports, and remediation advice
- 🌐 Easy-to-use web interface
- 🔐 Secure backend API key handling (no key exposed to frontend)

---

## 📂 Project Structure

AI-SOC-Assistant/

├── public/

│   └── index.html          # Frontend UI

├── .env                    # Environment file (API Key)

├── index.js                # Express backend server

├── package.json

└── README.md

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/karandeep1208/AI-SOC-Assistant.git
cd AI-SOC-Assistant

---

## Install Dependencies
npm install

---

## Create a .env file:

touch .env

Paste your API key:

GEMINI_API_KEY=your_gemini_api_key_here

---

## Start the Server

node index.js

---

# Example Logs You Can Test

Aug 2 08:40:12 server sshd[2134]: Failed password for invalid user admin from 198.51.100.23 port 54566 ssh2
203.0.113.15 - - [02/Aug/2025:08:42:13 +0000] "POST /login HTTP/1.1" 401 564
10.0.0.20 - - [02/Aug/2025:08:43:46 +0000] "GET /uploads/cmd.php HTTP/1.1" 200 123
