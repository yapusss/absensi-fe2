import Link from "next/link";

const subnavItems = [
  { label: "Dashboard", href: "/v1/owner" },
  { label: "Human Resource", href: "/v1/owner/human-resource" },
  { label: "Performa", href: "/v1/owner/performa" },
  { label: "Akun", href: "/v1/owner/akun" },
];

export function OwnerSubnav({ active }: { active: string }) {
  return (
    <nav className="flex flex-wrap gap-2">
      {subnavItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
            active === item.label
              ? "border-blue-200 bg-blue-50 text-blue-600"
              : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
