"use client";

import { useState } from "react";
import { DashboardShell } from "@/app/components/DashboardShell";
import { Modal } from "@/app/components/Modal";

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";

export default function ProviderAkunPage() {
  const [openEdit, setOpenEdit] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [editForm, setEditForm] = useState({
    nama: "Haaris Nur Salim",
    posisi: "Provider Admin",
    alamat: "Jl. Merpati No. 12, Bandung",
    fotoProfil: null as File | null,
  });
  const [passwordForm, setPasswordForm] = useState({
    passwordLama: "",
    passwordBaru: "",
    konfirmasiPassword: "",
  });

  return (
    <DashboardShell active="Penyedia">
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
                  { label: "Nama", value: editForm.nama },
                  { label: "Posisi", value: editForm.posisi },
                  { label: "Alamat", value: editForm.alamat },
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
            <button
              type="button"
              onClick={() => setOpenPassword(true)}
              className="mr-4 mt-4 rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600"
            >
              Ubah Password
            </button>
            <button
              type="button"
              onClick={() => setOpenEdit(true)}
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
            >
              Ubah Data
            </button>
          </div>
        </article>
      </div>

      <Modal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Ubah Data Profil Provider"
        size="md"
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Edit profil provider:", editForm);
            setOpenEdit(false);
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Nama <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={editForm.nama}
              onChange={(event) =>
                setEditForm({ ...editForm, nama: event.target.value })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Posisi
            </label>
            <input
              type="text"
              value={editForm.posisi}
              readOnly
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Alamat <span className="text-rose-500">*</span>
            </label>
              <textarea
                required
                value={editForm.alamat}
                onChange={(event) =>
                  setEditForm({ ...editForm, alamat: event.target.value })
                }
                rows={3}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Foto Profil
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                setEditForm({
                  ...editForm,
                  fotoProfil: event.target.files?.[0] ?? null,
                })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-slate-700 hover:file:bg-slate-200"
            />
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
              Simpan
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        open={openPassword}
        onClose={() => setOpenPassword(false)}
        title="Ubah Password"
        size="sm"
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Ubah password provider:", passwordForm);
            setOpenPassword(false);
            setPasswordForm({
              passwordLama: "",
              passwordBaru: "",
              konfirmasiPassword: "",
            });
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Password Lama <span className="text-rose-500">*</span>
            </label>
            <input
              type="password"
              required
              value={passwordForm.passwordLama}
              onChange={(event) =>
                setPasswordForm({
                  ...passwordForm,
                  passwordLama: event.target.value,
                })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Password Baru <span className="text-rose-500">*</span>
            </label>
            <input
              type="password"
              required
              value={passwordForm.passwordBaru}
              onChange={(event) =>
                setPasswordForm({
                  ...passwordForm,
                  passwordBaru: event.target.value,
                })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Konfirmasi Password <span className="text-rose-500">*</span>
            </label>
            <input
              type="password"
              required
              value={passwordForm.konfirmasiPassword}
              onChange={(event) =>
                setPasswordForm({
                  ...passwordForm,
                  konfirmasiPassword: event.target.value,
                })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={() => setOpenPassword(false)}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Batal
            </button>
            <button
              type="submit"
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </DashboardShell>
  );
}
