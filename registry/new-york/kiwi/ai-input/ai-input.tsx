import { HugeiconsIcon } from "@hugeicons/react";
import { ClaudeIcon, Globe02Icon, SquareArrowUp02Icon, Mic01Icon} from "@hugeicons/core-free-icons";
import { useState } from "react";

type AiInputProps = {
    placeholdr?: string
}



export const AiInput = ({placeholdr = 'Whats on your mind?'}: AiInputProps) => {
const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const [webActive, setWebActive] = useState(false)
  const hasValue = value.trim().length > 0

    return(
    <div
      className="p-px rounded-[20px] w-full max-w-[480px] transition-all duration-200"
      style={{
        background: focused
          ? "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.9), oklch(0.329 0.004 265 / 0.3) 60%, oklch(0.173 0.004 264))"
          : "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
      }}
    >
      <div
        className="flex flex-col p-3 rounded-[20px] gap-3 min-h-[160px]"
        style={{ background: "oklch(0.173 0.004 264)" }}
      >
        {/* Text area */}
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholdr}
          rows={4}
          className="w-full resize-none bg-transparent outline-none text-sm leading-relaxed px-2 pt-1"
          style={{
            color: "oklch(0.92 0.004 264)",
            caretColor: "oklch(0.72 0.004 264)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-1">

          {/* Left: model + web */}
          <div className="flex items-center gap-2">

            {/* Claude pill */}
            <div className="p-px rounded-full"
              style={{
                background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))"
              }}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-150"
                style={{
                  background: "oklch(0.22 0.004 264 / 0.6)",
                  color: "oklch(0.72 0.004 264)",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "oklch(0.92 0.004 264)")}
                onMouseLeave={e => (e.currentTarget.style.color = "oklch(0.72 0.004 264)")}
              >
                <HugeiconsIcon icon={ClaudeIcon} size={14} />
                <span>Claude</span>
              </button>
            </div>

            {/* Web toggle */}
            <div className="p-px rounded-full"
              style={{
                background: webActive
                  ? "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.9), oklch(0.329 0.004 265 / 0.3) 60%, oklch(0.173 0.004 264))"
                  : "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
              }}
            >
              <button
                onClick={() => setWebActive(w => !w)}
                className="flex items-center justify-center p-1.5 rounded-full transition-all duration-150"
                style={{
                  background: webActive ? "oklch(0.329 0.004 265 / 0.45)" : "oklch(0.22 0.004 264 / 0.6)",
                  color: webActive ? "oklch(0.92 0.004 264)" : "oklch(0.52 0.004 264)",
                }}
              >
                <HugeiconsIcon icon={Globe02Icon} size={15} />
              </button>
            </div>

          </div>

          {/* Right: mic + send */}
          <div className="flex items-center gap-2">

            {/* Mic */}
            <button
              className="flex items-center justify-center p-1.5 rounded-full transition-all duration-150"
              style={{ color: "oklch(0.52 0.004 264)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "oklch(0.92 0.004 264)")}
              onMouseLeave={e => (e.currentTarget.style.color = "oklch(0.52 0.004 264)")}
            >
              <HugeiconsIcon icon={Mic01Icon} size={17} />
            </button>

            {/* Send */}
            <div
              className="p-px rounded-lg transition-all duration-200"
              style={{
                background: hasValue
                  ? "linear-gradient(to bottom, oklch(0.55 0.18 25 / 0.6), oklch(0.329 0.004 265 / 0.1) 60%, oklch(0.173 0.004 264))"
                  : "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.4), oklch(0.173 0.004 264))",
              }}
            >
              <button
                disabled={!hasValue}
                className="flex items-center justify-center p-1.5 rounded-lg transition-all duration-150"
                style={{
                  background: hasValue ? "oklch(0.22 0.06 25 / 0.5)" : "oklch(0.22 0.004 264 / 0.4)",
                  color: hasValue ? "oklch(0.75 0.20 25)" : "oklch(0.40 0.004 264)",
                  cursor: hasValue ? "pointer" : "not-allowed",
                }}
                onMouseEnter={e => { if (hasValue) e.currentTarget.style.background = "oklch(0.22 0.06 25 / 0.75)" }}
                onMouseLeave={e => { if (hasValue) e.currentTarget.style.background = "oklch(0.22 0.06 25 / 0.5)" }}
              >
                <HugeiconsIcon icon={SquareArrowUp02Icon} size={17} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
)
}