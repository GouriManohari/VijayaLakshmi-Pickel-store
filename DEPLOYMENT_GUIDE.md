# Production Deployment Guide - Vijaya Lakshmi Pickle Store

## 🎯 Deployment Plan (Option B)

### Phase 1: MongoDB Atlas Setup (15 min)
- [ ] Create MongoDB Atlas account
- [ ] Create free cluster
- [ ] Get connection string
- [ ] Add IP whitelist
- [ ] Create database user

### Phase 2: Backend Deployment to Render (30 min)
- [ ] Create Render account
- [ ] Connect GitHub repository
- [ ] Deploy Express backend
- [ ] Set environment variables on Render
- [ ] Get backend URL

### Phase 3: Frontend Configuration (15 min)
- [ ] Create `.env.production` file
- [ ] Update axios base URL
- [ ] Update API calls for production

### Phase 4: Vercel Frontend Deployment (10 min)
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Deploy frontend
- [ ] Get live URL
- [ ] Test all features

---

## ✅ Step-by-Step Instructions

### STEP 1: MongoDB Atlas Setup

1. **Go to:** https://www.mongodb.com/cloud/atlas
2. **Sign up** with Google or GitHub (easier)
3. **Create Organization** (or use default)
4. **Create a New Project** → Click "Create Project"
   - Name: "Vijaya Lakshmi"
   - Leave settings default
   - Click "Create Project"

5. **Create a Cluster:**
   - Click "Build a Cluster"
   - Choose **FREE tier** (M0)
   - Select region closest to you
   - Cluster name: "vijaya-lakshmi-cluster"
   - Click "Create Cluster"
   - Wait 2-3 minutes for cluster to be ready

6. **Create Database User:**
   - Go to "Security" → "Database Access"
   - Click "Add New Database User"
   - Username: `admin`
   - Password: Create a strong password (save it!)
   - Database User Privileges: **Built-in Role: Atlas admin**
   - Click "Add User"

7. **Add IP Whitelist:**
   - Go to "Security" → "Network Access"
   - Click "Add IP Address"
   - Select "Allow access from anywhere" (0.0.0.0/0)
   - Click "Confirm"

8. **Get Connection String:**
   - Go to "Databases"
   - Click "Connect" button
   - Choose "Drivers"
   - Select "Node.js"
   - Copy the connection string
   - It looks like: `mongodb+srv://admin:PASSWORD@cluster.mongodb.net/`

**SAVE THIS CONNECTION STRING - YOU'LL NEED IT!**

---

### STEP 2: Deploy Backend to Render

**Why Render?** Free tier, automatic deployments from GitHub, easy setup

1. **Go to:** https://render.com
2. **Sign up** with GitHub
3. **Grant Render access** to your repository
4. **Create New Service:**
   - Click "New +"
   - Select "Web Service"
   - Connect to your repository
   - Choose branch: "master"
   - Service name: "vijaya-lakshmi-backend"
   - Build Command: `npm install --prefix server`
   - Start Command: `node server/server.js`
   - Instance Type: **Free**

5. **Add Environment Variables:**
   - Scroll to "Environment"
   - Add these variables:
   
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@your-cluster.mongodb.net/vijayalakshmi?retryWrites=true&w=majority
   JWT_SECRET=your-secret-key-here-make-it-long
   NODE_ENV=production
   ```
   
   Replace:
   - `YOUR_PASSWORD` = Password you set for database user
   - `your-cluster` = Your actual cluster name from MongoDB

6. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - You'll get a URL like: `https://vijaya-lakshmi-backend.onrender.com`

**SAVE YOUR BACKEND URL - YOU'LL NEED IT!**

---

### STEP 3: Update Frontend Configuration

**On your local computer:**

1. **Create `.env.production` file** in root directory:

```bash
VITE_API_URL=https://your-backend-url.onrender.com
```

Replace with your actual Render backend URL.

2. **Update `src/context/AuthContext.jsx`:**

Find this line:
```javascript
axios.get("/api/auth/me")
```

Update to:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'
axios.get(`${API_BASE_URL}/auth/me`)
```

3. **Update all other axios calls** in:
   - `src/pages/Products.jsx`
   - `src/pages/ProductDetail.jsx`
   - `src/pages/admin/AdminDashboard.jsx`
   - `src/pages/admin/ManageProducts.jsx`
   - `src/pages/admin/ManageOrders.jsx`

Pattern:
```javascript
// Before:
axios.get("/api/products")

// After:
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'
axios.get(`${API_BASE_URL}/products`)
```

4. **Update `vite.config.js`:**

Remove or comment out the proxy:
```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:5000'
  //   }
  // }
})
```

5. **Commit changes:**
```powershell
cd "C:\Users\gouri\Vijaya Lakhsmi Pickel Store"
git add .
git commit -m "Configure for production deployment"
git push
```

---

### STEP 4: Deploy Frontend to Vercel

1. **Go to:** https://vercel.com
2. **Sign up** with GitHub
3. **Grant Vercel access** to your repository
4. **Import Project:**
   - Click "Import Project"
   - Paste GitHub URL: `https://github.com/GouriManohari/VijayaLakshmi-Pickel-store`
   - Click "Import"
   - Select branch: "master"

5. **Configure:**
   - Framework Preset: "Vite"
   - Root Directory: "./" (default)
   - Build Command: "npm run build"
   - Output Directory: "dist"

6. **Environment Variables:**
   - Add: `VITE_API_URL` = your Render backend URL
   - Click "Deploy"

7. **Wait for deployment** (2-3 minutes)
   - You'll get a URL like: `https://vijaya-lakshmi.vercel.app`

**YOUR PRODUCTION APP IS NOW LIVE! 🎉**

---

## 🧪 Testing Your Production Deployment

1. **Visit your Vercel URL**
2. **Test these features:**
   - [ ] Load home page
   - [ ] View products
   - [ ] Filter by category
   - [ ] Search for products
   - [ ] Register new account
   - [ ] Login with account
   - [ ] Add to cart
   - [ ] View cart
   - [ ] All features working?

---

## 🔗 Final URLs

| Component | URL |
|-----------|-----|
| **Frontend** | https://your-vercel-url.vercel.app |
| **Backend API** | https://your-render-url.onrender.com |
| **GitHub** | https://github.com/GouriManohari/VijayaLakshmi-Pickel-store |
| **MongoDB Atlas** | https://cloud.mongodb.com |

---

## 📱 Share on LinkedIn

**Post Template:**

```
🚀 Excited to share my latest project: Vijaya Lakshmi Pickle Store

A full-stack e-commerce application built with:
✅ React 19 + Vite (Frontend)
✅ Express.js (Backend)
✅ MongoDB Atlas (Database)
✅ Tailwind CSS (Styling)
✅ JWT Authentication

🌐 Live Demo: [Your Vercel URL]
📂 GitHub: https://github.com/GouriManohari/VijayaLakshmi-Pickel-store

Features:
• Product browsing & filtering
• User authentication
• Shopping cart
• Responsive design

#ReactJS #WebDevelopment #MERN #Ecommerce #Deployment
```

---

## ⚠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| "Cannot connect to API" | Check VITE_API_URL in Vercel settings |
| "Database connection failed" | Verify MongoDB connection string & IP whitelist |
| "Login not working" | Check JWT_SECRET is same on backend |
| "Products not loading" | Check backend is running on Render |

---

## 🎉 Success Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] All features tested and working
- [ ] Production URL shared on LinkedIn

Ready to deploy? Let's go! 🚀
