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
      style={{
        background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
      }}
    >
      <div
        className="flex flex-col gap-3 p-3 rounded-xl"
        style={{ background: "oklch(0.173 0.004 264)" }}
      >
        {/* Top row: icon + title + version + dismiss */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {/* Icon shell */}
            <div
              className="p-px rounded-lg shrink-0"
              style={{
                background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
              }}
            >
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: "oklch(0.22 0.004 264 / 0.8)" }}
              >
                <HugeiconsIcon
                  icon={PackageIcon}
                  size={17}
                  style={{ color: "oklch(0.72 0.004 264)" }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.92 0.004 264)" }}
              >
                {title}
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded-md font-mono"
                style={{
                  background: "oklch(0.329 0.004 265 / 0.3)",
                  color: "oklch(0.62 0.004 264)",
                }}
              >
                {version}
              </span>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="shrink-0 transition-colors duration-150"
            style={{ color: "oklch(0.45 0.004 264)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "oklch(0.72 0.004 264)")}
            onMouseLeave={e => (e.currentTarget.style.color = "oklch(0.45 0.004 264)")}
          >
            <HugeiconsIcon icon={Cancel01Icon} size={15} />
          </button>
        </div>

        {/* Description */}
        <p
          className="text-xs leading-relaxed"
          style={{ color: "oklch(0.55 0.004 264)" }}
        >
          {description}
        </p>

        {/* Divider */}
        <div
          className="h-px"
          style={{
            background: "linear-gradient(to right, oklch(0.173 0.004 264), oklch(0.329 0.004 265 / 0.6) 30%, oklch(0.329 0.004 265 / 0.6) 70%, oklch(0.173 0.004 264))",
          }}
        />

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Skip — ghost */}
          <div
            className="p-px rounded-md flex-1"
            style={{
              background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.5), oklch(0.329 0.004 265 / 0.15) 60%, oklch(0.173 0.004 264))",
            }}
          >
            <button
              onClick={onSkip}
              className="w-full px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
              style={{
                background: "oklch(0.22 0.004 264 / 0.5)",
                color: "oklch(0.62 0.004 264)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "oklch(0.329 0.004 265 / 0.45)"
                e.currentTarget.style.color = "oklch(0.92 0.004 264)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "oklch(0.22 0.004 264 / 0.5)"
                e.currentTarget.style.color = "oklch(0.62 0.004 264)"
              }}
            >
              Skip this update
            </button>
          </div>

          {/* Install — primary */}
          <div
            className="p-px rounded-md flex-1"
            style={{
              background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.9), oklch(0.329 0.004 265 / 0.3) 60%, oklch(0.173 0.004 264))",
            }}
          >
            <button
              onClick={onInstall}
              className="w-full px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
              style={{
                background: "oklch(0.329 0.004 265 / 0.45)",
                color: "oklch(0.92 0.004 264)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "oklch(0.329 0.004 265 / 0.65)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "oklch(0.329 0.004 265 / 0.45)"
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