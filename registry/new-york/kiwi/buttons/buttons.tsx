import { useState } from "react"

type ButtonVariant = 'primary' | 'danger' | 'ghost' | 'muted'

type ButtonProps = {
  variant?: ButtonVariant
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variantTokens: Record<ButtonVariant, {
  idle: React.CSSProperties
  hover: React.CSSProperties
  active: React.CSSProperties
  border: string
}> = {
  primary: {
    idle:   { background: "oklch(0.329 0.004 265 / 0.3)",  color: "oklch(0.92 0.004 264)" },
    hover:  { background: "oklch(0.329 0.004 265 / 0.5)",  color: "oklch(0.97 0.004 264)" },
    active: { background: "oklch(0.329 0.004 265 / 0.65)", color: "oklch(1 0 0)" },
    border: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
  },
  danger: {
    idle:   { background: "oklch(0.22 0.06 25 / 0.4)",  color: "oklch(0.75 0.20 25)" },
    hover:  { background: "oklch(0.22 0.06 25 / 0.6)",  color: "oklch(0.85 0.20 25)" },
    active: { background: "oklch(0.22 0.06 25 / 0.8)",  color: "oklch(0.92 0.18 25)" },
    border: "linear-gradient(to bottom, oklch(0.55 0.18 25 / 0.6), oklch(0.329 0.004 265 / 0.1) 60%, oklch(0.173 0.004 264))",
  },
  ghost: {
    idle:   { background: "transparent",                    color: "oklch(0.72 0.004 264)" },
    hover:  { background: "oklch(0.329 0.004 265 / 0.2)",   color: "oklch(0.92 0.004 264)" },
    active: { background: "oklch(0.329 0.004 265 / 0.35)",  color: "oklch(0.97 0.004 264)" },
    border: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.35), oklch(0.173 0.004 264))",
  },
  muted: {
    idle:   { background: "oklch(0.22 0.004 264 / 0.5)",  color: "oklch(0.52 0.004 264)" },
    hover:  { background: "oklch(0.22 0.004 264 / 0.7)",  color: "oklch(0.72 0.004 264)" },
    active: { background: "oklch(0.22 0.004 264 / 0.9)",  color: "oklch(0.85 0.004 264)" },
    border: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.3), oklch(0.173 0.004 264))",
  },
}

export const Button = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const tokens = variantTokens[variant]

  const currentStyle = disabled
    ? { background: "oklch(0.22 0.004 264 / 0.3)", color: "oklch(0.40 0.004 264)" }
    : pressed
    ? tokens.active
    : hovered
    ? tokens.hover
    : tokens.idle

  const borderGradient = disabled
    ? "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.15), oklch(0.173 0.004 264))"
    : tokens.border

  return (
    <div
      className="p-px rounded-md w-fit"
      style={{ background: borderGradient }}
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
          transition-all duration-150 select-none outline-none"
        style={{
          ...currentStyle,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          transform: pressed && !disabled ? "scale(0.97)" : "scale(1)",
        }}
      >
        {children}
      </button>
    </div>
  )
}