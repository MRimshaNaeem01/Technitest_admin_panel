"use client";

import Image from "next/image";

import {
  ProfileField,
  profileInputClassName,
} from "@/components/profile/profile-field";

export function PersonalInformationForm() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Image
          src="https://i.pravatar.cc/160?img=12"
          alt="Ammad Aslam"
          width={96}
          height={96}
          className="size-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-[#111827]">Ammad Aslam</h2>
          <p className="mt-1 text-sm text-[#6b7280]">
            Supported Formats: PNG, JPG, JPEG. Max File Size: 2 MB
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ProfileField label="Full Name">
          <input
            type="text"
            defaultValue="Ammad Aslam"
            className={profileInputClassName}
          />
        </ProfileField>
        <ProfileField label="Email Address">
          <input
            type="email"
            defaultValue="ammad.aslam@technitest.com"
            className={profileInputClassName}
          />
        </ProfileField>
        <ProfileField label="Phone No" className="md:col-span-1">
          <input
            type="text"
            defaultValue="+92 300 1234567"
            className={profileInputClassName}
          />
        </ProfileField>
      </div>

      <section className="space-y-4">
        <h3 className="text-base font-bold text-[#111827]">Personal Address</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <ProfileField label="Country Or Region">
            <input
              type="text"
              defaultValue="Pakistan"
              className={profileInputClassName}
            />
          </ProfileField>
          <ProfileField label="City">
            <input
              type="text"
              defaultValue="Karachi"
              className={profileInputClassName}
            />
          </ProfileField>
          <ProfileField label="Address">
            <input
              type="text"
              defaultValue="Block 5, Clifton"
              className={profileInputClassName}
            />
          </ProfileField>
          <ProfileField label="Postal Code">
            <input
              type="text"
              defaultValue="75600"
              className={profileInputClassName}
            />
          </ProfileField>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-base font-bold text-[#111827]">Social Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <ProfileField label="Facebook">
            <input
              type="text"
              defaultValue="facebook.com/ammadaslam"
              className={profileInputClassName}
            />
          </ProfileField>
          <ProfileField label="X">
            <input
              type="text"
              defaultValue="x.com/ammadaslam"
              className={profileInputClassName}
            />
          </ProfileField>
          <ProfileField label="Linkedin">
            <input
              type="text"
              defaultValue="linkedin.com/in/ammadaslam"
              className={profileInputClassName}
            />
          </ProfileField>
          <ProfileField label="Instagram">
            <input
              type="text"
              defaultValue="instagram.com/ammadaslam"
              className={profileInputClassName}
            />
          </ProfileField>
        </div>
      </section>

      <button
        type="button"
        className="inline-flex h-12 items-center justify-center rounded-xl bg-[#f0a500] px-8 text-sm font-semibold text-white transition hover:bg-[#d99400]"
      >
        Save Changes
      </button>
    </div>
  );
}
