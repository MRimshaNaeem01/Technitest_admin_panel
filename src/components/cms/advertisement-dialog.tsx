"use client";

import { useState } from "react";

import { Dialog } from "@/components/ui/dialog";
import { FileUpload } from "@/components/ui/file-upload";
import { Switch } from "@/components/ui/switch";
import type { AdvertisementBanner } from "@/data/cms";
import { placementOptions } from "@/data/cms";

type AdvertisementDialogProps = {
  open: boolean;
  onClose: () => void;
  mode: "create" | "edit";
  banner: AdvertisementBanner | null;
};

export function AdvertisementDialog({ open, onClose, mode, banner }: AdvertisementDialogProps) {
  const [title, setTitle] = useState(banner?.title ?? "");
  const [placement, setPlacement] = useState(banner?.placement ?? placementOptions[0]);
  const [destinationUrl, setDestinationUrl] = useState(banner?.destinationUrl ?? "");
  const [altText, setAltText] = useState(banner?.altText ?? "");
  const [active, setActive] = useState(banner ? banner.status === "Active" : true);
  const [startDate, setStartDate] = useState(banner?.startDate ?? "");
  const [endDate, setEndDate] = useState(banner?.endDate ?? "");

  const titleText = mode === "create" ? "Add New Banner" : "Edit Banner";

  function handleSave() {
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} title={titleText} maxWidth="max-w-xl">
      <div className="space-y-4">
        <div className="flex flex-col gap-[10px]">
          <label className="text-[14px] font-medium text-[#111111]">
            Banner Title<span className="ml-0.5 text-[#ff0000]">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-[54px] w-full rounded-[10px] border border-[#ebebeb] bg-white px-5 text-[15px] text-[#4b5563] shadow-[0_2px_10px_rgba(16,24,40,0.06)] outline-none transition placeholder:text-[#b0b0b0] focus:border-[#dcdcdc] focus:shadow-[0_2px_12px_rgba(16,24,40,0.08)] focus:ring-0"
            placeholder="Enter banner title"
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <label className="text-[14px] font-medium text-[#111111]">Page</label>
          <select
            value={placement}
            onChange={(e) => setPlacement(e.target.value)}
            className="h-[54px] w-full rounded-[10px] border border-[#ebebeb] bg-white px-5 text-[15px] text-[#4b5563] shadow-[0_2px_10px_rgba(16,24,40,0.06)] outline-none transition focus:border-[#dcdcdc] focus:shadow-[0_2px_12px_rgba(16,24,40,0.08)] focus:ring-0"
          >
            {placementOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <FileUpload
          label="Banner Image"
          required
          helperText="Supported Formats: PNG, JPG, JPEG. Max File Size: 2 MB."
        />

        <div className="flex flex-col gap-[10px]">
          <label className="text-[14px] font-medium text-[#111111]">Destination URL</label>
          <input
            type="url"
            value={destinationUrl}
            onChange={(e) => setDestinationUrl(e.target.value)}
            className="h-[54px] w-full rounded-[10px] border border-[#ebebeb] bg-white px-5 text-[15px] text-[#4b5563] shadow-[0_2px_10px_rgba(16,24,40,0.06)] outline-none transition placeholder:text-[#b0b0b0] focus:border-[#dcdcdc] focus:shadow-[0_2px_12px_rgba(16,24,40,0.08)] focus:ring-0"
            placeholder="https://example.com"
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <label className="text-[14px] font-medium text-[#111111]">Alt Text</label>
          <input
            type="text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            className="h-[54px] w-full rounded-[10px] border border-[#ebebeb] bg-white px-5 text-[15px] text-[#4b5563] shadow-[0_2px_10px_rgba(16,24,40,0.06)] outline-none transition placeholder:text-[#b0b0b0] focus:border-[#dcdcdc] focus:shadow-[0_2px_12px_rgba(16,24,40,0.08)] focus:ring-0"
            placeholder="Enter alt text"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-[10px] flex-1">
            <label className="text-[14px] font-medium text-[#111111]">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="h-[54px] w-full rounded-[10px] border border-[#ebebeb] bg-white px-5 text-[15px] text-[#4b5563] shadow-[0_2px_10px_rgba(16,24,40,0.06)] outline-none transition focus:border-[#dcdcdc] focus:shadow-[0_2px_12px_rgba(16,24,40,0.08)] focus:ring-0"
            />
          </div>
          <div className="flex flex-col gap-[10px] flex-1">
            <label className="text-[14px] font-medium text-[#111111]">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="h-[54px] w-full rounded-[10px] border border-[#ebebeb] bg-white px-5 text-[15px] text-[#4b5563] shadow-[0_2px_10px_rgba(16,24,40,0.06)] outline-none transition focus:border-[#dcdcdc] focus:shadow-[0_2px_12px_rgba(16,24,40,0.08)] focus:ring-0"
            />
          </div>
        </div>

        <div className="rounded-xl border border-[#e5e7eb] px-4 py-3">
          <Switch checked={active} onCheckedChange={setActive} label="Active" />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[#f0a500] px-6 text-sm font-semibold text-white transition hover:bg-[#d99400]"
        >
          Save Changes
        </button>
      </div>
    </Dialog>
  );
}
