import { DashboardShell } from "@/app/components/DashboardShell";

export default function HrAkunPage() {
  return (
    <DashboardShell active="HR">
      <div className="space-y-6">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Human Resource
          </span>
          <h1 className="text-2xl font-semibold text-slate-900">Akun</h1>
          <p className="max-w-2xl text-sm text-slate-500">
            Halaman ini masih kosong dan siap diisi.
          </p>
        </header>

        <section className="rounded-xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
          Konten Akun akan ditambahkan di sini.
        </section>
      </div>
    </DashboardShell>
  );
}
