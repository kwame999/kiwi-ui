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
            ? "var(--kiwi-toggle-disabled-bg)"
            : on
            ? "var(--kiwi-toggle-on-bg)"
            : "var(--kiwi-toggle-off-bg)",
          outline: on && !disabled
            ? "1px solid var(--kiwi-toggle-on-outline)"
            : "1px solid var(--kiwi-toggle-off-outline)",
          outlineOffset: "1px",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <div
          className="absolute top-0.3 w-3.5 h-3.5 rounded-full transition-all duration-200"
          style={{
            background: disabled
              ? "var(--kiwi-toggle-thumb-disabled)"
              : on
              ? "var(--kiwi-toggle-thumb-on)"
              : "var(--kiwi-toggle-thumb-off)",
            left: on ? "calc(100% - 16px)" : "2px",
          }}
        />
      </button>

      {label && (
        <span
          className="text-sm"
          style={{ color: disabled ? "var(--kiwi-text-disabled)" : "var(--kiwi-text-secondary)" }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
