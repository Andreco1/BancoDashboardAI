# IABank

AI-powered banking analytics dashboard built with modern full-stack technologies.

IABank combines:

* conversational AI
* financial analytics
* fraud monitoring
* SQL-driven insights
* interactive dashboards

into a modern fintech-style platform.

---

## Features

* AI financial assistant
* Banking analytics dashboard
* Fraud alert monitoring
* Transaction analytics
* Interactive charts
* PostgreSQL integration
* FastAPI backend
* Next.js frontend
* Modern fintech UI

---

## Tech Stack

### Frontend

* [Next.js](https://nextjs.org?utm_source=chatgpt.com)
* [React](https://react.dev?utm_source=chatgpt.com)
* [TailwindCSS](https://tailwindcss.com?utm_source=chatgpt.com)
* [Recharts](https://recharts.org?utm_source=chatgpt.com)

### Backend

* [FastAPI](https://fastapi.tiangolo.com?utm_source=chatgpt.com)
* [SQLAlchemy](https://www.sqlalchemy.org?utm_source=chatgpt.com)
* [PostgreSQL](https://www.postgresql.org?utm_source=chatgpt.com)
* [OpenAI API](https://platform.openai.com?utm_source=chatgpt.com)

### Environment

* [NixOS](https://nixos.org?utm_source=chatgpt.com)

---

# Architecture

```text id="7v6jpj"
Frontend (Next.js)
        ↓
FastAPI Backend
        ↓
OpenAI API
        ↓
SQL Generation
        ↓
PostgreSQL Database
```

---

# Dashboard Modules

* Sidebar navigation
* Analytics topbar
* KPI cards
* Transaction charts
* AI chatbot assistant
* Transactions table

---

# Database Schema

## transactions

```sql id="jlwm7f"
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    branch TEXT NOT NULL,
    customer_id INT,
    amount FLOAT NOT NULL,
    transaction_type TEXT,
    status TEXT,
    transaction_date TIMESTAMP
);
```

## customers

```sql id="1j5b89"
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    full_name TEXT,
    city TEXT,
    risk_level TEXT,
    created_at TIMESTAMP
);
```

## fraud_alerts

```sql id="6xmx7m"
CREATE TABLE fraud_alerts (
    id SERIAL PRIMARY KEY,
    transaction_id INT,
    severity TEXT,
    description TEXT,
    created_at TIMESTAMP
);
```

---

# Running Locally

## Clone repository

```bash id="jlwm8x"
git clone https://github.com/YOUR_USERNAME/iabank.git
```

---

## Frontend

```bash id="jlwm2m"
npm install

npm run dev
```

Runs on:

```text id="jlwm2v"
http://localhost:3000
```

---

## Backend

```bash id="zjlwmx"
cd backend

uvicorn main:app --reload
```

Runs on:

```text id="3cjlwm"
http://127.0.0.1:8000
```

---

# PostgreSQL Setup

Initialize database:

```bash id="cjlwm2"
initdb -D ./postgres-data
```

Start PostgreSQL:

```bash id="7jlwm4"
pg_ctl -D ./postgres-data -o "-k /tmp" -l logfile start
```

Connect:

```bash id="djlwm3"
psql -h /tmp postgres
```

---

# Environment Variables

Create:

```text id="jlwm6g"
backend/.env
```

Add:

```env id="jlwm5m"
OPENAI_API_KEY=your_api_key
```

---

# Future Improvements

* Real-time analytics
* Fraud prediction models
* Natural language to SQL
* Authentication system
* Live transaction streams
* AI-generated reports
* Risk scoring
* Docker deployment
* Cloud infrastructure

---

# Inspiration

Inspired by modern fintech platforms such as:

* [Stripe](https://stripe.com?utm_source=chatgpt.com)
* [Plaid](https://plaid.com?utm_source=chatgpt.com)
* [Linear](https://linear.app?utm_source=chatgpt.com)
* [Vercel](https://vercel.com?utm_source=chatgpt.com)

---

# License

MIT License

---

# Author

Andrés Cogordán | Physical Engineering
AI • Backend • Data • Fintech • High Energy

