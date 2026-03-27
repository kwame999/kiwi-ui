import { HugeiconsIcon } from "@hugeicons/react";
import { CopyIcon } from "@hugeicons/core-free-icons";

//Code Display
const CodeBlock = ({ children }: CodeBlockProps) => {
  async function handleCopy() {
    const textToCopy =
      typeof children === "string" ? children : `${children ?? ""}`;
    await navigator.clipboard.writeText(textToCopy);
  }

  return (
    <div className="relative max-h-[400px] min-h-[100px] rounded-[12px] border border-kiwi-border bg-kiwi-codebody p-[14px]">
      <pre className="relative">
        <code>{children}</code>
      </pre>
      <button
        className="absolute top-2.5 right-2.5 flex cursor-pointer items-center justify-center rounded-[6px]  bg-kiwi-copy-bg border-kiwi-border border p-1"
        onClick={handleCopy}
      >
        <HugeiconsIcon icon={CopyIcon} size={18}></HugeiconsIcon>
      </button>
    </div>
  );
};

type CodeBlockProps = {
  children?: React.ReactNode;
};

export default CodeBlock;