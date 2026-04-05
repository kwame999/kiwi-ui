import { useState } from "react"

type InputFieldProps = {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  error?: string
}

export const InputField = ({
  label,
  placeholder = "Type something...",
  value,
  onChange,
  disabled = false,
  error,
}: InputFieldProps) => {
  const [focused, setFocused] = useState(false)
  const [internal, setInternal] = useState("")

  const controlled = value !== undefined
  const current = controlled ? value : internal

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!controlled) setInternal(e.target.value)
    onChange?.(e.target.value)
  }

  const borderGradient = error
    ? "var(--kiwi-danger-border-input)"
    : focused
    ? "var(--kiwi-border-gradient-strong)"
    : "var(--kiwi-border-gradient-subtle)"

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-[280px]">
      {label && (
        <span
          className="text-xs font-medium px-0.5"
          style={{ color: "var(--kiwi-text-secondary)" }}
        >
          {label}
        </span>
      )}

      <div
        className="p-px rounded-md transition-all duration-200"
        style={{
          background: borderGradient,
          opacity: disabled ? 0.45 : 1,
        }}
      >
        <div
          className="rounded-md px-3 py-2 flex items-center gap-2"
          style={{ background: "var(--kiwi-surface)" }}
        >
          <input
            type="text"
            value={current}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={disabled}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none text-sm"
            style={{
              color: "var(--kiwi-text-primary)",
              caretColor: "var(--kiwi-text-secondary)",
            }}
          />
        </div>
      </div>

      {error && (
        <span
          className="text-[11px] px-0.5"
          style={{ color: "var(--kiwi-danger-error-text)" }}
        >
          {error}
        </span>
      )}
    </div>
  )
}
