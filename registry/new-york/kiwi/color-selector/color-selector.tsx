import { useState } from "react"

type Color = {
  name: string
  base: string
}

const colors: Color[] = [
  { name: "coral",  base: "oklch(0.65 0.22 25)"  },
  { name: "pink",   base: "oklch(0.65 0.20 350)" },
  { name: "purple", base: "oklch(0.60 0.22 290)" },
  { name: "blue",   base: "oklch(0.60 0.20 240)" },
  { name: "teal",   base: "oklch(0.62 0.18 185)" },
  { name: "green",  base: "oklch(0.62 0.20 145)" },
]

type ColorSelectorProps = {
  defaultColor?: string
  onChange?: (color: string) => void
}

export const ColorSelector = ({ defaultColor = "coral", onChange }: ColorSelectorProps) => {
  const [selected, setSelected] = useState(defaultColor)

  const handleSelect = (color: Color) => {
    setSelected(color.name)
    onChange?.(color.name)
  }

  return (
    <div className="flex flex-col gap-3 px-4 py-3 rounded-xl w-fit">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium" style={{ color: "oklch(0.92 0.004 264)" }}>
          Customize Primary Color
        </span>
        <span className="text-xs" style={{ color: "oklch(0.52 0.004 264)" }}>
          Customize the look of your workspace
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        {colors.map((color) => {
          const isSelected = selected === color.name
          return (
            <button
              key={color.name}
              onClick={() => handleSelect(color)}
              className="relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-150"
              style={{
                outline: isSelected ? `2px solid ${color.base}` : "2px solid transparent",
                outlineOffset: "2px",
              }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: color.base }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}