import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon } from "@hugeicons/core-free-icons";

type StatusVariant = "pending" | "success" | "alert" | "error";

interface StatusBadgeProps {
  variant?: StatusVariant;
  label?: string;
}

const variants: Record<StatusVariant, {
  bgVar: string;
  borderClass: string;
  icon?: any;
}> = {
  pending: {
    bgVar: "var(--kiwi-label-pending-bg)",
    borderClass: "border-white/20",
    icon: Clock01Icon,
  },
  success: {
    bgVar: "var(--kiwi-label-success-bg)",
    borderClass: "border-emerald-600/40",
    icon: Clock01Icon,
  },
  alert: {
    bgVar: "var(--kiwi-label-alert-bg)",
    borderClass: "border-red-400/30",
    icon: Clock01Icon,
  },
  error: {
    bgVar: "var(--kiwi-label-error-bg)",
    borderClass: "border-red-600/40",
    icon: Clock01Icon,
  },
};

export const StatusBadge = ({ variant = "pending", label }: StatusBadgeProps) => {
  const v = variants[variant];
  const defaultLabel = variant.charAt(0).toUpperCase() + variant.slice(1);

  return (
    <button
      className={`
        flex gap-1 border-2 items-center justify-center drop-shadow-2xl
        w-fit px-2 py-1 rounded-md tracking-wide text-[0.8rem]
        transition-opacity hover:opacity-90 active:opacity-75
        text-white/90 ${v.borderClass}
      `}
      style={{ background: v.bgVar }}
    >
      <HugeiconsIcon icon={v.icon} size={14} color="white" />
      <span>{label ?? defaultLabel}</span>
    </button>
  );
};
