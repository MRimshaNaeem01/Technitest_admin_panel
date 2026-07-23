import { cn } from "@/lib/utils";

type TechnitestLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function TechnitestLogo({
  className,
  showWordmark = true,
}: TechnitestLogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="36" height="36" rx="8" fill="#1A73E8" />
        <path
          d="M8 22h3v6H8v-6Zm5.5-4h3v10h-3V18Zm5.5-5h3v15h-3V13Zm5.5 3h3v12h-3V16Z"
          fill="white"
          opacity="0.95"
        />
        <path
          d="M10 10.5c0-.8.65-1.45 1.45-1.45h9.1c.8 0 1.45.65 1.45 1.45v1.1H10v-1.1Z"
          fill="#FFC107"
        />
        <path
          d="M18 7.2c2.2 0 4 1.1 4 2.4H14c0-1.3 1.8-2.4 4-2.4Z"
          fill="#FFC107"
        />
      </svg>
      {showWordmark ? (
        <span className="text-[17px] font-extrabold tracking-[0.04em] text-[#1f2937]">
          TECHNITEST
        </span>
      ) : null}
    </div>
  );
}
