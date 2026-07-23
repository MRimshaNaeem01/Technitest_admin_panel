"use client";

import { CalendarDays, ChevronDown, FileText } from "lucide-react";

type DashboardToolbarProps = {
  title?: string;
  dateRange?: string;
};

export function DashboardToolbar({
  title = "Dashboard",
  dateRange = "01/07/2025 - 31/07/2025",
}: DashboardToolbarProps) {
  return (
    <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <h1 className="text-[28px] font-bold tracking-tight text-[#111827]">
        {title}
      </h1>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          className="inline-flex h-11 items-center gap-2.5 rounded-xl border border-[#e5e7eb] bg-white px-3.5 text-sm font-medium text-[#374151] shadow-sm transition hover:bg-[#f9fafb]"
        >
          <CalendarDays className="size-4 text-[#6b7280]" />
          <span>{dateRange}</span>
          <ChevronDown className="ml-1 size-4 text-[#9ca3af]" />
        </button>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#111827] px-4 text-sm font-semibold text-white transition hover:bg-black"
        >
          <FileText className="size-4" />
          Generate Reports
        </button>
      </div>
    </div>
  );
}
