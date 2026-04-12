'use client'

import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, CheckmarkCircle02Icon, AlertCircleIcon, AlertDiamondIcon, InformationCircleIcon } from "@hugeicons/core-free-icons";
import { useState, useEffect } from "react";

type AlertToastProps = {
  message: string
  status: 'update' | 'success' | 'caution' | 'failed'
  time: number
  onDismiss?: () => void
}

const statusTokens = {
  update:  { icon: InformationCircleIcon, iconColor: "oklch(0.65 0.18 240)", iconBg: "oklch(0.22 0.06 240 / 0.6)", iconBorder: "linear-gradient(to bottom, oklch(0.50 0.18 240 / 0.8), oklch(0.173 0.004 264))", bar: "oklch(0.55 0.18 240)", barBg: "oklch(0.22 0.06 240 / 0.3)", label: "Update available" },
  success: { icon: CheckmarkCircle02Icon, iconColor: "oklch(0.65 0.20 145)", iconBg: "oklch(0.22 0.06 145 / 0.6)", iconBorder: "linear-gradient(to bottom, oklch(0.55 0.18 145 / 0.8), oklch(0.173 0.004 264))", bar: "oklch(0.58 0.20 145)", barBg: "oklch(0.22 0.06 145 / 0.3)", label: "Update successful" },
  caution: { icon: AlertCircleIcon,       iconColor: "oklch(0.75 0.18 75)",  iconBg: "oklch(0.22 0.06 75 / 0.6)",  iconBorder: "linear-gradient(to bottom, oklch(0.60 0.18 75 / 0.8),  oklch(0.173 0.004 264))", bar: "oklch(0.68 0.18 75)",  barBg: "oklch(0.22 0.06 75 / 0.3)",  label: "Action required" },
  failed:  { icon: AlertDiamondIcon,      iconColor: "oklch(0.65 0.22 25)",  iconBg: "oklch(0.22 0.06 25 / 0.6)",  iconBorder: "linear-gradient(to bottom, oklch(0.55 0.22 25 / 0.8),  oklch(0.173 0.004 264))", bar: "oklch(0.58 0.22 25)",  barBg: "oklch(0.22 0.06 25 / 0.3)",  label: "Action failed" },
}

export const AlertToast = ({ message, status, time, onDismiss }: AlertToastProps) => {
  const [visible, setVisible] = useState(true)
  const [countdown, setCountdown] = useState(time)

  useEffect(() => {
    if (!visible) return
    if (countdown <= 0) { setVisible(false); onDismiss?.(); return }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown, visible])

  if (!visible) return null

  const tk = statusTokens[status]

  return (
    <div
      className="p-px rounded-xl w-[300px] animate-[slideUp_0.22s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      style={{ background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))" }}
    >
      <div className="flex flex-col rounded-xl overflow-hidden" style={{ background: "oklch(0.173 0.004 264)" }}>

        <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3">
          <div className="flex items-start gap-3">
            <div className="p-px rounded-lg shrink-0 mt-0.5" style={{ background: tk.iconBorder }}>
              <div className="flex items-center justify-center w-7 h-7 rounded-lg" style={{ background: tk.iconBg }}>
                <HugeiconsIcon icon={tk.icon} size={15} style={{ color: tk.iconColor }} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium" style={{ color: "oklch(0.92 0.004 264)" }}>{tk.label}</span>
              <p className="text-xs leading-relaxed" style={{ color: "oklch(0.55 0.004 264)" }}>{message}</p>
            </div>
          </div>
          <button
            onClick={() => { setVisible(false); onDismiss?.() }}
            className="shrink-0 mt-0.5 transition-colors duration-150"
            style={{ color: "oklch(0.42 0.004 264)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "oklch(0.72 0.004 264)")}
            onMouseLeave={e => (e.currentTarget.style.color = "oklch(0.42 0.004 264)")}
          >
            <HugeiconsIcon icon={Cancel01Icon} size={14} />
          </button>
        </div>

        <div className="h-px mx-4" style={{ background: "linear-gradient(to right, oklch(0.173 0.004 264), oklch(0.329 0.004 265 / 0.5) 30%, oklch(0.329 0.004 265 / 0.5) 70%, oklch(0.173 0.004 264))" }} />

        <div className="flex flex-col gap-2 px-4 py-3">
          <span className="text-xs" style={{ color: "oklch(0.42 0.004 264)" }}>
            Dismissing in <span style={{ color: "oklch(0.62 0.004 264)" }}>{countdown}s</span>
          </span>
          <div className="h-0.5 w-full rounded-full overflow-hidden" style={{ background: tk.barBg }}>
            <div
              className="h-full rounded-full"
              style={{ animation: `shrink ${time}s linear forwards`, background: tk.bar }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes shrink {
          from { width: 100% }
          to   { width: 0% }
        }
      `}</style>
    </div>
  )
}