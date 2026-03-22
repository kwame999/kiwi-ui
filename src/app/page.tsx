'use client'
import Image from "next/image";
import { Children, useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Sun01Icon, Moon02Icon, FilterVerticalIcon, ArrowRight02Icon, ArrowLeft02Icon, FilterIcon, SoftwareLicenseIcon, CopyIcon, ArrowDown01Icon, ClaudeIcon, ChatGptIcon} from '@hugeicons/core-free-icons'
import { componentCategories, components } from "./components";
import { ComponentTypes } from "./components";

export default function Home() {

  return (
    // <NavigationBar/>
    // <SideBar></SideBar>
    // <Table data={components}/>
   
    // <ComponentView currentView={components}/>
     
    // <TextBlock largestHead={false} heading="Inspiration" body="dfdsfsffffffffffffffffffffffff"></TextBlock>
    // <TitileHead titleHead={{h04: true, content: 'tesdfsfsft'}}></TitileHead>
    <div className="p-5 flex justify-center">
      {/* <CodeBlock></CodeBlock> */}
      {/* <PaginationArrows data={components}></PaginationArrows> */}
      {/* <PropTable data={components[1]}></PropTable> */}
       {/* <CliBlock/> */}
       <CopyPageDrownDown></CopyPageDrownDown>
    </div>
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
  const [currentView, setCurrentView] = useState<string>('CLI')
  
  function onCurrentView(view: string){
    if(currentView !== view){
      setCurrentView(view)
    }
  }
  
  return(
    <div className={'flex flex-col gap-[8px] justify-between rounded-t-md'}>
      <div className={`flex gap-[14px] items-center `}>
        <button className={`cursor-pointer px-[4px] py-[2px] rounded-[8px] ${(currentView === 'CLI') && 'bg-red-500 border border-blue-500'}`}
                onClick={() => onCurrentView('CLI')}>CLI</button>
        <button className={`cursor-pointer px-[4px] py-[2px] rounded-[8px] ${(currentView === 'Manual') && 'bg-red-500 border border-blue-500'}`}
                onClick={()=> onCurrentView('Manual')}>Manual</button>
      </div>

      <div className={`flex flex-col bg-purple-600 rounded-[8px]  overflow-clip border-1`}>
        <CliTab/>
        <pre className={`p-3.5`}>
          <code className={`bg-amber-600`}>
            sadasd
          </code>
        </pre>
      </div>
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
        {tabs.map(t => (<li key={t} 
                            className={`px-2 cursor-pointer hover:text-blue-50 ${currentTab === t && 'bg-blue-400 rounded-[4px] border border-red-400'}`} 
                            onClick={()=> {setCurrentTab(t)}}>{t}</li>))}
      </ul>
      <button className={`ml-auto cursor-pointer`}>
      <HugeiconsIcon icon={CopyIcon} size={20} />
      </button>
    </div>
  )
}


// Component Preview component
const ComponentView = ({children, currentView}: ComponentViewProps ) => {
 
  const [currentTab, setCurrentTab] = useState<string>('Preview')

  return(
    <div className={`flex flex-col rounded-[8px]`}>
      <ComponentViewTab currentTab={currentTab} onCurrentTab={setCurrentTab}/>
      <div className={`border p-5 flex justify-center items-center border-amber-600`}>
        {children}
      </div>
    </div>
  )
}

const ComponentViewTab = ({currentTab, onCurrentTab}: ComponentViewTabProps ) => {
  
  return(
    <div className={`flex justify-between bg-red-700 px-[8px] py-[8px] text-[0.9rem] font-medium items-center rounded-t-[8px]`}>
      <ul className={`flex gap-2`}>
        <li onClick={()=> onCurrentTab('Preview')}
            className={`px-[8px] py-[4px] rounded-[4px] ${currentTab === 'Preview' && 'bg-blue-600 cursor-pointer'}`}>Preview</li>
        <li onClick={()=> onCurrentTab('Code')}
            className={`px-[8px] py-[4px] rounded-[4px] ${currentTab === 'Code' && 'bg-blue-600 cursor-pointer'}`}>Code</li>
      </ul>
      
      <button className={`px-[14px] py-[4px] bg-yellow-500 rounded-[4px]`}>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.35723 4H13.168C14.7132 4 15.9659 5.25266 15.9659 6.7979V10.4322H14.4007V6.7979C14.4007 6.76067 14.3992 6.7237 14.3964 6.68706L10.5856 10.4316C10.5984 10.432 10.6114 10.4322 10.6243 10.4322H14.4007V11.9105H10.6243C9.07903 11.9105 7.79199 10.6456 7.79199 9.10032V5.47569H9.35723V9.10032C9.35723 9.17012 9.36263 9.23908 9.37311 9.30672L13.2678 5.4798C13.2349 5.47708 13.2017 5.47569 13.168 5.47569H9.35723V4Z" fill="#171717"/>
        <path d="M5.50752 11.6378L0 5.47461H2.21573L5.44924 9.09305V5.47461H7.1014V11.0294C7.1014 11.8678 6.06616 12.2629 5.50752 11.6378Z" fill="#171717"/>
        </svg>
      </button>
    </div>
  )
}


// Component Title and texblocks
const TextBlock = ({heading, body, subhead, largestHead }: TextBlockProps) => {
  
  return(
    <div className={`flex flex-col gap-[4px] `}>
      
      <div className={`flex flex-col`}>
        {
          largestHead ? 
          <>
            <h1 className={`tracking-[-1.5px] font-semibold leading-[34px]`}>{heading}</h1> 
            <p>{subhead}</p>
          </> :
          
          <> 
               <h3 className={`tracking-[-0.5px] font-medium leading-[24px]`}>{heading}</h3> 
               <p>{subhead}</p>
          </>
        }
      
      </div>
      <p className={'text-[0.9rem] leading-[24px] text-red-600 '}>{body}</p>
    </div>

  )
}

const TitileHead = ({titleHead}: TitleBlockProps) => {
const {h01, h02, h03, content} = titleHead

return(
h01 ? <h1>{content}</h1> : 
h02 ? <h2>{content}</h2> : 
h03 ? <h3>{content}</h3> : 
<h4>{content}</h4>
)
}

//Code Display
const CodeBlock = ({children}: CodeBlockProps)=> {
  
  return(
    <div className={`bg-red-600 p-[14px] border border-blue-600 relative rounded-[14px] h-[400px]`}>
      <pre className={``}>
        <code>{children}</code>
      </pre>
      <button className={`absolute top-2.5 right-2.5 border-1 bg-blue-600 w-[34px] h-[34px] rounded-[8px] flex justify-center items-center cursor-pointer`}
              onClick={()=>{}}>
        <HugeiconsIcon icon={CopyIcon} size={18}></HugeiconsIcon>
      </button>
    </div>
  )
}


//Navigate to next component view component
const PaginationArrows = ({data, onPaginate}: PaginationArrowsProp) => {
  
  const [currentPage, setCurrentPage]= useState<number>(0)
  console.log(currentPage)
  function handleNext(){
    if(data.length !== currentPage)
    setCurrentPage(p => p+1)
  }

  function handlePrevious(){
    if(currentPage !== 0)
    setCurrentPage(p => p-1)
  }
  return(
    <div className={`flex gap-[8px]`}>
      <button className={`rounded-full border p-[4px]`}
              onClick={handlePrevious}>
        <HugeiconsIcon icon={ArrowLeft02Icon} size={20}></HugeiconsIcon>
      </button>
      <button className={`rounded-full border p-[4px]`}
              onClick={handleNext}>
        <HugeiconsIcon icon={ArrowRight02Icon} size={20}></HugeiconsIcon>
      </button>
    </div>
  )
}

//Prop table component
const PropTable = ({data}: PropTableProps) => {

  const { meta } = data!

  return(
    <table aria-label="Component Props">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
        </tr>        
      </thead>
      <tbody>
        {
          meta!.map(m => 
          <tr key={m.prop}>
          <td>{m.prop}</td>
          <td>{m.type}</td>
          <td>{m.defaults}</td>
          </tr>)
          }
      </tbody>
    </table>
  )
}

//Route to next page
const PageRoute = () => {
  return(
    <nav className={`flex justify-between`}>
      <a href="">

      </a>
      <a href="">

      </a>
    </nav>
  )
}

//Copy page component dropdown
const CopyPageDrownDown = () => {

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

type ComponentViewProps = {
  children?: React.ReactNode,
  currentView: ComponentTypes[]

}

type ComponentViewTabProps = {
  currentTab: string,
  onCurrentTab: (tab: string) => void
}

type TextBlockProps = {
  heading: string,
  body: string,
  subhead?: string,
  children?: React.ReactNode
  largestHead: boolean
}

type TitleBlockProps = {
  titleHead: {
    h01?: boolean,
    h02?: boolean,
    h03?: boolean,
    h04?: boolean,
    content: string,
  },
}

type CodeBlockProps = {

 children?: React.ReactNode 
}

type PaginationArrowsProp = {
 data: ComponentTypes[],
 onPaginate?: () => void
}

type PropTableProps = {
  data?: ComponentTypes
}