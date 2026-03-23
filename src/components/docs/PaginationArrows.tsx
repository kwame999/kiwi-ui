import { useState } from 'react'
import { ComponentTypes } from '@/app/types'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon, ArrowLeft02Icon } from '@hugeicons/core-free-icons'

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

type PaginationArrowsProp = {
 data: ComponentTypes[],
 onPaginate?: () => void
}

export default PaginationArrows

