import { ComponentTypes } from "@/types"
//Prop table component
const PropTable = ({data}: PropTableProps) => {

  const { meta } = data!
  const columnHeaders = ['Prop', 'Type', 'Default']
  return(
    <div className={`rounded-lg border w-full overflow-clip mb-20 relative`}>
      {!meta?.length && <div className="absolute bg-blue-700 z-0 w-full h-full opacity-70">No props</div>}        
      <table aria-label="Component Props" className={`w-full bg-red-600 rounded-lg`}>
        <thead className={`border-b border-border bg-muted/30 text-left bg-`}>
          <tr className={`bg-blue-600`}>
            {
              columnHeaders.map(h => 
              <th key={h}
                  className={`px-4 py-3 text-sm font-medium text-muted-foreground`}>
                {h}
              </th>)
            }
          </tr>        
        </thead>
        <tbody>
          {
            meta!.map((m, i) => 
            <tr key={i}
                className={`text-left ${ i !== meta!.length - 1  && `border-b border-border`}`}>
              <td className={`px-4 py-3 `}>
                <code className="rounded-md dark:bg-muted/50 bg-muted/75 px-1 py-0.5 font-mono bg-blue-400 text-sm">
                {m.prop}
                </code>
              </td>
              <td className={`px-4 py-3`}>
                <code className="rounded-md dark:bg-muted/50 bg-muted/75 px-1 py-0.5 font-mono bg-blue-400 text-sm">
                {m.type}
                </code>
              </td>
              <td className={`px-4 py-3`}>
                <code className="rounded-md dark:bg-muted/50 bg-muted/75 px-1 py-0.5 font-mono bg-blue-400 text-sm">
                {m.defaults || '-'}
                </code>
              </td>
            </tr>)
            }
        </tbody>
      </table> 
    </div>
  )
}

type PropTableProps = {
  data?: ComponentTypes
}

export default PropTable
