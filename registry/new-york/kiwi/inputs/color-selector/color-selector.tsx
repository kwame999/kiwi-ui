import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gridPattern } from "@/components/site/Patterns"

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
      <div className="flex items-center gap-2.5">
        {colors.map((color) => {
          const isSelected = selected === color.name
          return (
            <motion.button
              key={color.name}
              onClick={() => handleSelect(color)}
              className="relative flex items-center justify-center w-5 h-5 rounded-full"
              whileTap={{scale: 0.8}}
              whileHover={{scale: 1.1}}
            >
              {isSelected && (
                <motion.div
                  layoutId="color-ring"
                  className="absolute inset-0 rounded-full"
                  style={{ outline: `2px solid ${color.varName}`, outlineOffset: "2px", backgroundImage: gridPattern }}
                  transition={{ type: "spring", stiffness: 440, damping: 46 }}
                />
              )}

              <div
                className="w-5 h-5 rounded-full"
                style={{ background: color.varName }}
              />
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}