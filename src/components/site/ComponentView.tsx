'use client'

import { useState } from "react"
import { ComponentTypes } from "@/types"
import PropTable from "../docs/PropShowCaseTable"
import CodeBlock from "../docs/CodeBlock"
import CliBlock from "./CliBlock"
import PaginationArrows from "../docs/PaginationArrows"
import { components } from "@/data/components"
import { HugeiconsIcon } from "@hugeicons/react"
import { AlignHorizontalSpaceAroundIcon } from "@hugeicons/core-free-icons"
import { TextBlock, TitileHead } from "../docs/TextBlock"

const ComponentView = ({currentView, setActive, isExpanded}: ComponentViewProps ) => {
  const [currentTab, setCurrentTab] = useState<string>('Preview')

  return(
    <section className={`flex flex-col rounded-[8px] mt-1.5 h-screen`}>
      <ComponentViewTab currentTab={currentTab} onCurrentTab={setCurrentTab}/>
      
      <div className={` flex-1 bg-white `}>
      
          <div className="flex flex-col gap-8">
            <section className="flex flex-col gap-2">
              
                
                 
                  {/* <button className={`flex rounded-full bg-red-600 justify-center items-center p-1`}>
                    <HugeiconsIcon icon={AlignHorizontalSpaceAroundIcon} size={18}></HugeiconsIcon>
                  </button> */}
    
            <div className="min-h-[200px] w-full border-1 border-dashed border-slate-300 rounded-[8px] flex items-center justify-center bg-slate-50"
                  style={{height:  isExpanded ? 300 : 200}}>
               { 
                currentTab === 'Preview' ? <span className="text-slate-400">[ {currentView.componentType} Preview ]</span> :
                   <div className="rounded-[8px] bg-slate-950 p-4 font-mono text-sm text-blue-300">
                    <pre>
                      <code>{`// Logic for ${currentView.componentType} usage...`}</code>
                    </pre>
                  </div>
               }
            </div>
             
            </section>


            
            <section>
              <div className="mb-5">
                <TitileHead titleHead={{h03: true, content: 'Installations'}}></TitileHead>
                <hr />
              </div>
              <CliBlock data={currentView} />
            </section>

            <section>
              <div className="mb-5">
                <TitileHead titleHead={{h03: true, content: 'Usage'}}></TitileHead>
                <hr />
              </div>
              <div className={`flex flex-col gap-1`}>
                <CodeBlock></CodeBlock>
                <CodeBlock></CodeBlock>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <div>
              <TitileHead titleHead={{h03: true, content: 'Props'}}></TitileHead>
              <hr />
              </div>
              <PropTable data={currentView} />
            </section>
          </div>
      </div>
    </section>
  )
}

const ComponentViewTab = ({currentTab, onCurrentTab}: ComponentViewTabProps ) => {
  return(
    <div className={`flex justify-between  py-[8px] text-[0.9rem] font-medium items-center rounded-t-[8px]`}>
      <ul className={`flex gap-2`}>
        <li onClick={()=> onCurrentTab('Preview')}
            className={`px-[8px] py-[4px] rounded-[8px] cursor-pointer transition-colors ${currentTab === 'Preview' ? 'bg-blue-600 text-white' : 'hover:bg-red-600'}`}>
          Preview
        </li>
        <li onClick={()=> onCurrentTab('Code')}
            className={`px-[8px] py-[4px] rounded-[8px] cursor-pointer transition-colors ${currentTab === 'Code' ? 'bg-blue-600 text-white' : 'hover:bg-red-600'}`}>
          Code
        </li>
      </ul>
      
      <button className={`px-[14px] py-[4px] bg-yellow-500 rounded-[4px] hover:bg-yellow-400 transition-colors`}>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.35723 4H13.168C14.7132 4 15.9659 5.25266 15.9659 6.7979V10.4322H14.4007V6.7979C14.4007 6.76067 14.3992 6.7237 14.3964 6.68706L10.5856 10.4316C10.5984 10.432 10.6114 10.4322 10.6243 10.4322H14.4007V11.9105H10.6243C9.07903 11.9105 7.79199 10.6456 7.79199 9.10032V5.47569H9.35723V9.10032C9.35723 9.17012 9.36263 9.23908 9.37311 9.30672L13.2678 5.4798C13.2349 5.47708 13.2017 5.47569 13.168 5.47569H9.35723V4Z" fill="#171717"/>
          <path d="M5.50752 11.6378L0 5.47461H2.21573L5.44924 9.09305V5.47461H7.1014V11.0294C7.1014 11.8678 6.06616 12.2629 5.50752 11.6378Z" fill="#171717"/>
        </svg>
      </button>
    </div>
  )
}

type ComponentViewProps = {
  currentView: ComponentTypes
  setActive: (component: ComponentTypes)=> void,
  isExpanded: boolean
}

type ComponentViewTabProps = {
  currentTab: string,
  onCurrentTab: (tab: string) => void,
}

export default ComponentView