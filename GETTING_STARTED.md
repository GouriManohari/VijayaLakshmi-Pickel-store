# 🎯 GETTING STARTED - Vijaya Lakshmi Pickle Store

Welcome! This document will get you up and running in **5 minutes**. 🚀

---

## ✅ Your Environment Status

✅ Node.js v22.22.2 installed
✅ npm v10.9.7 installed  
✅ Dependencies already installed
✅ Backend environment configured (.env exists)
✅ Application ready to run

---

## 🚀 Start Here (Choose Your Path)

### Path A: "Just Run It" (5 minutes) ⚡

Perfect if you want to see it working ASAP.

**Step 1: Open Terminal 1**
```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store\server
npm run dev
```

Wait for: `Server running on http://localhost:5000`

**Step 2: Open Terminal 2 (new one)**
```bash
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store
npm run dev
```

Wait for: `Local: http://localhost:5173/`

**Step 3: Open Browser**
```
http://localhost:5173/
```

**Done!** 🎉

You'll see:
- Home page with pickle hero section
- Navigation bar
- Product listing page
- Fully functional e-commerce store

**To Test**:
- Click "Products" to browse
- Add pickles to cart
- Try registering new user
- Use test account: `customer@example.com` / `customer123`

---

### Path B: "Understand Everything First" (15 minutes) 📚

If you want to understand the architecture first.

**Read in This Order:**

1. **APP_OVERVIEW.md** (5 min)
   - What the app does
   - Tech stack
   - Core features

2. **ARCHITECTURE.md** (8 min)
   - System diagram
   - Data flow
   - File structure
   - API endpoints

3. **Then follow Path A** to run it

---

### Path C: "Deep Dive Setup" (30 minutes) 🔍

If you want complete setup understanding.

**Read in This Order:**

1. **APP_OVERVIEW.md** - What is this?
2. **ARCHITECTURE.md** - How does it work?
3. **SETUP_GUIDE.md** - Detailed instructions
4. **QUICK_START.md** - Running it
5. Then start the servers

---

## 📚 Documentation Index

| Document | Time | Purpose |
|----------|------|---------|
| **GETTING_STARTED.md** | 5min | You are here - Quick intro |
| **APP_OVERVIEW.md** | 5min | What app does, features, tech stack |
| **ARCHITECTURE.md** | 15min | Technical deep dive, data flow |
| **QUICK_START.md** | 10min | Checklists and commands |
| **SETUP_GUIDE.md** | 20min | Detailed troubleshooting |

---

## 🎯 Quick Reference

### Start Servers
```bash
# Terminal 1 - Backend
cd server && npm run dev
# Should show: Server running on http://localhost:5000

# Terminal 2 - Frontend  
npm run dev
# Should show: Local: http://localhost:5173/
```

### Test Accounts
```
Admin:
  Email: admin@vijayalakshmi.com
  Pass: admin123

Customer:
  Email: customer@example.com
  Pass: customer123
```

### Key URLs
- Frontend: http://localhost:5173/
- Backend API: http://localhost:5000/api
- Health Check: http://localhost:5000/api/health

---

## 🔥 Common Questions

**Q: What's this app do?**
A: It's an e-commerce store for buying Indian pickles (achaar). Customers can browse, add to cart, and checkout. Admins manage products.

**Q: What technologies does it use?**
A: React (frontend), Express (backend), MongoDB (database), Tailwind CSS (styling), JWT (auth).

**Q: Do I need anything besides Node.js?**
A: Just MongoDB. It's configured for local MongoDB on port 27017. If you want cloud MongoDB (recommended), see SETUP_GUIDE.md.

**Q: How do I add products/manage store?**
A: Login as admin@vijayalakshmi.com / admin123, then go to Admin Dashboard.

**Q: Can I modify the code?**
A: Yes! All source files are yours to edit. Changes will auto-refresh in development mode.

**Q: How do I deploy to production?**
A: See SETUP_GUIDE.md "Deployment Considerations" section.

---

## 🐛 Something Not Working?

### "Cannot connect to MongoDB"
- **Local MongoDB**: Make sure mongod is running
  ```bash
  # Windows: Check if service is running
  Get-Service MongoDB
  ```
- **Cloud MongoDB**: Check MONGODB_URI in server/.env

### "Port already in use"
- Backend on port 5000: Stop other app or change PORT in server/.env
- Frontend on port 5173: Vite will automatically use 5174

### "npm install failed"
```bash
# Clean install
cd server
rm -r node_modules package-lock.json
npm install

cd ..
rm -r node_modules package-lock.json  
npm install
```

### "Blank page at localhost:5173"
- Check browser console (F12) for errors
- Make sure backend is running (Terminal 1)
- Reload page (Ctrl+R)

**Still stuck?** See SETUP_GUIDE.md "Troubleshooting" section.

---

## 🎓 Project Structure (High Level)

```
Application/
├── Frontend (React)
│   └── src/ ................. React components & pages
├── Backend (Node.js)
│   └── server/ .............. Express API & MongoDB
└── Config Files
    ├── vite.config.js ....... Frontend build
    ├── package.json ......... Frontend packages
    └── server/.env .......... Backend secrets
```

Detailed structure in ARCHITECTURE.md

---

## 🔄 Development Workflow

1. **Start Servers** (see "Start Servers" above)
2. **Make Changes**
   - Frontend code in `src/` - auto-reloads
   - Backend code in `server/` - auto-reloads (npm run dev)
3. **Test Changes**
   - Frontend: http://localhost:5173/
   - API: Try endpoints with Postman or curl
4. **Fix Issues**
   - Check terminal output for errors
   - Use browser DevTools (F12)
   - See SETUP_GUIDE.md for solutions

---

## ✨ What You Can Do

### As Customer
- 🏠 Browse home page
- 🥒 View all 8 pickles
- 🔍 Filter by category
- 🛒 Add to shopping cart
- 💳 Checkout and place order
- 📦 View your orders
- 👤 Manage profile

### As Admin
- 📊 View admin dashboard
- 🛍️ Add new pickles
- ✏️ Edit existing pickles
- 🗑️ Delete pickles
- 📦 Manage all orders
- 👥 View all users

---

## 🚀 Next Steps

### Immediate (Now)
1. ✅ Run servers (see "Start Servers")
2. ✅ Open http://localhost:5173/
3. ✅ Click around and explore
4. ✅ Try logging in with test accounts
5. ✅ Add pickles to cart and checkout

### Next Session
1. 📖 Read ARCHITECTURE.md to understand structure
2. 🔍 Explore source code
3. 🎨 Try making small changes
4. 🧪 Test your changes
5. 🚀 Build your own features

### Learning Resources
- React Docs: https://react.dev
- Express Guide: https://expressjs.com
- MongoDB: https://docs.mongodb.com
- Tailwind CSS: https://tailwindcss.com

---

## 📞 Quick Reference Commands

```bash
# Frontend
cd C:\Users\gouri\Vijaya Lakhsmi Pickel Store
npm run dev        # Development server
npm run build      # Production build
npm run lint       # Check code quality

# Backend
cd server
npm run dev        # Development with auto-reload
npm start          # Production start
npm run seed       # Seed database with sample data

# Database
# If using local MongoDB
mongod             # Start MongoDB server
```

---

## 🎉 You're Ready!

Everything is set up and ready to go. 

### Right Now:
```bash
# Terminal 1
cd server && npm run dev

# Terminal 2  
npm run dev

# Then open http://localhost:5173/
```

That's it! Welcome to development. Have fun! 🚀

---

## 📞 Need Help?

1. **Quick Issues** → See "Common Questions" above
2. **Setup Problems** → Read SETUP_GUIDE.md
3. **Understanding Code** → Read ARCHITECTURE.md
4. **Features Overview** → Read APP_OVERVIEW.md
5. **Still Stuck** → Check error messages in terminal

---

**Let's Build! 💪**

Your Vijaya Lakshmi Pickle Store is ready to run. Start the servers and begin coding!
