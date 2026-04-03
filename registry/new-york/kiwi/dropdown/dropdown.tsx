'use client';

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUp01Icon,
  FilePlusIcon,
  FilePenIcon,
  FileXIcon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons"

type DropDownProps = { title: string }

const items = [
  {
    icon: FilePlusIcon,
    label: "New File",
    sub: "Create a new file",
    kbd: ["⌘", "N"],
  },
  {
    icon: FilePenIcon,
    label: "Edit File",
    sub: "Allows you to edit the file",
    kbd: ["⌘", "⇧", "E"],
  },
]

const dangerItems = [
  {
    icon: FileXIcon,
    label: "Delete File",
    sub: "Permanently delete the file",
    kbd: ["⌘", "⇧", "D"],
  },
]

export const DropDown = ({ title }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-[240px]">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium
          text-[oklch(0.92_0.004_264)] bg-[oklch(0.173_0.004_264)]
          border border-[oklch(0.329_0.004_265_/_0.5)]
          hover:border-[oklch(0.329_0.004_265_/_0.8)] transition-colors mb-1.5"
      >
        <span>{title}</span>
        <HugeiconsIcon
          icon={isOpen ? ArrowUp01Icon : ArrowDown01Icon}
          size={16}
          className="text-[oklch(0.72_0.004_264)]"
        />
      </button>

      {isOpen && (
        <>
          {/* Gradient border shell — 1px padding reveals the gradient as a border */}
          <div
            className="absolute top-[calc(100%+6px)] left-0 right-0 z-10 rounded-md p-px
              animate-[slideDown_0.18s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{
              background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
            }}
          >
            <div
              className="rounded-md shadow-[0_8px_32px_oklch(0.05_0.004_264_/_0.7)]"
              style={{ background: "oklch(0.173 0.004 264)" }}
            >
              <p className="text-[11px] font-medium text-[oklch(0.55_0.004_264)] tracking-wide px-3 pt-2.5 pb-1.5">
                Actions
              </p>

              <div className="px-1.5 flex flex-col gap-px pb-1.5">
                {items.map(({ icon, label, sub, kbd }) => (
                  <button
                    key={label}
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg w-full
                      hover:bg-[oklch(0.329_0.004_265_/_0.45)] transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2">
                        <HugeiconsIcon
                          icon={icon}
                          size={16}
                          className="text-[oklch(0.72_0.004_264)] shrink-0"
                        />
                        <span className="text-[13px] text-[oklch(0.92_0.004_264)]">{label}</span>
                      </div>
                      <span className="text-[11px] text-[oklch(0.52_0.004_264)] pl-0.5">{sub}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {kbd.map((k) => (
                        <kbd
                          key={k}
                          className="text-[10px] text-[oklch(0.48_0.004_264)]
                            bg-[oklch(0.22_0.004_264)]
                            border border-[oklch(0.30_0.004_264)]
                            rounded px-1 py-px font-sans drop-shadow-md"
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <div className="h-px mx-1.5 my-1 bg-[oklch(0.329_0.004_265_/_0.55)]" />

              <p className="text-[11px] font-medium text-[oklch(0.55_0.18_25)] tracking-wide px-3 pt-1.5 pb-1.5">
                Danger Zone
              </p>

              <div className="px-1.5 pb-1.5 flex flex-col gap-px">
                {dangerItems.map(({ icon, label, sub, kbd }) => (
                  <button
                    key={label}
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg w-full
                      hover:bg-[oklch(0.22_0.06_25_/_0.5)] transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2">
                        <HugeiconsIcon
                          icon={icon}
                          size={16}
                          className="text-[oklch(0.62_0.22_25)] shrink-0"
                        />
                        <span className="text-[13px] text-[oklch(0.75_0.20_25)]">{label}</span>
                      </div>
                      <span className="text-[11px] text-[oklch(0.52_0.14_25)]">{sub}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {kbd.map((k) => (
                        <kbd
                          key={k}
                          className="text-[10px] text-[oklch(0.48_0.14_25)]
                            bg-[oklch(0.22_0.004_264)]
                            border border-[oklch(0.28_0.06_25)]
                            rounded px-1 py-px font-sans drop-shadow-md"
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <div className="h-1.5" />
            </div>
          </div>
        </>
      )}
    </div>
  )
}