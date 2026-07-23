"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, ChevronDown, Menu } from "lucide-react";

import { TechnitestLogo } from "@/components/brand/technitest-logo";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const { setMobileOpen } = useSidebarStore();

  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-[72px] items-center justify-between gap-3 border-b border-[#eef1f6] bg-white px-4 sm:px-6",
        className
      )}
    >
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          aria-label="Open sidebar"
          className="rounded-lg p-2 text-[#4b5563] transition hover:bg-[#f3f4f6] lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="size-5" />
        </button>
        <TechnitestLogo />
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-[#4b5563] transition hover:bg-[#f3f4f6]"
        >
          <Bell className="size-[18px]" />
          <span className="hidden sm:inline">Notifications</span>
        </button>

        <Link
          href="/profile"
          className="inline-flex items-center gap-2.5 rounded-lg px-1.5 py-1 transition hover:bg-[#f3f4f6]"
        >
          <Image
            src="https://i.pravatar.cc/80?img=12"
            alt="Ammad Aslam"
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
          <span className="hidden text-sm font-semibold text-[#111827] md:inline">
            Ammad Aslam
          </span>
          <ChevronDown className="hidden size-4 text-[#6b7280] md:block" />
        </Link>
      </div>
    </header>
  );
}
