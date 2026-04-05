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
      style={{ background: "var(--kiwi-border-gradient-default)" }}
    >
      <div
        className="relative flex items-center gap-1 px-1 py-1 rounded-md"
        style={{ background: "var(--kiwi-surface)" }}
      >
        {/* Sliding pill */}
        <div
          className="absolute top-1 bottom-1 rounded-md transition-all duration-200 ease-in-out"
          style={{
            background: "var(--kiwi-envswitch-pill-bg)",
            width: "calc(50% - 6px)",
            left: env === 'light' ? "4px" : "calc(50% + 2px)",
          }}
        />

        <button
          onClick={() => setEnv('light')}
          className="relative z-10 px-3 py-1.5 rounded-md transition-colors duration-200"
          style={{ color: env === 'light' ? "var(--kiwi-text-primary)" : "var(--kiwi-text-tertiary)" }}
        >
          <HugeiconsIcon icon={Sun02Icon} size={18} />
        </button>

        <div className="relative z-10 w-px h-4 rounded-full transition-opacity duration-200"
          style={{
            background: "var(--kiwi-envswitch-divider)",
            opacity: env === 'light' || env === 'dark' ? 0 : 1,
          }}
        />

        <button
          onClick={() => setEnv('dark')}
          className="relative z-10 px-3 py-1.5 rounded-md flex items-center transition-colors duration-200"
          style={{ color: env === 'dark' ? "var(--kiwi-text-primary)" : "var(--kiwi-text-tertiary)" }}
        >
          <HugeiconsIcon icon={Moon02Icon} size={18} />
        </button>
      </div>
    </div>
  )
}
