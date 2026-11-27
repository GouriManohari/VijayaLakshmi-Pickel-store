# 🚀 Quick Start Checklist - Vijaya Lakshmi Pickle Store

## ✅ Current Status

Your environment is ready! Here's what's already set up:

- ✅ Node.js v22.22.2 (compatible)
- ✅ npm v10.9.7 (compatible)
- ✅ `.env` file created in server/ folder
- ✅ Dependencies installed (node_modules present)
- ✅ Project structure verified

---

## 📋 Setup Checklist

### 1. MongoDB Setup (Choose ONE)

**Option A: MongoDB Atlas (Cloud - Recommended)** ☁️
- [ ] Go to https://www.mongodb.com/cloud/atlas
- [ ] Sign up for free account
- [ ] Create a cluster
- [ ] Get connection string from "Connect" → "Drivers"
- [ ] Update `MONGODB_URI` in `server/.env`

**Option B: Local MongoDB** 🏠
- [ ] Download MongoDB Community: https://www.mongodb.com/try/download/community
- [ ] Install MongoDB
- [ ] Start MongoDB service:
  ```bash
  mongod
  # or on Windows: MongoDB should start as a service automatically
  ```
- [ ] ✅ Uses existing local connection (already configured)

---

### 2. Quick Start (5 minutes)

#### Terminal 1: Start Backend
```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store\server
npm run dev
```

**Expected output:**
```
[nodemon] 3.x.x
[nodemon] to restart at any time, type `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,json
Server running on http://localhost:5000
```

#### Terminal 2: Seed Database (Optional - Only if first time)
```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store\server
npm run seed
```

**Expected output:**
```
Connected to MongoDB
Cleared existing data
Admin user created: admin@vijayalakshmi.com / admin123
Sample customer created: customer@example.com / customer123
8 products seeded
✅ Database seeded successfully!
```

#### Terminal 3: Start Frontend
```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store
npm run dev
```

**Expected output:**
```
  VITE v8.0.4  ready in 234 ms
  ➜  Local:   http://localhost:5173/
```

---

## 🌐 Access Points

| Component | URL | Purpose |
|-----------|-----|---------|
| Frontend | http://localhost:5173/ | Browse app |
| Backend API | http://localhost:5000/api | API endpoints |
| Health Check | http://localhost:5000/api/health | Verify backend |

---

## 👤 Test Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@vijayalakshmi.com | admin123 |
| Customer | customer@example.com | customer123 |

---

## 🎯 Application Features

### For Customers
- 🏠 Browse home page
- 🥒 View all products with filters
- 🔍 Search & filter pickles
- 🛒 Add to cart & checkout
- 👤 View profile & orders
- 📝 Contact form

### For Admin
- 📊 Admin dashboard
- 🛍️ Manage products (add/edit/delete)
- 📦 Manage orders
- 👥 View all users

### Authentication Features
- 📝 User registration
- 🔐 Secure login with JWT
- 🚪 Protected routes

---

## 🔧 Available Commands

### Frontend (Root folder)
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview built app
npm run lint     # Check code quality
```

### Backend (server/ folder)
```bash
npm run dev      # Development with auto-reload
npm start        # Production start
npm run seed     # Seed database
```

---

## 📂 Key Files to Know

- **Frontend Entry**: `src/main.jsx`
- **App Routes**: `src/App.jsx`
- **Backend Entry**: `server/server.js`
- **API Routes**: 
  - `server/routes/auth.js` - Login/Register
  - `server/routes/products.js` - Product CRUD
  - `server/routes/orders.js` - Order management
- **Database Models**: `server/models/`
- **Configuration**: 
  - `vite.config.js` - Frontend config
  - `server/.env` - Backend secrets

---

## 🐛 Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| "Cannot connect to MongoDB" | MongoDB not running | Start MongoDB: `mongod` |
| "Port 5000 already in use" | Another app using port | Change port in `.env` |
| "Port 5173 already in use" | Another app using port | Vite will use 5174 automatically |
| "CORS errors" | Backend/frontend mismatch | Restart both servers |
| "Blank page at 5173" | Frontend build issue | Run `npm install` again |
| "API calls failing" | Backend not running | Ensure Terminal 1 running |

---

## 📊 Technology Stack

```
Frontend:
├── React 19 (UI)
├── Vite (Build tool)
├── Tailwind CSS (Styling)
├── React Router (Navigation)
├── Axios (HTTP requests)
└── React Hot Toast (Notifications)

Backend:
├── Node.js (Runtime)
├── Express 5 (Web server)
├── MongoDB (Database)
├── Mongoose (ODM)
├── JWT (Authentication)
└── bcryptjs (Password hashing)
```

---

## ✨ What's Next

1. **Start Backend** → Check Terminal 1
2. **Start Frontend** → Check Terminal 2
3. **Open Browser** → http://localhost:5173/
4. **Test Features**:
   - Register new account
   - Browse products
   - Add to cart
   - Checkout
   - Login as admin to manage
5. **Explore Code** → Understand the flow
6. **Customize** → Add your own features!

---

## 📚 Useful Resources

- **React Docs**: https://react.dev
- **Vite Guide**: https://vitejs.dev
- **Express API**: https://expressjs.com
- **MongoDB Docs**: https://docs.mongodb.com
- **Tailwind CSS**: https://tailwindcss.com
- **JWT Info**: https://jwt.io

---

## 🎉 You're Ready!

Your application is fully configured and ready to run. 
Just start the servers and enjoy building! 🚀

**Still stuck? Check SETUP_GUIDE.md for detailed troubleshooting.**
