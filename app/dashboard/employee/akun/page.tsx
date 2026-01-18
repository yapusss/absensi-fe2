import { DashboardShell } from "@/app/components/DashboardShell";

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function EmployeeAccountPage() {
  return (
    <DashboardShell active="Karyawan">
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-slate-900">Akun</h1>
          <p className="text-xs text-slate-400">Beranda/Akun</p>
        </header>

        <article className={cardBase}>
          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <div className="flex items-start justify-center">
              <div className="grid h-32 w-32 place-items-center rounded-full bg-slate-200 text-slate-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-14 w-14"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Nama", width: "w-full" },
                  { label: "Nomor Karyawan", width: "w-2/3" },
                  { label: "Posisi", width: "w-3/4" },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="text-sm text-slate-500">{field.label}</p>
                    <div
                      className={`mt-2 h-8 rounded-md bg-slate-200 ${field.width}`}
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-slate-500">Alamat</p>
                <div className="mt-2 h-8 rounded-md bg-slate-200" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Tempat Lahir", width: "w-2/3" },
                  { label: "Tanggal Lahir", width: "w-3/4" },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="text-sm text-slate-500">{field.label}</p>
                    <div
                      className={`mt-2 h-8 rounded-md bg-slate-200 ${field.width}`}
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-slate-500">Pendidikan Terakhir</p>
                <div className="mt-2 h-8 rounded-md bg-slate-200" />
              </div>
              <div>
                <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
                  Ubah Data
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </DashboardShell>
  );
}
