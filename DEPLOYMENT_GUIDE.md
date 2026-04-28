# 🚀 Deployment Guide: GitHub & Firebase untuk Pacific Website

## 📋 **Table of Contents**
1. [Setup GitHub Repository](#setup-github)
2. [Setup Git dan Push ke GitHub](#setup-git)
3. [Setup Firebase Project](#setup-firebase)
4. [Deploy ke Firebase Hosting](#deploy-firebase)
5. [Custom Domain Configuration](#custom-domain)
6. [Testing dan Maintenance](#testing)

---

## 🐙 **PART 1: SETUP GITHUB REPOSITORY**

### 🎯 **Step 1: Install Git (Belum Install)**
```bash
# Download Git dari: https://git-scm.com/download/win
# Install Git dengan default settings
# Buka PowerShell/Command Prompt dan test:
git --version
```

### 🎯 **Step 2: Create GitHub Repository**
```bash
1. Buka https://github.com
2. Login atau Sign Up
3. Klik "New" atau "+" → "New repository"
4. Repository name: "pacific-website"
5. Description: "Pacific Inter Teknologi - Professional IT Solutions Website"
6. Public (Recommended untuk website)
7. Jangan centang "Add a README file"
8. Klik "Create repository"
```

### 🎯 **Step 3: Setup Local Git Repository**
```bash
# Buka PowerShell/Command Prompt di folder project
cd "d:/my Project/pacific_website"

# Initialize Git repository
git init

# Add semua files
git add .

# First commit
git commit -m "Initial commit: Pacific Inter Teknologi Website"

# Add remote repository
git remote add origin https://github.com/USERNAME/pacific-website.git
# Ganti USERNAME dengan GitHub username Anda

# Push ke GitHub
git push -u origin main
```

---

## 🔥 **PART 2: SETUP FIREBASE HOSTING**

### 🎯 **Step 1: Install Firebase CLI**
```bash
# Install Firebase CLI via npm
npm install -g firebase-tools

# Atau install via Chocolatey
choco install firebase-cli

# Login ke Firebase
firebase login
```

### 🎯 **Step 2: Create Firebase Project**
```bash
1. Buka https://console.firebase.google.com
2. Klik "Add project"
3. Project name: "pacific-website"
4. Enable Google Analytics (Recommended)
5. Configure Analytics (Default settings)
6. Klik "Create project"
```

### 🎯 **Step 3: Initialize Firebase Hosting**
```bash
# Di folder project (d:/my Project/pacific_website)
firebase init hosting

# Jawab pertanyaan:
? Please select an option: Use an existing project
? Select a default Firebase project: pacific-website
? What do you want to use as your public directory? public
? Configure as a single-page app? No
? Set up automatic builds and deploys with GitHub? Yes
? File to deploy GitHub Actions from: .github/workflows/firebase-hosting-pull-request.yml
```

### 🎯 **Step 4: Prepare for Deployment**
```bash
# Buat folder public
mkdir public

# Copy website files ke public folder
copy index.html public/
copy logo.png public/
copy style.css public/ (jika ada)
copy slider.js public/ (jika ada)

# Buat firebase.json (jika belum ada)
```

---

## 🚀 **PART 3: DEPLOY KE FIREBASE**

### 🎯 **Step 1: First Deployment**
```bash
# Deploy ke Firebase
firebase deploy

# Website akan live di:
# https://pacific-website.web.app
# https://pacific-website.firebaseapp.com
```

### 🎯 **Step 2: Test Website**
```bash
1. Buka https://pacific-website.web.app
2. Test semua fungsi:
   - Navigation smooth scroll
   - Contact form WhatsApp integration
   - Responsive design
   - Animasi AOS
   - Floating WhatsApp button
```

---

## 🔧 **PART 4: GITHUB ACTIONS AUTO-DEPLOY**

### 🎯 **Step 1: Setup GitHub Actions**
```bash
# Firebase akan otomatis membuat file:
.github/workflows/firebase-hosting-pull-request.yml

# Buat juga workflow untuk main branch:
.github/workflows/firebase-hosting-merge.yml
```

### 🎯 **Step 2: Auto-Deploy Configuration**
```yaml
# .github/workflows/firebase-hosting-merge.yml
name: Deploy to Firebase Hosting on merge

'on':
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install Firebase CLI
        run: npm install -g firebase-tools
        
      - name: Deploy to Firebase
        run: firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
```

### 🎯 **Step 3: Setup Firebase Token**
```bash
# Generate Firebase token
firebase login:ci

# Copy token dan add ke GitHub Secrets:
1. GitHub repository → Settings → Secrets and variables → Actions
2. New repository secret
3. Name: FIREBASE_TOKEN
4. Value: [paste token dari firebase login:ci]
```

---

## 🌐 **PART 5: CUSTOM DOMAIN (OPTIONAL)**

### 🎯 **Step 1: Add Custom Domain**
```bash
1. Firebase Console → Hosting → Custom domains
2. Add custom domain: pacificinterteknologi.com
3. Verify domain ownership
```

### 🎯 **Step 2: DNS Configuration**
```bash
# Add DNS records di domain provider:
Type: A
Name: @
Value: 192.168.0.1 (IP dari Firebase)

Type: CNAME
Name: www
Value: pacific-website.web.app
```

### 🎯 **Step 3: SSL Certificate**
```bash
# Firebase akan otomatis setup SSL certificate
# Wait untuk propagation (1-24 jam)
```

---

## 📱 **PART 6: TESTING & MAINTENANCE**

### 🎯 **Step 1: Post-Deployment Testing**
```bash
✅ Checklist Testing:
- Website loads correctly
- All navigation works
- Contact form WhatsApp integration
- Mobile responsiveness
- Animations work
- No console errors
- SEO meta tags work
- Social sharing works
```

### 🎯 **Step 2: Performance Optimization**
```bash
# Test website speed:
1. Google PageSpeed Insights
2. GTmetrix
3. WebPageTest

# Optimize jika needed:
- Compress images
- Minify CSS/JS
- Enable caching
- Use CDN
```

### 🎯 **Step 3: Maintenance**
```bash
# Regular updates:
1. Update content → Push ke GitHub → Auto-deploy
2. Fix bugs → Push ke GitHub → Auto-deploy
3. Add features → Push ke GitHub → Auto-deploy

# Monitoring:
1. Firebase Analytics
2. Google Search Console
3. GitHub Issues/PR tracking
```

---

## 🎯 **QUICK START COMMANDS**

### 📋 **One-Time Setup:**
```bash
# 1. Install Git
# 2. Create GitHub repository
# 3. Install Firebase CLI
# 4. Create Firebase project
# 5. Initialize Firebase hosting
```

### 📋 **Deploy Commands:**
```bash
# Local development
firebase serve

# Deploy to staging
firebase deploy --only hosting:pacific-website

# Deploy to production
firebase deploy

# GitHub auto-deploy (setup sekali)
git add .
git commit -m "Update website"
git push origin main
```

---

## 🚨 **TROUBLESHOOTING**

### ❌ **Common Issues:**
```bash
🔧 Git Issues:
- "git not recognized" → Install Git
- "Permission denied" → Check GitHub credentials
- "Remote origin already exists" → git remote remove origin

🔧 Firebase Issues:
- "firebase not recognized" → Install Firebase CLI
- "Permission denied" → firebase login
- "Deploy failed" → Check firebase.json configuration

🔧 Website Issues:
- "404 error" → Check public folder
- "Styles not loading" → Check CSS paths
- "WhatsApp not working" → Check JavaScript console
```

### ✅ **Solutions:**
```bash
🔧 Reset Git:
git init
git add .
git commit -m "Reset"
git remote add origin [GitHub URL]
git push -u origin main --force

🔧 Reset Firebase:
firebase logout
firebase login
firebase deploy

🔧 Clear Cache:
firebase hosting:disable
firebase hosting:enable
firebase deploy
```

---

## 📞 **SUPPORT**

### 🎯 **Resources:**
- **GitHub Docs:** https://docs.github.com
- **Firebase Docs:** https://firebase.google.com/docs
- **GitHub Support:** https://support.github.com
- **Firebase Support:** https://firebase.google.com/support

### 🎯 **Community:**
- **GitHub Community:** https://github.community
- **Firebase Community:** https://firebase.google.com/community
- **Stack Overflow:** Tag dengan #github #firebase

---

**🚀 Setelah mengikuti guide ini, website Pacific Inter Teknologi akan live di Firebase Hosting dengan auto-deploy dari GitHub!** 🎉

**📱 Website akan professional, fast, dan mudah di-maintain!** ✨
