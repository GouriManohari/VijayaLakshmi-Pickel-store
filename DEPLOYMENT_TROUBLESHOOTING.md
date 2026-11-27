# 🔧 TROUBLESHOOTING GUIDE - COMMON ISSUES & FIXES

**Use this if deployment doesn't work immediately**

---

## 🔴 ISSUE: Vercel Shows Blank Page

### Root Cause 1: Backend Not Running on Railway

**How to check:**
1. Go to: https://railway.app
2. Click your project
3. Look for status indicator
4. If RED or ORANGE = backend stopped

**How to fix:**
1. Click on the project
2. Find the Node.js service
3. Click to open logs
4. Look for error messages (red text)
5. Take a screenshot of errors
6. Tell me the exact error

**Common error examples:**
- `Error: connect ECONNREFUSED 127.0.0.1:27017`
  → Your MONGODB_URI isn't set correctly
  → Fix: Go to Railway Variables, verify MONGODB_URI value

- `SyntaxError in server.js`
  → Code has a problem
  → Fix: Tell me the exact line number

---

### Root Cause 2: Vercel Not Connected to Backend

**How to check:**
1. Open Vercel app: https://vijayalakshmi-ten.vercel.app
2. Press F12 (open Developer Tools)
3. Click "Network" tab
4. Refresh the page
5. Look for red failed requests
6. Click on a failed request
7. Check the URL it's trying to reach

**You should see requests to something like:**
```
https://vijayalakshmi-pickel-store-production.up.railway.app/api/products
```

**If it's trying to reach:**
```
http://localhost:5000/api/products
```
→ VITE_API_URL not set in Vercel

**Fix:**
1. Go to Vercel Settings → Environment Variables
2. Add: `VITE_API_URL` = `https://your-railway-url.up.railway.app`
3. Go to Deployments
4. Click Redeploy
5. Wait 2 minutes

---

### Root Cause 3: MongoDB Not Connected

**How to check:**
1. Go to Railway logs (click your project → Logs)
2. Look for messages containing "MongoDB"
3. Any red error text?

**Common errors:**
```
Error: connect ECONNREFUSED
MongoError: authentication failed
Error: 404 Not Found (database)
```

**How to fix:**
1. Go to Railway → Variables
2. Click on MONGODB_URI value
3. Verify it looks like:
   ```
   mongodb+srv://gouri:Pickle@2026@cluster0-XXXXX.mongodb.net/vijayalakshmi?retryWrites=true&w=majority
   ```
4. Check:
   - Username is `gouri` ✓
   - Password is `Pickle@2026` ✓
   - Your cluster name is there ✓
   - No `<username>` or `<password>` ✓
5. If wrong, copy correct string from MongoDB and paste here
6. Railway will auto-restart with new variable

---

## 🔴 ISSUE: Products Show But Page Styling is Broken

**This means:**
- ✅ Backend and database connected (good!)
- ⚠️ Frontend CSS not loading properly

**How to fix:**
1. Go to Vercel Deployments
2. Click "Redeploy"
3. Wait 3 minutes
4. Hard refresh browser: Ctrl+Shift+Delete (clear cache) then Ctrl+F5
5. Open app again

---

## 🔴 ISSUE: Can Login but Cart Doesn't Work

**Common causes:**
- Backend not storing cart in session
- JWT token not working

**How to check:**
1. Open F12 → Console tab
2. Look for red error messages
3. Try adding item to cart
4. Any red errors appear?

**If error appears:**
1. Take screenshot
2. Copy the exact error text
3. Tell me what it says

---

## 🔴 ISSUE: Admin Panel Won't Load

**How to check:**
1. Try logging in with:
   - Email: `admin@example.com`
   - Password: `admin123`
2. Does login work?
3. Can you access `/admin` page?

**Common issue:**
- Admin user not created in database
- JWT authentication failing

**How to fix:**
1. Go to Railway logs
2. Look for "admin user created" message
3. If not there, run seed script:
   - In Railway, find your project
   - Look for "Terminal" or "SSH" option
   - Run: `npm run seed`
   - This creates sample products and admin user

---

## 🔴 ISSUE: "Cannot Read Property X of Undefined"

**What this means:**
- Frontend trying to use data that doesn't exist
- Usually because backend didn't respond

**How to check:**
1. F12 → Network tab
2. Refresh page
3. Look for failed API calls (red)
4. Click on failed request
5. What URL failed?
6. Check if it's trying to reach correct backend URL

**Most common:**
- Trying to reach `localhost:5000` instead of Railway URL
- Fix: Set VITE_API_URL in Vercel (see step 2 issues above)

---

## 🟡 ISSUE: Deployment Takes Too Long

**Expected times:**
- MongoDB: 5-10 minutes to initialize
- Railway: 2-3 minutes to build and deploy
- Vercel: 1-2 minutes to redeploy

**If taking longer:**
1. Check Railway build logs for errors (might be stuck)
2. Check Vercel deployments for errors
3. Try refreshing the page
4. Wait up to 5 more minutes

---

## 🟡 ISSUE: Getting CORS Errors

**Error message:** 
```
Access to XMLHttpRequest has been blocked by CORS policy
```

**This means:**
- Frontend trying to access backend
- Backend doesn't allow it

**How to fix:**
1. Go to: `server/server.js`
2. Look for: `app.use(cors())`
3. It should be there (allowing all)
4. If not, add this line after `const app = express()`:
   ```javascript
   app.use(cors())
   ```
5. Push change to GitHub
6. Railway will auto-redeploy

---

## 🟡 ISSUE: "502 Bad Gateway" or "503 Service Unavailable"

**What this means:**
- Vercel can't reach Railway
- Railway backend crashed
- Too many requests

**How to fix:**
1. Wait 2 minutes (might be restarting)
2. Go to Railway dashboard
3. Click your project
4. Check status indicator
5. If red = backend stopped
6. Click to restart it
7. Wait 1 minute
8. Try Vercel app again

---

## 📋 STEP-BY-STEP DEBUGGING PROCESS

**Use this if something isn't working:**

### Step 1: Check Backend Status
```
1. Open: https://railway.app
2. Find your project
3. Is status "Live" and green? YES → Go to Step 2
4. Is status red/orange? NO → Click "Restart" → Wait 2 min → Try again
```

### Step 2: Check Environment Variables
```
1. In Railway, click Variables
2. Do you see all 4? (MONGODB_URI, JWT_SECRET, NODE_ENV, PORT)
3. All green (no errors)? YES → Go to Step 3
4. Any red/error? NO → Fix the error or delete and re-add
```

### Step 3: Check Vercel Configuration
```
1. Open: https://vercel.com/dashboard
2. Find: vijayalakshmi-ten
3. Click Settings → Environment Variables
4. Is VITE_API_URL there? YES → Go to Step 4
5. Not there? Add it with your Railway URL
```

### Step 4: Check Frontend Load
```
1. Open: https://vijayalakshmi-ten.vercel.app
2. Do you see products? YES → ✅ SUCCESS!
3. Blank page? NO → Press F5 (refresh) → Check again
4. Still blank? Go to Step 5
```

### Step 5: Check Browser Console
```
1. Press F12 → Console tab
2. Any red error messages? YES → Copy the message
3. Tell me: Which step? What's the error? What URL is it trying?
```

---

## 🎯 FINAL HELP REQUEST TEMPLATE

**When you're stuck, tell me:**

```
DEPLOYMENT TROUBLESHOOTING HELP

Current Step: [1-5]
Problem: [What's not working?]
What I see: [Describe screen]
Expected: [What should happen?]

Status Check:
- MongoDB: [✅ Ready / ⏳ Setting up / ❌ Error]
- Railway: [✅ Live / ⏳ Building / ❌ Error]  
- Vercel: [✅ Deployed / ⏳ Building / ❌ Error]
- Frontend: [✅ Products showing / ⏳ Loading / ❌ Blank]

Error Messages: [Copy/paste any red text from screen]

Screenshots: [Attach if available]
```

---

## 📞 FAST RESPONSE CHECKLIST

**Include these to get fastest help:**

- [ ] Railway showing "Live" status (yes/no)?
- [ ] All 4 Railway variables set (yes/no)?
- [ ] VITE_API_URL in Vercel (yes/no)?
- [ ] Vercel shows green checkmark deployment (yes/no)?
- [ ] Vercel app shows products or blank?
- [ ] Any error messages in F12 console (yes/no)?
  - If yes: Exact error text?
- [ ] Railway URL looks like: `https://vijaya...railway.app` (yes/no)?

**The more info you provide, the faster I can help you fix it!**

