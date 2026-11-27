# Backend Deployment to Render (URGENT FIX)

Your frontend is deployed to Vercel but showing blank because there's **no backend API running**. Here's how to fix it:

## ⚡ Quick Deploy Backend to Render (5 minutes)

### Step 1: Create MongoDB Atlas Database
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up or log in
3. Click **Create** → **New Project** → **Create Project**
4. Click **Build a Cluster** → Choose **Free M0** → **Create**
5. In Security → Network Access, click **Add IP Address** → **Allow from anywhere**
6. In Security → Database Access, create a username/password
7. Click **Connect** → Copy the connection string
   - Replace `<username>` and `<password>` with your credentials
   - Example: `mongodb+srv://user:pass@cluster.mongodb.net/vijayalakshmi?retryWrites=true&w=majority`

### Step 2: Deploy Backend to Render
1. Go to: https://render.com
2. Click **New +** → **Web Service**
3. Click **Connect Repository** → Select your GitHub repository
4. Fill in:
   - **Name**: `vijaya-lakshmi-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - **MONGODB_URI** = Your MongoDB connection string from Step 1
   - **JWT_SECRET** = `vijaya-lakshmi-pickle-store-secret-key-2026`
   - **NODE_ENV** = `production`
   - **PORT** = `5000`
6. Click **Create Web Service**
7. ⏳ Wait 2-3 minutes for deployment
8. **Copy the URL** - It will look like: `https://vijaya-lakshmi-backend.onrender.com`

### Step 3: Configure Frontend with Backend URL

**Option A: Update Vercel Environment Variable (RECOMMENDED)**
1. Go to Vercel: https://vercel.com/dashboard
2. Click your `vijayalakshmi-ten` project
3. Click **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://vijaya-lakshmi-backend.onrender.com` (use YOUR actual Render URL)
5. Click **Add**
6. Go to **Deployments** tab
7. Find your latest deployment, click **...** → **Redeploy**
8. Wait for redeployment (2 minutes)

**Option B: Update Local File (then push to GitHub)**
1. Edit `.env.production`:
   ```
   VITE_API_URL=https://your-render-backend-url.onrender.com
   ```
2. Run:
   ```bash
   git add .env.production
   git commit -m "Configure backend URL for production"
   git push origin master
   ```
3. Vercel will auto-redeploy in 1-2 minutes

### Step 4: Verify It's Working
1. Open: https://vijayalakshmi-ten.vercel.app
2. You should see:
   - ✅ Products loading on the page
   - ✅ No blank screen
   - ✅ You can click on products
   - ✅ Login/Register works

## 🔧 Troubleshooting

**Still showing blank page?**
- Check browser console (F12 → Console) for errors
- Look for API errors about connection refused
- Verify VITE_API_URL is set in Vercel settings

**Backend not responding?**
- Check Render dashboard - service should show "Live"
- If it shows "Deploy failed", check logs:
  - Click service → **Logs** tab
  - Look for error messages
  - Common issues:
    - MongoDB connection string wrong
    - Missing environment variables
    - Node.js version incompatible

**Products still not loading?**
- Wait 5 minutes - Render free tier can be slow to start
- Manually visit your backend URL in browser:
  - `https://your-backend.onrender.com/api/products`
  - Should return JSON data
  - If not, backend is not running properly

## 📋 Checklist

- [ ] MongoDB Atlas cluster created with connection string
- [ ] Render backend deployed and showing "Live"
- [ ] Backend URL copied from Render
- [ ] VITE_API_URL added to Vercel environment variables
- [ ] Vercel redeployed
- [ ] Frontend now shows products (not blank)
- [ ] Can login and use the app

**Once all checked, you're LIVE!** 🎉
