'use client' // This is the secret sauce

import { useState } from 'react';
import { Table } from "./ComponentsTable";
import ComponentView from "./ComponentView";
import type { ComponentTypes } from '@/types';
import PaginationArrows from '../docs/PaginationArrows';
import { TextBlock, TitileHead } from '../docs/TextBlock';
import { HugeiconsIcon } from '@hugeicons/react';
import { InsertColumnLeftIcon, InsertColumnRightIcon } from '@hugeicons/core-free-icons';
import { CopyPageDropDown } from './CopyPageDropDown';

export default function Workbench({ data, onCurrentPage }: WorkbenchProps) {
  const [active, setActive] = useState<ComponentTypes>(data[0]);
  const [currentPage, setCurrentPage]= useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  console.log(currentPage)
  function handleOpen(){
    setIsOpen(o => !o);
  }
  
  const handleSelect = (component: ComponentTypes) => {
    setActive(component);
    setCurrentPage(data.findIndex(d => d.componentType === component.componentType)); //Set current index when component clicked
  };

  
  return (
    <div className="flex justify-center h-screen"
         onClick={()=>{
          isOpen && setIsOpen(false)
         }}>
      
      {
        !isExpanded &&
      
          <div className="flex-[2] mx-9 overflow-y-auto flex flex-col gap-7 mt-5">
            
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center' >
                <h1 className="text-2xl font-bold">Components</h1>
                <CopyPageDropDown isOpen={isOpen} onOpen={handleOpen}/>
              </div>

              <p className="text-md leading-[24px] text-red-600 w-[76%]">
                Browse all available Kiwi components. Click any element to view its documentation and implementation details on the adjustable side panel!</p>
            </div>


            <Table data={data} onSelect={handleSelect}/>
          </div>
      }
      
      <div className="flex-1 border-l border-kiwi-border overflow-y-auto p-5 gap-2 flex flex-col">

                  <div className='flex justify-between items-center'>
                    <h1 className="text-2xl font-bold">{active.componentType}</h1>
                    <div className='flex justify-between items-center  mt-2 gap-3'>
                      <button onClick={()=>{setIsExpanded(e => !e)}}
                              className='flex items-center transition-colors cursor-pointer rounded-md p-0.5 hover:bg-red-600'>
                      <HugeiconsIcon icon={!isExpanded ? InsertColumnLeftIcon : InsertColumnRightIcon} size={18}/>
                      </button>
                      <PaginationArrows data={data} setActive={setActive} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    </div>
                  </div>
               
            
                <p className="text-md leading-[24px] text-red-600 w-[76%]">
                  {active.description}
                </p>
              
         <ComponentView  currentView={active} setActive={setActive} isExpanded={isExpanded}/> 
      </div>
    </div>
  );
}


type WorkbenchProps = {
  data: ComponentTypes[],
  onCurrentPage: (num: number) => void
}