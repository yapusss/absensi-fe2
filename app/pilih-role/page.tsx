import Link from "next/link";

const roles = [
  {
    title: "Penyedia Platform",
    description:
      "Kelola perusahaan pelanggan, pemilik usaha, dan pantau pertumbuhan revenue langganan.",
    href: "/v1/provider",
    tone: "bg-blue-50 text-blue-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Owner Usaha",
    description:
      "Pantau kehadiran, performa jam kerja, status karyawan, dan persetujuan cuti.",
    href: "/v1/owner",
    tone: "bg-emerald-50 text-emerald-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
  {
    title: "HR",
    description:
      "Atur data karyawan, shift kerja, jadwal libur, dan rekap absensi perusahaan.",
    href: "/v1/hr",
    tone: "bg-amber-50 text-amber-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M7 7h10M7 12h10M7 17h6" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
      </svg>
    ),
  },
  {
    title: "Karyawan",
    description:
      "Lihat ringkasan kehadiran, jam kerja, status tim, dan absensi harian.",
    href: "/v1/employee",
    tone: "bg-sky-50 text-sky-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M7 4h10v4H7zM5 8h14v12H5z" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
];

export default function PilihRolePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-3">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Pilih Role
          </span>
          <h1 className="text-3xl font-semibold text-slate-900">
            Masuk ke dashboard
          </h1>
          <p className="max-w-2xl text-sm text-slate-500">
            Pilih peran yang ingin kamu akses. Sidebar akan menampilkan submenu
            khusus sesuai role aktif.
          </p>
          <Link
            href="/"
            className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500"
          >
            Kembali ke ringkasan umum
          </Link>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {roles.map((role) => (
            <Link
              key={role.title}
              href={role.href}
              className="flex min-w-0 items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-full text-base font-semibold ${role.tone}`}
              >
                {role.icon}
              </span>
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-900">
                  {role.title}
                </h2>
                <p className="text-sm text-slate-500">{role.description}</p>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    Dashboard lengkap
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    Data real-time
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
