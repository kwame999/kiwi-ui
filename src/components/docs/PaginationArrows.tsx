import { useState } from 'react'
import { ComponentTypes } from '@/types'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon, ArrowLeft02Icon } from '@hugeicons/core-free-icons'

//Navigate to next component view component
const PaginationArrows = ({data, setActive}: PaginationArrowsProp) => {
  
  const [currentPage, setCurrentPage]= useState<number>(0)
  console.log(currentPage)
  console.log(data[currentPage].componentType)
  function handleNext(){
    if(data.length !== currentPage)
    setCurrentPage(p => p+1)
    setActive!(data[currentPage])
  }

  function handlePrevious(){
    if(currentPage !== 0)
    setCurrentPage(p => p-1)
    setActive!(data[currentPage])

  }
  return(
    <div className={`flex gap-[6px] justify-center items-center border-l pl-3`}>
      <button className={``}
              onClick={handlePrevious}>
        <HugeiconsIcon icon={ArrowLeft02Icon} size={18}></HugeiconsIcon>
      </button>
      <button className={``}
              onClick={handleNext}>
        <HugeiconsIcon icon={ArrowRight02Icon} size={18}></HugeiconsIcon>
      </button>
    </div>
  )
}

type PaginationArrowsProp = {
 data: ComponentTypes[],
 setActive?: (component: ComponentTypes) => void
}

export default PaginationArrows

