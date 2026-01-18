import { DashboardShell } from "@/app/components/DashboardShell";
import { OwnerSectionLayout } from "@/app/components/layout/OwnerSectionLayout";

export default function EmployeePengajuanCutiPage() {
  return (
    <DashboardShell active="Karyawan">
      <OwnerSectionLayout
        title="Pengajuan Cuti"
        breadcrumb="Beranda/Pengajuan Cuti"
        searchPlaceholder="Cari pengajuan cuti"
        actionClassName="flex justify-start"
      >
        <section className="rounded-xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
          Konten Pengajuan Cuti akan ditambahkan di sini.
        </section>
      </OwnerSectionLayout>
    </DashboardShell>
  );
}
