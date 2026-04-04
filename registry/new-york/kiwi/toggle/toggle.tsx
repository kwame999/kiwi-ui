import { useState } from "react"

type ToggleProps = {
  label?: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export const Toggle = ({
  label,
  defaultChecked = false,
  disabled = false,
  onChange,
}: ToggleProps) => {
  const [on, setOn] = useState(defaultChecked)

  const handleClick = () => {
    if (disabled) return
    setOn(o => {
      onChange?.(!o)
      return !o
    })
  }

  return (
    <div className="flex items-center gap-2.5 w-fit">
      <button
        onClick={handleClick}
        className="relative w-9 h-4 rounded-full transition-all duration-200 shrink-0 flex items-center"
        style={{
          background: disabled
            ? "oklch(0.25 0.004 264)"
            : on
            ? "oklch(0.329 0.004 265 / 0.9)"
            : "oklch(0.25 0.004 264)",
          outline: on && !disabled
            ? "1px solid oklch(0.329 0.004 265 / 0.5)"
            : "1px solid oklch(0.329 0.004 265 / 0.2)",
          outlineOffset: "1px",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <div
          className="absolute top-0.3 w-3.5 h-3.5 rounded-full transition-all duration-200"
          style={{
            background: disabled
              ? "oklch(0.45 0.004 264)"
              : on
              ? "oklch(0.92 0.004 264)"
              : "oklch(0.52 0.004 264)",
            left: on ? "calc(100% - 16px)" : "2px",
          }}
        />
      </button>

      {label && (
        <span
          className="text-sm"
          style={{ color: disabled ? "oklch(0.42 0.004 264)" : "oklch(0.72 0.004 264)" }}
        >
          {label}
        </span>
      )}
    </div>
  )
}


