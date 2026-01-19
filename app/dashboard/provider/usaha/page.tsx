import { DashboardShell } from "@/app/components/DashboardShell";
import { OwnerSectionLayout } from "@/app/components/layout/OwnerSectionLayout";
import { TableToolbar } from "@/app/components/layout/TableToolbar";
import { Pagination } from "@/app/components/Pagination";

const businessRows = [
  {
    no: 1,
    usaha: "Ayam Aharis",
    logoUrl: "/dempe.jpg",
    owner: "haris n",
    kontrakMulai: "01/01/2026",
    kontrakSelesai: "01/01/2027",
    nilai: 3000000,
    sisaWaktu: "11 bulan",
    jumlahPengguna: 24,
    masaAktif: "12 bulan",
    status: "Berlangsung",
  },
  {
    no: 2,
    usaha: "Laundry Dru",
    logoUrl: "/hamriz.jpg",
    owner: "drupadi g",
    kontrakMulai: "01/01/2026",
    kontrakSelesai: "01/02/2026",
    nilai: 3000000,
    sisaWaktu: "12 hari",
    jumlahPengguna: 8,
    masaAktif: "1 bulan",
    status: "Hampir selesai",
  },
  {
    no: 3,
    usaha: "Kursus Ngoding",
    logoUrl: "/jempi.jpg",
    owner: "timotius v",
    kontrakMulai: "01/01/2026",
    kontrakSelesai: "01/01/2027",
    nilai: 3000000,
    sisaWaktu: "0",
    jumlahPengguna: 15,
    masaAktif: "12 bulan",
    status: "Selesai",
  },
];

const formatRupiah = (value: number) => ({
  prefix: "Rp",
  amount: value.toLocaleString("id-ID"),
});

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function ProviderUsahaPage() {
  return (
    <DashboardShell active="Penyedia">
      <OwnerSectionLayout
        title="Daftar usaha pelanggan"
        breadcrumb="Beranda/Daftar Usaha"
      >
        
        <section className={cardBase}>
          <TableToolbar
            primaryActions={
              <button className="h-10 rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
                Tambah Usaha
              </button>
            }
            searchPlaceholder="Cari Usaha..."
            showDivider={false}
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
                  {[
                    "Nama A-Z",
                    "Nama Z-A",
                    "Kontrak terbaru",
                    "Kontrak terlama",
                    "Status",
                  ].map((label) => (
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
          <div className="mt-4 overflow-x-auto">
            <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-blue-100">
                <tr>
                  <th className="w-10 border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    No.
                  </th>
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Nama Usaha
                  </th>
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Pemilik Usaha
                  </th>
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Jumlah Pengguna
                  </th>
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Kontrak Langganan
                  </th>
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Sisa Waktu Berlangganan
                  </th>
                  
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Masa Aktif
                  </th>
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Status
                  </th>
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Nilai Kontrak
                  </th>
                  <th className="border-b border-r border-slate-200 px-2 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 last:border-r-0">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {businessRows.map((row) => (
                  <tr key={row.no}>
                    <td className="w-10 border-b border-r border-slate-200 px-2 py-3 text-center text-slate-600 last:border-r-0">
                      {row.no}
                    </td>
                    <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-700 last:border-r-0">
                      <div className="flex items-center gap-2">
                        <img
                          src={row.logoUrl || "/icons/dot-blue.svg"}
                          alt={`Logo ${row.usaha}`}
                          className="h-6 w-6 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span>{row.usaha}</span>
                      </div>
                    </td>
                    <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-500 last:border-r-0">
                      {row.owner}
                    </td>
                    <td className="border-b border-r border-slate-200 px-2 py-3 text-center text-slate-500 last:border-r-0">
                      {row.jumlahPengguna}
                    </td>
                    <td className="w-min border-b border-r border-slate-200 px-2 py-3 text-center text-slate-500 last:border-r-0">
                      {row.kontrakMulai} - {row.kontrakSelesai}
                    </td>
                    <td className="border-b border-r border-slate-200 px-2 py-3 text-center text-slate-500 last:border-r-0">
                      {row.sisaWaktu}
                    </td>
                    
                    <td className="border-b border-r border-slate-200 px-2 py-3 text-center text-slate-500 last:border-r-0">
                      {row.masaAktif}
                    </td>
                    <td className="border-b border-r border-slate-200 px-2 py-3 text-center text-slate-700 last:border-r-0">
                      {row.status}
                    </td>
                    <td className="border-b border-r border-slate-200 px-2 py-3 text-slate-700 last:border-r-0">
                      <div className="flex items-center justify-between tabular-nums">
                        <span>{formatRupiah(row.nilai).prefix}</span>
                        <span>{formatRupiah(row.nilai).amount}</span>
                      </div>
                    </td>
                    <td className="border-b border-r border-slate-200 px-2 py-3 text-center last:border-r-0">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50"
                          aria-label={`Detail ${row.usaha}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5l4 4L7 21H3v-4z" />
                          </svg>
                        </button>
                        <button className="grid h-8 w-8 place-items-center rounded-full border border-rose-200 text-rose-600 hover:bg-rose-50">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="M7 6l1 14h8l1-14" />
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
            className="mt-4"
            page={1}
            totalPages={1}
            summaryText={`Menampilkan ${businessRows.length} data`}
          />
        </section>
      </OwnerSectionLayout>
    </DashboardShell>
  );
}
