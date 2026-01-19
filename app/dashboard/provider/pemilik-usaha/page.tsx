"use client";

import { DashboardShell } from "@/app/components/DashboardShell";
import { OwnerSectionLayout } from "@/app/components/layout/OwnerSectionLayout";
import { TableToolbar } from "@/app/components/layout/TableToolbar";
import { Pagination } from "@/app/components/Pagination";

const ownerRows = [
  {
    no: 1,
    nama: "Haoris Nur",
    fotoUrl: "/dempe.jpg",
    email: "haoris@gmail.com",
    telepon: "085692347596",
    status: "Aktif",
  },
  {
    no: 2,
    nama: "Drupadi Ginaris",
    fotoUrl: "/hamriz.jpg",
    email: "dru@gmail.com",
    telepon: "085692347596",
    status: "Aktif",
  },
  {
    no: 3,
    nama: "Timotius Victory",
    fotoUrl: "/jempi.jpg",
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
      <OwnerSectionLayout
        title="Pemilik Usaha"
        breadcrumb="Beranda/Pemilik Usaha"
      >
        
        <article className={cardBase}>
          <TableToolbar
            primaryActions={
              <button className="h-10 rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
                Tambah Pemilik Usaha
              </button>
            }
            searchPlaceholder="Cari Pemilik Usaha..."
            rightActions={
              <details className="relative z-20">
                <summary
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
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
                </summary>
                <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-2 text-xs shadow-lg">
                  <p className="px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Urut berdasarkan
                  </p>
                  {["Nama A-Z", "Nama Z-A", "Email", "Status"].map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </details>
            }
          />
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                <tr>
                  {"No. Nama Email Telepon Status Aksi"
                    .split(" ")
                    .map((label) => (
                      <th
                        key={label}
                        className={`border-b border-r border-slate-200 px-3 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 ${
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
                {ownerRows.map((row) => (
                  <tr key={row.no} className="odd:bg-slate-50">
                    <td className="w-10 border-b border-r border-slate-200 px-3 py-3 text-center text-slate-700 last:border-r-0">
                      {row.no}
                    </td>
                    <td className="border-b border-r border-slate-200 px-3 py-3 text-slate-700 last:border-r-0">
                      <div className="flex items-center gap-2">
                        <img
                          src={row.fotoUrl || "/icons/dot-blue.svg"}
                          alt={`Foto ${row.nama}`}
                          className="h-6 w-6 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span>{row.nama}</span>
                      </div>
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
          <Pagination
            page={1}
            totalPages={1}
            summaryText={`Menampilkan ${ownerRows.length} data`}
            className="mt-4"
          />
        </article>
      </OwnerSectionLayout>
    </DashboardShell>
  );
}
