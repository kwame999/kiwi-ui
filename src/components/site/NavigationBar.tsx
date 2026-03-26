'use client'
import { useState } from "react"
import Link from "next/link"
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Sun01Icon, Moon02Icon } from '@hugeicons/core-free-icons'
import { Kiwi } from "./Logo"
//Main navigation component
const NavigationBar = ({}) => {
  const [isLight, setIsLight] = useState<Boolean>(false)

  return (
    <nav className={`flex bg-red-600  px-[28px] justify-between items-center py-[12px] border-b text-[.9rem] font-medium`}>
      <div className="flex items-center gap-8">
        <Kiwi></Kiwi>
        <ul className={`flex gap-[38px] cursor-pointer`}>
         <li className={`cursor-pointer transition-colors hover:text-amber-50`}>
            <Link href="/docs/introduction">Docs</Link>
          </li>
          <li className={`cursor-pointer transition-colors hover:text-amber-50`}>
            <Link href="/docs/components">Components</Link>
          </li>
          <li className={`cursor-pointer transition-colors hover:text-amber-50`}>
            <Link href="/docs/figma-files">Figma files</Link>
          </li>
        </ul>

      </div>
      <ul className={`flex gap-[18px] items-center`}>
        <li className={`cursor-pointer`}>
          <button className={`cursor-pointer flex items-center`}>
            <a href="https://github.com/kwame999/kiwi-ui" target="_brank">
            <HugeiconsIcon icon = {Github01Icon} size={18}></HugeiconsIcon>            
            </a>
          </button>
        </li>
        <li>
          <button className={`cursor-pointer flex items-center`}
                  onClick={()=> setIsLight(s => !s)}>
          <HugeiconsIcon icon = {isLight ? Moon02Icon : Sun01Icon} size={18}></HugeiconsIcon>
          </button>
          </li>
      </ul>
    </nav>
  )
}


export default NavigationBar