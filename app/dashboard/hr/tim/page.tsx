import { DashboardShell } from "@/app/components/DashboardShell";
import { OwnerSectionLayout } from "@/app/components/layout/OwnerSectionLayout";

export default function HrTimPage() {
  return (
    <DashboardShell active="HR">
      <OwnerSectionLayout
        title="Tim"
        breadcrumb="Beranda/Tim"
        searchPlaceholder="Cari tim"
        actionClassName="flex justify-start"
      >
        <section className="rounded-xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
          Konten Tim akan ditambahkan di sini.
        </section>
      </OwnerSectionLayout>
    </DashboardShell>
  );
}
