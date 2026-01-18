"use client";

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function SearchBar({
  placeholder = "Cari data",
  className = "",
  inputClassName = "",
  value,
  onChange,
}: SearchBarProps) {
  const wrapperClass = `relative w-full sm:max-w-sm ${className}`.trim();
  const fieldClass =
    "w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 shadow-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100";

  return (
    <div className={wrapperClass}>
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      </span>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={
          onChange ? (event) => onChange(event.target.value) : undefined
        }
        className={`${fieldClass} ${inputClassName}`.trim()}
      />
    </div>
  );
}
