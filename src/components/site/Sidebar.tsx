'use client'
import { useState } from "react";
import { components } from "@/data/components";
//Sidebar Readbar
const SideBar = ({}) => {
 const [isActive, setIsActive] = useState<Boolean>(false)
  
 return (
    <aside className={`bg-red-500 w-[288px] py-[50px] flex  flex-col gap-[24px] px-[38px] h-screen border-r-2 border-green-500`}>
      <section className={`gap-2 flex flex-col`}>
        <p className={`text-[0.9rem] px-[8px]`}>Getting Started</p>
        <ul className={`flex flex-col gap-[4px] cursor-pointer`}> 
          <li className={`p-[4px] px-[8px] bg-blue-500 rounded-[8px]`}>Introduction</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Installation</li>
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Components</li>
          <li className={`p-[5px] px-[8px]  rounded-[8px]`}>MCP</li>
        </ul>
      </section>
      <section className={`gap-2 flex flex-col`}>
        <p className={`text-[0.9rem] px-[8px]`}>Components</p>
        <ul className={`flex flex-col gap-[4px] cursor-pointer`}>
          {
            components.map(c => <li key={c.componentType}
                                    className={`p-[4px] px-[8px]  rounded-[8px]`}>{c.componentType}</li>)
          }
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

export { SideBar }