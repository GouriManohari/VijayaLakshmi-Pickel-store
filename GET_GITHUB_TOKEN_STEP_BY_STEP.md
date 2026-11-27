# How to Get Your GitHub Personal Access Token

## Step-by-Step Guide

### Step 1: Go to GitHub Settings
1. Open your browser and go to: **https://github.com/settings/tokens**
   - Or: Click your profile picture (top right) → Settings → Developer settings → Personal access tokens

### Step 2: Click "Generate new token"
- Look for the button that says **"Generate new token (classic)"**
- Click on it

### Step 3: Fill in the Token Details

**Token name:**
```
Give it a name like: "Git Push" or "Local Development"
```

**Expiration:**
```
Choose: "90 days" (or select Custom if you prefer)
```

**Select scopes (checkboxes):**
Check these boxes:
- ☑️ **repo** (Full control of private repositories)
  - This includes: `repo:status`, `repo_deployment`, `public_repo`, `repo:invite`
- ☑️ **workflow** (Update GitHub Action workflows)

*Other scopes like "admin:org_hook", "gist", "read:user" are NOT needed*

### Step 4: Click "Generate token"
- Scroll to bottom and click the **green "Generate token" button**

### Step 5: COPY YOUR TOKEN IMMEDIATELY ⚠️
- **IMPORTANT**: This is the ONLY time you'll see this token!
- Click the copy icon (📋) next to your token
- Or select all and copy manually

**Your token will look like:**
```
ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Save it somewhere safe!** (like a text file on your desktop temporarily)

---

## Now Use Your Token to Push

### In PowerShell:

```powershell
cd "C:\Users\gouri\Vijaya Lakhsmi Pickel Store"

# Push master branch
git push -u origin master

# When git asks for credentials:
# Username: GouriManohari
# Password: [paste your token here - Ctrl+V]

# Press Enter

# Then push develop
git push -u origin develop

# Same username and token when prompted
```

### What You'll See:

```
Enumerating objects: 2, done.
Counting objects: 100% (2/2), done.
Delta compression using up to 8 threads.
Compressing objects: 100% (1/1), done.
Writing objects: 100% (2/2), 288 bytes | 288.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (0/0), done.
To https://github.com/GouriManohari/VijayaLakshmi-Pickel-store.git
 * [new branch]      master -> master
 * [new branch]      develop -> develop
Branch 'master' set up to track 'origin/master'.
Branch 'develop' set up to track 'origin/develop'.
```

✅ **If you see this, your push was SUCCESSFUL!**

---

## Visual Map of GitHub Settings

```
GitHub.com
    ↓
Your Profile (top right corner)
    ↓
Settings
    ↓
Developer settings (left sidebar)
    ↓
Personal access tokens (left sidebar)
    ↓
Tokens (classic) ← You are here
    ↓
"Generate new token (classic)" button
```

---

## Troubleshooting

### "Token expired"
- Create a new token with longer expiration

### "Token not working"
- Make sure you copied the ENTIRE token (including "ghp_" at the start)
- Check you didn't add extra spaces

### "Still getting 'Repository not found'"
- Make sure repository exists at:
  https://github.com/GouriManohari/VijayaLakshmi-Pickel-store
- If not, create it first (without initializing with README)

### "Password incorrect"
- Tokens are NOT passwords - must be your Personal Access Token, not your GitHub password
- If using GitHub password, it won't work (GitHub disabled password auth in 2021)

---

## Quick Reference

| Item | Value |
|------|-------|
| **GitHub URL** | https://github.com/settings/tokens |
| **Token Type** | Personal Access Token (classic) |
| **Required Scopes** | `repo`, `workflow` |
| **Expiration** | 90 days (recommended) |
| **Username for Git** | GouriManohari |
| **Repository** | VijayaLakshmi-Pickel-store |

---

## Security Tips ⚠️

✅ **DO:**
- Keep your token safe (don't share it)
- Delete it after use if you want (you can always make a new one)
- Use it only on trusted computers
- Regenerate it if you think it's compromised

❌ **DON'T:**
- Share your token with anyone
- Paste it in public forums or chats
- Commit it to your code repository
- Write it in documents you share

---

## Still Need Help?

If you get stuck:
1. Take a screenshot of what you see
2. Try the step again from "Step 1"
3. Make sure you're using the "classic" token type (not fine-grained)

---

**Ready to push?** 🚀

Once you have your token, run these commands:
```powershell
cd "C:\Users\gouri\Vijaya Lakhsmi Pickel Store"
git push -u origin master
git push -u origin develop
```

Your code will be on GitHub! ✨
