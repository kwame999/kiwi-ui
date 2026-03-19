'use client'
import Image from "next/image";
import { Children, useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Sun01Icon, Moon02Icon, FilterVerticalIcon, ArrowRight02Icon, ArrowLeft02Icon, FilterIcon, SoftwareLicenseIcon, CopyIcon} from '@hugeicons/core-free-icons'
import { componentCategories, components } from "./components";
import { ComponentTypes } from "./components";

export default function Home() {

  return (
    // <NavigationBar/>
    // <SideBar></SideBar>
    // <Table data={components}/>
    <CliBlock/>
  );
}


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
//Main navigation component
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

//Table components
const Table = ({data}: TableProps) => {
  const [currentSort, setCurrentSort] = useState<string>(componentCategories[0])
  function handleFilter(component: string){
    setCurrentSort(component);
  }
  
  return(
    <div className={`max-w-[781px] flex flex-col p-5`}>
      <FilterBar currentSort={currentSort} onFilter={handleFilter}></FilterBar>
      <div className={`grid grid-cols-3 auto-rows-auto border-1  rounded-b-[10px] text-[0.9rem] font-medium overflow-clip`}>
        {
          data.map(c => (
            currentSort === c.category ?
            <TableChild key={c.componentType} children={c.componentType}/> : 
            currentSort === componentCategories[0] &&
            <TableChild key={c.componentType} children={c.componentType}/>))
            
            
          }

      </div>
    </div>
  )
}

const TableChild = ({children}: TableChildProps) => {
  return(
    <div className={`border-1 px-[14px] py-[12px] cursor-pointer hover:bg-blue-50`}>{children}</div>
  )
}

const FilterBar = ({currentSort, onFilter}: FilterBarProps ) => {
  
  return(
    <div className={`flex gap-6 items-center px-[14px] py-[4px] border-2 rounded-t-[10px] border-b-0 text-[0.8rem] font-medium w-full bg-red-600`}>
            
            <div className={`flex items-center gap-1 shrink-0`}>
              <HugeiconsIcon icon={FilterIcon} size={18}/>
              <h1 className="">Sort components by: 
                <span className="ml-3.5">
                {currentSort}
                </span>
              </h1>
            </div>

          <div className={`flex justify-between flex-1 items-center`}>
                        <div className={`w-px bg-blue-600 h-auto self-stretch`}></div>

            <div className="relative">
              <div className="filter-bubble"/>
              <ul className={`flex gap-4 font-medium  anchor-filter-bar`}>
                  {
                    componentCategories.map((c) => { 
                      if(currentSort !== c){
                        return ( <li key={c} className={`anchor-item text-center py-[4px] px-[14px]`} onClick={()=>{onFilter(c)}}>{c}</li>)}
                      })
                    } 
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
  )
}



// Cli installation

const CliBlock = ({}) => {

  return(
    <div className={`flex flex-col bg-purple-600 rounded-[8px] mt-20 overflow-clip border-1`}>
      <CliTab/>
      <pre className={`p-3.5`}>
        <code className={`bg-amber-600`}>
          sadasd
        </code>
      </pre>
    </div>
  )
}

const CliTab = () => {
  
  const tabs = ['pnpm', 'npm', 'yarn', 'bun']
  const [currentTab, setCurrentTab] = useState<string>('pnpm')
  
  
  return(
    <div className={`flex items-center px-3.5 border-b border-red-800`}>
      <HugeiconsIcon icon={SoftwareLicenseIcon} size={20} />
      <ul className={`flex gap-1 px-2 py-2 text-[0.9rem] `}>
        {tabs.map(t => (<li className={`px-2 cursor-pointer hover:text-blue-50 ${currentTab === t && 'bg-blue-400 rounded-[4px] border border-red-400'}`} 
                            onClick={()=> {setCurrentTab(t)}}>{t}</li>))}
      </ul>
      <button className={`ml-auto cursor-pointer`}>
      <HugeiconsIcon icon={CopyIcon} size={20} />
      </button>
    </div>
  )
}


// Component Preview component


//Types
type FilterBarProps = {
  currentSort: string,
  onFilter: (category: string) => void
}

type TableProps = {
  data: ComponentTypes[]
}

type TableChildProps = {
  children: React.ReactNode
}
