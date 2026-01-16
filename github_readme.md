# 🍡 JajanKu - Platform UMKM Jajanan Tradisional

Platform pemesanan online untuk UMKM jajanan tradisional **Dapur Sari** di Medan. Dibangun sebagai Proyek PBL (Project Based Learning) untuk meningkatkan penjualan UMKM melalui digitalisasi.

![JajanKu Banner](https://via.placeholder.com/800x200/fb923c/ffffff?text=JajanKu+-+Platform+UMKM+Jajanan)

## 🎯 Fitur Utama

- ✅ **Katalog Produk** - Tampilan produk dengan foto, harga, dan deskripsi
- 🛒 **Keranjang Belanja** - Sistem keranjang yang mudah digunakan
- 📱 **Integrasi WhatsApp** - Pesanan langsung terkirim ke WhatsApp penjual
- 💰 **Kalkulasi Otomatis** - Total harga dihitung otomatis
- 📋 **Form Pemesanan** - Form lengkap untuk data pelanggan
- 🎨 **Responsive Design** - Tampilan optimal di semua perangkat
- ⚡ **Fast & Lightweight** - Tanpa framework berat, pure vanilla JavaScript

## 🚀 Demo

**Live Demo:** [https://username.github.io/jajanku](https://username.github.io/jajanku)

*(Ganti dengan URL GitHub Pages kamu setelah deploy)*

## 📦 Struktur Proyek

```
jajanku/
├── index.html          # Halaman utama
├── style.css           # Custom styles
├── config.js           # Konfigurasi & data produk
├── app.js              # Logic aplikasi
└── README.md           # Dokumentasi
```

## 🛠️ Teknologi

- **HTML5** - Struktur website
- **CSS3** - Styling & animasi
- **JavaScript (Vanilla)** - Interaktivitas
- **Tailwind CSS** - Utility-first CSS framework
- **WhatsApp Business API** - Integrasi pemesanan

## 📥 Instalasi & Setup

### 1. Clone Repository

```bash
git clone https://github.com/username/jajanku.git
cd jajanku
```

### 2. Konfigurasi

Edit file `config.js` untuk mengubah:

```javascript
const CONFIG = {
    // Ganti dengan nomor WhatsApp kamu
    SELLER_WHATSAPP: '6285641574526',
    
    // Update info toko
    SHOP_INFO: {
        name: 'Dapur Sari',
        address: 'Jl. Kelambir V, Medan',
        phone: '0856-4157-4526',
        // ...
    }
};
```

### 3. Jalankan Lokal

Cukup buka `index.html` di browser, atau gunakan local server:

```bash
# Dengan Python
python -m http.server 8000

# Dengan Node.js
npx http-server

# Dengan PHP
php -S localhost:8000
```

Buka browser: `http://localhost:8000`

## 🌐 Deploy ke GitHub Pages

### Langkah 1: Push ke GitHub

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/jajanku.git
git push -u origin main
```

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** → **Pages**
3. Source: pilih **main branch**
4. Klik **Save**
5. Tunggu 1-2 menit
6. ✅ Website live di: `https://username.github.io/jajanku`

## 📱 Cara Menggunakan

### Untuk Pelanggan:

1. Buka website JajanKu
2. Pilih produk yang diinginkan
3. Klik "Pesan Sekarang"
4. Lihat keranjang belanja
5. Klik "Lanjut ke Pemesanan"
6. Isi form data diri
7. Klik "Kirim Pesanan via WhatsApp"
8. Selesaikan pesanan di WhatsApp

### Untuk Penjual:

1. Edit `config.js` untuk mengubah:
   - Nomor WhatsApp
   - Data produk (nama, harga, stok)
   - Informasi toko
2. Terima pesanan melalui WhatsApp
3. Konfirmasi pesanan ke pelanggan

## 🎨 Kustomisasi

### Menambah Produk Baru

Edit `config.js`:

```javascript
PRODUCTS: [
    {
        id: '7',
        name: 'Kue Baru',
        price: 25000,
        unit: '10pcs',
        image: '🥮',
        description: 'Deskripsi kue baru',
        stock: 15,
        available: true
    }
]
```

### Mengubah Warna Tema

Edit `style.css` atau gunakan Tailwind classes di `app.js`

### Menambah Fitur

Edit `app.js` untuk menambahkan logic baru

## 📊 Fitur Mendatang

- [ ] Dashboard admin untuk penjual
- [ ] Integrasi payment gateway
- [ ] Sistem rating & review
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Dark mode

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author

**Audysti Safrina Mendrofa**
- Program Studi: Bisnis Digital
- Universitas: Universitas Mahkota Tricom Unggul
- Email: audyysafrinamendrofa@gmail.com

## 🙏 Acknowledgments

- Proyek PBL - Mata Kuliah Wawasan dan Aplikasi Teknologi
- UMKM Partner: Dapur Sari, Medan
- Icons: Lucide Icons
- Framework: Tailwind CSS

## 📞 Kontak

Untuk pertanyaan atau saran:
- WhatsApp: [0856-4157-4526](https://wa.me/6285641574526)
- Email: dapursari@example.com

---

⭐ **Star** repository ini jika bermanfaat!

💬 **Follow** untuk update project terbaru!

🍡 **Dibuat dengan ❤️ untuk mendukung UMKM Indonesia**
