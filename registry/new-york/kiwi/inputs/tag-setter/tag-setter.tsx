"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  RemoveCircleIcon,
  AddCircleIcon,
  CancelCircleIcon,
  CancelIcon,
} from "@hugeicons/core-free-icons"
import { motion, AnimatePresence } from "motion/react"

interface TagItem {
  id: string
  name: string
}

interface ResizingConfig {
  maxWidth?: number
  width?: number
}

interface TagSetterProps {
  placeholder?: string
  maxTags?: number
  resizing?: ResizingConfig
  onSave?: (tags: TagItem[]) => void
}

// ─── Tag ─────────────────────────────────────────────────────────────────────

const Tag = ({ tagType, onRemoveTag }: { tagType: string; onRemoveTag: () => void }) => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0, filter: "blur(6px)" }}
    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    exit={{ scale: 0.5, opacity: 0, filter: "blur(6px)" }}
    transition={{ type: "spring", stiffness: 500, damping: 30, opacity: { duration: 0.18 }, filter: { duration: 0.18 } }}
    className="relative flex items-center justify-center rounded-full px-3 py-0.5 overflow-hidden text-xs shrink-0"
    style={{
      color: "oklch(0.72 0.004 264)",
      border: "1px dashed oklch(0.329 0.004 265 / 0.5)",
      background: "oklch(0.22 0.004 264 / 0.5)",
    }}
  >
    <button
      className="absolute opacity-0 w-full hover:opacity-100 flex justify-center items-center h-full transition-opacity duration-200 rounded-full"
      onClick={onRemoveTag}
      aria-label={`Remove tag ${tagType}`}
      style={{ background: "oklch(0.173 0.004 264 / 0.85)" }}
    >
      <HugeiconsIcon icon={CancelIcon} size={12} style={{ color: "oklch(0.62 0.22 25)" }} />
    </button>
    <span>{tagType}</span>
  </motion.div>
)

// ─── Save Confirm Dialog ──────────────────────────────────────────────────────

const SaveConfirmDialog = ({ onSave, onDiscard }: { onSave: () => void; onDiscard: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
    className="absolute inset-0 z-10 flex items-center justify-center rounded-full"
    style={{ backdropFilter: "blur(6px)", background: "oklch(0.173 0.004 264 / 0.80)" }}
  >
    <motion.div
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.92, opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="flex items-center gap-3"
    >
      <p className="text-xs" style={{ color: "oklch(0.62 0.004 264)" }}>
        Save changes?
      </p>

      <div className="flex gap-2 items-center">
        {/* Discard */}
        <div className="p-px rounded-md text-xs">
          <button
            onClick={onDiscard}
            onMouseEnter={e => { e.currentTarget.style.background = "oklch(0.329 0.004 265 / 0.45)"; e.currentTarget.style.color = "oklch(0.92 0.004 264)" }}
            onMouseLeave={e => { e.currentTarget.style.background = "oklch(0.22 0.004 264 / 0.5)"; e.currentTarget.style.color = "oklch(0.62 0.004 264)" }}
          >
            Discard
          </button>
        </div>

        {/* Save */}
        <div className="p-px rounded-md text-xs">
          <button
            onClick={onSave}
            onMouseEnter={e => (e.currentTarget.style.background = "oklch(0.329 0.004 265 / 0.65)")}
            onMouseLeave={e => (e.currentTarget.style.background = "oklch(0.329 0.004 265 / 0.45)")}
          >
            Save
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
)

// ─── TagSetter ────────────────────────────────────────────────────────────────

export function TagSetter({
  placeholder = "Add a tag...",
  maxTags = 5,
  resizing = { maxWidth: 880, width: 420 },
  onSave,
}: TagSetterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [tags, setTags] = useState<TagItem[]>([])
  const [tagName, setTagName] = useState("")
  const [showConfirm, setShowConfirm] = useState(false)

  const { width = 420, maxWidth = 880 } = resizing

  function addTag(name: string) {
    if (tags.length < maxTags) {
      setTags(prev => [{ id: crypto.randomUUID(), name }, ...prev])
    }
    setTagName("")
  }

  function removeTag(id: string) {
    setTags(prev => prev.filter(t => t.id !== id))
  }

  function removeLastTag() {
    setTags(prev => prev.slice(1))
  }

  function handleMainButton() {
    if (!isOpen) { setIsOpen(true); return }
    if (tags.length === 0) { setIsOpen(false); return }
    setShowConfirm(true)
  }

  function handleSave() {
    onSave?.(tags)
    setShowConfirm(false)
    setIsOpen(false)
  }

  function handleDiscard() {
    setTags([])
    setShowConfirm(false)
    setIsOpen(false)
  }

  return (
    <section className="relative">
      <div
        className="p-px rounded-full"
        style={{
          background: isOpen
            ? "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))"
            : "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.4), oklch(0.173 0.004 264))",
        }}
      >
        <motion.section
          initial={false}
          animate={{ width: isOpen ? Math.min(width, maxWidth) : 105 }}
          transition={{ type: "spring", stiffness: 260, damping: 32 }}
          className="relative rounded-full flex items-center gap-2 overflow-hidden p py-1.5"
          style={{ background: "oklch(0.173 0.004 264)", paddingLeft: isOpen ? '6px' : 0, paddingRight: isOpen ? '6px' : 0 }}
        >
          <AnimatePresence>
            {showConfirm && (
              <SaveConfirmDialog onSave={handleSave} onDiscard={handleDiscard} />
            )}
          </AnimatePresence>

          {/* Main toggle */}
          <motion.button
            onClick={handleMainButton}
            whileTap={{ scale: 0.88 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-150"
            style={
              isOpen
                ? { width: 24, height: 24, background: "oklch(0.22 0.004 264 / 0.6)" }
                : { width: 101, height: 28 }
            }
            aria-label={isOpen ? "Close tag setter" : "Open tag setter"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{ display: "flex" }}
                >
                  <HugeiconsIcon icon={CancelCircleIcon} size={16} style={{ color: "oklch(0.55 0.004 264)" }} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center gap-1.5"
                >
                  <motion.span
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    style={{ display: "flex" }}
                  >
                    <HugeiconsIcon icon={AddCircleIcon} size={16} style={{ color: "oklch(0.72 0.004 264)" }} />
                  </motion.span>
                  <span className="text-xs font-medium" style={{ color: "oklch(0.72 0.004 264)" }}>
                    Add Tag
                  </span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Tags */}
          {isOpen && tags.length > 0 && (
            <div className="flex gap-1.5 items-center">
              <AnimatePresence initial={false}>
                {tags.map(tag => (
                  <Tag key={tag.id} tagType={tag.name} onRemoveTag={() => removeTag(tag.id)} />
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Input + actions */}
          {isOpen && (
            <form className="flex items-center justify-between w-full gap-1.5">
              <input
                className="w-full text-xs outline-none bg-transparent"
                type="text"
                value={tagName}
                onChange={e => setTagName(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter" && tagName.trim()) {
                    e.preventDefault()
                    addTag(tagName.trim())
                  }
                }}
                placeholder={placeholder}
                style={{ color: "oklch(0.92 0.004 264)" }}
              />

              <div className="flex gap-1 shrink-0">
                <motion.button
                  onClick={e => { e.preventDefault(); removeLastTag() }}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 500, damping: 28 }}
                  className="rounded-full p-1 flex items-center justify-center"
                  style={{ background: "oklch(0.22 0.004 264 / 0.6)" }}
                  aria-label="Remove last tag"
                >
                  <HugeiconsIcon icon={RemoveCircleIcon} size={14} style={{ color: "oklch(0.55 0.004 264)" }} />
                </motion.button>

                <motion.button
                  onClick={e => { e.preventDefault(); if (tagName.trim()) addTag(tagName.trim()) }}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 500, damping: 28 }}
                  className="rounded-full p-1 flex items-center justify-center"
                  style={{ background: "oklch(0.22 0.004 264 / 0.6)" }}
                  aria-label="Add tag"
                >
                  <HugeiconsIcon icon={AddCircleIcon} size={14} style={{ color: "oklch(0.72 0.004 264)" }} />
                </motion.button>
              </div>
            </form>
          )}
        </motion.section>
      </div>
    </section>
  )
}