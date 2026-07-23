"use client";

import { cn } from "@/lib/utils";

type ProfileTabsProps = {
  activeTab: "personal" | "password";
  onChange: (tab: "personal" | "password") => void;
};

export function ProfileTabs({ activeTab, onChange }: ProfileTabsProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("personal")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-semibold transition",
          activeTab === "personal"
            ? "bg-[#111827] text-white"
            : "bg-transparent text-[#6b7280] hover:text-[#111827]"
        )}
      >
        Personal Information
      </button>
      <button
        type="button"
        onClick={() => onChange("password")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-semibold transition",
          activeTab === "password"
            ? "bg-[#111827] text-white"
            : "bg-transparent text-[#6b7280] hover:text-[#111827]"
        )}
      >
        Change Password
      </button>
    </div>
  );
}
