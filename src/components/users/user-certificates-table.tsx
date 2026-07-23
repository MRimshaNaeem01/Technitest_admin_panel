"use client";

import { useState } from "react";
import { Check, ChevronDown, Download } from "lucide-react";

import type { CertificateRecord } from "@/data/users";
import { cn } from "@/lib/utils";

const filterOptions = [
  "This Week",
  "Last 14 Days",
  "Last 20 Days",
  "Last 30 Days",
];

type UserCertificatesTableProps = {
  certificates: CertificateRecord[];
};

export function UserCertificatesTable({
  certificates,
}: UserCertificatesTableProps) {
  const [filter, setFilter] = useState("Last 30 Days");
  const [open, setOpen] = useState(false);

  return (
    <section className="rounded-2xl border border-[#eef1f6] bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-[#111827]">Certificates Earned</h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-3.5 text-sm font-medium text-[#374151] shadow-sm"
          >
            {filter}
            <ChevronDown className="size-4 text-[#9ca3af]" />
          </button>

          {open ? (
            <div className="absolute top-full right-0 z-20 mt-2 w-48 rounded-xl border border-[#e5e7eb] bg-white p-2 shadow-lg">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setFilter(option);
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-[#374151] transition hover:bg-[#f3f4f6]"
                >
                  <span
                    className={cn(
                      "flex size-4 items-center justify-center rounded-full border",
                      filter === option
                        ? "border-[#3b82f6] bg-[#3b82f6] text-white"
                        : "border-[#d1d5db]"
                    )}
                  >
                    {filter === option ? <Check className="size-2.5" /> : null}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e8ecf2]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-[#eef5ff] text-[13px] font-semibold text-[#374151]">
                <th className="px-4 py-3">Certificate</th>
                <th className="px-4 py-3">Issued For</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Issued On</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-[#eef1f6] text-sm text-[#374151]"
                >
                  <td className="px-4 py-3.5 font-medium">{item.certificate}</td>
                  <td className="px-4 py-3.5">{item.issuedFor}</td>
                  <td className="px-4 py-3.5 font-semibold">{item.score}</td>
                  <td className="px-4 py-3.5">{item.issuedOn}</td>
                  <td className="px-4 py-3.5">
                    <button
                      type="button"
                      aria-label={`Download ${item.certificate}`}
                      className="rounded-lg p-2 text-[#9ca3af] transition hover:bg-[#f3f4f6] hover:text-[#3b82f6]"
                    >
                      <Download className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
