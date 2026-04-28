# 🚀 GitHub Upload Guide - Install Git & Upload Pacific Website

## 📋 **STEP 1: INSTALL GIT (BELUM TERINSTALL)**

### 🎯 **Install Git for Windows:**
```bash
1. Buka browser: https://git-scm.com/download/win
2. Download Git for Windows (64-bit)
3. Run installer (git-2.x.x-64-bit.exe)
4. Install dengan default settings:
   ✅ Git Bash Here
   ✅ Git GUI Here
   ✅ Git from the command line
   ✅ Use Git from the Windows Command Prompt
   ✅ Use OpenSSL library
   ✅ Checkout Windows-style, commit Unix-style line endings
5. Klik "Install" → "Finish"
6. Restart PowerShell/Command Prompt
```

### 🎯 **Verify Git Installation:**
```bash
# Buka PowerShell/Command Prompt baru
git --version

# Harus muncul:
# git version 2.x.x.windows.x
```

---

## 📋 **STEP 2: CREATE GITHUB REPOSITORY**

### 🎯 **Create Repository di GitHub:**
```bash
1. Buka https://github.com
2. Login atau Sign Up (jika belum punya akun)
3. Klik "New" (pojok kanan atas) → "New repository"
4. Isi repository details:
   Repository name: pacific-website
   Description: Pacific Inter Teknologi - Professional IT Solutions Website
   ☑️ Public (Recommended untuk website)
   ☐ Add a README file (Jangan dicentang)
   ☐ Add .gitignore (Jangan dicentang)
   ☐ Choose a license (Jangan dicentang)
5. Klik "Create repository"
```

### 🎯 **Copy Repository URL:**
```bash
# Setelah create, GitHub akan menampilkan URL:
https://github.com/USERNAME/pacific-website.git

# Ganti USERNAME dengan GitHub username Anda
# Copy URL ini untuk step selanjutnya
```

---

## 📋 **STEP 3: UPLOAD FILES KE GITHUB**

### 🎯 **Commands untuk Upload:**
```bash
# 1. Buka PowerShell/Command Prompt
# 2. Navigate ke project folder
cd "d:/my Project/pacific_website"

# 3. Initialize Git repository
git init

# 4. Add semua files
git add .

# 5. First commit
git commit -m "Initial commit: Pacific Inter Teknologi Website with WhatsApp integration"

# 6. Add remote repository
git remote add origin https://github.com/USERNAME/pacific-website.git
# Ganti USERNAME dengan GitHub username Anda

# 7. Push ke GitHub
git push -u origin main
```

### 🎯 **Jika ada error authentication:**
```bash
# Setup GitHub credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Atau gunakan Personal Access Token:
# 1. GitHub → Settings → Developer settings → Personal access tokens
# 2. Generate new token → Scopes: repo
# 3. Copy token
# 4. Gunakan token sebagai password saat push
```

---

## 📋 **FILES YANG AKAN DI-UPLOAD**

### ✅ **Essential Files:**
```bash
📄 index.html (34,762 bytes) - Website utama
🖼️ logo.png (12,820 bytes) - Logo Pacific Inter Teknologi
📄 style.css (22,173 bytes) - Professional styling
📄 slider.js (4,556 bytes) - JavaScript
📄 firebase.json (236 bytes) - Firebase config
📄 .firebaserc (64 bytes) - Firebase project
📁 public/ (folder) - Firebase hosting files
📄 DEPLOYMENT_GUIDE.md (7,922 bytes) - Documentation
📄 EMAILJS_SETUP.md (4,400 bytes) - Email integration
📄 UPLOAD_COMMANDS.md - Upload commands
📄 .gitignore - Git ignore file
```

### ✅ **Total Size:**
```bash
📊 Total: ~87 KB (sangat ringan!)
⚡ Upload akan cepat
🌐 Perfect untuk GitHub hosting
```

---

## 📋 **STEP 4: VERIFICATION**

### 🎯 **Check GitHub Repository:**
```bash
1. Buka https://github.com/USERNAME/pacific-website
2. Verify semua files terupload:
   ✅ index.html
   ✅ logo.png
   ✅ style.css
   ✅ slider.js
   ✅ firebase.json
   ✅ public/
   ✅ Documentation files
3. Check file sizes dan preview
4. Test download files
```

### 🎯 **Test Local Repository:**
```bash
# Check status
git status

# Check log
git log --oneline

# Check remote
git remote -v
```

---

## 📋 **STEP 5: NEXT STEPS (FIREBASE DEPLOYMENT)**

### 🎯 **Setelah GitHub Upload:**
```bash
1. Install Firebase CLI:
   npm install -g firebase-tools

2. Login ke Firebase:
   firebase login

3. Deploy ke Firebase:
   firebase deploy

4. Website live di:
   - https://pacific-website.web.app
   - https://pacific-website.firebaseapp.com
```

---

## 🚨 **TROUBLESHOOTING**

### ❌ **Common Issues:**
```bash
🔧 "git not recognized" → Install Git terlebih dahulu
🔧 "Permission denied" → Check GitHub credentials
🔧 "Remote origin already exists" → git remote remove origin
🔧 "Authentication failed" → Gunakan Personal Access Token
🔧 "Push rejected" → git pull origin main dulu
```

### ✅ **Solutions:**
```bash
🔧 Reset Git:
git init
git add .
git commit -m "Reset"
git remote add origin [URL]
git push -u origin main --force

🔧 Fix Authentication:
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 📞 **SUPPORT**

### 🎯 **Resources:**
```bash
📄 Git Download: https://git-scm.com/download/win
📄 GitHub Docs: https://docs.github.com
📄 Git Tutorial: https://git-scm.com/docs/gittutorial
📄 GitHub Support: https://support.github.com
```

### 🎯 **Quick Help:**
```bash
🔧 Git Commands: https://git-scm.com/docs
🔧 GitHub Help: https://docs.github.com/en/get-started
🔧 Firebase Docs: https://firebase.google.com/docs
```

---

**🚀 IKUTI GUIDE INI UNTUK UPLOAD KE GITHUB!**

**📋 Step 1: Install Git → Step 2: Create Repository → Step 3: Upload Files → Step 4: Verify**

**Setelah upload, website Pacific Inter Teknologi akan siap untuk Firebase deployment!** 🎉
