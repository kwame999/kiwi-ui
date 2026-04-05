import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon, PackageIcon } from "@hugeicons/core-free-icons"

type ToastProps = {
  version?: string
  title?: string
  description?: string
  onSkip?: () => void
  onInstall?: () => void
  onDismiss?: () => void
}

export const UpdateToast = ({
  version = "v4.2",
  title = "A new update is available",
  description = "Includes the all new dashboard view. Pages and exports will now load faster.",
  onSkip,
  onInstall,
  onDismiss,
}: ToastProps) => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div
      className="p-px rounded-xl w-[320px] animate-[slideUp_0.22s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      style={{ background: "var(--kiwi-border-gradient-default)" }}
    >
      <div
        className="flex flex-col gap-3 p-3 rounded-xl"
        style={{ background: "var(--kiwi-surface)" }}
      >
        {/* Top row: icon + title + version + dismiss */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {/* Icon shell */}
            <div
              className="p-px rounded-lg shrink-0"
              style={{ background: "var(--kiwi-border-gradient-default)" }}
            >
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: "var(--kiwi-toast-icon-bg)" }}
              >
                <HugeiconsIcon
                  icon={PackageIcon}
                  size={17}
                  style={{ color: "var(--kiwi-text-secondary)" }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-sm font-medium"
                style={{ color: "var(--kiwi-text-primary)" }}
              >
                {title}
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded-md font-mono"
                style={{
                  background: "var(--kiwi-toast-version-bg)",
                  color: "var(--kiwi-toast-version-color)",
                }}
              >
                {version}
              </span>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="shrink-0 transition-colors duration-150"
            style={{ color: "var(--kiwi-toast-dismiss-color)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--kiwi-text-secondary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--kiwi-toast-dismiss-color)")}
          >
            <HugeiconsIcon icon={Cancel01Icon} size={15} />
          </button>
        </div>

        {/* Description */}
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--kiwi-toast-desc-color)" }}
        >
          {description}
        </p>

        {/* Divider */}
        <div
          className="h-px"
          style={{ background: "var(--kiwi-toast-divider)" }}
        />

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Skip — ghost */}
          <div
            className="p-px rounded-md flex-1"
            style={{ background: "var(--kiwi-border-gradient-subtle)" }}
          >
            <button
              onClick={onSkip}
              className="w-full px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
              style={{
                background: "var(--kiwi-toast-skip-bg)",
                color: "var(--kiwi-toast-skip-color)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--kiwi-toast-skip-hover-bg)"
                e.currentTarget.style.color = "var(--kiwi-text-primary)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--kiwi-toast-skip-bg)"
                e.currentTarget.style.color = "var(--kiwi-toast-skip-color)"
              }}
            >
              Skip this update
            </button>
          </div>

          {/* Install — primary */}
          <div
            className="p-px rounded-md flex-1"
            style={{ background: "var(--kiwi-border-gradient-strong)" }}
          >
            <button
              onClick={onInstall}
              className="w-full px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
              style={{
                background: "var(--kiwi-toast-install-bg)",
                color: "var(--kiwi-text-primary)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--kiwi-toast-install-hover-bg)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--kiwi-toast-install-bg)"
              }}
            >
              Install now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
