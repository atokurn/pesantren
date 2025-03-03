This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
# Panduan Lengkap Setup Google Sheets untuk Form Pendaftaran
Berikut adalah langkah-langkah lengkap untuk menyelesaikan setup integrasi Google Sheets dengan form pendaftaran website pesantren Anda:

## 1. Membuat Google Sheet
1. Buka Google Sheets dan buat spreadsheet baru
2. Buat header kolom sesuai dengan field form pendaftaran Anda:
   - namaLengkap
   - tempatLahir
   - tanggalLahir
   - jenisKelamin
   - alamat
   - telepon
   - email
   - namaAyah
   - namaIbu
   - teleponOrtu
   - asalSekolah
   - program
   - setuju
   - timestamp (untuk mencatat waktu pendaftaran)
## 2. Membuat Google Apps Script
1. Di spreadsheet yang sudah dibuat, klik Extensions > Apps Script
2. Hapus kode default dan paste kode berikut:
```javascript
function doPost(e) {
  try {
    // Parse data yang diterima
    const data = JSON.parse(e.postData.contents);
    
    // Buka spreadsheet aktif
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    // Tambahkan timestamp
    const timestamp = new Date();
    
    // Siapkan data untuk dimasukkan ke spreadsheet
    const rowData = [
      timestamp,
      data.namaLengkap,
      data.tempatLahir,
      data.tanggalLahir,
      data.jenisKelamin,
      data.alamat,
      data.telepon,
      data.email,
      data.namaAyah,
      data.namaIbu,
      data.teleponOrtu,
      data.asalSekolah,
      data.program,
      data.setuju ? 'Ya' : 'Tidak'
    ];
    
    // Tambahkan data ke baris baru
    sheet.appendRow(rowData);
    
    // Kirim respons sukses
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data berhasil disimpan'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Kirim respons error
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString(),
      message: 'Gagal menyimpan data'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
 ```
## 3. Deploy Google Apps Script sebagai Web App
1. Klik tombol Deploy > New deployment
2. Pilih tipe: Web app
3. Isi deskripsi deployment (misal: "Form Pendaftaran Pesantren")
4. Atur akses:
   - Execute as: Me (email Anda)
   - Who has access: Anyone (untuk menerima request dari website)
5. Klik Deploy dan berikan izin yang diminta
6. Salin URL Web App yang muncul (contoh:`https://script.google.com/macros/s/AKfycbxxxx/exec` )
## 4. Konfigurasi Environment Variable di Next.js
1. Buat file`.env.local` di root project (jika belum ada)
2. Tambahkan URL Web App yang sudah didapat: ( NEXT_PUBLIC_GOOGLE_SHEETS_URL=`URL WEB` )
3. Restart server Next.js agar environment variable terbaca
## 5. Pengujian
1. Buka halaman pendaftaran di website
2. Isi formulir dengan data lengkap
3. Klik tombol "Kirim Pendaftaran"
4. Verifikasi data masuk ke Google Sheet
## Catatan Penting
- Pastikan format data di Google Sheet sesuai dengan data yang dikirim
- Jika ada perubahan struktur form, sesuaikan juga script Google Apps Script
- Untuk keamanan lebih, pertimbangkan menambahkan token rahasia dalam request
- Backup Google Sheet secara berkala untuk menghindari kehilangan data
Dengan mengikuti langkah-langkah di atas, form pendaftaran Anda akan terintegrasi dengan Google Sheets dan data pendaftaran akan otomatis tersimpan saat user mengirimkan formulir.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
