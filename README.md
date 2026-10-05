# 🤝 Peer-to-Peer Skill Exchange

> **"Your Knowledge Becomes Currency"** — A Full-Stack Time-Bank & Credit-Economy Web Application where learning and teaching happen with zero monetary exchange.

[![Live Deployment](https://img.shields.io/badge/Live%20Demo-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://p2p-skill-exchange.onrender.com/)
[![Database](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anshuln26/P2P-Skill-Exchange)
[![React](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

---

## 🌐 Live Production Links

* 🔗 **Live Website**: [https://p2p-skill-exchange.onrender.com/](https://p2p-skill-exchange.onrender.com/)
* 📡 **API Health Check**: [https://p2p-skill-exchange.onrender.com/api/health](https://p2p-skill-exchange.onrender.com/api/health)
* 🐙 **Source Code**: [https://github.com/anshuln26/P2P-Skill-Exchange](https://github.com/anshuln26/P2P-Skill-Exchange)

---

## 🎯 The Core Philosophy: Knowledge Currency

The platform operates on a decentralized **Time-Bank Knowledge Economy**:
* ⏳ **1 hour of teaching = 1 credit earned (+1 Cr)**
* 📚 **1 credit spent = 1 hour of learning (-1 Cr)**
* 🚫 **Zero real money transactions** — Knowledge and time are the only currency.
* 💡 **The Barter Problem Solved:** If User A wants to learn Guitar from User B, but User B doesn't want User A's Excel skill:
  - User A teaches Excel to User C $\rightarrow$ User A earns +1 credit.
  - User A spends that credit to learn Guitar from User B.

---

## 👥 Demo Accounts (Pre-Seeded in MongoDB Atlas)

The database is live on **MongoDB Atlas** and automatically initialized with **24 skills**, **21 community users**, **active sessions**, **credit ledger transactions**, and **reviews**.

| Account Name | Email | Password | Role & Expertise |
| :--- | :--- | :--- | :--- |
| **Rahul Sharma** | `rahul@example.com` | `password123` | **Learner & Teacher** (Teaches: JS, React, Excel. Wants: Guitar, Spanish) |
| **Priya Patel** | `priya@example.com` | `password123` | **Teacher** (Teaches: Guitar, UI/UX Design. Wants: Python, Excel) |
| **Amit Verma** | `amit@example.com` | `password123` | **Teacher** (Teaches: Spanish, English. Wants: Resume Writing, React) |
| **Sneha Iyer** | `sneha@example.com` | `password123` | **Data Analyst** (Teaches: Excel Dashboards, SQL. Wants: Cooking, Photography) |
| **System Admin** | `admin@skillexchange.in` | `admin123` | **Platform Administrator** (Dispute resolution, safety moderation, platform metrics) |

> 🎁 *Every newly registered account automatically receives **+3 Starter Knowledge Credits**.*

---

## 🛠️ Tech Stack & Architecture

### **Frontend**
* **Framework**: React 18 with Vite SPA build tooling
* **Routing**: React Router DOM v6
* **Styling**: Custom Design System with curated typography (`Fraunces` & `DM Sans`), Dark Mode harmony, and responsive layouts
* **Icons**: Lucide React
* **State & Networking**: Axios with JWT interceptors, Context API, and real-time Socket.io client

### **Backend**
* **Runtime**: Node.js (ES Modules)
* **Framework**: Express.js
* **Authentication**: JWT (JSON Web Tokens) with Bcrypt password hashing
* **Database**: MongoDB Atlas Cloud Cluster via Mongoose ODM
* **Real-time Layer**: Socket.io (instant messaging, session status transitions, live credit notifications)
* **Resilience**: Embedded `MongoMemoryServer` fallback for offline/zero-setup grading environments

---

## 🔑 Key Features

1. **Deterministic Rule-Based Matching Engine**:
   - 100% explainable matching algorithm.
   - Computes weighted score across 5 parameters: Skill overlap (+50), Availability overlap (+20), Session mode preference (+10), Community star rating (+10), Experience (+10).
   - Shows users transparent match reasons (e.g., *"✓ Teaches Guitar on your wishlist"*, *"✓ Shared weekend availability"*).

2. **Immutable Credit Ledger**:
   - Double-entry bookkeeping: every credit movement creates a permanent `CreditTransaction` record.
   - Types: `BONUS`, `HOLD`, `RELEASE`, `EARN`, `SPEND`, `REFUND`.
   - Dynamic spendable balance: $\text{Spendable Credits} = \max(0, \text{Total Credits} - \text{Reserved Credits})$.

3. **Double-Confirmation Trust Protocol**:
   - Credits are held in escrow when a session is scheduled.
   - When a session concludes, the teacher marks complete and the learner confirms completion.
   - Only when **both parties confirm** are credits released from escrow to the teacher.

4. **Real-time Peer Chat**:
   - Built-in 1-on-1 WebSocket chat between booked session participants to coordinate agendas and meeting links.

5. **Admin Control Console**:
   - Real-time community metrics (total users, circulating credits, active sessions).
   - User account status management (suspend / reactivate).
   - Dispute arbitration with ledger-backed refund and payout mechanisms.

---

## 📡 API Overview

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `GET` | `/api/health` | Service health status & credit economy metrics | No |
| `POST` | `/api/auth/register` | Register new user (+3 starter credits bonus) | No |
| `POST` | `/api/auth/login` | Login and retrieve JWT authentication token | No |
| `GET` | `/api/auth/me` | Fetch authenticated user profile & balance | Yes |
| `GET` | `/api/skills` | List all 24 skills and categories | No |
| `GET` | `/api/matches` | Get algorithmic match recommendations | Yes |
| `GET` | `/api/sessions` | Fetch user's scheduled, pending, and completed sessions | Yes |
| `POST` | `/api/sessions` | Request a new 1-on-1 skill exchange session | Yes |
| `PATCH` | `/api/sessions/:id/confirm` | Double-confirmation completion action | Yes |
| `GET` | `/api/credits/ledger` | Fetch complete credit transaction history | Yes |
| `GET` | `/api/conversations` | Fetch active chats & unread message count | Yes |
| `GET` | `/api/admin/overview` | Platform analytics & dispute queue (Admin only) | Yes (Admin) |

---

## 💻 Local Development Setup

### 1. Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher)
* **Git**

### 2. Clone and Install
```bash
# Clone the repository
git clone https://github.com/anshuln26/P2P-Skill-Exchange.git
cd P2P-Skill-Exchange

# Install dependencies across root, server, and client
npm run install:all
```

### 3. Configure Environment Variables
Create a `.env` file in the `server` directory:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@p2p-skill-exchange.ilvzw2g.mongodb.net/peer-skill-exchange?retryWrites=true&w=majority
JWT_SECRET=super_secret_peer_exchange_jwt_key_2026_xyz
CLIENT_URL=http://localhost:5173
INITIAL_CREDITS=3
```
*(If `MONGO_URI` is omitted, the server will automatically spin up an in-memory MongoDB instance with pre-seeded data).*

### 4. Run the Application
```bash
# Concurrently start backend server (:5000) and Vite frontend (:5173)
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## ☁️ Production Deployment

The project is hosted as a single unified service on **Render** using the included [render.yaml](file:///e:/final%20year%20Project/P2P-Skill-Exchange/render.yaml):
* **Build Command**: `npm run build`
* **Start Command**: `node server/server.js`
* The Express server serves the compiled Vite frontend from `client/dist` in production, providing **unified same-origin APIs and WebSockets** without cross-origin configuration hurdles.

For complete deployment details, refer to [DEPLOYMENT.md](file:///e:/final%20year%20Project/P2P-Skill-Exchange/DEPLOYMENT.md).

---

## 📄 License
ISC License — Created for Academic & Peer-to-Peer Educational Exploration.
