import { BarChart } from "@/app/components/charts/BarChart";

type WorkPerformanceCardProps = {
  label?: string;
  badge?: string;
  badgeClassName?: string;
  className?: string;
  chartClassName?: string;
  chartWrapperClassName?: string;
  labels: string[];
  values: number[];
  color?: string;
};

export function WorkPerformanceCard({
  label = "Performa jam kerja",
  badge,
  badgeClassName = "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500",
  className,
  chartClassName = "h-44 sm:h-48",
  chartWrapperClassName,
  labels,
  values,
  color = "#fb7185",
}: WorkPerformanceCardProps) {
  const hasHeader = label || badge;

  return (
    <article className={className ?? ""}>
      {hasHeader ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {label ? (
            <h2 className="text-lg font-semibold text-slate-900">{label}</h2>
          ) : null}
          {badge ? <span className={badgeClassName}>{badge}</span> : null}
        </div>
      ) : null}
      <div className={`mt-4 ${chartWrapperClassName ?? ""}`}>
        <div className={chartClassName}>
          <BarChart labels={labels} values={values} color={color} />
        </div>
      </div>
    </article>
  );
}
