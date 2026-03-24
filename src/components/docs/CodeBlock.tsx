import { HugeiconsIcon } from '@hugeicons/react'
import {  CopyIcon } from '@hugeicons/core-free-icons'
//Code Display
const CodeBlock = ({children}: CodeBlockProps)=> {
  
  return(
    <div className={`bg-red-600 p-[14px] border border-blue-600 relative rounded-[14px]   max-h-[400px] min-h-[100px]`}>
      <pre className={`relative`}>
        <code>{children}</code>
      </pre>
      <button className={`absolute top-2.5 right-2.5 border-1 bg-blue-600 w-[34px] h-[34px] rounded-[8px] flex justify-center items-center cursor-pointer`}
              onClick={()=>{}}>
        <HugeiconsIcon icon={CopyIcon} size={18}></HugeiconsIcon>
      </button>
    </div>
  )
}

type CodeBlockProps = {
 children?: React.ReactNode 
}

export default CodeBlock