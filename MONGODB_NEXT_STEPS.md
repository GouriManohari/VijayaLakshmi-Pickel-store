# 🎯 MONGODB - WHAT TO DO RIGHT NOW

**You are on the Database Users page. Here's exactly what to do:**

---

## STEP A: Create Database User (1 minute)

### Look for this button on your screen:
```
[+ ADD NEW DATABASE USER] (Green button, top right)
```

### Click it ✓

### A form will appear. Fill it in:
```
Username field: gouri
Password field: Pickle@2026
```

### Click the "Add User" button at bottom ✓

### You should now see in the list:
```
gouri     [SCRAM]     [All Resources]     [EDIT] [DELETE]
```

✅ **User created!**

---

## STEP B: Get Connection String (1 minute)

### In left sidebar, find "Databases" (under "Deployment")
```
Click: Databases
```

### Find your cluster
```
Look for: "Cluster0" or similar
Click: "Connect" button (green)
```

### Choose connection method
```
Click: "Connect your application"
```

### Copy the connection string
```
You'll see a string starting with:
mongodb+srv://...

COPY THE ENTIRE STRING
```

### Modify the string
```
Find: <username>
Replace with: gouri

Find: <password>  
Replace with: Pickle@2026

Example result:
mongodb+srv://gouri:Pickle@2026@cluster0-abc123.mongodb.net/vijayalakshmi?retryWrites=true&w=majority
```

✅ **Connection string ready!**

---

## STEP C: Save It (30 seconds)

**Open Notepad on your computer and paste:**
```
mongodb+srv://gouri:Pickle@2026@cluster0-[YOUR-CLUSTER-NAME].mongodb.net/vijayalakshmi?retryWrites=true&w=majority
```

Save the file: `mongodb-connection-string.txt`

✅ **Saved!**

---

## 🎉 MONGODB IS DONE!

When all 3 steps are complete, **tell me:**
```
MongoDB complete. Connection string saved.
```

Then I'll guide you to **Railway** (the backend server).

---

## 🆘 IF YOU GET STUCK

**Common questions:**

**Q: Where's the "+ ADD NEW DATABASE USER" button?**
A: Top right of the page, it's green

**Q: What if I don't see "Database Users"?**
A: Left sidebar → Security → Database Access

**Q: What if connection string looks different?**
A: That's OK - just replace <username> and <password> with gouri and Pickle@2026

**Q: How do I know I did it right?**
A: You should see "gouri" in the users list, and have a string starting with mongodb+srv://

---

## ⏱️ TIMING

This should take **2-3 minutes total**

---

**GO DO IT NOW!** ✓

Report back when: "MongoDB complete"

