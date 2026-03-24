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
export default function Workbench({ data }: { data: ComponentTypes[] }) {
  const [active, setActive] = useState<ComponentTypes>(data[0]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const handleSelect = (component: ComponentTypes) => {
    setActive(component);
  };
  return (
    <div className="flex justify-center h-screen">
      
      {
        !isExpanded &&
      
      <div className="flex-[2] mx-9 overflow-y-auto flex flex-col gap-7 mt-5">
        
        <div className='flex flex-col'>
          <div className='flex justify-between items-center' >
            <h1 className="text-2xl font-bold">Components</h1>
            <CopyPageDropDown/>
          </div>

           <p className="text-md leading-[24px] text-red-600 w-[76%]">
                  Collection of ready made ui for everone
                </p>
        </div>


        <Table data={data} onSelect={handleSelect}/>
      </div>
      }
      <div className="flex-1 border-l border-kiwi-border overflow-y-auto p-5 gap-2 flex flex-col">

                  <div className='flex justify-between items-center'>
                    <h1 className="text-2xl font-bold">{active.componentType}</h1>
                    <div className='flex justify-between items-center  mt-2 gap-2'>
                      <button onClick={()=>{setIsExpanded(e => !e)}}>
                      <HugeiconsIcon icon={!isExpanded ? InsertColumnLeftIcon : InsertColumnRightIcon} size={18}></HugeiconsIcon>
                      </button>
                      <PaginationArrows data={data} setActive={setActive}></PaginationArrows>
                    </div>
                  </div>
               
            
                <p className="text-md leading-[24px] text-red-600 w-[76%]">
                  {active.description}
                </p>
              
         <ComponentView  currentView={active} setActive={setActive} /> 
      </div>
    </div>
  );
}