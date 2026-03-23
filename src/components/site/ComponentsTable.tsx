'use client'

import { useState } from 'react';
import type { ComponentTypes } from '@/types';
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon, ArrowLeft02Icon, FilterIcon } from '@hugeicons/core-free-icons'
import { componentCategories } from '@/data/components';

const Table = ({data, onSelect}: TableProps) => {
  const [currentSort, setCurrentSort] = useState<string>(componentCategories[0])
  
  function handleFilter(category: string){
    setCurrentSort(category);
  }
  
  return(
    <div className={`max-w-[781px] flex flex-col p-5`}>
      <FilterBar currentSort={currentSort} onFilter={handleFilter}></FilterBar>
      <div className={`grid grid-cols-3 auto-rows-auto border-1 rounded-b-[10px] text-[0.9rem] font-medium overflow-clip`}>
        {
          data.map(c => {
            if (currentSort === componentCategories[0] || currentSort === c.category) {
              return (
                <TableChild 
                  key={c.componentType} 
                  onSelect={() => onSelect(c)} 
                >
                  {c.componentType}
                </TableChild>
              )
            }
            return null;
          })
        }
      </div>
    </div>
  )
}

const TableChild = ({children, onSelect}: TableChildProps) => {
  return(
    <div 
      className={`border-1 px-[14px] py-[12px] cursor-pointer hover:bg-blue-50`}
      onClick={onSelect} 
    >
      {children}
    </div>
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
          <ul className={`flex gap-4 font-medium anchor-filter-bar`}>
            {
              componentCategories.map((c) => (
                <li 
                  key={c} 
                  className={`anchor-item text-center py-[4px] px-[14px] cursor-pointer`} 
                  onClick={() => onFilter(c)}
                >
                  {c}
                </li>
              ))
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

type TableProps = {
  data: ComponentTypes[]
  onSelect: (component: ComponentTypes) => void // Fixed: Selecting ONE component
}

type TableChildProps = {
  children: React.ReactNode
  onSelect: () => void 
}

type FilterBarProps = {
  currentSort: string,
  onFilter: (category: string) => void
}

export { Table }