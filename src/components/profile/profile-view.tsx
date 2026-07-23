"use client";

import { useState } from "react";

import { ChangePasswordForm } from "@/components/profile/change-password-form";
import { PersonalInformationForm } from "@/components/profile/personal-information-form";
import { ProfileTabs } from "@/components/profile/profile-tabs";

export function ProfileView() {
  const [activeTab, setActiveTab] = useState<"personal" | "password">(
    "personal"
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[28px] font-bold tracking-tight text-[#111827]">
          Profile
        </h1>
        <ProfileTabs activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="rounded-2xl border border-[#eef1f6] bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:p-6 lg:p-8">
        {activeTab === "personal" ? (
          <PersonalInformationForm />
        ) : (
          <ChangePasswordForm />
        )}
      </div>
    </div>
  );
}
