"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { AppFooter } from "@/app/components/AppFooter";

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
      href: "/dashboard/provider/pemilik-usaha",
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
    {
      label: "Beranda",
      href: "/dashboard/owner",
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
      label: "Human Resource",
      href: "/dashboard/owner/human-resource",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="10" r="2" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M14 20c0-2.2 1.8-4 4-4" />
        </svg>
      ),
    },
    {
      label: "Performa",
      href: "/dashboard/owner/performa",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M4 19h16" />
          <path d="M7 16V9" />
          <path d="M12 16V6" />
          <path d="M17 16v-4" />
        </svg>
      ),
    },
    {
      label: "Akun",
      href: "/dashboard/owner/akun",
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
  HR: [
    {
      label: "Beranda",
      href: "/dashboard/hr",
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
      label: "Jadwal",
      href: "/dashboard/hr/jadwal",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      label: "Karyawan",
      href: "/dashboard/hr/karyawan",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M7 11c2 0 3.5-1.6 3.5-3.5S9 4 7 4 3.5 5.6 3.5 7.5 5 11 7 11z" />
          <path d="M17 11c2 0 3.5-1.6 3.5-3.5S19 4 17 4s-3.5 1.6-3.5 3.5S15 11 17 11z" />
          <path d="M3 20c0-3 2.5-5.5 5.5-5.5S14 17 14 20" />
          <path d="M10 20c0-2.4 1.9-4.3 4.3-4.3H18" />
        </svg>
      ),
    },
    {
      label: "Libur & Cuti",
      href: "/dashboard/hr/libur-cuti",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4" />
          <path d="M4 10h16" />
        </svg>
      ),
    },
    {
      label: "Pengajuan Cuti",
      href: "/dashboard/hr/pengajuan-cuti",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M7 4h10v4H7z" />
          <path d="M5 8h14v12H5z" />
          <path d="M9 14h6" />
          <path d="M9 17h4" />
        </svg>
      ),
    },
    {
      label: "Performa",
      href: "/dashboard/hr/performa",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M4 19h16" />
          <path d="M7 16V9" />
          <path d="M12 16V6" />
          <path d="M17 16v-4" />
        </svg>
      ),
    },
    {
      label: "Tim",
      href: "/dashboard/hr/tim",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M14 20c0-2.2 1.8-4 4-4" />
        </svg>
      ),
    },
    {
      label: "Akun",
      href: "/dashboard/hr/akun",
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
  Karyawan: [
    {
      label: "Dashboard",
      href: "/dashboard/employee",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M4 13h7V4H4z" />
          <path d="M13 20h7v-7h-7z" />
          <path d="M13 4h7v7h-7z" />
          <path d="M4 20h7v-5H4z" />
        </svg>
      ),
    },
    {
      label: "Pengajuan cuti",
      href: "/dashboard/employee/pengajuan-cuti",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M7 4h10v4H7z" />
          <path d="M5 8h14v12H5z" />
          <path d="M9 14h6" />
        </svg>
      ),
    },
    {
      label: "Performa",
      href: "/dashboard/employee/performa",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path d="M4 19h16" />
          <path d="M7 16V9" />
          <path d="M12 16V6" />
          <path d="M17 16v-4" />
        </svg>
      ),
    },
    {
      label: "Tim",
      href: "/dashboard/employee/tim",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M14 20c0-2.2 1.8-4 4-4" />
        </svg>
      ),
    },
    {
      label: "Akun",
      href: "/dashboard/employee/akun",
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
            {active === "Karyawan" ? "Menu Karyawan" : isOwner ? "Owner Menu" : `${active} Menu`}
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
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <div className="min-w-0 flex-1 px-4 pb-2 pt-4 sm:px-6 sm:pb-3 sm:pt-6">
            {children}
          </div>
          <AppFooter />
        </div>
      </div>
    </div>
  );
}
