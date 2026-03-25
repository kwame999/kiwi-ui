'use client'
import { useState } from "react";
import { components } from "@/data/components";
//Sidebar Readbar
const SideBar = ({}) => {
 const [isActive, setIsActive] = useState<Boolean>(false)
  
 return (
    <aside className={`bg-red-500 w-[288px] py-6 flex flex-col gap-[24px] px-7 h-screen border-r font-medium`}>
      <section className={`gap-2 flex flex-col`}>
        <h1 className={`text-[12px] px-[8px] font-medium`}>Getting Started</h1>
        <ul className={`flex flex-col gap-[4px] cursor-pointer text-[14px]`}> 
          <li className={`p-[4px] px-[8px] bg-blue-500 rounded-[8px]`}>Introduction</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Installation</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Components</li>
          <li className={`p-[5px] px-[8px]  rounded-[8px]`}>MCP</li>
        </ul>
      </section>
      <section className={`gap-2 flex flex-col`}>
        <h1 className={`text-[12px] px-[8px] font-medium`}>Components</h1>
        <ul className={`flex flex-col gap-[4px] cursor-pointer text-[14px]`}>
          {
            components.map(c => <li key={c.componentType}
                                    className={`p-[4px] px-[8px]  rounded-[8px]`}>{c.componentType}</li>)
          }
        </ul>
      </section>
      <section className={`gap-2 flex flex-col`}>
        <h1 className={`text-[12px] px-[8px] font-medium`}>Figma Components</h1>
        <ul className={`flex flex-col gap-[4px] cursor-pointer text-[14px]`}> 
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Tag</li>
          <li className={`p-[5px] px-[8px]  rounded-[8px]`}></li>
        </ul>
      </section>
    </aside>
  );
}

export { SideBar }