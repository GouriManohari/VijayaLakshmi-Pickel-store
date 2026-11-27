# COPY-PASTE VALUES FOR DEPLOYMENT

**Use these exact values - just copy and paste!**

---

## STEP 1: MONGODB USER

**Paste these in MongoDB Database Users page:**

```
Username: gouri
Password: Pickle@2026
```

---

## STEP 2: RAILWAY ENVIRONMENT VARIABLES

**Add these one-by-one in Railway → Variables:**

### Variable 1
```
Name: MONGODB_URI
Value: mongodb+srv://gouri:Pickle@2026@cluster0-XXXXX.mongodb.net/vijayalakshmi?retryWrites=true&w=majority
```
⚠️ Replace `cluster0-XXXXX` with YOUR cluster name from MongoDB

### Variable 2
```
Name: JWT_SECRET
Value: vijaya-lakshmi-pickle-store-secret-key-2026
```

### Variable 3
```
Name: NODE_ENV
Value: production
```

### Variable 4
```
Name: PORT
Value: 5000
```

---

## STEP 3: VERCEL ENVIRONMENT VARIABLE

**Add this in Vercel → Settings → Environment Variables:**

```
Name: VITE_API_URL
Value: https://vijayalakshmi-pickel-store-production.up.railway.app
```
⚠️ Replace with YOUR Railway URL from Railway dashboard

---

## URLs TO OPEN

```
MongoDB: https://www.mongodb.com/cloud/atlas
Railway: https://railway.app
Vercel:  https://vercel.com/dashboard
Your App: https://vijayalakshmi-ten.vercel.app
```

---

## CREDENTIALS REFERENCE

```
Email:                 manoharikatepalli@gmail.com
GitHub:                GouriManohari
MongoDB User:          gouri
MongoDB Password:      Pickle@2026
JWT Secret:            vijaya-lakshmi-pickle-store-secret-key-2026
```

---

## STATUS RESPONSES

**Use these when reporting back:**

✅ Ready to move to next step:
```
Step [X] complete. Proceeding to Step [X+1].
```

⏳ Still in progress:
```
Step [X] in progress. [What you're doing]. Will update when done.
```

❌ Encountered error:
```
Step [X] error: [Error message]
Screen shows: [Description]
Expected: [What should happen]
```

---

## TIMING GUIDE

| Step | Action | Time | Waiting For |
|------|--------|------|-------------|
| 1 | MongoDB user + connection string | 3 min | Manual input |
| 2 | Railway deploy from GitHub | 5 min | Railway build |
| 3 | Add 4 variables to Railway | 3 min | Manual input |
| 4 | Vercel redeployment | 5 min | Vercel build |
| 5 | Verify products load | 2-10 min | Frontend response |

---

## SUCCESS INDICATOR

✅ **You're done when:**
- Open: https://vijayalakshmi-ten.vercel.app
- **See products on the page** (not blank, not error)
- Can interact with the app

---

## IF SOMETHING BREAKS

**Don't worry!** Use this order:

1. Check [DEPLOYMENT_TROUBLESHOOTING.md](./DEPLOYMENT_TROUBLESHOOTING.md)
2. Find your issue in the list
3. Follow the fix steps
4. Report what happened using the STATUS RESPONSES above

---

## QUICK HELP

**MongoDB connection string format:**
```
mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/[DATABASE]?retryWrites=true&w=majority
```

**Railway URL format:**
```
https://[PROJECT-NAME]-[ENVIRONMENT].up.railway.app
```

**All these should match:**
- MongoDB username: `gouri` ✓
- MongoDB password: `Pickle@2026` ✓
- Railway variables: 4 of them ✓
- Vercel API URL: Points to Railway ✓

---

## SAVE THIS FILE

Bookmark or save this file for quick reference!

All values are correct and ready to use. Just copy and paste exactly as shown.

