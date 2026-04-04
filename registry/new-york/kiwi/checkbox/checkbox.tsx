import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Tick01Icon } from "@hugeicons/core-free-icons"

type CheckboxProps = {
  label?: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox = ({
  label,
  defaultChecked = false,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked)

  const handleClick = () => {
    if (disabled) return
    setChecked(c => {
      onChange?.(!c)
      return !c
    })
  }

  return (
    <div
      className="flex items-center gap-2.5 w-fit cursor-pointer select-none"
      onClick={handleClick}
      style={{ cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1 }}
    >
      <div
        className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-150"
        style={{
          background: checked
            ? "oklch(0.329 0.004 265 / 0.6)"
            : "oklch(0.22 0.004 264 / 0.6)",
          outline: checked
            ? "1px solid oklch(0.329 0.004 265 / 0.7)"
            : "1px solid oklch(0.329 0.004 265 / 0.25)",
          outlineOffset: "0px",
        }}
      >
        {checked && (
          <HugeiconsIcon
            icon={Tick01Icon}
            size={16}
            style={{ color: "oklch(0.92 0.004 264)" }}
          />
        )}
      </div>

      {label && (
        <span
          className="text-sm"
          style={{ color: "oklch(0.72 0.004 264)" }}
        >
          {label}
        </span>
      )}
    </div>
  )
}