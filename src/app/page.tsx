'use client'
import Image from "next/image";
import { useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Sun01Icon, Moon02Icon } from '@hugeicons/core-free-icons'

export default function Home() {
  const [isLight, setIsLight] = useState<Boolean>(false)

  return (
    <nav className={`flex bg-red-600  px-[28px] justify-between items-center py-[14px] border-b-2 text-[.9rem] font-medium`}>
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

    // <SideBar></SideBar>
  );
}
 const SideBar = ({}) => {
 const [isActive, setIsActive] = useState<Boolean>(false)
  
 return (
    <aside className={`bg-red-500 w-[288px] py-[50px] flex  flex-col gap-[24px] px-[38px] h-screen border-r-2 border-green-500`}>
      <section className={`gap-2 flex flex-col`}>
        <p className={`text-[0.9rem] px-[8px]`}>Getting Started</p>
        <ul className={`flex flex-col gap-[4px] cursor-pointer`}> 
          <li className={`p-[4px] px-[8px] bg-blue-500 rounded-[8px]`}>Introduction</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Components</li>
          <li className={`p-[5px] px-[8px]  rounded-[8px]`}>MCP</li>
        </ul>
      </section>
      <section className={`gap-2 flex flex-col`}>
        <p className={`text-[0.9rem] px-[8px]`}>Components</p>
        <ul className={`flex flex-col gap-[4px] cursor-pointer`}>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Environment Switch</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Tag Setter</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Tag Setter</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Tag Setter</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Tag Setter</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Tag Setter</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Tag Setter</li>
          <li></li>
        </ul>
      </section>
      <section className={`gap-2 flex flex-col`}>
        <p className={`text-[0.9rem] px-[8px]`}>Figma Components</p>
        <ul className={`flex flex-col gap-[4px] cursor-pointer`}> 
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Tag</li>
          <li className={`p-[5px] px-[8px]  rounded-[8px]`}></li>
        </ul>
      </section>
    </aside>
  );
}
