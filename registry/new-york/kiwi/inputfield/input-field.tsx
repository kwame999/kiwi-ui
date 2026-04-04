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
    ? "linear-gradient(to bottom, oklch(0.55 0.18 25 / 0.9), oklch(0.55 0.18 25 / 0.3) 60%, oklch(0.173 0.004 264))"
    : focused
    ? "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.9), oklch(0.329 0.004 265 / 0.3) 60%, oklch(0.173 0.004 264))"
    : "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.5), oklch(0.329 0.004 265 / 0.15) 60%, oklch(0.173 0.004 264))"

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-[280px]">
      {label && (
        <span
          className="text-xs font-medium px-0.5"
          style={{ color: "oklch(0.72 0.004 264)" }}
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
          style={{ background: "oklch(0.173 0.004 264)" }}
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
              color: "oklch(0.92 0.004 264)",
              caretColor: "oklch(0.72 0.004 264)",
            }}
          />
        </div>
      </div>

      {error && (
        <span
          className="text-[11px] px-0.5"
          style={{ color: "oklch(0.62 0.22 25)" }}
        >
          {error}
        </span>
      )}
    </div>
  )
}