# Vijaya Lakshmi Pickle Store - Local Setup Guide

## 📋 Application Overview

This is a full-stack e-commerce application for an online pickle store:

- **Frontend**: React 19 + Vite + Tailwind CSS + React Router
- **Backend**: Node.js + Express 5 + MongoDB
- **Authentication**: JWT-based auth with bcryptjs password hashing
- **Features**: User authentication, product browsing, shopping cart, order management, admin dashboard

---

## 🛠️ Prerequisites

Before starting, ensure you have installed:

1. **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
2. **MongoDB** - Either:
   - **MongoDB Community** (local) - [Download](https://www.mongodb.com/try/download/community)
   - **MongoDB Atlas** (cloud) - [Free tier](https://www.mongodb.com/cloud/atlas)
3. **Git** (optional, for version control)

**Verify installations:**
```bash
node --version    # Should be v18+
npm --version     # Should be 9+
mongod --version  # If using local MongoDB
```

---

## 🚀 Setup Instructions

### Step 1: Install Root Dependencies (Frontend)

```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store
npm install
```

### Step 2: Setup Backend Environment

Create a `.env` file in the `server/` folder:

```bash
cd server
```

**Create `.env` file** with the following content:

#### Option A: Using MongoDB Atlas (Recommended for beginners)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vijaya-lakshmi?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

#### Option B: Using Local MongoDB
```
MONGODB_URI=mongodb://localhost:27017/vijaya-lakshmi
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

**To get MongoDB Atlas connection string:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Click "Connect" → "Drivers" → Copy the connection string
5. Replace `<username>`, `<password>`, and `<password>` with your credentials

### Step 3: Install Backend Dependencies

```bash
npm install
```

### Step 4: Seed the Database

This will populate sample products and create test user accounts:

```bash
npm run seed
```

**Expected Output:**
```
Connected to MongoDB
Cleared existing data
Admin user created: admin@vijayalakshmi.com / admin123
Sample customer created: customer@example.com / customer123
8 products seeded
✅ Database seeded successfully!
```

---

## ▶️ Running the Application

### Method 1: Running Frontend and Backend in Separate Terminals (Recommended)

**Terminal 1 - Start Backend:**
```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store\server
npm run dev
```

Expected output:
```
Server running on http://localhost:5000
MongoDB connected: localhost
```

**Terminal 2 - Start Frontend:**
```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store
npm run dev
```

Expected output:
```
  VITE v8.0.4  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### Method 2: Using Concurrently (Both in One Terminal)

Install concurrently:
```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store
npm install --save-dev concurrently
```

Add to root `package.json`:
```json
"scripts": {
  "dev": "concurrently \"npm run dev\" \"npm --prefix server run dev\"",
  "start": "concurrently \"npm run build && npm run preview\" \"npm --prefix server start\""
}
```

Then run:
```bash
npm run dev
```

---

## 🌐 Accessing the Application

**Frontend**: http://localhost:5173/

**Backend API**: http://localhost:5000/api

**Health Check**: http://localhost:5000/api/health

---

## 👤 Test Accounts

After seeding, use these credentials:

### Admin Account
- Email: `admin@vijayalakshmi.com`
- Password: `admin123`
- Access: Admin dashboard for managing products and orders

### Customer Account
- Email: `customer@example.com`
- Password: `customer123`
- Access: Browse products, place orders, view cart

---

## 📁 Project Structure

```
Vijaya Lakhsmi Pickel Store/
├── src/                              # React frontend
│   ├── components/                   # Reusable components
│   ├── context/                      # AuthContext, CartContext
│   ├── pages/                        # Page components (Home, Products, etc.)
│   ├── App.jsx                       # Main app component
│   └── main.jsx                      # Entry point
├── server/                           # Node.js backend
│   ├── routes/                       # API routes (auth, products, orders)
│   ├── models/                       # MongoDB models (User, Product, Order)
│   ├── config/                       # Database configuration
│   ├── middleware/                   # Auth middleware
│   ├── server.js                     # Express server
│   ├── seed.js                       # Database seeding script
│   └── package.json                  # Backend dependencies
├── package.json                      # Frontend dependencies
├── vite.config.js                    # Vite configuration
└── index.html                        # HTML entry point
```

---

## 🔧 Available Commands

### Frontend Commands
```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Commands
```bash
cd server
npm run dev      # Start with file watching (--watch)
npm start        # Start server
npm run seed     # Seed database with sample data
```

---

## 🐛 Troubleshooting

### Issue: "Cannot connect to MongoDB"
**Solution:**
- If using local MongoDB: Ensure `mongod` is running
- If using Atlas: Check internet connection and verify credentials in `.env`
- Test connection: `npm run seed`

### Issue: "Port 5000 or 5173 already in use"
**Solution:**
- Change port in `.env` (backend) or `vite.config.js` (frontend)
- Or kill the process using that port:
  ```bash
  # Windows PowerShell
  Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process
  ```

### Issue: "Dependencies not installed"
**Solution:**
```bash
# Clean install
rm -r node_modules package-lock.json
npm install

cd server
rm -r node_modules package-lock.json
npm install
```

### Issue: "CORS errors in browser console"
**Solution:**
- Ensure backend is running on http://localhost:5000
- Check `vite.config.js` proxy configuration
- Verify CORS is enabled in `server.js`

### Issue: "JWT_SECRET not found"
**Solution:**
- Create `.env` file in `server/` folder
- Add `JWT_SECRET=your_secret_key`
- Restart backend

---

## 📦 Key Dependencies

### Frontend
- **React**: UI framework
- **Vite**: Build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **React Hot Toast**: Notifications
- **React Icons**: Icon library

### Backend
- **Express**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Token-based authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variables

---

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Configure MongoDB
3. ✅ Create `.env` file
4. ✅ Seed database
5. ✅ Start backend (`npm run dev` in server/)
6. ✅ Start frontend (`npm run dev` in root)
7. 🌐 Open http://localhost:5173/ in browser
8. 👤 Login with test credentials
9. 🛒 Browse products and test features

---

## 📝 Notes

- The frontend proxy is configured in `vite.config.js` to forward `/api` requests to `http://localhost:5000`
- All API requests use JWT authentication (token stored in localStorage)
- Products are seeded with sample data on first run
- Passwords are hashed using bcryptjs before storage

---

## 🆘 Still Having Issues?

1. Check that both servers are running (Terminal 1: Backend, Terminal 2: Frontend)
2. Verify MongoDB connection with `npm run seed`
3. Check browser console for errors (F12 in browser)
4. Check terminal output for error messages
5. Ensure ports 5000 and 5173 are available
6. Try clearing browser cache and localStorage

---

Happy coding! 🎉
