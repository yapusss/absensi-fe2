"use client";

import { useState } from "react";
import { DashboardShell } from "@/app/components/DashboardShell";
import { Pagination } from "@/app/components/Pagination";
import { TableToolbar } from "@/app/components/layout/TableToolbar";
import { Modal } from "@/app/components/Modal";

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

const leaveRows = [
  {
    mulai: "20 Desember 2025",
    selesai: "31 Desember 2025",
    jenis: "Cuti Tahunan",
    status: "Disetujui",
  },
  {
    mulai: "20 Desember 2025",
    selesai: "31 Desember 2025",
    jenis: "Cuti Tahunan",
    status: "Disetujui",
  },
  {
    mulai: "20 Desember 2025",
    selesai: "31 Desember 2025",
    jenis: "Cuti Tahunan",
    status: "Pending",
  },
];

export default function EmployeeLeavePage() {
  const [openBuatPengajuan, setOpenBuatPengajuan] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState<typeof leaveRows[0] | null>(null);
  const [formData, setFormData] = useState({
    tanggalMulai: "",
    tanggalSelesai: "",
    jenisCuti: "",
    alasan: "",
    dokumenPendukung: null as File | null,
  });

  // Mock data untuk sisa cuti (biasanya dari API)
  const sisaCuti = 15;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpenBuatPengajuan(false);
    setFormData({
      tanggalMulai: "",
      tanggalSelesai: "",
      jenisCuti: "",
      alasan: "",
      dokumenPendukung: null,
    });
  };

  return (
    <DashboardShell active="Karyawan">
      <div className="space-y-6">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Pengajuan Cuti
            </h1>
            <p className="text-xs text-slate-400">Beranda/Pengajuan Cuti</p>
          </div>
          <div className="flex items-center gap-2"></div>
        </header>

        <article className={cardBase}>
          <TableToolbar
            primaryActions={
              <button
                type="button"
                onClick={() => setOpenBuatPengajuan(true)}
                className="h-10 rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
              >
                Buat Pengajuan
              </button>
            }
            searchPlaceholder="Cari pengajuan..."
            rightActions={
              <details className="relative z-20">
                <summary
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
                  aria-label="Urutkan"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="M4 7h16" />
                    <path d="M6 12h12" />
                    <path d="M10 17h8" />
                  </svg>
                </summary>
                <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-2 text-xs shadow-lg">
                  <p className="px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Urut berdasarkan
                  </p>
                  {[
                    "Tanggal terbaru",
                    "Tanggal terlama",
                    "Jenis cuti",
                    "Status",
                  ].map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </details>
            }
          />
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                <tr>
                  {"No., Tanggal Mulai, Tanggal Selesai, Jenis Cuti, Status, Aksi"
                    .split(",")
                    .map((label) => (
                    <th
                      key={label}
                      className={`border-b border-r border-slate-200 px-3 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 ${
                        label.trim().toLowerCase().startsWith("no")
                          ? "w-10"
                          : ""
                      } last:border-r-0`.trim()}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leaveRows.map((row, index) => (
                  <tr key={`${row.mulai}-${index}`} className="odd:bg-slate-50">
                    <td className="w-10 border-b border-r border-slate-200 px-3 py-3 text-center text-slate-700 last:border-r-0">
                      {index + 1}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.mulai}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.selesai}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-slate-700 last:border-r-0">
                      {row.jenis}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.status}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center last:border-r-0">
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedLeave(row);
                            setOpenDetail(true);
                          }}
                          className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
                          aria-label={`Detail pengajuan ${index + 1}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            className="mt-4"
            page={1}
            totalPages={1}
            summaryText={`Menampilkan ${leaveRows.length} data`}
          />
        </article>

        <Modal
          open={openBuatPengajuan}
          onClose={() => setOpenBuatPengajuan(false)}
          title="Buat Pengajuan Cuti"
          size="md"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="text-sm font-semibold text-blue-900">
                Sisa Cuti Tersedia: <span className="text-blue-600">{sisaCuti} hari</span>
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Tanggal Mulai Cuti <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.tanggalMulai}
                  onChange={(e) =>
                    setFormData({ ...formData, tanggalMulai: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Tanggal Selesai Cuti <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.tanggalSelesai}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tanggalSelesai: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Jenis Cuti <span className="text-rose-500">*</span>
              </label>
              <select
                required
                value={formData.jenisCuti}
                onChange={(e) =>
                  setFormData({ ...formData, jenisCuti: e.target.value })
                }
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Pilih Jenis Cuti</option>
                <option value="Cuti Tahunan">Cuti Tahunan</option>
                <option value="Cuti Berobat">Cuti Berobat</option>
                <option value="Izin Keluarga">Izin Keluarga</option>
                <option value="Cuti Melahirkan">Cuti Melahirkan</option>
                <option value="Cuti Khusus">Cuti Khusus</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Alasan/Pengajuan <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                value={formData.alasan}
                onChange={(e) =>
                  setFormData({ ...formData, alasan: e.target.value })
                }
                rows={4}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Masukkan alasan pengajuan cuti..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Upload Dokumen Pendukung
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dokumenPendukung: e.target.files?.[0] || null,
                  })
                }
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
              <p className="text-xs text-slate-400">
                Format yang didukung: PDF, DOC, DOCX, JPG, JPEG, PNG (opsional)
              </p>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
              <button
                type="button"
                onClick={() => setOpenBuatPengajuan(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
              >
                Ajukan
              </button>
            </div>
          </form>
        </Modal>

        <Modal
          open={openDetail}
          onClose={() => {
            setOpenDetail(false);
            setSelectedLeave(null);
          }}
          title="Detail Pengajuan Cuti"
          size="md"
        >
          {selectedLeave && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Tanggal Mulai
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedLeave.mulai}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Tanggal Selesai
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedLeave.selesai}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Jenis Cuti
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedLeave.jenis}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Status
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedLeave.status}
                  </div>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Alasan/Pengajuan
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    Saya perlu cuti untuk keperluan keluarga yang penting.
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </DashboardShell>
  );
}
