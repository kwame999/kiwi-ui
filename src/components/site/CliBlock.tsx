import { useState } from "react"
import { HugeiconsIcon } from '@hugeicons/react'
import { SoftwareLicenseIcon, CopyIcon,} from '@hugeicons/core-free-icons'

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

export default CliBlock