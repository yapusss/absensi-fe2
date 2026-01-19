import { DashboardShell } from "@/app/components/DashboardShell";

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function HrAkunPage() {
  return (
    <DashboardShell active="HR">
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-slate-900">Akun</h1>
          <p className="text-xs text-slate-400">Beranda/Akun</p>
        </header>

        <article className={`${cardBase} w-full md:w-1/2`}>
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <div className="space-y-8">
              <div className="flex justify-center md:justify-start">
                <div className="grid h-50 w-52 place-items-center rounded-2xl bg-slate-200 text-slate-500 md:ml-4">
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
            </div>

            <div className="space-y-4 max-w-[520px]">
              <div className="grid gap-3 sm:grid-cols-1">
                {[
                  { label: "Nama", value: "Haaris Nur Salim" },
                  { label: "Nomor Karyawan", value: "EMP-2025-0142" },
                  { label: "Posisi", value: "HR Manager" },
                  { label: "Alamat", value: "Jl. Merpati No. 12, Bandung" },
                  { label: "Tempat Lahir", value: "Bandung" },
                  { label: "Tanggal Lahir", value: "12 Mar 1996" },
                  {
                    label: "Pendidikan Terakhir",
                    value: "S1 Teknik Informatika",
                  },
                ].map((field) => (
                  <div
                    key={field.label}
                    className="grid grid-cols-[140px_1fr] items-center gap-4"
                  >
                    <p className="text-sm font-medium text-slate-600">
                      {field.label}
                    </p>
                    <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900">
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="mr-4 mt-4 rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600">
              Ubah Password
            </button>
            <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
              Ubah Data
            </button>
          </div>
        </article>
      </div>
    </DashboardShell>
  );
}
