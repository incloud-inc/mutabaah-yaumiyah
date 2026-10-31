# Mutaba'ah Yaumiyah 🌙

Aplikasi **To-Do List Mutaba'ah Yaumiyah** (pelacak konsistensi ibadah & kebiasaan harian) bertema visual **Activity Heatmap**, dirancang dengan pendekatan **Mobile-First**, **100% Offline**, **Tanpa Login/Akun**, fasilitas **13 Tema Open Color (Mode Terang & Gelap)**, indikator **Kondisi Iman & Istiqomah**, serta fitur **Backup & Import** untuk kemudahan perpindahan device.

---

## 📱 Fitur Utama

1. **Fasilitas Tema Open Color (13 Warna Pilihan)**:
   - Menggunakan palet standar [Open Color](https://yeun.github.io/open-color/).
   - 13 nama tema bernuansa estetis & bermakna:
     - `gray`: **Hening Slate** (Abu-abu Tenang & Khusyuk)
     - `red`: **Bara Crimson** (Merah Semangat Membara)
     - `pink`: **Rose Qalbi** (Merah Muda Kelembutan Hati)
     - `grape`: **Royal Grape** (Ungu Anggur Kemuliaan)
     - `violet`: **Aura Violet** (Ungu Senja Kedamaian Jiwa)
     - `indigo`: **Lazuardi Malam** (Biru Indigo Syahdu Sepertiga Malam)
     - `blue`: **Samudra Azure** (Biru Samudra Luas & Jernih)
     - `cyan`: **Oasis Cyan** (Biru Pirus Sejuk Menyegarkan)
     - `teal`: **Zamrud Firdaus** (Teal Sejuk Permata Hijau)
     - `green`: **Raudhah Green** (Hijau Nabawi Berkah & Damai)
     - `lime`: **Embun Lime** (Hijau Pupuk Segar Semangat Pagi)
     - `yellow`: **Fajar Emas** (Kuning Mentari Hangat & Bercahaya)
     - `orange`: **Surya Sahara** (Oranye Hangat Senja Mengingat Waktu)
   - Setiap tema memiliki **Mode Terang (Light)** dengan nuansa warna muda yang bersih dan **Mode Gelap (Dark)** dengan warna pekat elegan.
   - Pewarnaan terintegrasi menyeluruh pada heatmap (Level 0 s/d Level 4), tombol, progress bar, checkbox, dan aksen navigasi.

2. **Kondisi Iman & Status Istiqomah**:
   - Status ruhiyah yang dapat diubah langsung hanya dengan mengetuk badge status pada profil:
     - 🌿 **Istiqomah**: Kondisi stabil, konsisten beramal yaumiyah harian.
     - 📈 **Iman lagi naik**: Semangat beribadah tinggi, saatnya mengoptimalkan amalan sunnah.
     - 🌧️ **Iman lagi turun**: Sedang futhur/lelah, pengingat untuk menjaga amalan wajib dan memperbanyak istighfar & doa.
     - ✍️ Opsi status kustom sesuai niat pribadi.

3. **Ikon 100% 2D Flat Vector**:
   - Ikon api (streak counter) dan seluruh ikon antarmuka menggunakan vektor 2D SVG yang bersih, tajam, dan serasi.

4. **Grafik Aktivitas Amalan Penuh Layar**:
   - Menampilkan seluruh riwayat aktivitas tanpa potongan filter, dimulai dari hari pertama pengguna mencatat amalan.
   - Dilengkapi kotak kosong lanjutan hingga memenuhi layar secara mulus dan rapi.
   - Penanda scroll bar disembunyikan (*hidden scrollbar*), dengan pergeseran horizontal (*smooth horizontal scroll*) yang sangat lancar melalui swipe touch maupun drag mouse.

5. **Header Profil & Cover Kustom**:
   - Sampul (Cover Banner) yang dapat diganti dengan foto pribadi dari galeri HP.
   - Foto profil dengan border dinamis sesuai tema yang dipilih.
   - Username handle (`@handle`), bio motivasi, metrik **Hari Streak**, **Hari ini**, dan **Total Amalan**.

6. **100% Tanpa Login & Penyimpanan Internal**:
   - Tidak memerlukan akun, email, password, ataupun koneksi ke server eksternal.
   - Menjaga privasi mutlak catatan ibadah harian hanya di dalam perangkat kamu sendiri (*Local Device Storage*).

7. **Backup & Migrasi Antar Perangkat**:
   - **Ekspor Cadangan (Download JSON)**: Mengunduh seluruh profil, tema, foto, amalan khusus, dan riwayat aktivitas dalam satu file `.json`.
   - **Impor Cadangan**: Buka aplikasi di HP baru, pilih file `.json` cadangan, dan seluruh catatan serta tampilan langsung pulih seketika.

6. **Daftar Amalan Lengkap & Fleksibel**:
   - Bawaan: Shalat 5 Waktu Tepat Waktu, Tilawah Al-Qur'an, Dzikir Pagi & Petang, Qiyamul Lail/Tahajjud, Shalat Dhuha, Sedekah Subuh, Kajian Ilmu.
   - Fitur tambah amalan kustom sesuai target pribadi (misal: Puasa Sunnah, Menghafal Surah, Olahraga Pagi).
   - Filter tab kategori: *Wajib, Sunnah, Al-Qur'an, Dzikir, Amal Sosial, Ilmu*.
   - Navigasi tanggal: Cek dan centang amalan hari ini, kemarin, atau pilih tanggal tertentu via kalender.

---

## 📂 Struktur File

```text
mutabaah-yaumiyah/
├── index.html        # Struktur antarmuka Mobile-First & modal-modal interaktif
├── styles.css        # Tema GitHub Dark mode, styling heatmap, & responsive layout
├── app.js            # Engine logika, state management, heatmap generator, backup/restore
├── manifest.json     # PWA manifest untuk instalasi ke layar utama HP
├── sw.js             # Service Worker untuk dukungan 100% offline (Airplane mode)
└── README.md         # Dokumentasi teknis & panduan penggunaan
```

---

## 🚀 Cara Menjalankan

### Cara 1: Langsung Buka di Browser (PC / Laptop / HP)
Cukup buka file `index.html` menggunakan browser modern apa saja (Google Chrome, Microsoft Edge, Safari, Brave, Firefox).

### Cara 2: Akses dari HP melalui Jaringan Wi-Fi Lokal
1. Jalankan live server di folder ini (misalnya dengan Python atau extension VS Code Live Server):
   ```bash
   # Menggunakan Python 3:
   python -m http.server 8080
   ```
2. Buka browser di HP kamu dan ketik alamat IP laptop/PC kamu:
   ```text
   http://192.168.x.x:8080
   ```
3. Di browser HP (Chrome), tap menu titik tiga -> pilih **"Tambahkan ke Layar Utama" (Add to Home Screen)**. Aplikasi akan terinstal di HP kamu dan dapat dibuka kapan saja tanpa internet!

---

## 💾 Format Data Cadangan (Backup JSON)

File cadangan yang dihasilkan memiliki struktur JSON yang bersih dan manusiawi:
```json
{
  "app": "Mutabaah Yaumiyah",
  "version": 1,
  "exportedAt": "2026-10-31T19:00:00.000Z",
  "profile": {
    "name": "Hamba Allah",
    "handle": "mutabaah_warrior",
    "bio": "Menjaga konsistensi ibadah yaumiyah...",
    "status": "Istiqomah",
    "avatar": "data:image/jpeg;base64,...",
    "cover": "data:image/jpeg;base64,..."
  },
  "tasks": [ ... ],
  "history": {
    "2026-10-31": ["task-sholat-subuh", "task-tilawah", "..."]
  }
}
```
Ketika berganti perangkat, cukup kirim file `.json` ini (misalnya via WhatsApp / Google Drive / Bluetooth ke HP baru) dan lakukan **Impor** pada menu Backup.

