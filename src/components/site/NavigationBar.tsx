'use client'
import { useState } from "react"
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Sun01Icon, Moon02Icon } from '@hugeicons/core-free-icons'

//Main navigation component
const NavigationBar = ({}) => {
  const [isLight, setIsLight] = useState<Boolean>(false)

  return (
    <nav className={`flex bg-red-600  px-[28px] justify-between items-center py-[12px] border-b text-[.9rem] font-medium`}>
      <ul className={`flex gap-[48px]`}>
        <li>Docs</li>
        <li>Components</li>
        <li>Figma files</li>
      </ul>
      <ul className={`flex gap-[18px]`}>
        <li><HugeiconsIcon icon = {Github01Icon} size={20}></HugeiconsIcon></li>
        <li>
          <button onClick={()=> setIsLight(s => !s)}>
          <HugeiconsIcon icon = {isLight ? Moon02Icon : Sun01Icon} size={20}></HugeiconsIcon>
          </button>
          </li>
      </ul>
    </nav>
  )
}


export default NavigationBar