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
            ? "var(--kiwi-checkbox-checked-bg)"
            : "var(--kiwi-checkbox-unchecked-bg)",
          outline: checked
            ? "1px solid var(--kiwi-checkbox-checked-outline)"
            : "1px solid var(--kiwi-checkbox-unchecked-outline)",
          outlineOffset: "0px",
        }}
      >
        {checked && (
          <HugeiconsIcon
            icon={Tick01Icon}
            size={16}
            style={{ color: "var(--kiwi-text-primary)" }}
          />
        )}
      </div>

      {label && (
        <span
          className="text-sm"
          style={{ color: "var(--kiwi-text-secondary)" }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
