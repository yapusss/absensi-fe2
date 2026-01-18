"use client";

import type { ReactNode } from "react";
import { SearchBar } from "@/app/components/layout/SearchBar";

type OwnerSectionLayoutProps = {
  title: string;
  breadcrumb: string;
  action?: ReactNode;
  actionClassName?: string;
  searchPlaceholder?: string;
  searchClassName?: string;
  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  children: ReactNode;
};

export function OwnerSectionLayout({
  title,
  breadcrumb,
  action,
  actionClassName,
  searchPlaceholder,
  searchClassName,
  showSearch = false,
  searchValue,
  onSearchChange,
  children,
}: OwnerSectionLayoutProps) {
  const shouldShowSearch = showSearch || Boolean(searchPlaceholder);
  const layoutClassName =
    actionClassName ??
    (shouldShowSearch && action
      ? "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      : "flex justify-end");

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="text-xs text-slate-400">{breadcrumb}</p>
      </header>
      {shouldShowSearch || action ? (
        <div className={layoutClassName}>
          {shouldShowSearch ? (
            <SearchBar
              placeholder={searchPlaceholder}
              className={searchClassName}
              value={searchValue}
              onChange={onSearchChange}
            />
          ) : null}
          {action}
        </div>
      ) : null}
      {children}
    </div>
  );
}
