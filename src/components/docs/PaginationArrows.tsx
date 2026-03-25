import { useState } from 'react'
import { ComponentTypes } from '@/types'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon, ArrowLeft02Icon } from '@hugeicons/core-free-icons'

//Navigate to next component view component
const PaginationArrows = ({data, setActive, currentPage, setCurrentPage}: PaginationArrowsProp) => {
  
  function handleNext(){
    if((data.length -1) !== currentPage){

      // setCurrentPage(data.findIndex(d => d.componentType === active.componentType))
      setCurrentPage(currentPage+1)
      setActive!( data[currentPage + 1])
    }
  }

  function handlePrevious(){
    if(currentPage !== 0){
      setCurrentPage(currentPage-1)
      setActive!(data[currentPage - 1])
    }

  }

  return(
    <div className={`flex gap-[5px] justify-center items-center border-l pl-3`}>
      <button className={`flex items-center transition-colors cursor-pointer rounded-md p-0.5 hover:bg-red-600`}
              onClick={handlePrevious}>
        <HugeiconsIcon icon={ArrowLeft02Icon} size={18}></HugeiconsIcon>
      </button>
      <button className={`flex items-center transition-colors cursor-pointer rounded-md p-0.5 hover:bg-red-600`}
              onClick={handleNext}>
        <HugeiconsIcon icon={ArrowRight02Icon} size={18}></HugeiconsIcon>
      </button>
    </div>
  )
}

type PaginationArrowsProp = {
 data: ComponentTypes[],
 setActive?: (component: ComponentTypes) => void
 currentPage: number,
 setCurrentPage: (num: number) => void
}

export default PaginationArrows

