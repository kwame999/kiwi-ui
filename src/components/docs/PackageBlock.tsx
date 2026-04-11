"use client";

import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SoftwareLicenseIcon, CopyIcon } from "@hugeicons/core-free-icons";

export default function PackageBlock({ base }: { base: string }) {
  const tabs = ["pnpm", "npm", "yarn", "bun"] as const;
  const [currentTab, setCurrentTab] = useState<(typeof tabs)[number]>("pnpm");
  const [isCopied, setIsCopied] = useState(false);
  const [html, setHtml] = useState("");

  function getCommand(tab: string) {
    switch (tab) {
      case "pnpm": return `pnpm ${base}`;
      case "npm":  return `npx ${base}`;
      case "yarn": return `yarn ${base}`;
      case "bun":  return `bun x ${base}`;
      default:     return `pnpm ${base}`;
    }
  }

  useEffect(() => {
    let isMounted = true;
    const renderCode = async () => {
      const { codeToHtml } = await import("shiki");
      const highlighted = await codeToHtml(getCommand(currentTab), {
        lang: "bash",
        theme: "one-dark-pro",
      });
      if (isMounted) setHtml(highlighted);
    };
    void renderCode();
    return () => { isMounted = false; };
  }, [currentTab, base]);

  async function handleCopy() {
    await navigator.clipboard.writeText(getCommand(currentTab));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1200);
  }

  return (
    <div className="flex flex-col bg-kiwi-codebody rounded-[12px] overflow-clip border border-kiwi-border ">
      <div className="flex items-center px-3 border-b border-kiwi-border bg-kiwi-code-tab">
        <HugeiconsIcon icon={SoftwareLicenseIcon} size={16} />
        <ul className="flex gap-1 px-2 py-2 text-[0.8rem]">
          {tabs.map((t) => (
            <li
              key={t}
              className={`px-2 cursor-pointer font-medium hover:text-blue-50 ${currentTab === t && "rounded-[6px] border-kiwi-border bg-kiwi-nav-active"}`}
              onClick={() => setCurrentTab(t)}
            >
              {t}
            </li>
          ))}
        </ul>
        <button
          className="ml-auto cursor-pointer"
          onClick={handleCopy}
          aria-label="Copy command"
        >
          <HugeiconsIcon icon={CopyIcon} size={16} />
        </button>
      </div>
      <div
        className="p-3 text-sm overflow-x-auto custom-scrollbar"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {isCopied && <span className="px-3 pb-2 text-[12px]">Copied!</span>}
    </div>
  );
}
