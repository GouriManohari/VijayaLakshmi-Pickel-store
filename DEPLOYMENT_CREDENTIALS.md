# 🔐 Deployment Credentials & Copy-Paste Values

**DO NOT SHARE THESE PUBLICLY**

## MongoDB Atlas Setup

**Email to use:**
```
manoharikatepalli@gmail.com
```

**Database User Credentials:**
```
Username: gouri
Password: Pickle@2026
```

**After creating cluster, your connection string will look like:**
```
mongodb+srv://gouri:Pickle@2026@cluster0.mongodb.net/vijayalakshmi?retryWrites=true&w=majority
```
(Replace `cluster0` with your actual cluster name from MongoDB)

---

## Railway Environment Variables

**Copy EACH of these into Railway dashboard (Variables section):**

### Variable 1: MongoDB Connection
```
Name: MONGODB_URI
Value: mongodb+srv://gouri:Pickle@2026@cluster0.mongodb.net/vijayalakshmi?retryWrites=true&w=majority
```
⚠️ Replace `cluster0` with your actual MongoDB cluster name

### Variable 2: JWT Secret
```
Name: JWT_SECRET
Value: vijaya-lakshmi-pickle-store-secret-key-2026
```

### Variable 3: Node Environment
```
Name: NODE_ENV
Value: production
```

### Variable 4: Backend Port
```
Name: PORT
Value: 5000
```

---

## Vercel Environment Variable

**After Railway deployment, copy your Railway URL**

It will look like:
```
https://vijayalakshmi-pickel-store-production.up.railway.app
```

**Then add to Vercel:**
```
Name: VITE_API_URL
Value: https://vijayalakshmi-pickel-store-production.up.railway.app
```
(Replace with YOUR actual Railway URL)

---

## Git Credentials (For Reference)

Your repository has been configured with:
```
Author Name: Gouri Manohari
Author Email: manoharikatepalli@gmail.com
```

---

## Account Summary

| Service | Email | Status |
|---------|-------|--------|
| MongoDB Atlas | manoharikatepalli@gmail.com | Need to create |
| Railway | (Use GitHub login) | Need to create |
| Vercel | manoharikatepalli@gmail.com | ✅ Already have |

---

## Quick Links

- **MongoDB:** https://www.mongodb.com/cloud/atlas
- **Railway:** https://railway.app
- **Vercel Dashboard:** https://vercel.com/dashboard

