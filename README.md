# RennX Daily

Buka `index.html` di browser. Tanpa npm dan tanpa build.

## File
- `index.html` kerangka halaman, navigasi, dialog konfirmasi
- `style.css` token warna, tipografi, layout, animasi
- `app.js` data rutinitas, logika progres, render semua halaman

## Konsep
Tema terang bernama "fajar": krem hangat, hijau daun, kuning matahari. Hero berupa lengkung langit dengan matahari yang naik mengikuti persentase rutinitas wajib hari ini, dan warna langit berganti sesuai jam.

## Perubahan
- Kalender hanya ada di halaman Kalender
- Layout memakai grid dan container query: navigasi samping di desktop, bar bawah di HP portrait, rel kiri di HP landscape
- Animasi: masuk bertahap, matahari naik, cincin dan bar mengisi, centang membal, selebrasi saat semua wajib tuntas, indikator navigasi dan tab bergeser
- Zoom tidak lagi diblokir (aksesibilitas); gerak dimatikan otomatis bila perangkat meminta reduced motion
- Data tetap di localStorage dengan kunci lama, jadi data lama tetap terbaca
- Font Fraunces dan Hanken Grotesk dimuat dari Google Fonts; tanpa internet jatuh ke font sistem
