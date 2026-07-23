"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import {
  ProfileField,
  profileInputClassName,
} from "@/components/profile/profile-field";
import { cn } from "@/lib/utils";

function PasswordInput({
  id,
  label,
  defaultValue,
}: {
  id: string;
  label: string;
  defaultValue?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <ProfileField label={label}>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          defaultValue={defaultValue}
          className={cn(profileInputClassName, "pr-11")}
        />
        <button
          type="button"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible((prev) => !prev)}
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-[#9ca3af] transition hover:text-[#6b7280]"
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </ProfileField>
  );
}

export function ChangePasswordForm() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#111827]">Password</h2>
        <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
          Update your account security by changing your current password or
          securely viewing it if forgotten.
        </p>
      </div>

      <div className="space-y-4">
        <PasswordInput
          id="old-password"
          label="Old Password"
          defaultValue="password123"
        />
        <div className="space-y-2">
          <PasswordInput
            id="new-password"
            label="New Password"
            defaultValue="NewPass@123"
          />
          <p className="text-sm font-medium text-[#3b82f6]">
            Your Password Must Include A Mix Of Uppercase Letters, Numbers, And
            Special Characters.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="inline-flex h-12 items-center justify-center rounded-xl bg-[#f0a500] px-8 text-sm font-semibold text-white transition hover:bg-[#d99400]"
      >
        Save Changes
      </button>
    </div>
  );
}
