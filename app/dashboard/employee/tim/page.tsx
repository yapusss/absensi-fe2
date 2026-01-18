"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "@/app/components/DashboardShell";

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

const teamRows = [
  {
    nama: "Haaris Nur Salim",
    fotoUrl: "/dempe.jpg",
    posisi: "Developer",
    telp: "0812 3456 7890",
    email: "haaris@absensipulse.id",
    status: "Cuti",
  },
  {
    nama: "Drupadi Ginaris",
    fotoUrl: "/hamriz.jpg",
    posisi: "Developer",
    telp: "0813 2211 7788",
    email: "drupadi@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Timotius Victory",
    fotoUrl: "/jempi.jpg",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "timotius@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Haykal Ramadhan",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "haykal@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Nadruwandi",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "Nad@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Fauzan Rizky",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "fauzan@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Aldi Pratama",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "aldi@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Rizky Maulana",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "rizky@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Rizky Maulana",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "rizky@absensipulse.id",
    status: "Aktif",
  },

  {
    nama: "kurniawan setiawan",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "kurniawan@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Agus Salim",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "agus@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Budi Santoso",
    posisi: "Developer",
    telp: "0814 9988 1122",
    email: "budi@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Ayu Pratiwi",
    posisi: "HR Generalist",
    telp: "0812 8800 2200",
    email: "ayu@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Naya Kinanti",
    posisi: "UI Designer",
    telp: "0812 7711 6655",
    email: "naya@absensipulse.id",
    status: "Cuti",
  },
  {
    nama: "Bimo Setia",
    posisi: "Finance Analyst",
    telp: "0812 8899 1010",
    email: "bimo@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Raka Putra",
    posisi: "Backend Engineer",
    telp: "0813 4422 1199",
    email: "raka@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Sinta Wardani",
    posisi: "Marketing Lead",
    telp: "0813 7766 3344",
    email: "sinta@absensipulse.id",
    status: "Cuti",
  },
  {
    nama: "Damar Wijaya",
    posisi: "QA Engineer",
    telp: "0812 9900 3344",
    email: "damar@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Ilham Ardi",
    posisi: "Product Manager",
    telp: "0813 5566 7788",
    email: "ilham@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Sari Andini",
    posisi: "Frontend Engineer",
    telp: "0812 6677 2233",
    email: "sari@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Rio Mahesa",
    posisi: "Data Analyst",
    telp: "0813 3399 7766",
    email: "rio@absensipulse.id",
    status: "Cuti",
  },
  {
    nama: "Fina Lestari",
    posisi: "People Ops",
    telp: "0812 9090 1212",
    email: "fina@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Nisa Lestari",
    posisi: "Recruiter",
    telp: "0813 1112 1314",
    email: "nisa@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Rendi Haris",
    posisi: "Payroll Analyst",
    telp: "0812 1415 1617",
    email: "rendi@absensipulse.id",
    status: "Cuti",
  },
  {
    nama: "Salsa Putri",
    posisi: "Brand Strategist",
    telp: "0813 1819 2021",
    email: "salsa@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Intan Sari",
    posisi: "Legal Officer",
    telp: "0812 2122 2324",
    email: "intan@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Doni Pratama",
    posisi: "IT Support",
    telp: "0813 2526 2728",
    email: "doni@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Rania Putri",
    posisi: "Operations Lead",
    telp: "0812 2930 3132",
    email: "rania@absensipulse.id",
    status: "Cuti",
  },
  {
    nama: "Hendra Malik",
    posisi: "Security Officer",
    telp: "0813 3334 3536",
    email: "hendra@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Nanda Putra",
    posisi: "Account Executive",
    telp: "0812 3738 3940",
    email: "nanda@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Maya Sari",
    posisi: "UX Researcher",
    telp: "0813 4142 4344",
    email: "maya@absensipulse.id",
    status: "Cuti",
  },
  {
    nama: "Rizal Fikri",
    posisi: "Mobile Engineer",
    telp: "0812 4546 4748",
    email: "rizal@absensipulse.id",
    status: "Aktif",
  },
  {
    nama: "Nadya Luthfi",
    posisi: "Content Writer",
    telp: "0813 4950 5152",
    email: "nadya@absensipulse.id",
    status: "Aktif",
  },
];

export default function EmployeeTeamPage() {
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const totalPages = Math.ceil(teamRows.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, teamRows.length);
  const pagedRows = useMemo(() => {
    return teamRows.slice(startIndex, endIndex);
  }, [endIndex, startIndex]);

  return (
    <DashboardShell active="Karyawan">
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-slate-900">Tim</h1>
          <p className="text-xs text-slate-400">Beranda/Tim</p>
        </header>
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-center">
          {/* <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
              Sisa Cuti: 20/25
            </span> */}

          <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-0 py-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 text-slate-400 mx-2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="text"
              placeholder="Cari pengajuan..."
              className="w-full text-sm text-slate-600 outline-none "
            />
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-tr-md rounded-br-md bg-blue-500 text-white shadow-sm hover:bg-blue-600"
              aria-label="Cari"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <details className="relative">
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
              <div className="absolute right-0 z-10 mt-2 w-44 rounded-lg border border-slate-200 bg-white p-2 text-xs shadow-lg">
                {["Tanggal terbaru", "Tanggal terlama", "Status"].map(
                  (label) => (
                    <button
                      key={label}
                      type="button"
                      className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100"
                    >
                      {label}
                    </button>
                  ),
                )}
              </div>
            </details>
          </div>
        </div>
        <article className={cardBase}>
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pagedRows.map((row, index) => (
              <article
                key={`${row.email}-${startIndex + index}`}
                className={cardBase}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-26 w-26 place-items-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-600">
                    {row.nama
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-slate-900">
                      {row.nama}
                    </p>
                    <p className="text-sm text-slate-500">{row.posisi}</p>
                    <p>
                      <span className="text-xs text-slate-400">No. Telp</span>
                      <span className="text-xs ml-2 font-semibold text-slate-700">
                        {row.telp}
                      </span>
                    </p>
                    <p>
                      <span className="text-xs text-slate-400">Email</span>
                      <span className="text-xs ml-2 font-semibold text-slate-700">
                        {row.email}
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-3">
            <p className="text-xs text-slate-500">
              Menampilkan {startIndex + 1}-{endIndex} dari {teamRows.length}{" "}
              data
            </p>
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={page === 1}
                className="grid h-8 w-8 place-items-center rounded-full text-slate-500 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Sebelumnya"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-500 text-xs font-semibold text-white">
                {page}
              </span>
              <button
                type="button"
                onClick={() =>
                  setPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={page === totalPages}
                className="grid h-8 w-8 place-items-center rounded-full text-slate-500 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Berikutnya"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </DashboardShell>
  );
}
