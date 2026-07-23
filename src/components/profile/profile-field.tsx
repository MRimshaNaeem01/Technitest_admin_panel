type ProfileFieldProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function ProfileField({ label, children, className }: ProfileFieldProps) {
  return (
    <label className={`block space-y-1.5 ${className ?? ""}`}>
      <span className="text-sm font-semibold text-[#374151]">{label}</span>
      {children}
    </label>
  );
}

export const profileInputClassName =
  "h-11 w-full rounded-xl border border-[#e5e7eb] bg-white px-3.5 text-sm font-medium text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20";
