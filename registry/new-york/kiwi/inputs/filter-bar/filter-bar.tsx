import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { FilterVerticalIcon } from "@hugeicons/core-free-icons"
import { motion, AnimatePresence } from "framer-motion"

type FilterBarProps = {
  list: string[]
}

export const FilterBar = ({ list }: FilterBarProps) => {
  const [currentSort, setCurrentSort] = useState<string>(list[0] || "")

  return (
    <div
      className="p-px rounded-xl w-fit"
      style={{
        background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
      }}
    >
      <div
        className="flex items-center gap-3 px-3 py-2 rounded-xl"
        style={{ background: "oklch(0.173 0.004 264)" }}
      >
        {/* Label */}
        <div className="flex items-center gap-1.5 shrink-0">
          <HugeiconsIcon icon={FilterVerticalIcon} size={14} style={{ color: "oklch(0.52 0.004 264)" }} />
          <span className="text-xs" style={{ color: "oklch(0.52 0.004 264)" }}>
            Sort by:
          </span>
          <span className="relative inline-flex h-[16px] items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSort}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="text-xs font-medium"
                style={{ color: "oklch(0.92 0.004 264)" }}
              >
                {currentSort}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        {/* Divider */}
        <div
          className="w-px self-stretch"
          style={{ background: "oklch(0.329 0.004 265 / 0.5)" }}
        />

        {/* Filter items */}
        <ul className="flex items-center relative">
          {/* Sliding pill */}
          {list.map((item) =>
            item === currentSort ? (
              <motion.div
                key="pill"
                layoutId="filter-pill"
                className="absolute inset-y-0 rounded-lg"
                style={{ background: "oklch(0.329 0.004 265 / 0.35)" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            ) : null
          )}

          {list.map((item) => (
            <li
              key={item}
              onClick={() => setCurrentSort(item)}
              className="relative z-10 px-3 py-1 text-xs cursor-pointer rounded-lg transition-colors duration-150 select-none"
              style={{
                color: item === currentSort
                  ? "oklch(0.92 0.004 264)"
                  : "oklch(0.52 0.004 264)",
              }}
              onMouseEnter={e => {
                if (item !== currentSort)
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.004 264)"
              }}
              onMouseLeave={e => {
                if (item !== currentSort)
                  (e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.004 264)"
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}