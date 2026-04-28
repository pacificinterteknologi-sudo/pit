# EmailJS Setup Guide untuk Pacific Inter Teknologi Website

## 📧 Cara Setup EmailJS agar Contact Form Terkirim ke Email

### 🎯 **Target Email: pacificinterteknologi@gmail.com**

### 🎯 **Langkah 1: Daftar EmailJS**
1. Buka https://www.emailjs.com/
2. Klik "Sign Up" dan daftar menggunakan **pacificinterteknologi@gmail.com**
3. Verifikasi email Anda

### 🎯 **Langkah 2: Buat Email Service**
1. Login ke EmailJS dashboard
2. Klik "Email Services" di sidebar
3. Klik "Add New Service"
4. Pilih **Gmail** (karena target email Gmail)
5. Connect dengan **pacificinterteknologi@gmail.com**
6. Beri nama service: "pacific_gmail_service"

### 🎯 **Langkah 3: Buat Email Template**
1. Klik "Email Templates" di sidebar
2. Klik "Create New Template"
3. Isi template:
   ```
   Template Name: Contact Form Pacific
   
   To Email: pacificinterteknologi@gmail.com
   Subject: 📧 Pesan Baru dari Website Pacific Inter Teknologi
   
   Email Content:
   🌟 Pacific Inter Teknologi - Contact Form Submission 🌟
   
   Anda menerima pesan baru dari website pacificinterteknologi.com:
   
   👤 Nama Pengirim: {{name}}
   📧 Email Pengirim: {{email}}
   � Subjek: {{subject}}
   �💬 Pesan: {{message}}
   
   📅 Tanggal: {{sent_date}}
   🌐 Website: https://pacificinterteknologi.com
   
   ⚠️ Mohon segera ditindak lanjuti untuk memberikan pelayanan terbaik.
   
   Terima kasih,
   Pacific Inter Teknologi Website System
   ```

### 🎯 **Langkah 4: Dapatkan Credentials**
1. Dari dashboard, copy:
   - **Service ID** (contoh: "service_pacific123")
   - **Template ID** (contoh: "template_contact456")
   - **Public Key** (contoh: "abc123def456ghi789")

### 🎯 **Langkah 5: Update Website Code**
1. Buka file `index.html`
2. Cari line ini:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
3. Ganti dengan public key Anda:
   ```javascript
   emailjs.init("abc123def456ghi789");
   ```

4. Cari line ini:
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
   ```

5. Ganti dengan credentials Anda:
   ```javascript
   emailjs.send('service_pacific123', 'template_contact456', formData)
   ```

### 🎯 **Langkah 6: Test Contact Form**
1. Buka website
2. Isi contact form:
   - Nama: Test User
   - Email: test@example.com
   - Pesan: Ini adalah test pesan untuk pacificinterteknologi@gmail.com
3. Klik "Kirim Pesan"
4. Cek email **pacificinterteknologi@gmail.com** (inbox/spam)

### 📋 **Email yang Akan Diterima di pacificinterteknologi@gmail.com:**
```
Subject: 📧 Pesan Baru dari Website Pacific Inter Teknologi

🌟 Pacific Inter Teknologi - Contact Form Submission 🌟

Anda menerima pesan baru dari website pacificinterteknologi.com:

👤 Nama Pengirim: John Doe
📧 Email Pengirim: john@example.com
� Subjek: Permintaan Informasi Layanan
�💬 Pesan: Saya tertarik dengan layanan web development

📅 Tanggal: 28 April 2024
🌐 Website: https://pacificinterteknologi.com

⚠️ Mohon segera ditindak lanjuti untuk memberikan pelayanan terbaik.

Terima kasih,
Pacific Inter Teknologi Website System
```

### 📋 **Troubleshooting**

#### ❌ **Jika tidak terkirim ke pacificinterteknologi@gmail.com:**
1. Pastikan EmailJS credentials benar
2. Cek console browser untuk error
3. Pastikan template variables {{name}}, {{email}}, {{message}} ada
4. Cek folder spam di **pacificinterteknologi@gmail.com**
5. Pastikan Gmail service sudah terkoneksi dengan benar

#### ❌ **Jika error "Public Key invalid":**
1. Copy public key yang benar dari EmailJS dashboard
2. Pastikan tidak ada spasi tambahan

#### ❌ **Jika error "Service ID not found":**
1. Cek Service ID di EmailJS dashboard
2. Pastikan service sudah aktif
3. Pastikan Gmail service terkoneksi dengan **pacificinterteknologi@gmail.com**

### 🚀 **Alternative: Formspree (Jika EmailJS tidak berhasil)**
1. Daftar https://formspree.io/ dengan **pacificinterteknologi@gmail.com**
2. Buat form baru
3. Set forwarding ke **pacificinterteknologi@gmail.com**
4. Ganti form action:
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

### 📞 **Support**
- EmailJS docs: https://www.emailjs.com/docs/
- Formspree docs: https://formspree.io/docs/

---

**🎯 Setelah setup, semua pesan dari contact form akan langsung masuk ke pacificinterteknologi@gmail.com!** 🎉

**📧 Target email: pacificinterteknologi@gmail.com**
