import { DashboardShell } from "@/app/components/DashboardShell";
import { DonutChart } from "@/app/components/charts/DonutChart";

const businessRows = [
  {
    no: 1,
    usaha: "Ayam Aharis",
    owner: "haris n",
    kontrakMulai: "01/01/2026",
    kontrakSelesai: "01/01/2027",
    nilai: 3000000,
    status: "Berlangsung",
  },
  {
    no: 2,
    usaha: "Laundry Dru",
    owner: "drupadi g",
    kontrakMulai: "01/01/2026",
    kontrakSelesai: "01/02/2026",
    nilai: 3000000,
    status: "Hampir selesai",
  },
  {
    no: 3,
    usaha: "Kursus Ngoding",
    owner: "timotius v",
    kontrakMulai: "01/01/2026",
    kontrakSelesai: "01/01/2027",
    nilai: 3000000,
    status: "Selesai",
  },
];

const contractLabels = ["Berlangsung", "Hampir selesai", "Selesai"];
const contractSummary = {
  labels: contractLabels,
  values: contractLabels.map(
    (label) => businessRows.filter((row) => row.status === label).length
  ),
  colors: ["#22c55e", "#facc15", "#fb7185"],
};

const revenueSummary = {
  labels: businessRows.map((row) => row.usaha),
  values: businessRows.map((row) =>
    Number((row.nilai / 1000000).toFixed(1))
  ),
  colors: ["#22c55e", "#facc15", "#fb7185"],
};

const formatRupiah = (value: number) =>
  `Rp${value.toLocaleString("id-ID")}`;

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function ProviderUsahaPage() {
  return (
    <DashboardShell active="Penyedia">
      <div className="space-y-8">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Daftar Usaha
          </span>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Daftar usaha pelanggan
              </h1>
              <p className="text-xs text-slate-400">Beranda/Daftar Usaha</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700">
              Tambah Usaha
            </button>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className={cardBase}>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900">
                Jumlah Kontrak
              </h2>
            </div>
            <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="h-36 w-36 sm:h-40 sm:w-40">
                <DonutChart
                  labels={contractSummary.labels}
                  values={contractSummary.values}
                  colors={contractSummary.colors}
                />
              </div>
              <div className="space-y-2 text-xs text-slate-500">
                {contractSummary.labels.map((label, index) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className="h-4 w-4 rounded-sm"
                      style={{ backgroundColor: contractSummary.colors[index] }}
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className={cardBase}>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900">
                Pendapatan
              </h2>
            </div>
            <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="h-36 w-36 sm:h-40 sm:w-40">
                <DonutChart
                  labels={revenueSummary.labels}
                  values={revenueSummary.values}
                  colors={revenueSummary.colors}
                />
              </div>
              <div className="space-y-2 text-xs text-slate-500">
                {revenueSummary.labels.map((label, index) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className="h-4 w-4 rounded-sm"
                      style={{ backgroundColor: revenueSummary.colors[index] }}
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className={cardBase}>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">Daftar</h2>
            <span className="text-xs text-slate-400">
              {businessRows.length} usaha terdaftar
            </span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    No.
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Nama Usaha
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Pemilik Usaha
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Kontrak Langganan
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Nilai Kontrak
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {businessRows.map((row) => (
                  <tr key={row.no} className="border-b border-slate-200">
                    <td className="px-2 py-3 text-slate-600">{row.no}</td>
                    <td className="px-2 py-3 text-slate-700">{row.usaha}</td>
                    <td className="px-2 py-3 text-slate-500">{row.owner}</td>
                    <td className="px-2 py-3 text-slate-500">
                      {row.kontrakMulai} - {row.kontrakSelesai}
                    </td>
                    <td className="px-2 py-3 text-slate-700">
                      {formatRupiah(row.nilai)}
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex items-center gap-2">
                        <button className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5l4 4L7 21H3v-4z" />
                          </svg>
                        </button>
                        <button className="grid h-8 w-8 place-items-center rounded-full border border-rose-200 text-rose-600 hover:bg-rose-50">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="M7 6l1 14h8l1-14" />
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
      </div>
    </DashboardShell>
  );
}
