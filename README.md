# 🛡️ ToxicShield AI

## AI-Powered Offensive Comment Detection System

Real-time toxicity detection with multilingual support (English, Hindi, Hinglish), explainable AI, JWT auth, admin panel, analytics dashboard, and WebSocket live feed.

---

# ✨ Features

| Feature | Details |
|---|---|
| 🤖 AI Model | DistilBERT fine-tuned on Jigsaw Toxic Comment Dataset |
| 🌐 Multilingual | English, Hindi, Hinglish detection |
| 📊 Categories | Toxic, Severe Toxic, Obscene, Threat, Insult, Identity Hate, Spam, Cyberbullying |
| 🧠 Explainable AI | Per-token attribution scores |
| ✨ Polite Rewrite | AI-generated respectful alternatives |
| ⚡ Real-time | WebSocket live moderation feed |
| 🔐 JWT Auth | Secure authentication with admin/user roles |
| 📈 Analytics | Trend charts, category breakdown, model metrics |
| 📋 Audit Logs | Full moderation history with filters/pagination |
| ⚙️ Admin Panel | User management, configurable thresholds |
| 🔒 Auto-block | Automatic blocking of toxic content |

---

# 🏗️ Architecture

```bash
toxicshield/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── context/AuthContext.jsx
│   │   ├── components/
│   │   └── pages/
│   └── Dockerfile
│
├── backend/
│   ├── main.py
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   └── models/
│   ├── requirements.txt
│   └── Dockerfile
│
├── model/
│   ├── scripts/
│   ├── data/
│   └── saved_model/
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

# 🚀 Quick Start

## Prerequisites

- Node.js 20+
- Python 3.11+
- MongoDB Atlas / MongoDB 7.0

---

# 1 — Clone & Configure

```bash
git clone https://github.com/Abhijit-881/toxicshield-ai.git

cd toxicshield-ai
```

Create `.env`

```env
SECRET_KEY=your_secret_key

MONGODB_URL=your_mongodb_connection_string

DATABASE_NAME=toxicshield
```

---

# 2 — Backend Setup

```bash
cd backend

py -3.11 -m pip install -r requirements.txt

py -3.11 -m uvicorn main:app --reload
```

API Docs:

```txt
http://127.0.0.1:8000/docs
```

---

# 3 — Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```txt
http://localhost:3000
```

---

# 🔑 Demo Credentials

| Role | Username | Password |
|---|---|---|
| Admin | admin | admin123 |
| User | user1 | user123 |

---

# 🐳 Docker Deployment

```bash
docker compose up --build
```

Services:

- Frontend → http://localhost:3000
- Backend API → http://localhost:8000
- MongoDB → localhost:27017

---

# 🤖 Model Training

## Download Dataset

```bash
pip install kaggle

kaggle competitions download -c jigsaw-toxic-comment-classification-challenge
```

---

## Train Model

```bash
python scripts/train.py
```

---

# 🔌 API Reference

## Authentication

### POST `/auth/login`

```json
{
  "username": "admin",
  "password": "admin123"
}
```

---

## Analyze Comment

### POST `/api/v1/analyze`

```json
{
  "text": "Your comment here",
  "language": "auto"
}
```

---

# 🗄️ Database Collections

- users
- comments
- moderation_logs
- blocked_users
- thresholds
- analytics_snapshots

---

# ⚙️ Tech Stack

## Frontend
- React
- Vite
- JavaScript
- CSS

## Backend
- FastAPI
- Uvicorn
- Motor
- JWT Authentication

## AI / ML
- PyTorch
- Transformers
- DistilBERT
- Scikit-learn

## Database
- MongoDB Atlas

---

# 📸 Screenshots

Add project screenshots here.

---

# 🌐 Deployment

## Frontend
Deploy using:
- Vercel

## Backend
Deploy using:
- Render

---

# 👨‍💻 Author

## Abhijeet Shelke

- GitHub: https://github.com/Abhijit-881
- Passionate Full Stack & AI Developer

---

# 📄 License

MIT License © 2026 Abhijeet Shelke