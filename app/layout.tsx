import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { AppFooter } from "@/app/components/AppFooter";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Absensi Pulse",
  description: "Dashboard performa HR, owner, karyawan, dan penyedia platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} min-h-screen font-[var(--font-sans)] bg-slate-100 text-slate-900 antialiased`}
      >
          <div className="flex min-h-screen flex-col">
            <div className="flex w-full flex-1 flex-col">{children}</div>
            <AppFooter hideOnDashboard />
          </div>
      </body>
    </html>
  );
}
