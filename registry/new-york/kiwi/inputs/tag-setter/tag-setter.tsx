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

// ─── Types ────────────────────────────────────────────────────────────────────

interface TagItem {
  id: string
  name: string
}

interface ResizingConfig {
  expands?: boolean
  maxWidth?: number
  width?: number
}

interface TagSetterProps {
  placeholder?: string
  maxTags?: number
  resizing?: ResizingConfig
  onSave?: (tags: TagItem[]) => void
}

// ─── Tag Sub-component ────────────────────────────────────────────────────────

const Tag = ({ tagType, onRemoveTag }: { tagType: string; onRemoveTag: () => void }) => (
  <motion.section
    initial={{ scale: 0.5, opacity: 0, filter: "blur(6px)" }}
    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    exit={{ scale: 0.5, opacity: 0, filter: "blur(6px)" }}
    transition={{
      type: "spring",
      stiffness: 500,
      damping: 30,
      opacity: { duration: 0.18 },
      filter: { duration: 0.18 },
    }}
    className="relative flex justify-center hover:text-black/25 items-center text-center rounded-full bg-transparent tracking-[0.01em] px-3.5 overflow-clip border-dashed border text-[0.9rem]"
    style={{ color: "var(--kiwi-tag-text-color)", borderColor: "var(--kiwi-tag-border)" }}
  >
    <button
      className="absolute opacity-0 w-full hover:opacity-100 flex justify-center items-center h-full transition-opacity duration-200"
      onClick={onRemoveTag}
      aria-label={`Remove tag ${tagType}`}
      style={{ background: "var(--kiwi-tag-remove-overlay)" }}
    >
      <HugeiconsIcon icon={CancelIcon} size={20} color="var(--kiwi-tag-remove-icon)" className="drop-shadow-lg" />
    </button>
    <p>{tagType}</p>
  </motion.section>
)

// ─── Save Confirmation Dialog ─────────────────────────────────────────────────

const SaveConfirmDialog = ({
  onSave,
  onDiscard,
}: {
  onSave: () => void
  onDiscard: () => void
}) => (
  <div className={`w-full h-full absolute rounded-full flex justify-center items-center text-[0.9rem]`}>
    <div className="flex gap-.5 flex-col items-center relative z-1">
      <p>Want to save your changes?</p>
      <div className="flex gap-2">
        <button className={`bg-blue-600`} onClick={onDiscard}>Discard</button>
        <button className={`bg-blue-600`} onClick={onSave}>Save</button>
      </div>
    </div>
    <div className={`bg-red-700 w-full h-full absolute opacity-20 rounded-full flex justify-center items-center`} />
  </div>
)

// ─── TagSetter ────────────────────────────────────────────────────────────────

export function TagSetter({
  placeholder,
  maxTags = 5,
  resizing = { expands: false, maxWidth: 880, width: 420 },
  onSave,
}: TagSetterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [tags, setTags] = useState<TagItem[]>([])
  const [tagName, setTagName] = useState("")
  const [showConfirm, setShowConfirm] = useState(false)

  const { width = 420, maxWidth = 880, expands = false } = resizing

  function addTag(name: string) {
    if (tags.length < maxTags) {
      setTags((prev) => [{ id: crypto.randomUUID(), name }, ...prev])
    }
    setTagName("")
  }

  function removeTag(id: string) {
    setTags((prev) => prev.filter((t) => t.id !== id))
  }

  function removeLastTag() {
    setTags((prev) => prev.filter((_, i) => i !== 0))
  }

  function handleMainButton() {
    if (!isOpen) {
      setIsOpen(true)
      return
    }
    if (tags.length === 0) {
      setIsOpen(false)
      return
    }
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
    <section className={`relative `}>
      {showConfirm && (
        <SaveConfirmDialog onSave={handleSave} onDiscard={handleDiscard} />
      )}

      <motion.section
        initial={false}
        animate={{ width: isOpen ? Math.min(width, maxWidth) : 115 }}
        transition={{ type: "spring", stiffness: 260, damping: 32 }}
        className={`rounded-full flex items-center gap-1.5 overflow-hidden
                     p-2 ${ (!expands && isOpen) && `py-[8px] px-[10px] rounded-[50px] border border-dashed`}`}
        style={{
          background: "var(--kiwi-tag-bg)",
          boxShadow: "var(--kiwi-tag-shadow)",
          borderColor: "var(--kiwi-tag-border)",
        }}
      >
        {/* Main toggle button */}
        <motion.button
          onClick={handleMainButton}
          whileTap={{ scale: 0.88 }}
          whileHover={isOpen ? { scale: 1.06, backgroundImage: "var(--kiwi-tag-btn-hover-bg)" } : {}}
          animate={{ backgroundImage: isOpen ? "var(--kiwi-tag-btn-bg)" : "none" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`flex-shrink-0 flex items-center rounded-full ${isOpen ? "w-9 h-9 justify-center" : "gap-2 p-1"}`}
          style={isOpen ? { boxShadow: "var(--kiwi-tag-btn-shadow)" } : {}}
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
                style={{ display: 'flex' }}
              >
                <HugeiconsIcon icon={CancelCircleIcon} size={24} color="var(--kiwi-tag-icon-color)"/>
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="flex gap-2 items-center"
              >
                <motion.span
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{ display: 'flex' }}
                >
                  <HugeiconsIcon icon={AddCircleIcon} size={24} color="black"/>
                </motion.span>
                <p style={{ color: "var(--kiwi-tag-text-color)" }}>Add Tag</p>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Tag list */}
        <div className={`flex justify-between`}>
          {(tags.length > 0 && isOpen) && (
            <div className={`flex gap-[8px] items-center`}>
              <AnimatePresence initial={false}>
                {tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    tagType={tag.name}
                    onRemoveTag={() => removeTag(tag.id)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Input area */}
        {isOpen && (
          <form className={`flex justify-between items-center w-full`}>
            <input
              className={`text-ellipsis w-full text-[0.9rem] outline-0`}
              type="text"
              value={tagName}
              name="Tag Input"
              style={{ height: '24px', color: "var(--kiwi-tag-input-color)" }}
              onChange={(e) => setTagName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && tagName.trim()) {
                  e.preventDefault()
                  addTag(tagName.trim())
                }
              }}
              placeholder={placeholder}
            />

            <div className={`flex gap-2 rounded-full ml-1`}>
              <motion.button
                onClick={(e) => { e.preventDefault(); removeLastTag() }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.06, backgroundImage: "var(--kiwi-tag-btn-hover-bg)" }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className={`rounded-full p-1.5 flex items-center justify-center`}
                style={{
                  backgroundImage: "var(--kiwi-tag-btn-bg)",
                  boxShadow: "var(--kiwi-tag-btn-shadow)",
                  transition: "background-image 0.2s ease",
                }}
                aria-label="Remove last tag"
              >
                <HugeiconsIcon icon={RemoveCircleIcon} size={24} color="var(--kiwi-tag-icon-color)"/>
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  if (tagName.trim()) addTag(tagName.trim())
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.06, backgroundImage: "var(--kiwi-tag-btn-hover-bg)" }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className={`rounded-full p-1.5 flex items-center justify-center`}
                style={{
                  backgroundImage: "var(--kiwi-tag-btn-bg)",
                  transition: "background-image 0.2s ease",
                }}
                aria-label="Add tag"
              >
                <HugeiconsIcon icon={AddCircleIcon} size={24} color="var(--kiwi-tag-icon-color)"/>
              </motion.button>
            </div>
          </form>
        )}
      </motion.section>
    </section>
  )
}
