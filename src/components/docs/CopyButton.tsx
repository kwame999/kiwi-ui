'use client';
import { HugeiconsIcon } from "@hugeicons/react";
import { CopyIcon } from "@hugeicons/core-free-icons";

export default function CopyButton({ code }: { code: string }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <button
      className="absolute top-2.5 right-2.5 flex cursor-pointer items-center justify-center rounded-[6px] bg-kiwi-copy-bg border-kiwi-border border p-1 opacity-0 group-hover:opacity-100 transition-opacity"
      onClick={handleCopy}
    >
      <HugeiconsIcon icon={CopyIcon} size={16} />
    </button>
  );
}