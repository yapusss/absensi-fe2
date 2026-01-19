import { DashboardShell } from "@/app/components/DashboardShell";
import { OwnerSectionLayout } from "@/app/components/layout/OwnerSectionLayout";
import { TableToolbar } from "@/app/components/layout/TableToolbar";
import { Pagination } from "@/app/components/Pagination";

const leaveRequestRows = [
  {
    no: 1,
    nama: "Haoris Nur",
    fotoUrl: "/dempe.jpg",
    posisi: "Developer",
    tanggalPengajuan: "25-12-2025",
    tanggalMulai: "26-12-2025",
    tanggalSelesai: "27-12-2025",
    jumlahHari: 2,
    jenisCuti: "Cuti Tahunan",
    statusPengajuan: "Disetujui",
    sisaCuti: 12,
  },
  {
    no: 2,
    nama: "Drupadi Ginaris",
    fotoUrl: "/hamriz.jpg",
    posisi: "Developer",
    tanggalPengajuan: "25-12-2025",
    tanggalMulai: "26-12-2025",
    tanggalSelesai: "27-12-2025",
    jumlahHari: 2,
    jenisCuti: "Cuti Berobat",
    statusPengajuan: "Belum Disetujui",
    sisaCuti: 8,
  },
  {
    no: 3,
    nama: "Timotius Victory",
    fotoUrl: "/jempi.jpg",
    posisi: "Developer",
    tanggalPengajuan: "25-12-2025",
    tanggalMulai: "26-12-2025",
    tanggalSelesai: "27-12-2025",
    jumlahHari: 2,
    jenisCuti: "Cuti Tahunan",
    statusPengajuan: "Disetujui",
    sisaCuti: 5,
  },
];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function HrPengajuanCutiPage() {
  return (
    <DashboardShell active="HR">
      <OwnerSectionLayout
        title="Persetujuan Cuti"
        breadcrumb="Beranda/Pengajuan Cuti"
      >
        <section className={cardBase}>
          <TableToolbar
            searchPlaceholder="Cari Pengajuan Cuti..."
            rightActions={
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-100"
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
              </button>
            }
          />
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                <tr>
                  {"No., Nama Karyawan, Sisa Cuti, Tanggal Pengajuan, Tanggal Mulai, Tanggal Selesai, Jumlah Hari, Jenis Cuti, Status, Aksi"
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
                {leaveRequestRows.map((row) => (
                  <tr key={row.no} className="odd:bg-slate-50">
                    <td className="w-10 border-b border-r border-slate-200 px-3 py-3 text-center text-slate-700 last:border-r-0">
                      {row.no}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-slate-700 last:border-r-0">
                      <div className="flex items-center gap-2">
                        <img
                          src={row.fotoUrl || "/icons/dot-blue.svg"}
                          alt={`Foto ${row.nama}`}
                          className="h-6 w-6 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span>{row.nama}</span>
                      </div>
                      <div className="gap-2 ml-8">{row.posisi}</div>
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.sisaCuti}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.tanggalPengajuan}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.tanggalMulai}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.tanggalSelesai}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.jumlahHari}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.jenisCuti}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      <span className="text-sm text-slate-600">
                        {row.statusPengajuan}
                      </span>
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center last:border-r-0">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          className="grid h-9 w-9 place-items-center rounded-full border border-emerald-200 text-emerald-600 transition hover:bg-emerald-50"
                          aria-label={`Setujui ${row.nama}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="grid h-9 w-9 place-items-center rounded-full border border-rose-200 text-rose-600 transition hover:bg-rose-50"
                          aria-label={`Tolak ${row.nama}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M6 6l12 12" />
                            <path d="M18 6l-12 12" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="grid h-9 w-9 place-items-center rounded-full border border-blue-200 text-blue-600 transition hover:bg-blue-50"
                          aria-label={`Lihat ${row.nama}`}
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
            page={1}
            totalPages={1}
            summaryText={`Menampilkan ${leaveRequestRows.length} data`}
            className="mt-4"
          />
        </section>
      </OwnerSectionLayout>
    </DashboardShell>
  );
}
