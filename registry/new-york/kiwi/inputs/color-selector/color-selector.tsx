import { useState } from "react"

type Color = {
  name: string
  varName: string
}

const colors: Color[] = [
  { name: "coral",  varName: "var(--kiwi-color-coral)"  },
  { name: "pink",   varName: "var(--kiwi-color-pink)"   },
  { name: "purple", varName: "var(--kiwi-color-purple)" },
  { name: "blue",   varName: "var(--kiwi-color-blue)"   },
  { name: "teal",   varName: "var(--kiwi-color-teal)"   },
  { name: "green",  varName: "var(--kiwi-color-green)"  },
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
        <span className="text-sm font-medium" style={{ color: "var(--kiwi-text-primary)" }}>
          Customize Primary Color
        </span>
        <span className="text-xs" style={{ color: "var(--kiwi-text-tertiary)" }}>
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
                outline: isSelected ? `2px solid ${color.varName}` : "2px solid transparent",
                outlineOffset: "2px",
              }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: color.varName }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
