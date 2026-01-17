import { DashboardShell } from "@/app/components/DashboardShell";
import { LineChart } from "@/app/components/charts/LineChart";

const financeIncome = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  values: [1200, 2600, 3300, 4700, 7600, 8200, 5600, 6000, 6900, 7400, 8800, 10000],
};

const financeBusinesses = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  values: [1500, 3000, 3600, 4700, 7200, 8200, 5600, 6000, 6900, 7400, 8800, 10000],
};

const financeHistory = [
  { no: 1, usaha: "Ayam Aharis", tanggal: "01/01/2026", jumlah: "Rp3.000.000" },
  { no: 2, usaha: "Laundry Dru", tanggal: "01/01/2026", jumlah: "Rp3.000.000" },
  { no: 3, usaha: "Kursus Ngoding", tanggal: "01/01/2026", jumlah: "Rp3.000.000" },
];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function ProviderKeuanganPage() {
  return (
    <DashboardShell active="Penyedia">
      <div className="space-y-8">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Keuangan
          </span>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Ringkasan keuangan
              </h1>
              <p className="text-xs text-slate-400">Beranda/keuangan</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600">
              Cetak Laporan
            </button>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className={cardBase}>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900">
                Pemasukan
              </h2>
              <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                2025
              </button>
            </div>
            <div className="mt-4 h-44 sm:h-52">
              <LineChart
                labels={financeIncome.labels}
                values={financeIncome.values}
                stroke="#22c55e"
                fill="rgba(34,197,94,0.18)"
              />
            </div>
          </article>

          <article className={cardBase}>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900">
                Usaha Terdaftar
              </h2>
              <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                2025
              </button>
            </div>
            <div className="mt-4 h-44 sm:h-52">
              <LineChart
                labels={financeBusinesses.labels}
                values={financeBusinesses.values}
                stroke="#f59e0b"
                fill="rgba(245,158,11,0.18)"
              />
            </div>
          </article>
        </section>

        <section className={cardBase}>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">Riwayat</h2>
            <span className="text-xs text-slate-400">
              3 pembayaran terakhir
            </span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    No.
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Nama Usaha
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Tanggal
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Jumlah Pembayaran
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {financeHistory.map((row) => (
                  <tr key={row.no} className="border-b border-slate-200">
                    <td className="px-2 py-3 text-slate-600">{row.no}</td>
                    <td className="px-2 py-3 text-slate-700">{row.usaha}</td>
                    <td className="px-2 py-3 text-slate-500">{row.tanggal}</td>
                    <td className="px-2 py-3 text-slate-700">{row.jumlah}</td>
                    <td className="px-2 py-3">
                      <button className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-4 w-4"
                        >
                          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
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
