# 🚀 Production Deployment Guide — Peer-to-Peer Skill Exchange

> **Live Production URL**: [https://p2p-skill-exchange.onrender.com/](https://p2p-skill-exchange.onrender.com/)  
> **API Health**: [https://p2p-skill-exchange.onrender.com/api/health](https://p2p-skill-exchange.onrender.com/api/health)  
> **Repository**: [https://github.com/anshuln26/P2P-Skill-Exchange](https://github.com/anshuln26/P2P-Skill-Exchange)

---

## 🌟 Single Web Service Deployment Architecture

The application uses an efficient **Single-Service Full-Stack Architecture**:
- The Express.js backend serves both the **REST API** (`/api/*`), **Socket.io WebSockets**, and the compiled **Vite React SPA** (`client/dist`) from a single origin.
- **Benefits**:
  - Eliminates CORS (Cross-Origin Resource Sharing) headaches.
  - Zero domain-mismatch issues for WebSockets.
  - Runs comfortably on a single free-tier cloud container.

---

## 📍 Deployed on Render (Current Production Setup)

The repository includes a ready-to-use [`render.yaml`](./render.yaml) blueprint.

### 1. Build & Start Commands
* **Build Command**: `npm run build`
  *(Executes `npm run install:all && npm --prefix client run build`)*
* **Start Command**: `node server/server.js`

### 2. Production Environment Variables Configured in Render
| Key | Value / Description |
| :--- | :--- |
| `NODE_ENV` | `production` |
| `PORT` | Set automatically by Render (defaults to 10000) |
| `JWT_SECRET` | Secure cryptographic secret string |
| `MONGO_URI` | `mongodb+srv://anshulsingh26jan_db_user:<password>@p2p-skill-exchange.ilvzw2g.mongodb.net/peer-skill-exchange?retryWrites=true&w=majority` |

---

## 📍 Alternative Deployment Hosts

### 🚂 Railway
1. Log in to [Railway.app](https://railway.app/).
2. Select **New Project** $\rightarrow$ **Deploy from GitHub repo**.
3. Select `anshuln26/P2P-Skill-Exchange`.
4. Add environment variables: `NODE_ENV=production`, `JWT_SECRET`, and `MONGO_URI`.
5. Deploy.

### 🐳 Docker Containerization
Using the included multi-stage [`Dockerfile`](./Dockerfile):

```bash
# 1. Build the Docker Image
docker build -t peer-skill-exchange:latest .

# 2. Run Container
docker run -d -p 5000:5000 \
  -e NODE_ENV=production \
  -e JWT_SECRET=your_production_secret \
  -e MONGO_URI="mongodb+srv://..." \
  peer-skill-exchange:latest
```

---

## 🧪 Post-Deployment Verification

1. Verify health check:
   ```bash
   curl https://p2p-skill-exchange.onrender.com/api/health
   ```
2. Open [https://p2p-skill-exchange.onrender.com/](https://p2p-skill-exchange.onrender.com/) and test login with demo credentials:
   - **Email**: `rahul@example.com`
   - **Password**: `password123`
3. Verify double-confirmation session booking and real-time chat between two sessions.
