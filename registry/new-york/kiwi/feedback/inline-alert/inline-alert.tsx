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
    border: "var(--kiwi-alert-info-border)",
    bg: "var(--kiwi-alert-info-bg)",
    iconColor: "var(--kiwi-alert-info-icon)",
    titleColor: "var(--kiwi-text-primary)",
    descColor: "var(--kiwi-alert-info-desc)",
    actionColor: "var(--kiwi-alert-info-action)",
    actionHover: "var(--kiwi-alert-info-action-hover)",
  },
  warning: {
    icon: AlertCircleIcon,
    border: "var(--kiwi-alert-warning-border)",
    bg: "var(--kiwi-alert-warning-bg)",
    iconColor: "var(--kiwi-alert-warning-icon)",
    titleColor: "var(--kiwi-alert-warning-title)",
    descColor: "var(--kiwi-alert-warning-desc)",
    actionColor: "var(--kiwi-alert-warning-action)",
    actionHover: "var(--kiwi-alert-warning-action-hover)",
  },
  success: {
    icon: CheckmarkCircle02Icon,
    border: "var(--kiwi-alert-success-border)",
    bg: "var(--kiwi-alert-success-bg)",
    iconColor: "var(--kiwi-alert-success-icon)",
    titleColor: "var(--kiwi-text-primary)",
    descColor: "var(--kiwi-alert-success-desc)",
    actionColor: "var(--kiwi-alert-success-action)",
    actionHover: "var(--kiwi-alert-success-action-hover)",
  },
  error: {
    icon: AlertDiamondIcon,
    border: "var(--kiwi-alert-error-border)",
    bg: "var(--kiwi-alert-error-bg)",
    iconColor: "var(--kiwi-alert-error-icon)",
    titleColor: "var(--kiwi-text-primary)",
    descColor: "var(--kiwi-alert-error-desc)",
    actionColor: "var(--kiwi-alert-error-action)",
    actionHover: "var(--kiwi-alert-error-action-hover)",
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
      style={{ borderColor: t.border }}
    >
      <div
        className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg"
        style={{ background: t.bg }}
      >
        {/* Left: icon + text */}
        <div className="flex items-center justify-center gap-3 min-w-0">
          <div className="flex items-baseline gap-2 min-w-0 items-center">
          <HugeiconsIcon
            icon={t.icon}
            size={16}
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
            <HugeiconsIcon icon={Cancel01Icon} size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
