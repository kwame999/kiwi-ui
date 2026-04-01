import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon } from "@hugeicons/core-free-icons";

type StatusVariant = "pending" | "success" | "alert" | "error";

interface StatusBadgeProps {
  variant?: StatusVariant;
  label?: string;
}

const variants: Record<StatusVariant, {
  bg?: string;
  border?: string;
  text?: string;
  iconColor?: string;
  icon?: any;
}> = {
  pending: {
    bg: "bg-[hsl(44.15_87.16%_21.83%)]",
    border: "border-white-800/100",
    text: "text-white/90",
    iconColor: "white",
    icon: Clock01Icon,
  },
  success: {
    bg: "bg-[hsl(146.14_100%_19.54%)]",
    border: "border-emerald-600/40",
    text: "text-white/90",
    iconColor: "white",
    icon: Clock01Icon,
  },
  alert: {
    bg: "bg-[hsl(357.63_72.37%_25.05%)]",
    border: "border-red-400/30",
    text: "text-white/90",
    iconColor: "white",
    icon: Clock01Icon,
  },
  error: {
    bg: "bg-[hsl(220.31_14.04%_8.89%)]",
    border: "border-red-600/40",
    text: "text-white/90",
    iconColor: "white",
    icon: Clock01Icon,
  },
};

export const StatusBadge = ({ variant = "pending", label }: StatusBadgeProps) => {
  const v = variants[variant];
  const defaultLabel = variant.charAt(0).toUpperCase() + variant.slice(1);

  return (
    <button
      className={`
        flex gap-1 border-2 border-white/20 items-center justify-center drop-shadow-2xl
        w-fit px-2 py-1 rounded-md
         tracking-wide
         text-[0.9rem]
        transition-opacity hover:opacity-90 active:opacity-75
        ${v.bg} ${v.border} ${v.text}
      `}
    >
      <HugeiconsIcon icon={v.icon} size={18} color={v.iconColor} />
      <span>{label ?? defaultLabel}</span>
    </button>
  );
};