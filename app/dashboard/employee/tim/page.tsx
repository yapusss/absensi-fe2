import { DashboardShell } from "@/app/components/DashboardShell";

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

const teamRows = [
  {
    nama: "Haaris Nur Salim",
    posisi: "Developer",
    jenis: "Cuti Tahunan",
    status: "Cuti",
  },
  {
    nama: "Drupadi Ginaris",
    posisi: "Developer",
    jenis: "Cuti Tahunan",
    status: "Aktif",
  },
  {
    nama: "Timotius Victory",
    posisi: "Developer",
    jenis: "Cuti Tahunan",
    status: "Aktif",
  },
];

export default function EmployeeTeamPage() {
  return (
    <DashboardShell active="Karyawan">
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-slate-900">Tim</h1>
          <p className="text-xs text-slate-400">Beranda/Tim</p>
        </header>

        <article className={cardBase}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] table-fixed border-separate border-spacing-0 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  {[
                    "No.",
                    "Nama Karyawan",
                    "Posisi Pekerjaan",
                    "Jenis Cuti",
                    "Status",
                    "Aksi",
                  ].map((label) => (
                    <th
                      key={label}
                      className={`border-b border-r border-slate-200 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ${
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
                {teamRows.map((row, index) => (
                  <tr key={row.nama}>
                    <td className="w-10 border-b border-r border-slate-200 px-3 py-2 text-slate-700 last:border-r-0">
                      {index + 1}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-700 last:border-r-0">
                      {row.nama}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      {row.posisi}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      {row.jenis}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      {row.status}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-2 text-slate-600 last:border-r-0">
                      Detail
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
