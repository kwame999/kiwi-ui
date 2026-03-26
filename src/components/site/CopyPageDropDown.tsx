'use client'

import { useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react'
import { CopyIcon, ArrowDown01Icon, ClaudeIcon, ChatGptIcon} from '@hugeicons/core-free-icons'

const CopyPageDropDown = ({isOpen, onOpen}:CopyPageProp) => {
  
    async function handleCopyPage() {
    await navigator.clipboard.writeText(window.location.href);
  }


  return(
    
 <div className={`relative flex bg-purple-700 w-fit text-[.9rem] py-[8px] rounded-lg pr-0`}>
      <button className={` border-r flex items-center  gap-3 px-[8px]`} onClick={handleCopyPage} aria-label="Copy page URL">
        <HugeiconsIcon icon={CopyIcon} size={18} />
        <span>Copy Page</span>
      </button>
      <button
        className={`py-0 p-[4px] flex items-center justify-center`}
        onClick={(e)=> {
          e.stopPropagation()
          onOpen()
        }}
      >
        <HugeiconsIcon icon={ArrowDown01Icon} size={18} />
      </button>
 
      {isOpen && (
        <div className={`absolute top-full right-0 mt-[2px] bg-blue-700 p-[8px] rounded-[12px] shadow-lg w-max text-[0.9rem]`}>
          <ul className={`flex flex-col gap-[4px] cursor-pointer`}>
            <li className="flex items-center  gap-2 hover:bg-red-400 py-1 px-2 justify-center rounded-[4px] whitespace-nowrap">
            <svg strokeLinejoin="round" viewBox="0 0 22 16" style={{ width: 18, height: 18, flexShrink: 0 }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M19.5 2.25H2.5C1.80964 2.25 1.25 2.80964 1.25 3.5V12.5C1.25 13.1904 1.80964 13.75 2.5 13.75H19.5C20.1904 13.75 20.75 13.1904 20.75 12.5V3.5C20.75 2.80964 20.1904 2.25 19.5 2.25ZM2.5 1C1.11929 1 0 2.11929 0 3.5V12.5C0 13.8807 1.11929 15 2.5 15H19.5C20.8807 15 22 13.8807 22 12.5V3.5C22 2.11929 20.8807 1 19.5 1H2.5ZM3 4.5H4H4.25H4.6899L4.98715 4.82428L7 7.02011L9.01285 4.82428L9.3101 4.5H9.75H10H11V5.5V11.5H9V7.79807L7.73715 9.17572L7 9.97989L6.26285 9.17572L5 7.79807V11.5H3V5.5V4.5ZM15 8V4.5H17V8H19.5L17 10.5L16 11.5L15 10.5L12.5 8H15Z" fill="currentColor"></path>
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
                onClick={()=>{onOpen()}}>
             <HugeiconsIcon icon={ChatGptIcon} size={18} />
              Open in ChatGPT
            </li>
            <li className="flex gap-2 items-center hover:bg-red-400 py-1 px-2 rounded-[4px] whitespace-nowrap"
                onClick={()=>{onOpen()}}>
            <HugeiconsIcon icon={ClaudeIcon} size={18} />
              Open in Claude
            </li>
          </ul>
        </div>
      )}
    </div>

  
  )
}

type CopyPageProp = {
  isOpen: boolean,
  onOpen: () => void
}

export { CopyPageDropDown } 