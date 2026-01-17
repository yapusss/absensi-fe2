"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

type MenuItem = {
  label: string;
  href: string;
  icon?: ReactNode;
};
const roleMenus: Record<string, MenuItem[]> = {
  Dashboard: [
    { label: "Overview", href: "/#overview" },
    { label: "Statistik", href: "/#statistik" },
    { label: "Peran", href: "/#roles" },
  ],
  Penyedia: [
    {
      label: "Beranda",
      href: "/dashboard/provider",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M3 12l9-9 9 9" />
          <path d="M9 21V9h6v12" />
        </svg>
      ),
    },
    {
      label: "Keuangan",
      href: "/dashboard/provider/keuangan",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M7 9h10" />
          <path d="M7 13h6" />
        </svg>
      ),
    },
    {
      label: "Daftar Usaha",
      href: "/dashboard/provider/usaha",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M4 10h16" />
          <path d="M6 10V6h12v4" />
          <path d="M6 10v8h12v-8" />
          <path d="M10 18v-5h4v5" />
        </svg>
      ),
    },
    {
      label: "Owner Usaha",
      href: "/dashboard/provider#owner-usaha",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      ),
    },
    {
      label: "Akun",
      href: "/dashboard/provider#status",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      ),
    },
  ],
  Owner: [
    { label: "Ringkasan", href: "/dashboard/owner#ringkasan" },
    { label: "Sorotan", href: "/dashboard/owner#sorotan" },
    { label: "Kehadiran", href: "/dashboard/owner#kehadiran" },
    { label: "Status tim", href: "/dashboard/owner#status" },
    { label: "Cuti", href: "/dashboard/owner#cuti" },
  ],
  HR: [
    { label: "Ringkasan", href: "/dashboard/hr#ringkasan" },
    { label: "Sorotan", href: "/dashboard/hr#sorotan" },
    { label: "Absensi", href: "/dashboard/hr#absensi" },
    { label: "List absensi", href: "/dashboard/hr#list-absensi" },
    { label: "Karyawan", href: "/dashboard/hr#karyawan" },
    { label: "Cuti", href: "/dashboard/hr#cuti" },
    { label: "Shift", href: "/dashboard/hr#shift" },
    { label: "Outstation", href: "/dashboard/hr#outstation" },
  ],
  Karyawan: [
    { label: "Ringkasan", href: "/dashboard/employee#ringkasan" },
    { label: "Sorotan", href: "/dashboard/employee#sorotan" },
    { label: "Absensi", href: "/dashboard/employee#absensi" },
    { label: "Performa", href: "/dashboard/employee#performa" },
    { label: "Status tim", href: "/dashboard/employee#status" },
    { label: "Daftar karyawan", href: "/dashboard/employee#daftar-karyawan" },
  ],
};

export function DashboardShell({
  active,
  ownerSubActive,
  children,
}: {
  active: string;
  ownerSubActive?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const menuItems = roleMenus[active] ?? roleMenus.Dashboard;
  const [role, setRole] = useState("guest");
  const [activeHref, setActiveHref] = useState(() => {
    const matchByPath = menuItems.find((item) => {
      const [itemPath] = item.href.split("#");
      return itemPath === pathname;
    });
    return matchByPath?.href ?? menuItems[0]?.href ?? "";
  });

  useEffect(() => {
    setRole(localStorage.getItem("absensiRole") ?? "guest");
  }, []);

  useEffect(() => {
    const resolveActive = () => {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      const matchByHash = menuItems.find((item) => {
        const [itemPath, itemHash] = item.href.split("#");
        if (!itemHash || !hash) {
          return false;
        }
        return itemPath === pathname && `#${itemHash}` === hash;
      });

      if (matchByHash) {
        setActiveHref(matchByHash.href);
        return;
      }

      const matchByPath = menuItems.find((item) => {
        const [itemPath] = item.href.split("#");
        return itemPath === pathname;
      });

      setActiveHref(matchByPath?.href ?? menuItems[0]?.href ?? "");
    };

    resolveActive();
    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", resolveActive);
      return () => window.removeEventListener("hashchange", resolveActive);
    }
  }, [menuItems, pathname]);

  const isOwner = role === "owner";

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen min-w-0">
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
          <div className="flex items-center gap-3 px-6 py-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 text-sm font-semibold text-white">
              AP
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Absensi Pulse
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                HR suite
              </p>
            </div>
          </div>
          <div className="px-6 pb-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">
            {isOwner ? "Owner Menu" : `${active} Menu`}
          </div>
          <nav className="flex flex-col gap-1 px-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                  activeHref === item.href
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-current shadow-sm">
                  {item.icon ? (
                    item.icon
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-current" />
                  )}
                </span>
                <span className="flex-1">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-6 text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Insights
          </div>
          <div className="px-4 pb-4">
            <div className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold text-slate-700">
                Active accounts
              </p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>1,248 users</span>
                <span className="text-emerald-600">+12%</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-[72%] rounded-full bg-blue-400" />
              </div>
            </div>
            <div className="mt-3 min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold text-slate-700">
                Queue health
              </p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>Latency 0.8s</span>
                <span className="text-slate-500">Stable</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-[86%] rounded-full bg-sky-400" />
              </div>
            </div>
          </div>
          <div className="mt-auto border-t border-slate-200 px-6 py-5">
            <div className="min-w-0 rounded-xl bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold text-slate-700">
                Platform Status
              </p>
              <p className="text-xs text-slate-500">All systems normal</p>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <div className="min-w-0 flex-1 px-4 py-4 sm:px-6 sm:py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
