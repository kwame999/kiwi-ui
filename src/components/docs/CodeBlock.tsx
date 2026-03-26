import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {  CopyIcon } from '@hugeicons/core-free-icons'
//Code Display
const CodeBlock = ({children}: CodeBlockProps)=> {
  
  const [isCopied, setIsCopied] = useState<boolean>(false)

  async function handleCopy() {
    const textToCopy = typeof children === "string" ? children : `${children ?? ""}`;
    await navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1200);
  }

  return(
    <div className={`bg-red-600 p-[14px] border border-blue-600 relative rounded-[12px]   max-h-[400px] min-h-[100px]`}>
      <pre className={`relative`}>
        <code>{children}</code>
      </pre>
      <button className={`absolute top-2.5 right-2.5 border-1 bg-blue-600 p-1 rounded-[6px] flex justify-center items-center cursor-pointer`}
              onClick={handleCopy}>
        <HugeiconsIcon icon={CopyIcon} size={18}></HugeiconsIcon>
      </button>
    </div>
  )
}

type CodeBlockProps = {
 children?: React.ReactNode 
}

export default CodeBlock