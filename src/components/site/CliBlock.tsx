'use client'

import { useState } from "react"
import { HugeiconsIcon } from '@hugeicons/react'
import { SoftwareLicenseIcon, CopyIcon } from '@hugeicons/core-free-icons'
import { ComponentTypes } from "@/types"

const CliBlock = ({ data }: { data: ComponentTypes }) => {
  const [currentView, setCurrentView] = useState<string>('CLI')
  
  return (
    <div className={'flex flex-col gap-[8px] justify-between rounded-t-md text-[14px]'}>
      <div className={`flex gap-2 items-center font-medium `}>
        <button 
          className={`cursor-pointer px-[8px] py-[4px] rounded-[8px] transition-colors text-black ${(currentView === 'CLI') && 'bg-red-500'}`}
          onClick={() => setCurrentView('CLI')}>CLI</button>
        <button 
          className={`cursor-pointer px-[8px] py-[4px] rounded-[8px] transition-colors text-black ${(currentView === 'Manual') && 'bg-red-500'}`}
          onClick={() => setCurrentView('Manual')}>Manual</button>
      </div>

      <div className={`flex flex-col bg-purple-600 rounded-[12px] overflow-clip border-1`}>
        <CliTab componentId={data.id} />
      </div>
    </div>
  )
}

const CliTab = ({ componentId }: { componentId: string }) => {
  const tabs = ['pnpm', 'npm', 'yarn', 'bun'] as const
  const [currentTab, setCurrentTab] = useState<typeof tabs[number]>('pnpm')
  
  function getCommand(tab: string){
    const base = `dlx kiwi-ui@latest add @kiwi/${componentId}`
    
    switch(tab) {
      case 'pnpm': return `pnpm ${base}`
      case 'npm':  return `npx ${base}`
      case 'yarn': return `yarn ${base}`
      case 'bun':  return `bun x ${base}`
      default: return `pnpm ${base}`
    }
  }

  const commands = {
    pnpm: `pnpm dlx kiwi-ui add ${componentId}`,
    npm: `npx kiwi-ui add ${componentId}`,
    yarn: `yarn dlx kiwi-ui add ${componentId}`,
    bun: `bun x kiwi-ui add ${componentId}`
  }
  
  return (
    <>
      <div className={`flex items-center px-3 border-b border-red-800`}>
        <HugeiconsIcon icon={SoftwareLicenseIcon} size={18} />
        <ul className={`flex gap-1 px-2 py-2 text-[0.9rem] `}>
          {tabs.map(t => (
            <li key={t} 
                className={`px-2 cursor-pointer font-medium hover:text-blue-50 ${currentTab === t && 'bg-blue-400 rounded-[6px] border border-red-400'}`} 
                onClick={() => setCurrentTab(t)}>{t}</li>
          ))}
        </ul>
        <button className={`ml-auto cursor-pointer`}>
          <HugeiconsIcon icon={CopyIcon} size={18} />
        </button>
      </div>
      <pre className={`p-3 overflow-x-auto`}>
        <code className={`bg-amber-600 px-2 py-1 rounded`}>
          {getCommand(currentTab)}
        </code>
      </pre>
    </>
  )
}

export default CliBlock