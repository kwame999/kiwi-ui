import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  AlertCircleIcon,
  CheckmarkCircle02Icon,
  InformationCircleIcon,
  AlertDiamondIcon,
} from "@hugeicons/core-free-icons";

type AlertVariant = "info" | "warning" | "success" | "error"

type InlineAlertProps = {
  variant?: AlertVariant
  title: string
  description?: string
  action?: string
  onAction?: () => void
  onDismiss?: () => void
}

const variantTokens: Record<AlertVariant, {
  icon: any
  border: string
  bg: string
  iconColor: string
  titleColor: string
  descColor: string
  actionColor: string
  actionHover: string
}> = {
  info: {
    icon: InformationCircleIcon,
    border: "linear-gradient(to bottom, oklch(0.50 0.18 240 / 0.8), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
    bg: "oklch(0.19 0.02 240 / 0.8)",
    iconColor: "oklch(0.65 0.18 240)",
    titleColor: "oklch(0.92 0.004 264)",
    descColor: "oklch(0.60 0.10 240)",
    actionColor: "oklch(0.70 0.15 240)",
    actionHover: "oklch(0.90 0.10 240)",
  },
  warning: {
    icon: AlertCircleIcon,
    border: "linear-gradient(to bottom, oklch(0.60 0.18 75 / 0.8), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
    bg: "oklch(0.19 0.03 75 / 0.8)",
    iconColor: "oklch(0.75 0.18 75)",
    titleColor: "oklch(0.92 0.004 264/0.8)",
    descColor: "oklch(0.62 0.10 75)",
    actionColor: "oklch(0.75 0.15 75)",
    actionHover: "oklch(0.92 0.10 75)",
  },
  success: {
    icon: CheckmarkCircle02Icon,
    border: "linear-gradient(to bottom, oklch(0.55 0.18 145 / 0.8), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
    bg: "oklch(0.19 0.03 145 / 0.8)",
    iconColor: "oklch(0.65 0.20 145)",
    titleColor: "oklch(0.92 0.004 264)",
    descColor: "oklch(0.58 0.10 145)",
    actionColor: "oklch(0.68 0.16 145)",
    actionHover: "oklch(0.88 0.10 145)",
  },
  error: {
    icon: AlertDiamondIcon,
    border: "linear-gradient(to bottom, oklch(0.55 0.22 25 / 0.8), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
    bg: "oklch(0.19 0.04 25 / 0.8)",
    iconColor: "oklch(0.65 0.22 25)",
    titleColor: "oklch(0.92 0.004 264)",
    descColor: "oklch(0.58 0.12 25)",
    actionColor: "oklch(0.70 0.18 25)",
    actionHover: "oklch(0.88 0.12 25)",
  },
}

export const InlineAlert = ({
  variant = "info",
  title,
  description,
  action,
  onAction,
  onDismiss,
}: InlineAlertProps) => {
  const t = variantTokens[variant]

  return (
    <div
      className="p-px rounded-xl w-full max-w-[520px] transition-all duration-200"
    >
      <div
        className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl"
        style={{ background: t.bg }}
      >
        {/* Left: icon + text */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-baseline gap-2 min-w-0  items-center">
          <HugeiconsIcon
            icon={t.icon}
            size={17}
            className="shrink-0"
            style={{ color: t.iconColor }}
          />
            <span
              className="text-sm font-medium shrink-0"
              style={{ color: t.titleColor }}
            >
              {title}
            </span>
          </div>
            {description && (
              <span
                className="text-sm truncate"
                style={{ color: t.descColor }}
              >
                {description}
              </span>
            )}
        </div>

        {/* Right: action + dismiss */}
        <div className="flex items-center gap-3 shrink-0">
          {action && (
            <button
              onClick={onAction}
              className="text-xs font-medium whitespace-nowrap transition-colors duration-150 underline-offset-2"
              style={{ color: t.actionColor, textDecoration: "underline", textDecorationStyle: "dotted" }}
              onMouseEnter={e => (e.currentTarget.style.color = t.actionHover)}
              onMouseLeave={e => (e.currentTarget.style.color = t.actionColor)}
            >
              {action}
            </button>
          )}
          <button
            onClick={onDismiss}
            className="flex items-center justify-center transition-colors duration-150"
            style={{ color: t.descColor }}
            onMouseEnter={e => (e.currentTarget.style.color = t.titleColor)}
            onMouseLeave={e => (e.currentTarget.style.color = t.descColor)}
          >
            <HugeiconsIcon icon={Cancel01Icon} size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}