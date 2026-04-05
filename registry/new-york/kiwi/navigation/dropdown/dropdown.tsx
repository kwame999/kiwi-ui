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
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1.5"
        style={{
          color: "var(--kiwi-dropdown-trigger-color)",
          background: "var(--kiwi-dropdown-trigger-bg)",
          border: "1px solid var(--kiwi-dropdown-trigger-border)",
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--kiwi-dropdown-trigger-border-hover)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--kiwi-dropdown-trigger-border)")}
      >
        <span>{title}</span>
        <HugeiconsIcon
          icon={isOpen ? ArrowUp01Icon : ArrowDown01Icon}
          size={16}
          style={{ color: "var(--kiwi-dropdown-icon-color)" }}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="absolute top-[calc(100%+6px)] left-0 right-0 z-10 rounded-md p-px
              animate-[slideDown_0.18s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ background: "var(--kiwi-border-gradient-default)" }}
          >
            <div
              className="rounded-md"
              style={{
                background: "var(--kiwi-surface)",
                boxShadow: `0 8px 32px var(--kiwi-dropdown-shadow)`,
              }}
            >
              <p className="text-[11px] font-medium tracking-wide px-3 pt-2.5 pb-1.5"
                style={{ color: "var(--kiwi-dropdown-section-label)" }}>
                Actions
              </p>

              <div className="px-1.5 flex flex-col gap-px pb-1.5">
                {items.map(({ icon, label, sub, kbd }) => (
                  <button
                    key={label}
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg w-full transition-colors cursor-pointer"
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--kiwi-dropdown-item-hover-bg)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2">
                        <HugeiconsIcon
                          icon={icon}
                          size={16}
                          className="shrink-0"
                          style={{ color: "var(--kiwi-dropdown-item-icon)" }}
                        />
                        <span className="text-[13px]" style={{ color: "var(--kiwi-dropdown-item-label)" }}>{label}</span>
                      </div>
                      <span className="text-[11px] pl-0.5" style={{ color: "var(--kiwi-dropdown-item-sub)" }}>{sub}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {kbd.map((k) => (
                        <kbd
                          key={k}
                          className="text-[10px] rounded px-1 py-px font-sans drop-shadow-md"
                          style={{
                            color: "var(--kiwi-dropdown-kbd-color)",
                            background: "var(--kiwi-dropdown-kbd-bg)",
                            border: "1px solid var(--kiwi-dropdown-kbd-border)",
                          }}
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <div className="h-px mx-1.5 my-1" style={{ background: "var(--kiwi-dropdown-divider)" }} />

              <p className="text-[11px] font-medium tracking-wide px-3 pt-1.5 pb-1.5"
                style={{ color: "var(--kiwi-dropdown-danger-label)" }}>
                Danger Zone
              </p>

              <div className="px-1.5 pb-1.5 flex flex-col gap-px">
                {dangerItems.map(({ icon, label, sub, kbd }) => (
                  <button
                    key={label}
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg w-full transition-colors cursor-pointer"
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--kiwi-dropdown-danger-item-hover-bg)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2">
                        <HugeiconsIcon
                          icon={icon}
                          size={16}
                          className="shrink-0"
                          style={{ color: "var(--kiwi-dropdown-danger-item-icon)" }}
                        />
                        <span className="text-[13px]" style={{ color: "var(--kiwi-dropdown-danger-item-label)" }}>{label}</span>
                      </div>
                      <span className="text-[11px] pl-0.5" style={{ color: "var(--kiwi-dropdown-danger-item-sub)" }}>{sub}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {kbd.map((k) => (
                        <kbd
                          key={k}
                          className="text-[10px] rounded px-1 py-px font-sans drop-shadow-md"
                          style={{
                            color: "var(--kiwi-dropdown-danger-kbd-color)",
                            background: "var(--kiwi-dropdown-kbd-bg)",
                            border: "1px solid var(--kiwi-dropdown-danger-kbd-border)",
                          }}
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
