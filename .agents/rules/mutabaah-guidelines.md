---
description: Panduan arsitektur, keamanan, dan desain antarmuka Mutaba'ah Yaumiyah.
always_on: true
---

# Mutaba'ah Yaumiyah Development Guidelines

Dokumen ini memuat aturan dasar (*invariants*) dan standar pengembangan aplikasi **Mutaba'ah Yaumiyah**:

1. **100% 2D Flat Vector Icons (Larangan 3D Emoji)**:
   - Seluruh icon antarmuka wajib menggunakan SVG 2D dengan path/stroke bersih.
   - Jangan pernah menggunakan emoji 3D atau icon api/flame pada penghitung hari beruntun (streak) maupun tombol lainnya.

2. **13 Palet Warna Open Color & Sinkronisasi Kurang -> Penuh**:
   - Skema warna aplikasi berbasis pada 13 rumpun palet [Open Color](https://yeun.github.io/open-color/): `gray`, `red`, `pink`, `grape`, `violet`, `indigo`, `blue`, `cyan`, `teal`, `green`, `lime`, `yellow`, `orange`.
   - **Tingkatan Heatmap (Kurang -> Penuh)**: Wajib disamakan arah logikanya antara mode terang dan gelap: Level 1 menggunakan shade muda (`c[1]`) dan Level 4 menggunakan shade tua/pekat (`c[7]`), sehingga informatif dan konsisten saat berpindah mode.
   - **Mode Terang**: Canvas & kartu menggunakan warna muda (`#f8f9fa` / `#ffffff`).
   - **Mode Gelap**: Canvas & kartu menggunakan warna tua (`#0c0e12` / `#15181e`).

3. **Struktur Modal Bebas Double-Scroll & Scrollbar Tersembunyi**:
   - Wadah scroll vertikal pada modal sheet (`.modal-sheet`) adalah single-scroll tanpa scroll ganda.
   - Penanda scrollbar (track & thumb) disembunyikan (`scrollbar-width: none`, `::-webkit-scrollbar { display: none }`), dengan scroll yang tetap berjalan mulus (`-webkit-overflow-scrolling: touch; scroll-behavior: smooth`).

4. **Keamanan & Sanitasi String Input (Mitigasi Stored XSS)**:
   - Setiap teks dinamis yang bersumber dari pengguna atau cadangan JSON (`task.title`, `task.desc`, nama, bio, status custom, pesan toast) wajib disanitasi menggunakan helper `this.escapeHtml()` sebelum diinterpolasi ke DOM atau gunakan properti `textContent`.
   - Fungsi `importBackup()` wajib melewati `this.validateBackupSchema()` sebelum memutakhirkan state aplikasi.

5. **Ergonomi Layar Sentuh & Aksesibilitas (WCAG 2.1 AA)**:
   - Sel heatmap minimal berukuran 18px (pitch 22px) untuk memudahkan pengetukan dengan jari telunjuk di layar HP.
   - Seluruh dialog modal wajib menyertakan `role="dialog"`, `aria-modal="true"`, dan `aria-labelledby`.
   - Seluruh tombol berbasis icon wajib menyertakan atribut `aria-label`.
   - Dukung tombol `Escape` untuk menutup modal dan navigasi keyboard (Enter/Space pada sel heatmap dan checklist).

6. **Arsitektur Offline-First & Zero Cloud**:
   - Aplikasi berjalan 100% di sisi klien tanpa dependensi server eksternal, otentikasi login, atau database cloud.
   - Semua aset PWA disimpan secara lokal dan didukung precache Service Worker (`sw.js`).

