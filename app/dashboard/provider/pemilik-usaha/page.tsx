"use client";

import { DashboardShell } from "@/app/components/DashboardShell";

const ownerRows = [
  {
    no: 1,
    nama: "Haoris Nur",
    email: "haoris@gmail.com",
    telepon: "085692347596",
    status: "Aktif",
  },
  {
    no: 2,
    nama: "Drupadi Ginaris",
    email: "dru@gmail.com",
    telepon: "085692347596",
    status: "Aktif",
  },
  {
    no: 3,
    nama: "Timotius Victory",
    email: "timotius@gmail.com",
    telepon: "085692347596",
    status: "Aktif",
  },
];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function ProviderPemilikUsahaPage() {
  return (
    <DashboardShell active="Penyedia">
      <div className="space-y-6">
        <header className="flex flex-col gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Pemilik Usaha
            </h1>
            <p className="text-xs text-slate-400">Beranda/Pemilik Usaha</p>
          </div>
        </header>

        <article className={cardBase}>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                <tr>
                  {"No. Nama Email Telepon Status Aksi"
                    .split(" ")
                    .map((label) => (
                      <th
                        key={label}
                        className="border-b border-r border-slate-200 px-3 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0"
                      >
                        {label}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {ownerRows.map((row) => (
                  <tr key={row.no} className="odd:bg-slate-50">
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-700 last:border-r-0">
                      {row.no}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-slate-700 last:border-r-0">
                      {row.nama}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.email}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      {row.telepon}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center text-slate-600 last:border-r-0">
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                        {row.status}
                      </span>
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-center last:border-r-0">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          className="rounded-md border border-slate-200 p-1 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                          aria-label={`Edit ${row.nama}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
                            <path d="M14.06 4.94l3.75 3.75" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="rounded-md border border-rose-200 p-1 text-rose-500 transition hover:border-rose-300 hover:text-rose-600"
                          aria-label={`Hapus ${row.nama}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="M6 6l1 14h10l1-14" />
                          </svg>
                        </button>
                      </div>
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
