import { DashboardShell } from "@/app/components/DashboardShell";

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
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-center">
            {/* <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
              Sisa Cuti: 20/25
            </span> */}
            <button className="rounded-lg bg-blue-500 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
              Buat Pengajuan
            </button>
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 text-slate-400"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="text"
                placeholder="Cari pengajuan..."
                className="w-full text-sm text-slate-600 outline-none"
              />
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600"
                aria-label="Cari"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2">
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
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] table-fixed border-separate border-spacing-0 text-sm">
              <thead className="bg-gradient-to-r from-sky-50 to-blue-100">
                <tr>
                  {[
                    "No.",
                    "Tanggal Mulai",
                    "Tanggal Selesai",
                    "Jenis Cuti",
                    "Status",
                    "Aksi",
                  ].map((label) => (
                    <th
                      key={label}
                      className="border-b border-r border-slate-200 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 last:border-r-0"
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leaveRows.map((row, index) => (
                  <tr key={`${row.mulai}-${index}`}>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-700 last:border-r-0">
                      {index + 1}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      {row.mulai}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      {row.selesai}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      {row.jenis}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      {row.status}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600">
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
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </DashboardShell>
  );
}
