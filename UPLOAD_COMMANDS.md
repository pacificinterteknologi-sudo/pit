# 📋 File Upload Commands untuk GitHub

## 🚀 **Commands untuk Upload ke GitHub**

### 🎯 **Step 1: Initialize Git Repository**
```bash
# Buka PowerShell/Command Prompt di folder project
cd "d:/my Project/pacific_website"

# Initialize Git
git init

# Add .gitignore
git add .gitignore
git commit -m "Add .gitignore file"
```

### 🎯 **Step 2: Add Essential Files**
```bash
# Add core website files
git add index.html
git add logo.png
git add style.css
git add slider.js

# Add Firebase configuration
git add firebase.json
git add .firebaserc

# Add public folder
git add public/
git add public/index.html
git add public/logo.png

# Add documentation
git add DEPLOYMENT_GUIDE.md
git add EMAILJS_SETUP.md

# First commit
git commit -m "Initial commit: Pacific Inter Teknologi Website with Firebase hosting"
```

### 🎯 **Step 3: Connect to GitHub**
```bash
# Add remote repository
git remote add origin https://github.com/USERNAME/pacific-website.git
# Ganti USERNAME dengan GitHub username Anda

# Push ke GitHub
git push -u origin main
```

## 📁 **File Structure yang Akan Di-Upload**

### ✅ **Files yang akan di-upload:**
```
pacific-website/
├── index.html              ✅ Website utama
├── logo.png                 ✅ Logo
├── style.css                ✅ Styling
├── slider.js                ✅ JavaScript
├── firebase.json            ✅ Firebase config
├── .firebaserc              ✅ Firebase project
├── public/                  ✅ Firebase hosting folder
│   ├── index.html          ✅ Copy untuk hosting
│   └── logo.png            ✅ Copy untuk hosting
├── DEPLOYMENT_GUIDE.md      ✅ Documentation
├── EMAILJS_SETUP.md         ✅ Documentation
└── .gitignore              ✅ Git ignore file
```

### ❌ **Files yang tidak di-upload:**
```
pacific-website/
├── .firebase/              ❌ Firebase cache
├── deploy/                  ❌ Deployment artifacts
└── index-clean.html        ❌ Alternative version
```

## 🔄 **Quick Upload Commands**

### 🎯 **Untuk Upload Pertama Kali:**
```bash
cd "d:/my Project/pacific_website"

git init
git add .
git commit -m "Initial commit: Pacific Inter Teknologi Website"
git remote add origin https://github.com/USERNAME/pacific-website.git
git push -u origin main
```

### 🎯 **Untuk Update Selanjutnya:**
```bash
cd "d:/my Project/pacific_website"

git add .
git commit -m "Update website content"
git push origin main
```

## 📊 **File Sizes yang Akan Di-Upload**

| File | Size | Description |
|------|------|-------------|
| index.html | 34.8 KB | Website utama |
| logo.png | 12.8 KB | Logo |
| style.css | 22.2 KB | Styling |
| slider.js | 4.6 KB | JavaScript |
| firebase.json | 236 B | Firebase config |
| .firebaserc | 64 B | Firebase project |
| DEPLOYMENT_GUIDE.md | 7.9 KB | Documentation |
| EMAILJS_SETUP.md | 4.4 KB | Documentation |
| .gitignore | 1.2 KB | Git ignore |

**Total: ~87 KB (sangat ringan!)**

## 🚀 **Setelah Upload**

### ✅ **Website akan tersedia di:**
- GitHub Repository: https://github.com/USERNAME/pacific-website
- Firebase Hosting: https://pacific-website.web.app
- Firebase Hosting: https://pacific-website.firebaseapp.com

### ✅ **Features yang Working:**
- Professional design dengan animations
- WhatsApp contact form integration
- Responsive mobile-friendly design
- SEO optimized meta tags
- Fast loading dengan Firebase CDN
- SSL certificate otomatis

**Upload semua file ini dan website Pacific Inter Teknologi akan professional dan live!** 🎉
