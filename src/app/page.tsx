'use client'
import Image from "next/image";
import { Children, useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Sun01Icon, Moon02Icon, FilterVerticalIcon, ArrowRight02Icon, ArrowLeft02Icon} from '@hugeicons/core-free-icons'
import { componentCategories, components } from "./components";
export default function Home() {
  const [isLight, setIsLight] = useState<Boolean>(false)

  return (
    // <NavigationBar/>

    // <SideBar></SideBar>
    <Table/>
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
          <li className={`p-[4px] px-[8px]  rounded-[8px]`}>Installation</li>
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

const NavigationBar = ({}) => {
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
  )
}

const Table = ({})=> {
  
  const [currentSort, setCurrentSort] = useState<string>('All')
  console.log(components)

  function handleFilter(component: string){
    setCurrentSort(component);

  }
  return(
    <div className={`max-w-[781px] flex flex-col p-5`}>
    
        <div className={`flex gap-6 items-center px-[14px] py-[4px] border-2 rounded-t-[10px] border-b-0 text-[0.8rem] font-medium w-full bg-red-600`}>
          

            <div className={`flex items-center gap-1 shrink-0`}>
              <HugeiconsIcon icon={FilterVerticalIcon} size={18}/>
              <h1 className="">Sort components by: 
                <span className="ml-3.5">
                {currentSort}
                </span>

              </h1>
            </div>
            
          <div className={`flex justify-between flex-1 items-center`}>
            <div className="relative">
              <div className="filter-bubble"/>
              <ul className={`flex gap-4 font-medium  anchor-filter-bar`}>
                  {/* <li className={` bg-blue-500 anchor-item text-center py-[4px] px-[14px] rounded-md`}
                      onClick={()=>{}}
                  >Buttons</li> */}

                  {/* {

                    components.map(({ category }) => { 
                      if(currentSort !== category){
                        return ( 
                                  <li className={`anchor-item text-center py-[4px] px-[14px]`}
                                    onClick={()=>{handleFilter(category)}}>
                                    {category}
                                  </li>
                              )}
                        })


                  }  */}


                  {

                    componentCategories.map((c) => { 
                      if(currentSort !== c){
                        return ( 
                                  <li key={c}
                                      className={`anchor-item text-center py-[4px] px-[14px]`}
                                       onClick={()=>{handleFilter(c)}}>
                                      {c}
                                  </li>
                              )}
                        })


                  } 


                  {/* {
                  components.map((c =>  
                                <li className={`anchor-item text-center py-[4px] px-[14px]`}
                                     onClick={()=>{handleFilter(c.category)}}>
                                      {c.category}
                                 </li>
                                 ))
                  } */}
              </ul>

            </div>

            <div className={`w-px bg-blue-600 h-auto self-stretch`}></div>
            <div className={`flex gap-[8px] items-center justify-center`}>
              <button className={`cursor-pointer`}>
                <HugeiconsIcon icon={ArrowLeft02Icon} size={18}/>
              </button>
              <button className={`cursor-pointer`}>
                <HugeiconsIcon icon={ArrowRight02Icon} size={18}/>
              </button>
            </div>
          </div>
         

          
        </div>
      
      <div className={`grid grid-cols-3 auto-rows-auto border-1  rounded-b-[10px] text-[0.9rem] font-medium overflow-clip `}>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>
        <TableChild children = {`Blah2`}/>

      </div>
    </div>
  )
}

type TableChildProps = {
  children: React.ReactNode
}

const TableChild = ({children}: TableChildProps) => {
  return(
          <div className={`border-1  px-[14px] py-[12px] cursor-pointer hover:bg-blue-50`}>{children}</div>
  )
}