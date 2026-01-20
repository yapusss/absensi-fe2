"use client";

import { useState } from "react";
import { DashboardShell } from "@/app/components/DashboardShell";
import { OwnerSectionLayout } from "@/app/components/layout/OwnerSectionLayout";
import { TableToolbar } from "@/app/components/layout/TableToolbar";
import { Pagination } from "@/app/components/Pagination";
import { Modal } from "@/app/components/Modal";
import { ActionButton } from "@/app/components/ActionButton";
import { ConfirmationModal } from "@/app/components/ConfirmationModal";

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
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState<typeof ownerRows[0] | null>(null);
  const [selectedEdit, setSelectedEdit] = useState<typeof ownerRows[0] | null>(null);
  const [editFormData, setEditFormData] = useState({
    namaLengkap: "",
    email: "",
    nomorTelepon: "",
    status: "Aktif",
    fotoProfil: null as File | null,
    usahaDimiliki: [] as string[],
  });

  const [openAdd, setOpenAdd] = useState(false);
  const [addFormData, setAddFormData] = useState({
    namaLengkap: "",
    email: "",
    nomorTelepon: "",
    status: "Aktif",
    fotoProfil: null as File | null,
    usahaDimiliki: [] as string[],
  });

  const [openConfirmAdd, setOpenConfirmAdd] = useState(false);
  const [openConfirmEdit, setOpenConfirmEdit] = useState(false);

  const handleAddSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOpenConfirmAdd(true);
  };

  const handleConfirmAdd = () => {
    console.log("Tambah pemilik usaha:", addFormData);
    setOpenConfirmAdd(false);
    setOpenAdd(false);
    setAddFormData({
      namaLengkap: "",
      email: "",
      nomorTelepon: "",
      status: "Aktif",
      fotoProfil: null,
      usahaDimiliki: [],
    });
  };

  const handleEditSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOpenConfirmEdit(true);
  };

  const handleConfirmEdit = () => {
    console.log("Edit pemilik usaha:", editFormData);
    setOpenConfirmEdit(false);
    setOpenEdit(false);
    setSelectedEdit(null);
  };



  return (
    <DashboardShell active="Penyedia">
      <OwnerSectionLayout
        title="Pemilik Usaha"
        breadcrumb="Beranda/Pemilik Usaha"
      >
        
        <article className={cardBase}>
          <TableToolbar
            primaryActions={
              <button
                type="button"
                onClick={() => setOpenAdd(true)}
                className="h-10 rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
              >
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
                        <ActionButton
                          onClick={() => {
                            setSelectedOwner(row);
                            setOpenDetail(true);
                          }}
                          aria-label={`Detail ${row.nama}`}
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
                        </ActionButton>
                        <ActionButton
                          onClick={() => {
                            setSelectedEdit(row);
                            setEditFormData({
                              namaLengkap: row.nama,
                              email: row.email,
                              nomorTelepon: row.telepon,
                              status: row.status,
                              fotoProfil: null,
                              usahaDimiliki: [
                                row.nama === "Haoris Nur"
                                  ? "Ayam Aharis"
                                  : row.nama === "Drupadi Ginaris"
                                    ? "Laundry Dru"
                                    : "Kursus Ngoding",
                              ],
                            });
                            setOpenEdit(true);
                          }}
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
                        </ActionButton>
                        <ActionButton
                          variant="rose"
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
                        </ActionButton>
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

        <Modal
          open={openDetail}
          onClose={() => {
            setOpenDetail(false);
            setSelectedOwner(null);
          }}
          title="Detail Pemilik Usaha"
          size="md"
        >
          {selectedOwner && (
            <div className="space-y-6">
              {/* Foto profil di tengah tanpa container */}
              <div className="flex justify-center">
                <img
                  src={selectedOwner.fotoUrl || "/icons/dot-blue.svg"}
                  alt={`Foto ${selectedOwner.nama}`}
                  className="h-32 w-32 rounded-lg object-cover"
                />
              </div>

              {/* Form di bawah profil */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Nama Lengkap
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedOwner.nama}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedOwner.email}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Nomor Telepon
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedOwner.telepon}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Status
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedOwner.status}
                  </div>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Usaha yang Dimiliki
                  </label>
                  <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {selectedOwner.nama === "Haoris Nur" ? "Ayam Aharis" : selectedOwner.nama === "Drupadi Ginaris" ? "Laundry Dru" : "Kursus Ngoding"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>

        <Modal
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
            setSelectedEdit(null);
          }}
          title="Edit Pemilik Usaha"
          size="lg"
        >
          <form
            onSubmit={handleEditSubmit}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Nama lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={editFormData.namaLengkap}
                  onChange={(event) =>
                    setEditFormData({
                      ...editFormData,
                      namaLengkap: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={editFormData.email}
                  onChange={(event) =>
                    setEditFormData({
                      ...editFormData,
                      email: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Nomor telepon <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={editFormData.nomorTelepon}
                  onChange={(event) =>
                    setEditFormData({
                      ...editFormData,
                      nomorTelepon: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Status <span className="text-rose-500">*</span>
                </label>
                <select
                  required
                  value={editFormData.status}
                  onChange={(event) =>
                    setEditFormData({
                      ...editFormData,
                      status: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-slate-700">
                  Usaha yang Dimiliki
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ayam Aharis",
                    "Laundry Dru",
                    "Kursus Ngoding",
                    "Bakery Maju",
                  ].map((usaha) => (
                    <label
                      key={usaha}
                      className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                    >
                      <input
                        type="checkbox"
                        checked={editFormData.usahaDimiliki.includes(usaha)}
                        onChange={(event) => {
                          const next = event.target.checked
                            ? [...editFormData.usahaDimiliki, usaha]
                            : editFormData.usahaDimiliki.filter(
                                (item) => item !== usaha
                              );
                          setEditFormData({
                            ...editFormData,
                            usahaDimiliki: next,
                          });
                        }}
                        className="h-4 w-4 text-blue-500"
                      />
                      {usaha}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-slate-700">
                  Foto profil
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    setEditFormData({
                      ...editFormData,
                      fotoProfil: event.target.files?.[0] ?? null,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-slate-700 hover:file:bg-slate-200"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
              <button
                type="button"
                onClick={() => setOpenEdit(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </Modal>
        <Modal
          open={openAdd}
          onClose={() => setOpenAdd(false)}
          title="Tambah Pemilik Usaha"
          size="lg"
        >
          <form onSubmit={handleAddSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Nama lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={addFormData.namaLengkap}
                  onChange={(event) =>
                    setAddFormData({
                      ...addFormData,
                      namaLengkap: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={addFormData.email}
                  onChange={(event) =>
                    setAddFormData({
                      ...addFormData,
                      email: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Nomor telepon <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={addFormData.nomorTelepon}
                  onChange={(event) =>
                    setAddFormData({
                      ...addFormData,
                      nomorTelepon: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Status <span className="text-rose-500">*</span>
                </label>
                <select
                  required
                  value={addFormData.status}
                  onChange={(event) =>
                    setAddFormData({
                      ...addFormData,
                      status: event.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-slate-700">
                  Usaha yang Dimiliki
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ayam Aharis",
                    "Laundry Dru",
                    "Kursus Ngoding",
                    "Bakery Maju",
                  ].map((usaha) => (
                    <label
                      key={usaha}
                      className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                    >
                      <input
                        type="checkbox"
                        checked={addFormData.usahaDimiliki.includes(usaha)}
                        onChange={(event) => {
                          const next = event.target.checked
                            ? [...addFormData.usahaDimiliki, usaha]
                            : addFormData.usahaDimiliki.filter(
                                (item) => item !== usaha
                              );
                          setAddFormData({
                            ...addFormData,
                            usahaDimiliki: next,
                          });
                        }}
                        className="h-4 w-4 text-blue-500"
                      />
                      {usaha}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-slate-700">
                  Foto profil
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    setAddFormData({
                      ...addFormData,
                      fotoProfil: event.target.files?.[0] ?? null,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-slate-700 hover:file:bg-slate-200"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
              <button
                type="button"
                onClick={() => setOpenAdd(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </form>
        </Modal>

        <ConfirmationModal
          open={openConfirmAdd}
          onClose={() => setOpenConfirmAdd(false)}
          onConfirm={handleConfirmAdd}
          title="Konfirmasi Tambah Pemilik Usaha"
          message="Apakah Anda yakin ingin menambahkan pemilik usaha baru ini?"
          confirmLabel="Ya, Tambah"
        />

        <ConfirmationModal
          open={openConfirmEdit}
          onClose={() => setOpenConfirmEdit(false)}
          onConfirm={handleConfirmEdit}
          title="Konfirmasi Edit Pemilik Usaha"
          message="Apakah Anda yakin ingin menyimpan perubahan data pemilik usaha ini?"
          confirmLabel="Ya, Simpan"
          variant="blue"
        />
      </OwnerSectionLayout>
    </DashboardShell>
  );
}
