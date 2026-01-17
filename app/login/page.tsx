"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const demoAccounts = [
  {
    role: "Provider",
    roleKey: "provider",
    email: "provider@demo.com",
    password: "provider123",
    redirect: "/dashboard/provider",
  },
  {
    role: "Owner",
    roleKey: "owner",
    email: "owner@demo.com",
    password: "owner123",
    redirect: "/dashboard/owner",
  },
  {
    role: "HR",
    roleKey: "hr",
    email: "hr@demo.com",
    password: "hr123",
    redirect: "/dashboard/hr",
  },
  {
    role: "Employee",
    roleKey: "employee",
    email: "employee@demo.com",
    password: "employee123",
    redirect: "/dashboard/employee",
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("provider@demo.com");
  const [password, setPassword] = useState("provider123");
  const [error, setError] = useState("");

  const redirectMap = useMemo(() => {
    const map = new Map<string, { redirect: string; roleKey: string }>();
    demoAccounts.forEach((account) => {
      map.set(account.email.toLowerCase(), {
        redirect: account.redirect,
        roleKey: account.roleKey,
      });
    });
    return map;
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const target = redirectMap.get(normalizedEmail);

    if (!target) {
      setError("Email belum terdaftar pada demo akun.");
      return;
    }

    if (!password.trim()) {
      setError("Password wajib diisi.");
      return;
    }

    setError("");
    localStorage.setItem("absensiRole", target.roleKey);
    router.push(target.redirect);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 px-4 py-14">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[1.1fr_1.2fr]">
          <section className="flex flex-col justify-between gap-8 bg-slate-50 px-8 py-10 sm:px-12 lg:border-r lg:border-slate-200">
            <div className="space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                Sertifikasi Online
              </span>
              <h1 className="font-[var(--font-display)] text-3xl font-semibold text-slate-900 sm:text-4xl">
                Masuk ke Dashboard
              </h1>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                Kelola event bootcamp, peserta, pembayaran, dan sertifikat
                dengan tampilan yang tenang dan jelas.
              </p>
            </div>
            <div className="space-y-2 text-sm text-slate-500">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Certify Demo
              </p>
              <p>Console admin &amp; peserta</p>
            </div>
          </section>

          <section className="px-8 py-10 sm:px-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900">Login</h2>
              <p className="text-sm text-slate-500">
                Masuk sebagai Admin atau Pengguna untuk demo.
              </p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="admin@demo.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="••••••••"
                />
              </div>

              {error ? (
                <p className="rounded-lg bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-600">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Login
              </button>
            </form>

            <div className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
              <p className="font-semibold uppercase tracking-[0.3em] text-slate-400">
                Demo akun
              </p>
              <ul className="mt-3 space-y-1">
                {demoAccounts.map((account) => (
                  <li key={account.email}>
                    {account.role}: {account.email} / {account.password}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
