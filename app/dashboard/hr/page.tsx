"use client";
import { useMemo, useState } from "react";

import { AbsensiSummaryCard } from "@/app/components/AbsensiSummaryCard";
import { DashboardShell } from "@/app/components/DashboardShell";
import { WorkPerformanceCard } from "@/app/components/WorkPerformanceCard";

const totals = [
  {
    label: "Total karyawan",
    value: "132",
    meta: "+6 bulan ini",
    tone: "border-l-indigo-400",
    iconBg: "bg-indigo-50 text-indigo-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M7 11c2 0 3.5-1.6 3.5-3.5S9 4 7 4 3.5 5.6 3.5 7.5 5 11 7 11z" />
        <path d="M17 11c2 0 3.5-1.6 3.5-3.5S19 4 17 4s-3.5 1.6-3.5 3.5S15 11 17 11z" />
        <path d="M3 20c0-3 2.5-5.5 5.5-5.5S14 17 14 20" />
        <path d="M10 20c0-2.4 1.9-4.3 4.3-4.3H18" />
      </svg>
    ),
  },
  {
    label: "Masuk hari ini",
    value: "110",
    meta: "83% hadir",
    tone: "border-l-emerald-400",
    iconBg: "bg-emerald-50 text-emerald-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M12 8v5l3 3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    label: "Terlambat",
    value: "12",
    meta: "Perlu follow-up",
    tone: "border-l-blue-400",
    iconBg: "bg-blue-50 text-blue-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    label: "Tidak hadir",
    value: "10",
    meta: "Cek alasan",
    tone: "border-l-rose-400",
    iconBg: "bg-rose-50 text-rose-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M6 18L18 6M6 6l12 12" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    label: "Pengajuan cuti",
    value: "6",
    meta: "Menunggu",
    tone: "border-l-blue-400",
    iconBg: "bg-blue-50 text-blue-600",
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
  {
    label: "Outstation",
    value: "4",
    meta: "Butuh approval",
    tone: "border-l-emerald-400",
    iconBg: "bg-emerald-50 text-emerald-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M12 8v5l3 3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

const attendanceBreakdown = {
  labels: ["Hadir", "Terlambat", "Tidak hadir"],
  values: [83, 9, 8],
  colors: ["#22c55e", "#f97316", "#facc15"],
};

const performanceByRange = {
  minggu: {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum"],
    values: [82, 76, 88, 91, 79],
  },
  bulan: {
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
    values: [78, 81, 85, 80, 84, 86, 83, 82, 79, 88, 90, 87],
  },
  tahun: {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    values: [920, 980, 1040, 1100, 1175],
  },
};

const checkTimes = [
  {
    nama: "Raka Putra",
    masuk: "08:02",
    pulang: "17:06",
    status: "Tepat waktu",
  },
  {
    nama: "Sinta Wardani",
    masuk: "08:19",
    pulang: "17:05",
    status: "Terlambat",
  },
  {
    nama: "Ilham Ardi",
    masuk: "08:01",
    pulang: "--",
    status: "Sedang bekerja",
  },
];

const attendanceRange = "Harian";

const shiftList = [
  { nama: "Shift Pagi", jam: "08:00 - 17:00", jumlah: "64 karyawan" },
  { nama: "Shift Siang", jam: "10:00 - 19:00", jumlah: "48 karyawan" },
  { nama: "Shift Malam", jam: "21:00 - 06:00", jumlah: "20 karyawan" },
];

const outstationApprovals = [
  { nama: "Nisa Lestari", tanggal: "14 Jan", status: "Menunggu" },
  { nama: "Rendi Haris", tanggal: "15 Jan", status: "Menunggu" },
  { nama: "Salsa Putri", tanggal: "16 Jan", status: "Menunggu" },
  { nama: "Doni Pratama", tanggal: "17 Jan", status: "Menunggu" },
  { nama: "Intan Sari", tanggal: "18 Jan", status: "Menunggu" },
];

const leaveApprovals = [
  { nama: "Naya Kinanti", jenis: "Cuti tahunan", tanggal: "15-17 Jan", status: "Menunggu" },
  { nama: "Bimo Setia", jenis: "Izin keluarga", tanggal: "18 Jan", status: "Disetujui" },
  { nama: "Sinta Wardani", jenis: "Cuti berobat", tanggal: "19 Jan", status: "Menunggu" },
  { nama: "Raka Putra", jenis: "Cuti tahunan", tanggal: "20-22 Jan", status: "Ditolak" },
];

// const highlights = [
//   {
//     label: "Pengajuan cuti",
//     value: "6",
//     note: "Menunggu",
//     tone: "bg-blue-50 text-blue-600",
//   },
//   {
//     label: "Outstation",
//     value: "4",
//     note: "Butuh approval",
//     tone: "bg-emerald-50 text-emerald-600",
//   },
// ];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";
const cardSoft =
  "min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:shadow-md";

const leaveStatusTone: Record<string, string> = {
  Menunggu: "bg-amber-50 text-amber-600",
  Disetujui: "bg-emerald-50 text-emerald-600",
  Ditolak: "bg-rose-50 text-rose-600",
};

export default function HrDashboard() {
  const rangeBadgeClass =
    "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700";
  const [sortKey, setSortKey] = useState("masuk-asc");
  const [absensiSortKey, setAbsensiSortKey] = useState("nama-asc");
  const [performanceRange, setPerformanceRange] = useState("minggu");
  const [leaveSortKey, setLeaveSortKey] = useState("tanggal-desc");

  const listAbsensi = useMemo(
    () => [
      { nama: "Ayu Pratiwi", status: "Hadir", waktu: "08:02 - 17:04" },
      { nama: "Bimo Setia", status: "Terlambat", waktu: "08:28 - 17:12" },
      { nama: "Damar Wijaya", status: "Cuti", waktu: "Cuti 1 hari" },
      { nama: "Naya Kinanti", status: "Hadir", waktu: "08:05 - 17:02" },
      { nama: "Raka Putra", status: "Hadir", waktu: "08:10 - 17:10" },
      { nama: "Sinta Wardani", status: "Terlambat", waktu: "08:22 - 17:08" },
    ],
    []
  );

  const sortedCheckTimes = useMemo(() => {
    const parseTime = (value: string) => {
      if (!value || value === "--") return Number.POSITIVE_INFINITY;
      const [hours, minutes] = value.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const withFlags = checkTimes.map((row) => ({
      ...row,
      masukValue: parseTime(row.masuk),
      pulangValue: parseTime(row.pulang),
      tepatWaktu: row.status.toLowerCase().includes("tepat"),
    }));

    const sorted = [...withFlags];
    sorted.sort((a, b) => {
      switch (sortKey) {
        case "masuk-asc":
          return a.masukValue - b.masukValue;
        case "masuk-desc":
          return b.masukValue - a.masukValue;
        case "pulang-asc":
          return a.pulangValue - b.pulangValue;
        case "pulang-desc":
          return b.pulangValue - a.pulangValue;
        case "status":
          return a.status.localeCompare(b.status);
        case "tepat-waktu":
          return Number(b.tepatWaktu) - Number(a.tepatWaktu);
        default:
          return 0;
      }
    });
    return sorted;
  }, [sortKey]);

  const performanceSeries = useMemo(() => {
    return performanceByRange[
      performanceRange as keyof typeof performanceByRange
    ];
  }, [performanceRange]);

  const sortedAbsensi = useMemo(() => {
    const sorted = [...listAbsensi];
    sorted.sort((a, b) => {
      switch (absensiSortKey) {
        case "nama-desc":
          return b.nama.localeCompare(a.nama);
        case "status":
          return a.status.localeCompare(b.status);
        case "nama-asc":
        default:
          return a.nama.localeCompare(b.nama);
      }
    });
    return sorted;
  }, [absensiSortKey, listAbsensi]);

  const sortedLeaveApprovals = useMemo(() => {
    const sorted = [...leaveApprovals];
    sorted.sort((a, b) => {
      switch (leaveSortKey) {
        case "nama-asc":
          return a.nama.localeCompare(b.nama);
        case "nama-desc":
          return b.nama.localeCompare(a.nama);
        case "status":
          return a.status.localeCompare(b.status);
        case "tanggal-asc":
          return a.tanggal.localeCompare(b.tanggal);
        case "tanggal-desc":
        default:
          return b.tanggal.localeCompare(a.tanggal);
      }
    });
    return sorted;
  }, [leaveSortKey]);

  return (
    <DashboardShell active="HR">
      <div className="space-y-8">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Human Resource
          </span>
          <h1 className="text-2xl font-semibold text-slate-900">
            Operasional HR harian yang tertata
          </h1>
          <p className="max-w-2xl text-sm text-slate-500">
            Kelola karyawan, shift, absensi, dan approval dalam satu dashboard
            yang mudah dibaca.
          </p>
        </header>

        <section id="ringkasan" className="grid gap-4 lg:grid-cols-2">
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {totals.map((item) => (
              <article
                key={item.label}
                className={`${cardBase} border-l-4 ${item.tone}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      {item.value}
                    </p>
                  </div>
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full ${item.iconBg}`}
                  >
                    {item.icon}
                  </span>
                </div>
                <p className="mt-3 text-xs text-emerald-600">{item.meta}</p>
              </article>
            ))}
          </div>

          <AbsensiSummaryCard
            title="Absensi hari ini"
            badge="Today"
            labels={attendanceBreakdown.labels}
            values={attendanceBreakdown.values}
            colors={attendanceBreakdown.colors}
            className={cardBase}
          />
        </section>
{/* 
        <section id="sorotan" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> */}
          {/* {highlights.map((item) => (
            <article key={item.label} className={cardSoft}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <span className={`rounded-full px-3 py-1 text-xs ${item.tone}`}>
                  {item.note}
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold text-slate-900">
                {item.value}
              </p>
              <div className="mt-3 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-[70%] rounded-full bg-sky-400" />
              </div>
            </article>
          ))} */}
        {/* </section> */}

        <section id="list-absensi" className="grid gap-4 lg:grid-cols-2">
{/* <article className={cardSoft}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                List absensi
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400">Filter periode</span>
                <select
                  value={absensiSortKey}
                  onChange={(event) => setAbsensiSortKey(event.target.value)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                >
                  <option value="nama-asc">Nama A-Z</option>
                  <option value="nama-desc">Nama Z-A</option>
                  <option value="status">Status</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                Harian
              </button>
              <button className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-600">
                Bulanan
              </button>
              <button className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                Tahunan
              </button>
              <div className="w-full sm:w-auto sm:ml-auto">
                <select className="w-full rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                  <option>Pilih bulan</option>
                  <option>Januari</option>
                  <option>Februari</option>
                  <option>Maret</option>
                  <option>April</option>
                  <option>Mei</option>
                  <option>Juni</option>
                  <option>Juli</option>
                  <option>Agustus</option>
                  <option>September</option>
                  <option>Oktober</option>
                  <option>November</option>
                  <option>Desember</option>
                </select>
              </div>
            </div>
            <div className="mt-4 max-h-44 space-y-3 overflow-auto pr-2">
              {sortedAbsensi.map((row) => (
                <div
                  key={row.nama}
                  className="flex flex-col gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {row.nama}
                    </p>
                    <p className="text-xs text-slate-500">{row.waktu}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-600">
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </article> */}

          
          <WorkPerformanceCard
            label="Performa kinerja"
            badge={
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPerformanceRange("minggu")}
                  className={
                    performanceRange === "minggu"
                      ? "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                      : "rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500"
                  }
                >
                  minggu
                </button>
                <button
                  type="button"
                  onClick={() => setPerformanceRange("bulan")}
                  className={
                    performanceRange === "bulan"
                      ? "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                      : "rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500"
                  }
                >
                  bulan
                </button>
                <button
                  type="button"
                  onClick={() => setPerformanceRange("tahun")}
                  className={
                    performanceRange === "tahun"
                      ? "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                      : "rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500"
                  }
                >
                  tahun
                </button>
              </div>
            }
            labels={performanceSeries.labels}
            values={performanceSeries.values}
            className={cardBase}
          />

          <article className={cardBase}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Jam masuk dan pulang
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <span className={rangeBadgeClass}>{attendanceRange}</span>
                <select
                  value={sortKey}
                  onChange={(event) => setSortKey(event.target.value)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                >
                  <option value="masuk-asc">Masuk tercepat</option>
                  <option value="masuk-desc">Masuk terlambat</option>
                  <option value="pulang-asc">Pulang tercepat</option>
                  <option value="pulang-desc">Pulang terlambat</option>
                  <option value="tepat-waktu">Tepat waktu dulu</option>
                  <option value="status">Status A-Z</option>
                </select>
              </div>
            </div>
            <div className="mt-4 max-h-44 overflow-auto pr-2">
              <table className="w-full min-w-[520px] table-fixed border-separate border-spacing-0 text-sm">
                <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                  <tr>
                    {"Karyawan Masuk Pulang Status".split(" ").map((label) => (
                      <th
                        key={label}
                        className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0"
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedCheckTimes.map((row) => (
                    <tr key={row.nama}>
                      <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-700 last:border-r-0">
                        {row.nama}
                      </td>
                      <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-500 last:border-r-0">
                        {row.masuk}
                      </td>
                      <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-500 last:border-r-0">
                        {row.pulang}
                      </td>
                      <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-500 last:border-r-0">
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Cuti dan persetujuan
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400">Perlu tindakan</span>
                <select
                  value={leaveSortKey}
                  onChange={(event) => setLeaveSortKey(event.target.value)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                >
                  <option value="tanggal-desc">Tanggal terbaru</option>
                  <option value="tanggal-asc">Tanggal terlama</option>
                  <option value="nama-asc">Nama A-Z</option>
                  <option value="nama-desc">Nama Z-A</option>
                  <option value="status">Status</option>
                </select>
              </div>
            </div>
            <div className="mt-4 max-h-44 overflow-auto pr-2">
              <table className="w-full min-w-[520px] table-fixed border-separate border-spacing-0 text-sm">
                <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                  <tr>
                    {"Karyawan Jenis Tanggal Status".split(" ").map((label) => (
                      <th
                        key={label}
                        className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0"
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedLeaveApprovals.map((row) => (
                    <tr key={`${row.nama}-${row.tanggal}`}>
                      <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-700 last:border-r-0">
                        {row.nama}
                      </td>
                      <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-500 last:border-r-0">
                        {row.jenis}
                      </td>
                      <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-500 last:border-r-0">
                        {row.tanggal}
                      </td>
                      <td className="border-b border-r border-slate-200 px-2 py-3 last:border-r-0">
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                            leaveStatusTone[row.status] ?? "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Outstation
              </h2>
              <span className="text-xs text-slate-400">Approval</span>
            </div>
            <div className="mt-4 max-h-44 space-y-3 overflow-auto pr-2">
              {outstationApprovals.map((item) => (
                <div
                  key={item.nama}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path d="M12 8v5l3 3" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.nama}
                      </p>
                      <p className="text-xs text-slate-500">{item.tanggal}</p>
                    </div>
                  </div>
                  <details className="relative">
                    <summary className="list-none cursor-pointer rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:text-slate-700 [&::-webkit-details-marker]:hidden">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="12" cy="19" r="1.5" />
                      </svg>
                    </summary>
                    <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg border border-slate-200 bg-white p-1 text-xs shadow-lg">
                      <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100">
                        Detail
                      </button>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </article>
        </section>



        {/* <section id="karyawan" className="grid gap-4 lg:grid-cols-2">
          <article className={cardSoft}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Daftar karyawan
                </h2>
                <p className="text-xs text-slate-400">
                  Kelola data karyawan aktif
                </p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Tambah karyawan
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {[
                {
                  nama: "Ayu Pratiwi",
                  role: "HR Generalist",
                  departemen: "People Ops",
                  status: "Aktif",
                  statusTone: "bg-emerald-50 text-emerald-600",
                },
                {
                  nama: "Bimo Setia",
                  role: "Recruitment Lead",
                  departemen: "Talent Acquisition",
                  status: "Aktif",
                  statusTone: "bg-emerald-50 text-emerald-600",
                },
                {
                  nama: "Damar Wijaya",
                  role: "Payroll Specialist",
                  departemen: "People Ops",
                  status: "Kontrak",
                  statusTone: "bg-amber-50 text-amber-600",
                },
              ].map((item) => (
                <div
                  key={item.nama}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      {item.nama}
                    </p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                    <p className="text-xs text-slate-400">{item.departemen}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-medium ${item.statusTone}`}
                    >
                      {item.status}
                    </span>
                    <details className="relative">
                      <summary className="list-none cursor-pointer rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:text-slate-700 [&::-webkit-details-marker]:hidden">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="5" r="1.5" />
                          <circle cx="12" cy="12" r="1.5" />
                          <circle cx="12" cy="19" r="1.5" />
                        </svg>
                      </summary>
                      <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg border border-slate-200 bg-white p-1 text-xs shadow-lg">
                        <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100">
                          Detail
                        </button>
                        <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100">
                          Edit
                        </button>
                        <button className="w-full rounded-md px-3 py-2 text-left text-rose-600 hover:bg-rose-50">
                          Hapus
                        </button>
                      </div>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article id="cuti" className={cardSoft}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Jenis cuti
                </h2>
                <p className="text-xs text-slate-400">
                  Atur katalog cuti perusahaan
                </p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Tambah cuti
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {[
                {
                  nama: "Cuti tahunan",
                  jatah: "12 hari/tahun",
                  status: "Aktif",
                  statusTone: "bg-emerald-50 text-emerald-600",
                },
                {
                  nama: "Cuti berobat",
                  jatah: "6 hari/tahun",
                  status: "Aktif",
                  statusTone: "bg-emerald-50 text-emerald-600",
                },
                {
                  nama: "Cuti melahirkan",
                  jatah: "90 hari",
                  status: "Draft",
                  statusTone: "bg-amber-50 text-amber-600",
                },
              ].map((item) => (
                <div
                  key={item.nama}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.nama}
                    </p>
                    <p className="text-xs text-slate-500">{item.jatah}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-medium ${item.statusTone}`}
                    >
                      {item.status}
                    </span>
                    <details className="relative">
                      <summary className="list-none cursor-pointer rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:text-slate-700 [&::-webkit-details-marker]:hidden">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="5" r="1.5" />
                          <circle cx="12" cy="12" r="1.5" />
                          <circle cx="12" cy="19" r="1.5" />
                        </svg>
                      </summary>
                      <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg border border-slate-200 bg-white p-1 text-xs shadow-lg">
                        <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100">
                          Detail
                        </button>
                        <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100">
                          Edit
                        </button>
                        <button className="w-full rounded-md px-3 py-2 text-left text-rose-600 hover:bg-rose-50">
                          Hapus
                        </button>
                      </div>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section> */}

        {/* <section id="shift" className="grid gap-4 lg:grid-cols-2">
          <article id="outstation" className={cardBase}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Shift kerja
                </h2>
                <p className="text-xs text-slate-400">Daftar shift</p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Tambah shift
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {shiftList.map((shift) => (
                <div
                  key={shift.nama}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-sky-50 text-sky-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path d="M12 8v5l3 3" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {shift.nama}
                      </p>
                      <p className="text-xs text-slate-500">
                        {shift.jam} - {shift.jumlah}
                      </p>
                    </div>
                  </div>
                  <details className="relative">
                    <summary className="list-none cursor-pointer rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:text-slate-700 [&::-webkit-details-marker]:hidden">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="12" cy="19" r="1.5" />
                      </svg>
                    </summary>
                    <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg border border-slate-200 bg-white p-1 text-xs shadow-lg">
                      <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100">
                        Detail
                      </button>
                      <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100">
                        Edit
                      </button>
                      <button className="w-full rounded-md px-3 py-2 text-left text-rose-600 hover:bg-rose-50">
                        Hapus
                      </button>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </article>

          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Outstation
              </h2>
              <span className="text-xs text-slate-400">Approval</span>
            </div>
            <div className="mt-4 max-h-44 space-y-3 overflow-auto pr-2">
              {outstationApprovals.map((item) => (
                <div
                  key={item.nama}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path d="M12 8v5l3 3" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.nama}
                      </p>
                      <p className="text-xs text-slate-500">{item.tanggal}</p>
                    </div>
                  </div>
                  <details className="relative">
                    <summary className="list-none cursor-pointer rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:text-slate-700 [&::-webkit-details-marker]:hidden">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="12" cy="19" r="1.5" />
                      </svg>
                    </summary>
                    <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg border border-slate-200 bg-white p-1 text-xs shadow-lg">
                      <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100">
                        Detail
                      </button>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </article>
        </section> */}
      </div>
    </DashboardShell>
  );
}
