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
    idle:   { background: "var(--kiwi-btn-primary-idle-bg)",   color: "var(--kiwi-btn-primary-idle-color)" },
    hover:  { background: "var(--kiwi-btn-primary-hover-bg)",  color: "var(--kiwi-btn-primary-hover-color)" },
    active: { background: "var(--kiwi-btn-primary-active-bg)", color: "var(--kiwi-btn-primary-active-color)" },
    border: "var(--kiwi-btn-primary-border)",
  },
  danger: {
    idle:   { background: "var(--kiwi-danger-surface)",        color: "var(--kiwi-danger-text)" },
    hover:  { background: "var(--kiwi-danger-surface-hover)",  color: "var(--kiwi-danger-text-hover)" },
    active: { background: "var(--kiwi-danger-surface-active)", color: "var(--kiwi-danger-text-active)" },
    border: "var(--kiwi-danger-border)",
  },
  ghost: {
    idle:   { background: "var(--kiwi-btn-ghost-idle-bg)",    color: "var(--kiwi-btn-ghost-idle-color)" },
    hover:  { background: "var(--kiwi-btn-ghost-hover-bg)",   color: "var(--kiwi-btn-ghost-hover-color)" },
    active: { background: "var(--kiwi-btn-ghost-active-bg)",  color: "var(--kiwi-btn-ghost-active-color)" },
    border: "var(--kiwi-btn-ghost-border)",
  },
  muted: {
    idle:   { background: "var(--kiwi-btn-muted-idle-bg)",    color: "var(--kiwi-btn-muted-idle-color)" },
    hover:  { background: "var(--kiwi-btn-muted-hover-bg)",   color: "var(--kiwi-btn-muted-hover-color)" },
    active: { background: "var(--kiwi-btn-muted-active-bg)",  color: "var(--kiwi-btn-muted-active-color)" },
    border: "var(--kiwi-btn-muted-border)",
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
    ? { background: "var(--kiwi-btn-disabled-bg)", color: "var(--kiwi-btn-disabled-color)" }
    : pressed
    ? tokens.active
    : hovered
    ? tokens.hover
    : tokens.idle

  const borderGradient = disabled
    ? "var(--kiwi-btn-disabled-border)"
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
