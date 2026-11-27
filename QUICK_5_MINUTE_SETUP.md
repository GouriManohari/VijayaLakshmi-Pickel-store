# 🚀 5-MINUTE SETUP - FOLLOW ALONG WITH ME

I'll guide you step-by-step. Just follow these exact instructions.

---

## STEP 1: Set Up MongoDB (2 minutes)

1. **Go to:** https://www.mongodb.com/cloud/atlas
2. Click **"Sign Up"** (top right)
3. Enter:
   - Email: `manoharikatepalli@gmail.com`
   - Password: Create a strong one (write it down)
   - Click "Create Account"
4. **Verify email** - Check your inbox, click the verification link
5. After login:
   - Click **"Create Project"**
   - Project name: `Vijaya Lakshmi`
   - Click **"Create"**
6. Click **"Build a Database"**
   - Choose **"FREE M0"**
   - Click **"Create"**
   - ⏳ Wait 1-2 minutes for cluster to initialize

7. When ready:
   - Left sidebar → **"Security"** → **"Database Access"**
   - Click **"Add New Database User"**
   - Username: `gouri`
   - Password: `Pickle@2026`
   - Click **"Add User"**

8. Left sidebar → **"Databases"**
   - Find your cluster → Click **"Connect"**
   - Choose **"Connect your application"**
   - Copy the connection string
   - Replace `<username>` with `gouri`
   - Replace `<password>` with `Pickle@2026`

   **Example result:**
   ```
   mongodb+srv://gouri:Pickle@2026@cluster.mongodb.net/vijayalakshmi?retryWrites=true&w=majority
   ```

   ✅ **Copy this string and SAVE it** (you'll paste it in 2 minutes)

---

## STEP 2: Create Railway Account & Deploy (2 minutes)

1. **Go to:** https://railway.app
2. Click **"GitHub"** button (top right)
   - This will take you to GitHub login
   - You likely already logged in, so it should auto-approve
   - If asked, click "Authorize"

3. After login to Railway:
   - Click **"New Project"**
   - Click **"Deploy from GitHub repo"**

4. **Select Repository:**
   - You'll see a list of your repos
   - Find: `VijayaLakshmi-Pickel-store`
   - Click to select it

5. **Railway will auto-detect and start deploying**
   - You'll see a "Build" progress
   - ⏳ Wait 1-2 minutes until it shows "Live"

6. **Add Environment Variables:**
   - In Railway, click your project
   - Look for **"Variables"** tab (or settings)
   - Click **"+ New Variable"**
   
   Add these ONE BY ONE:

   **Variable 1:**
   ```
   Name: MONGODB_URI
   Value: mongodb+srv://gouri:Pickle@2026@cluster.mongodb.net/vijayalakshmi?retryWrites=true&w=majority
   ```
   Click Add

   **Variable 2:**
   ```
   Name: JWT_SECRET
   Value: vijaya-lakshmi-pickle-store-secret-key-2026
   ```
   Click Add

   **Variable 3:**
   ```
   Name: NODE_ENV
   Value: production
   ```
   Click Add

   **Variable 4:**
   ```
   Name: PORT
   Value: 5000
   ```
   Click Add

7. **Get Your Backend URL:**
   - In Railway dashboard, look for the **Service URL** or **Public URL**
   - Copy it (looks like: `https://vijayalakshmi-pickel-store-production.up.railway.app`)
   
   ✅ **SAVE THIS URL** (you'll use it in 1 minute)

---

## STEP 3: Configure Vercel (1 minute)

1. **Go to:** https://vercel.com/dashboard
2. Log in with: `manoharikatepalli@gmail.com`

3. Find your project: **`vijayalakshmi-ten`**
4. Click on it

5. Click **"Settings"** (top navigation)

6. Left sidebar → **"Environment Variables"**

7. Click **"Add New Variable"** or **"New"**
   - **Name:** `VITE_API_URL`
   - **Value:** Paste your Railway URL from Step 2
     (Looks like: `https://vijayalakshmi-pickel-store-production.up.railway.app`)
   - **Environments:** Leave as default (all selected)
   - Click **"Add"**

8. Click **"Deployments"** tab (top)

9. Find your latest deployment (at the top)
   - Click the **"..."** (3 dots menu)
   - Click **"Redeploy"**
   - ⏳ Wait 2 minutes

---

## ✅ VERIFY IT WORKS

After all steps:

1. Open: https://vijayalakshmi-ten.vercel.app

2. You should see:
   - **Products displayed** (not blank)
   - **Homepage with images**
   - **Clickable product cards**

3. Test:
   - Click on a product → Should show details
   - Click "Login" → Login page appears
   - Click "Register" → Register page appears

4. **If you see products → YOU'RE DONE!** 🎉

---

## 🆘 IF IT DOESN'T WORK

**Check 1: Is Railway showing "Live"?**
- Go back to Railway.app
- Check your project status
- Should show green "Live" indicator

**Check 2: Backend URL correct?**
- Copy your Railway URL again from Railway dashboard
- Make sure you pasted it correctly in Vercel
- Check there are no spaces before/after

**Check 3: Environment variables in Railway?**
- Did you add all 4 variables? (MONGODB_URI, JWT_SECRET, NODE_ENV, PORT)
- MongoDB connection string exactly correct?

**Check 4: Vercel redeployed?**
- Did you click "Redeploy" after adding env var?
- Did you wait 2 minutes?

---

## 📋 CHECKLIST - DO THESE IN ORDER

- [ ] MongoDB Atlas account created
- [ ] Database cluster initialized
- [ ] Database user created (gouri / Pickle@2026)
- [ ] MongoDB connection string copied
- [ ] Railway account created (via GitHub)
- [ ] Repository deployed to Railway
- [ ] All 4 environment variables added to Railway
- [ ] Railway showing "Live" (green)
- [ ] Backend URL copied from Railway
- [ ] VITE_API_URL added to Vercel
- [ ] Vercel redeployed
- [ ] Frontend shows products (not blank)

**When all checked → COMPLETE!** 🚀

---

## NEED HELP?

**Stuck at MongoDB?**
- Make sure you verified your email
- Create password carefully (write it down)
- Wait for cluster to fully initialize

**Stuck at Railway?**
- Make sure MongoDB connection string has correct username/password
- Wait for Railway to show "Live"
- Check all 4 variables are added

**Stuck at Vercel?**
- Make sure VITE_API_URL is set
- Make sure you clicked "Redeploy" (not just "Save")
- Wait 2 minutes for redeployment

Good luck! You've got this! 💪

