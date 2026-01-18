import { DashboardShell } from "@/app/components/DashboardShell";
import { BarChart } from "@/app/components/charts/BarChart";
import { Pagination } from "@/app/components/Pagination";

const attendanceLabels = ["Haoris", "Drupadi", "Timotius"];
const attendanceSeries = [
  { label: "Tepat Waktu", values: [22, 18, 26], color: "#60a5fa" },
  { label: "Terlambat", values: [8, 12, 5], color: "#fb7185" },
];

const performanceRows = [
  {
    no: 1,
    nama: "Haoris Nur",
    fotoUrl: "/dempe.jpg",
    totalJam: 68,
    totalTerlambat: 7,
    totalAbsen: 7,
  },
  {
    no: 2,
    nama: "Drupadi Ginaris",
    fotoUrl: "/hamriz.jpg",
    totalJam: 63,
    totalTerlambat: 13,
    totalAbsen: 2,
  },
  {
    no: 3,
    nama: "Timotius Victory",
    fotoUrl: "/jempi.jpg",
    totalJam: 70,
    totalTerlambat: 5,
    totalAbsen: 5,
  },
];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function OwnerPerformaPage() {
  return (
    <DashboardShell active="Owner" ownerSubActive="Performa">
      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-900">
            Performa Karyawan
          </h1>
          <p className="text-xs text-slate-400">Beranda/Performa</p>
        </header>

        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Cetak Laporan
          </button>
        </div>

        <article className={cardBase}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Kehadiran Karyawan
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <select className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                  <option>Desember</option>
                  <option>November</option>
                  <option>Oktober</option>
                </select>
                <select className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>
            </div>
            <div className="h-64">
              <BarChart
                labels={attendanceLabels}
                values={attendanceSeries[0].values}
                series={attendanceSeries}
                showAllTicks
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-blue-400" />
                Tepat Waktu
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-rose-400" />
                Terlambat
              </span>
            </div>
          </div>
        </article>

        <article className={cardBase}>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                <tr>
                  {"No., Nama Karyawan, Total Jam Kerja, Total Terlambat, Total Absen, Aksi"
                    .split(", ")
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
                {performanceRows.map((row) => (
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
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.totalJam}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.totalTerlambat}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.totalAbsen}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center last:border-r-0">
                      <button
                        type="button"
                        className="rounded-md border border-slate-200 p-1 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                        aria-label={`Detail ${row.nama}`}
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            page={1}
            totalPages={1}
            summaryText={`Menampilkan ${performanceRows.length} data`}
            className="mt-4"
          />
        </article>
      </div>
    </DashboardShell>
  );
}
