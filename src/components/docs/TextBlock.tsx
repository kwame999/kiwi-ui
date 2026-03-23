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

export {TextBlock, TitileHead} 