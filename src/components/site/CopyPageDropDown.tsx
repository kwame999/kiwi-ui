'use client'

import { useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react'
import { CopyIcon, ArrowDown01Icon, ClaudeIcon, ChatGptIcon} from '@hugeicons/core-free-icons'
//Copy page component dropdown
const CopyPageDropDown = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  function handleOpen(){
    setIsOpen(o => !o);
  }

  
  return(
    
    
 <div className={`relative flex bg-purple-700 w-fit text-[.9rem] py-[4px] rounded-lg pr-0`}>
      <button className={` border-r flex items-center  gap-2 px-[8px]`}>
        <HugeiconsIcon icon={CopyIcon} size={18} />
        <span>Copy page</span>
      </button>
      <button
        className={`py-0 p-[4px] flex items-center justify-center`}
        onClick={handleOpen}
      >
        <HugeiconsIcon icon={ArrowDown01Icon} size={18} />
      </button>
 
      {isOpen && (
        <div className={`absolute top-full right-0 mt-[2px] bg-blue-700 p-[8px] rounded-[12px] shadow-lg w-max text-[0.9rem]`}>
          <ul className={`flex flex-col gap-[4px]`}>
            <li className="flex items-center  gap-2 hover:bg-red-400 py-1 px-2 justify-center rounded-[4px] whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 147 70" style={{ width: 18, height: 18, flexShrink: 0 }}>
                <path d="M56 50.203V14h14v46.156C70 65.593 65.593 70 60.156 70c-2.596 0-5.158-1-7-2.843L0 14h19.797L56 50.203ZM147 56h-14V23.953L100.953 56H133v14H96.687C85.814 70 77 61.186 77 50.312V14h14v32.156L123.156 14H91V0h36.312C138.186 0 147 8.814 147 19.688V56Z" />
              </svg>
              View as Markdown
            </li>
            <li className="flex gap-2 items-center hover:bg-red-400 py-1 px-2  rounded-[4px] whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 147 70" style={{ width: 18, height: 18, flexShrink: 0 }}>
                <path d="M56 50.203V14h14v46.156C70 65.593 65.593 70 60.156 70c-2.596 0-5.158-1-7-2.843L0 14h19.797L56 50.203ZM147 56h-14V23.953L100.953 56H133v14H96.687C85.814 70 77 61.186 77 50.312V14h14v32.156L123.156 14H91V0h36.312C138.186 0 147 8.814 147 19.688V56Z" />
              </svg>
              Open in v0
            </li>
            <li className="flex gap-2 items-center hover:bg-red-400 py-1 px-2 rounded-[4px] whitespace-nowrap"
                onClick={()=>{handleOpen()}}>
             <HugeiconsIcon icon={ChatGptIcon} size={18} />
              Open in ChatGPT
            </li>
            <li className="flex gap-2 items-center hover:bg-red-400 py-1 px-2 rounded-[4px] whitespace-nowrap"
                onClick={()=>{handleOpen()}}>
            <HugeiconsIcon icon={ClaudeIcon} size={18} />
              Open in Claude
            </li>
            <li className="flex gap-2 items-center hover:bg-red-400 py-1 px-2 rounded-[4px] whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style={{ width: 16, height: 16, flexShrink: 0 }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              Open in Scira
            </li>
          </ul>
        </div>
      )}
    </div>

  
  )
}

export { CopyPageDropDown } 