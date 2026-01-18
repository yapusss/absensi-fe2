import { DashboardShell } from "@/app/components/DashboardShell";
import { LineChart } from "@/app/components/charts/LineChart";

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function EmployeePerformancePage() {
  return (
    <DashboardShell active="Karyawan">
      <div className="space-y-6">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Performa Saya
            </h1>
            <p className="text-xs text-slate-400">Beranda/Performa</p>
          </div>
          <div className="flex items-center gap-2">
            <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
              <option>1 Tahun</option>
              <option>6 Bulan</option>
              <option>3 Bulan</option>
            </select>
            <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
        </header>

        <article className={cardBase}>
          <div className="h-72">
            <LineChart
              labels={[
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
              ]}
              values={[22, 26, 18, 24, 29, 17, 20, 25, 30, 19, 28, 30]}
              stroke="#3b82f6"
              fill="rgba(59,130,246,0.08)"
              tension={0}
              showAllTicks
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-6 rounded-sm bg-blue-500" />
              Tepat waktu 70%
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-6 rounded-sm bg-rose-400" />
              Terlambat 30%
            </span>
          </div>
        </article>
      </div>
    </DashboardShell>
  );
}
