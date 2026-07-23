"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";

type AdminShellProps = {
  children: React.ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const { collapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-[#f5f6fa]">
      <Sidebar />
      <div
        className={cn(
          "flex min-h-screen flex-col transition-[padding] duration-300",
          collapsed ? "lg:pl-[84px]" : "lg:pl-[260px]"
        )}
      >
        <Header />
        <main className="flex-1 px-4 py-5 sm:px-6 lg:px-7">{children}</main>
      </div>
    </div>
  );
}
