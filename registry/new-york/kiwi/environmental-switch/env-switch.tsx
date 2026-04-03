import { HugeiconsIcon } from "@hugeicons/react";
import { Sun02Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";

type EnvSwitchProps = {
  defaultMode: 'light' | 'dark'
}

export const EnvSwitch = ({ defaultMode }: EnvSwitchProps) => {
  const [env, setEnv] = useState<string>(defaultMode)

  return (
    <div
      className="p-px rounded-md w-fit"
      style={{
        background: "linear-gradient(to bottom, oklch(0.329 0.004 265 / 0.7), oklch(0.329 0.004 265 / 0.2) 60%, oklch(0.173 0.004 264))",
      }}
    >
      <div
        className="relative flex items-center gap-1 px-1 py-1 rounded-md"
        style={{ background: "oklch(0.173 0.004 264)" }}
      >
        {/* Sliding pill */}
        <div
          className="absolute top-1 bottom-1 rounded-md transition-all duration-200 ease-in-out"
          style={{
            background: "oklch(0.329 0.004 265 / 0.45)",
            width: "calc(50% - 6px)",
            left: env === 'light' ? "4px" : "calc(50% + 2px)",
          }}
        />

        <button
          onClick={() => setEnv('light')}
          className="relative z-10 px-3 py-1.5 rounded-md transition-colors duration-200"
          style={{ color: env === 'light' ? "oklch(0.92 0.004 264)" : "oklch(0.52 0.004 264)" }}
        >
          <HugeiconsIcon icon={Sun02Icon} size={18} />
        </button>

        <div className="relative z-10 w-px h-4 rounded-full transition-opacity duration-200"
          style={{
            background: "oklch(0.329 0.004 265 / 0.55)",
            opacity: env === 'light' || env === 'dark' ? 0 : 1,
          }}
        />

        <button
          onClick={() => setEnv('dark')}
          className="relative z-10 px-3 py-1.5 rounded-md flex items-center transition-colors duration-200"
          style={{ color: env === 'dark' ? "oklch(0.92 0.004 264)" : "oklch(0.52 0.004 264)" }}
        >
          <HugeiconsIcon icon={Moon02Icon} size={18} />
        </button>
      </div>
    </div>
  )
}