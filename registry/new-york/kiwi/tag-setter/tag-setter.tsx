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
    className="relative flex justify-center text-black/90 hover:text-black/25 items-center text-center rounded-full bg-transparent tracking-[0.01em] px-3.5 overflow-clip border-dashed border text-[0.9rem] border-[#444]"
  >
    <button
      className="absolute opacity-0 w-full hover:opacity-100 bg-[#c600002e]/60 flex justify-center items-center h-full transition-opacity duration-200"
      onClick={onRemoveTag}
      aria-label={`Remove tag ${tagType}`}
    >
      <HugeiconsIcon icon={CancelIcon} size={20} color="#ff0f0f" className="drop-shadow-lg" />
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
        className={`bg-[linear-gradient(180deg,_#dadada_0%,_#d8d8d8_100%)] rounded-full flex items-center gap-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.08)] overflow-hidden
                     p-2 ${ (!expands && isOpen) && `py-[8px] px-[10px] rounded-[50px] border border-[rgba(0,0,0,0.18)]`}`}
      >
        {/* Main toggle button */}
        <motion.button
          onClick={handleMainButton}
          whileTap={{ scale: 0.88 }}
          whileHover={isOpen ? { scale: 1.06, backgroundImage: "linear-gradient(180deg, #1a1a1a 0%, #4a4a4a 100%)" } : {}}
          animate={{ backgroundImage: isOpen ? "linear-gradient(180deg, #818181 0%, #4a4a4a 100%)" : "none" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`flex-shrink-0 flex items-center rounded-full ${isOpen ? "w-9 h-9 justify-center shadow-[0_2px_4px_rgba(0,0,0,0.4),_inset_0_1px_0_rgba(255,255,255,0.15)]" : "gap-2 p-1"}`}
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
                <HugeiconsIcon icon={CancelCircleIcon} size={24} color={`#AAAAAA`}/>
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
                  <HugeiconsIcon icon={AddCircleIcon} size={24} color={`black`}/>
                </motion.span>
                <p className="text-black/80">Add Tag</p>
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
          <form className={`flex justify-between items-center w-full text-black/50`}>
            <input
              className={`text-ellipsis w-full text-[0.9rem] border-black/30 outline-0`}
              type="text"
              value={tagName}
              name="Tag Input"
              style={{height: '24px'}}
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
                whileHover={{ scale: 1.06, backgroundImage: "linear-gradient(180deg, #1a1a1a 0%, #4a4a4a 100%)" }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className={`bg-[linear-gradient(180deg,_#818181_0%,_#4a4a4a_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.4),_inset_0_1px_0_rgba(255,255,255,0.15)] rounded-full p-1.5 flex items-center justify-center`}
                style={{ transition: "background-image 0.2s ease" }}
                aria-label="Remove last tag"
              >
                <HugeiconsIcon icon={RemoveCircleIcon} size={24} color={`#AAAAAA`}/>
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  if (tagName.trim()) addTag(tagName.trim())
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.06, backgroundImage: "linear-gradient(180deg, #1a1a1a 0%, #4a4a4a 100%)" }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className={`bg-[linear-gradient(180deg,_#818181_0%,_#4a4a4a_100%)] rounded-full p-1.5 flex items-center justify-center`}
                style={{ transition: "background-image 0.2s ease" }}
                aria-label="Add tag"
              >
                <HugeiconsIcon icon={AddCircleIcon} size={24} color={`#AAAAAA`}/>
              </motion.button>
            </div>
          </form>
        )}
      </motion.section>
    </section>
  )
}
