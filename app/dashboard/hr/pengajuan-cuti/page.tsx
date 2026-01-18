import { DashboardShell } from "@/app/components/DashboardShell";
import { OwnerSectionLayout } from "@/app/components/layout/OwnerSectionLayout";

const leaveRequestRows = [
  {
    no: 1,
    nama: "Haoris Nur",
    tanggalPengajuan: "25-12-2025",
    tanggalMulai: "26-12-2025",
    tanggalSelesai: "27-12-2025",
    jumlahHari: 2,
  },
  {
    no: 2,
    nama: "Drupadi Ginaris",
    tanggalPengajuan: "25-12-2025",
    tanggalMulai: "26-12-2025",
    tanggalSelesai: "27-12-2025",
    jumlahHari: 2,
  },
  {
    no: 3,
    nama: "Timotius Victory",
    tanggalPengajuan: "25-12-2025",
    tanggalMulai: "26-12-2025",
    tanggalSelesai: "27-12-2025",
    jumlahHari: 2,
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
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                <tr>
                  {"No., Nama Karyawan, Tanggal Pengajuan, Tanggal Mulai, Tanggal Selesai, Jumlah Hari, Aksi"
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
                      {row.nama}
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
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center last:border-r-0">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          className="rounded-md border border-slate-200 p-1 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
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
                        <button
                          type="button"
                          className="rounded-md border border-slate-200 p-1 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                          aria-label={`Edit ${row.nama}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
                            <path d="M14.06 4.94l3.75 3.75" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </OwnerSectionLayout>
    </DashboardShell>
  );
}
