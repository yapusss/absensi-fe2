type AbsensiAction = {
  title: string;
  note: string;
  endpoint: string;
  tone: string;
};

type AbsensiActionsCardProps = {
  title: string;
  badge?: string;
  badgeClassName?: string;
  actions: AbsensiAction[];
  clockLabel?: string;
  clockSubLabel?: string;
  checkInTime?: string;
  checkOutTime?: string;
  totalLabel?: string;
  totalValue?: string;
  progressLabel?: string;
  progressValue?: string;
  statusText?: string;
  ctaLabel?: string;
  progress?: number;
  className?: string;
};

export function AbsensiActionsCard({
  title,
  badge,
  badgeClassName = "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500",
  actions,
  clockLabel = "08:35 AM",
  clockSubLabel = "11 Mar 2025",
  checkInTime = "--.--",
  checkOutTime = "--.--",
  totalLabel = "Total Jam",
  totalValue = "5:45:32",
  ctaLabel,
  progress = 0.72,
  className,
}: AbsensiActionsCardProps) {
  const statusAction = actions[0];
  const ctaAction = actions[1] ?? actions[0];
  const checkInLabel = statusAction?.title ?? "Absen masuk";
  const checkOutLabel = actions[1]?.title ?? "Absen pulang";
  const resolvedCtaLabel = ctaLabel ?? ctaAction?.title ?? "Absen pulang";
  const ringValue = Math.max(0, Math.min(progress, 1)) * 360;

  return (
    <article className={className ?? ""}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {badge ? <span className={badgeClassName}>{badge}</span> : null}
      </div>
      <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-white px-5 py-6">
        <div className="flex flex-col gap-6 text-left sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Attendance
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {clockLabel}, {clockSubLabel}
            </p>
            <div className="relative mt-5 h-32 w-32">
              <div
                className="h-full w-full rounded-full"
                style={{
                  background: `conic-gradient(#22c55e ${ringValue}deg, #e2e8f0 0deg)`,
                }}
              />
              <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-white">
                <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  {totalLabel}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {totalValue}
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-56">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {checkInLabel}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {checkInTime}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {checkOutLabel}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {checkOutTime}
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
        >
          {resolvedCtaLabel}
        </button>
      </div>
    </article>
  );
}
