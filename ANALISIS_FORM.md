# Analisis Form yang Diperlukan

Berdasarkan analisis program absensi ini, berikut adalah bagian-bagian yang memerlukan form:

## 1. EMPLOYEE (Karyawan)

<!-- ### 1.1 Dashboard Employee (`/v1/employee`)
- ✅ **Form Absensi Masuk/Pulang**
  - Lokasi: Tombol "Absen" di dashboard utama
  - Field yang diperlukan:
    - Foto wajah (face recognition)
    - Lokasi GPS
    - Waktu absensi (otomatis)
    - Keterangan (opsional)
    - Foto bukti (opsional) -->

### 1.2 Pengajuan Cuti (`/v1/employee/pengajuan-cuti`)
- ✅ **Form Buat Pengajuan Cuti**
  - Lokasi: Tombol "Buat Pengajuan"
  - Field yang diperlukan:
    - Tanggal mulai cuti
    - Tanggal selesai cuti
    - Jenis cuti (dropdown: Cuti Tahunan, Cuti Berobat, Izin Keluarga, dll)
    - Alasan/pengajuan (textarea)
    - Upload dokumen pendukung (opsional)
    - Sisa cuti tersedia (read-only)

### 1.3 Akun (`/v1/employee/akun`)
- ✅ **Form Edit Profil**
  - Lokasi: Tombol "Ubah Data"
  - Field yang diperlukan:
    - Nama
    - Nomor Karyawan (read-only)
    - Posisi (read-only)
    - Alamat
    - Tempat Lahir
    - Tanggal Lahir
    - Pendidikan Terakhir
    - Foto profil (upload)
    - Email (opsional untuk edit)
    - Nomor telepon (opsional)

---

## 2. HR (Human Resource)

### 2.1 Data Karyawan (`/v1/hr/karyawan/data-karyawan`)
- ✅ **Form Tambah Karyawan**
  - Lokasi: Tombol "Tambah Karyawan"
  - Field yang diperlukan:
    - Nama lengkap
    - Nomor karyawan (auto-generate)
    - Email
    - Password
    - Posisi/Divisi (dropdown)
    - Shift (dropdown)
    - Status (Aktif/Nonaktif)
    - Alamat
    - Tempat lahir
    - Tanggal lahir
    - Pendidikan terakhir
    - Nomor telepon
    - Foto profil (upload)
    - Tanggal bergabung

- ✅ **Form Edit Karyawan**
  - Lokasi: Tombol Edit di tabel
  - Field: Sama dengan form tambah (beberapa field mungkin read-only)

- ✅ **Form Import Data Karyawan**
  - Lokasi: Tombol "Import Data"
  - Field yang diperlukan:
    - Upload file (Excel/CSV)
    - Preview data yang akan di-import
    - Mapping kolom
    - Opsi: Update existing atau skip

### 2.2 Jadwal Kerja (`/v1/hr/jadwal`)
- ✅ **Form Buat Jadwal Shift Baru**
  - Lokasi: Tombol "Buat Jadwal Baru"
  - Field yang diperlukan:
    - Nama shift
    - Jam kerja mulai
    - Jam kerja selesai
    - Jam istirahat mulai
    - Jam istirahat selesai
    <!-- - Hari kerja (checkbox: Senin-Minggu) -->
    - Status (Aktif/Nonaktif)
    <!-- - Keterangan (opsional) -->

- ✅ **Form Edit Jadwal Shift**
  - Lokasi: Tombol Edit di tabel
  - Field: Sama dengan form tambah

### 2.3 Libur & Cuti

#### 2.3.1 Daftar Libur (`/v1/hr/libur-cuti/daftar-libur`)
- ✅ **Form Buat Libur**
  - Lokasi: Tombol "Buat Libur"
  - Field yang diperlukan:
    - Nama libur
    - Tanggal mulai
    - Tanggal selesai (jika lebih dari 1 hari)
    - Jenis libur (dropdown: Nasional, Perusahaan, Cuti Bersama, bisa tambah jenis baru alias custom)
    - Status (Aktif/Nonaktif)
    <!-- - Keterangan (opsional) -->

- ✅ **Form Edit Libur**
  - Lokasi: Tombol Edit di tabel
  - Field: Sama dengan form tambah

#### 2.3.2 Daftar Cuti (`/v1/hr/libur-cuti/daftar-cuti`)
- ✅ **Form Buat Cuti**
  - Lokasi: Tombol "Buat Cuti"
  - Field yang diperlukan:
    - Nama jenis cuti
    - Jumlah hari cuti
    - Status (Aktif/Nonaktif)
    - Keterangan (opsional)
    - Berlaku untuk (All/Divisi tertentu)

- ✅ **Form Edit Cuti**
  - Lokasi: Tombol Edit di tabel
  - Field: Sama dengan form tambah

#### 2.3.3 Pengajuan Cuti (`/v1/hr/libur-cuti/pengajuan-cuti`)
- ✅ **Form Approval/Tolak Pengajuan Cuti**
  - Lokasi: Tombol Setujui/Tolak di tabel
  - Field yang diperlukan:
    - Status (Setujui/Tolak)
    - Alasan persetujuan/penolakan (textarea)
    - Tanggal persetujuan (auto)
    - Disetujui oleh (auto - nama HR)

<!-- ### 2.4 Dashboard HR - Absen Luar Kota (`/v1/hr`)
- ✅ **Form Approval Absen Luar Kota**
  - Lokasi: Tombol Setujui/Tolak di card "Absen luar kota"
  - Field yang diperlukan:
    - Status (Setujui/Tolak)
    - Alasan persetujuan/penolakan (textarea)
    - Tanggal persetujuan (auto) -->

### 2.5 Akun HR (`/v1/hr/akun`)
- ✅ **Form Edit Profil HR**
  - Lokasi: Tombol "Ubah Data"
  - Field yang diperlukan:
    - Nama
    - Nomor Karyawan (read-only)
    - Posisi (read-only)
    - Alamat
    - Tempat Lahir
    - Tanggal Lahir
    - Pendidikan Terakhir
    - Foto profil (upload)

---

## 3. OWNER (Pemilik Usaha)

<!-- ### 3.1 Usaha (`/v1/owner/usaha`)
- ✅ **Form Tambah Usaha**
  - Lokasi: Tombol "Tambah Usaha"
  - Field yang diperlukan:
    - Nama usaha
    - Logo usaha (upload)
    - Pemilik usaha (dropdown atau input baru)
    - Alamat usaha
    - Nomor telepon
    - Email
    - Kontrak mulai
    - Kontrak selesai
    - Masa aktif (bulan)
    - Nilai kontrak
    - Paket langganan (dropdown)
    - Status (Berlangsung/Hampir selesai/Selesai) -->

<!-- - ✅ **Form Edit Usaha**
  - Lokasi: Tombol Edit di tabel
  - Field: Sama dengan form tambah (beberapa mungkin read-only) -->

### 3.2 Human Resource (`/v1/owner/human-resource`)
- ✅ **Form Tambah/Edit HR** (jika ada fitur ini)
  - Field yang diperlukan:
    <!-- - Nama
    - Email
    - Password
    - Posisi
    - Status (Aktif/Nonaktif) -->

    - Nama lengkap
    - Nomor karyawan (auto-generate)
    - Email
    - Password
    - Posisi/Divisi (otomatis hr)
    <!-- - Shift (dropdown) -->
    - Status (Aktif/Nonaktif)
    - Alamat
    - Tempat lahir
    - Tanggal lahir
    - Pendidikan terakhir
    - Nomor telepon
    - Foto profil (upload)
    - Tanggal bergabung

### 3.3 Akun Owner (`/v1/owner/akun`)
- ✅ **Form Edit Profil Owner**
  - Lokasi: Tombol "Ubah Data"
  - Field yang diperlukan:
    - Nama
    - Nomor Karyawan (read-only)
    - Posisi (read-only)
    - Alamat
    - Tempat Lahir
    - Tanggal Lahir
    - Pendidikan Terakhir
    - Foto profil (upload)

---

## 4. PROVIDER (Penyedia Layanan)

### 4.1 Usaha (`/v1/provider/usaha`)
- ✅ **Form Tambah Usaha Pelanggan**
  - Lokasi: Tombol "Tambah Usaha"
  - Field yang diperlukan:
    - Nama usaha
    - Logo usaha (upload)
    - Pemilik usaha (dropdown atau link ke form tambah pemilik)
    - Jumlah pengguna
    - Kontrak mulai
    - Kontrak selesai
    - Jenis Langganan
    - Masa aktif (bulan)
    - Nilai kontrak
    - Status (Berlangsung/Hampir selesai/Selesai)

- ✅ **Form Edit Usaha**
  - Lokasi: Tombol Edit di tabel
  - Field: Sama dengan form tambah

### 4.2 Pemilik Usaha (`/v1/provider/pemilik-usaha`)
- ✅ **Form Tambah Pemilik Usaha**
  - Lokasi: Tombol "Tambah Pemilik Usaha"
  - Field yang diperlukan:
    - Nama lengkap
    - Email
    - Nomor telepon
    - Foto profil (upload)
    - Status (Aktif/Nonaktif)
    - Usaha yang dimiliki (multi-select atau kosong dulu)

- ✅ **Form Edit Pemilik Usaha**
  - Lokasi: Tombol Edit di tabel
  - Field: Sama dengan form tambah

### 4.3 Akun Provider (`/v1/provider/akun`)
- ✅ **Form Edit Profil Provider**
  - Lokasi: Tombol "Ubah Data"
  - Field yang diperlukan:
    - Nama
    - Password
    - Posisi (read-only)
    - Alamat
    - Foto profil (upload)

- ✅ **Form Ubah Password**
  - Lokasi: Tombol "Ubah Password"
  - Field yang diperlukan:
    - Password lama
    - Password baru
    - Konfirmasi password baru

---

## 5. UMUM (Semua Role)

### 5.1 Login (`/login`)
- ✅ **Form Login** (SUDAH ADA)
  - Field:
    - Email
    - Password

<!-- ### 5.2 Filter/Search Forms
- ✅ **Form Filter/Export Data** (opsional)
  - Field yang mungkin diperlukan:
    - Tanggal mulai
    - Tanggal akhir
    - Filter berdasarkan status
    - Filter berdasarkan divisi/shift
    - Format export (Excel, PDF, CSV) -->

---
<!-- 
## RINGKASAN PRIORITAS

### Prioritas Tinggi:
1. ✅ Form Absensi Masuk/Pulang (Employee)
2. ✅ Form Pengajuan Cuti (Employee)
3. ✅ Form Tambah/Edit Karyawan (HR)
4. ✅ Form Buat Jadwal Shift (HR)
5. ✅ Form Approval Pengajuan Cuti (HR)
6. ✅ Form Tambah/Edit Usaha (Owner/Provider)

### Prioritas Sedang:
7. ✅ Form Edit Profil (Semua Role)
8. ✅ Form Tambah/Edit Libur (HR)
9. ✅ Form Tambah/Edit Cuti (HR)
10. ✅ Form Tambah/Edit Pemilik Usaha (Provider)

### Prioritas Rendah:
11. ✅ Form Import Data Karyawan (HR)
12. ✅ Form Filter/Export (Semua Role)
13. ✅ Form Ubah Password (Provider)

--- -->

## CATATAN PENTING

1. **Validasi Form**: Semua form perlu validasi untuk:
   - Field wajib diisi
   - Format email
   - Format tanggal
   - Password strength
   - File upload size & type

2. **Upload File**: Form yang memerlukan upload:
   - Foto profil
   - Logo usaha
   - Dokumen pendukung cuti
   - Import data (Excel/CSV)

3. **Date Picker**: Form yang memerlukan date picker:
   - Tanggal cuti
   - Tanggal kontrak
   - Tanggal lahir
   - Tanggal libur

4. **Dropdown/Select**: Form yang memerlukan dropdown:
   - Jenis cuti
   - Status (Aktif/Nonaktif)
   - Shift
   - Divisi/Posisi
   - Pemilik usaha

5. **Modal/Dialog**: Sebagian besar form sebaiknya dalam modal/dialog untuk UX yang lebih baik.

