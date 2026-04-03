import { HugeiconsIcon } from "@hugeicons/react";
import { ClaudeIcon, Globe02Icon, SquareArrowUp02Icon, Mic01Icon} from "@hugeicons/core-free-icons";


type AiInputProps = {
    placeholdr?: string
}



export const AiInput = ({placeholdr = 'Whats on your mind?'}: AiInputProps) => {
return(
    <div className="flex flex-col bg-blue-600 p-4 px-4 border  justify-between rounded-[26px] gap-3 min-h-[260px]">
        <input type="text" name="" id="" placeholder={placeholdr} className="p-2 border-2 rounded-[18px] h-full text-start" />
        
        <div className="flex justify-between">
        <div className="flex gap-4.5">
            <button className="flex gap-1 p-1 px-3 justify-center items-center border rounded-full">
                <HugeiconsIcon icon={ClaudeIcon} size={18}></HugeiconsIcon>
                <span>
                Claude
                </span>
            </button>
            <button className="rounded-full bg-red-600 p-2">
                <HugeiconsIcon icon={Globe02Icon} size={18}></HugeiconsIcon>                
            </button>
        </div>
        <div className="flex gap-3 items-center">

            <button>
                <HugeiconsIcon icon={Mic01Icon} size={18}></HugeiconsIcon>                
            </button>
            <button className="bg-red-600 p-2 rounded-md">
                <HugeiconsIcon icon={SquareArrowUp02Icon} size={18}></HugeiconsIcon>                
            </button>
        </div>
        </div>
    </div>
)
}