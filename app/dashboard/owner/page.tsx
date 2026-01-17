"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "@/app/components/DashboardShell";
import { AbsensiSummaryCard } from "@/app/components/AbsensiSummaryCard";
import { StatusListCard } from "@/app/components/StatusListCard";
import { WorkPerformanceCard } from "@/app/components/WorkPerformanceCard";
import { OwnerSubnav } from "./OwnerSubnav";

const totals = [
  {
    label: "Total karyawan",
    value: "86",
    meta: "+3 bulan ini",
    tone: "border-l-indigo-400",
    iconBg: "bg-indigo-50 text-indigo-600",
    metaTone: "text-indigo-600",
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
    value: "72",
    meta: "84% hadir",
    tone: "border-l-emerald-400",
    iconBg: "bg-emerald-50 text-emerald-600",
    metaTone: "text-emerald-600",
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
    value: "9",
    meta: "Perlu perhatian",
    tone: "border-l-blue-400",
    iconBg: "bg-blue-50 text-blue-600",
    metaTone: "text-blue-600",
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
    value: "5",
    meta: "Follow-up HR",
    tone: "border-l-rose-400",
    iconBg: "bg-rose-50 text-rose-600",
    metaTone: "text-rose-600",
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
    label: "Avg jam kerja",
    value: "7.8 jam",
    meta: "Hari ini",
    tone: "border-l-sky-400",
    iconBg: "bg-sky-50 text-sky-600",
    metaTone: "text-sky-600",
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
    label: "Approval pending",
    value: "6",
    meta: "Butuh review",
    tone: "border-l-blue-400",
    iconBg: "bg-blue-50 text-blue-600",
    metaTone: "text-blue-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M7 12h10" />
        <path d="M12 7v10" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

const attendanceBreakdown = {
  labels: ["Hadir", "Terlambat", "Tidak hadir"],
  values: [72, 18, 10],
  colors: ["#22c55e", "#f97316", "#facc15"],
};

const attendanceRange = "Harian";

const workHourChart = {
  labels: [
    "Ayu",
    "Damar",
    "Naya",
    "Raka",
    "Sinta",
    "Ilham",
    "Bimo",
    "Sari",
    "Rio",
    "Fina",
  ],
  values: [8.1, 7.4, 7.8, 8.6, 6.9, 7.5, 8.2, 7.1, 6.8, 7.9],
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
  {
    nama: "Ayu Pratiwi",
    masuk: "08:03",
    pulang: "17:02",
    status: "Tepat waktu",
  },
  {
    nama: "Damar Wijaya",
    masuk: "08:12",
    pulang: "17:10",
    status: "Terlambat",
  },
  {
    nama: "Naya Kinanti",
    masuk: "07:58",
    pulang: "16:58",
    status: "Tepat waktu",
  },
  {
    nama: "Bimo Setia",
    masuk: "08:10",
    pulang: "--",
    status: "Sedang bekerja",
  },
  {
    nama: "Sari Andini",
    masuk: "08:05",
    pulang: "17:08",
    status: "Tepat waktu",
  },
  {
    nama: "Rio Mahesa",
    masuk: "08:15",
    pulang: "17:04",
    status: "Terlambat",
  },
  {
    nama: "Fina Lestari",
    masuk: "08:00",
    pulang: "17:00",
    status: "Tepat waktu",
  },
];

const statusList = [
  { nama: "Ayu Pratiwi", status: "Aktif" },
  { nama: "Damar Wijaya", status: "Dinas luar" },
  { nama: "Naya Kinanti", status: "Cuti" },
  { nama: "Raka Putra", status: "Aktif" },
];

const leaveRequests = [
  { nama: "Naya Kinanti", alasan: "Cuti tahunan", tanggal: "15-17 Jan" },
  { nama: "Bimo Setia", alasan: "Izin keluarga", tanggal: "18 Jan" },
];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";
const cardSoft =
  "min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:shadow-md";

export default function OwnerDashboard() {
  const rangeBadgeClass =
    "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700";
  const [sortKey, setSortKey] = useState("masuk-asc");

  const topWorkHours = useMemo(() => {
    return workHourChart.labels
      .map((label, index) => ({
        label,
        value: workHourChart.values[index] ?? 0,
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  }, []);

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

  return (
    <DashboardShell active="Owner" ownerSubActive="Dashboard">
      <div className="space-y-8">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Owner Usaha
          </span>
          <h1 className="text-2xl font-semibold text-slate-900">
            Pantau performa tim dan kesehatan absensi
          </h1>
          <p className="max-w-2xl text-sm text-slate-500">
            Ringkasan cepat untuk memastikan kehadiran hari ini, jam kerja
            karyawan, dan persetujuan cuti berjalan rapi.
          </p>
        </header>



        <section className="grid gap-4 lg:grid-cols-2">
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {totals.map((item) => (
              <article
                key={item.label}
                className={`${cardBase} border-l-4 ${item.tone}`}
              >
                <div className="flex items-center justify-between">
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
                <p className={`mt-3 text-xs ${item.metaTone ?? "text-slate-500"}`}>
                  {item.meta}
                </p>
              </article>
            ))}
          </div>

          <AbsensiSummaryCard
            eyebrow="Distribusi kehadiran"
            labels={attendanceBreakdown.labels}
            values={attendanceBreakdown.values}
            colors={attendanceBreakdown.colors}
            badge={attendanceRange}
            badgeClassName={rangeBadgeClass}
            className={cardBase}
          />
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <StatusListCard
            title="Status karyawan"
            subtitle="Hari ini"
            items={statusList}
            className={cardBase}
            toneMap={{
              Aktif: "bg-emerald-50 text-emerald-600",
              Cuti: "bg-blue-50 text-blue-600",
            }}
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
            <div className="mt-4 max-h-64 overflow-auto pr-2">
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
                      <td className="border-b border-gir border-slate-200 px-2 py-3 text-slate-700 last:border-r-0">
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
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {/* <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Kehadiran hari ini
              </h2>
              <p className="text-xs text-slate-400">
                Filter periode berlaku untuk tiga ringkasan di bawah
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Harian", "Bulanan", "Tahunan"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className={
                    label === attendanceRange
                      ? rangeBadgeClass
                      : "rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500"
                  }
                >
                  {label}
                </button>
              ))}
              <select className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
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
          </div> */}
          <div>
            <WorkPerformanceCard
              labels={topWorkHours.map((item) => item.label)}
              values={topWorkHours.map((item) => item.value)}
              badge={attendanceRange}
              badgeClassName={rangeBadgeClass}
              className={cardBase}
              chartClassName="h-44 sm:h-48"
            />
          </div>



          <article id="cuti" className={cardSoft}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Cuti dan persetujuan
              </h2>
              <span className="text-xs text-slate-400">Perlu tindakan</span>
            </div>
            <div className="mt-4 space-y-3">
              {leaveRequests.map((req) => (
                <div
                  key={req.nama}
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
                        <path d="M7 4h10v4H7zM5 8h14v12H5z" />
                        <path d="M9 14h6" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {req.nama}
                      </p>
                      <p className="text-xs text-slate-500">
                        {req.alasan} - {req.tanggal}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500">
                    Tinjau
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </DashboardShell>
  );
}
