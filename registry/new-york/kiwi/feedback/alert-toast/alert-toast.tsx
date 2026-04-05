'use client'

import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { useState, useEffect } from "react";


type AlertToastProps = {
    message: string
    status: 'update' | 'success' | 'caution' | 'failed',
    time: number
}

const alertStatus = {

}


export const AlertToast = ({message, status, time}: AlertToastProps) => {
    const [dismiss, setDismiss] = useState<boolean>(true);
    const [countdown, setCountdown] = useState<number>(time);
    
    useEffect(()=> {
        const timer = setTimeout(()=> {
            if (countdown > 0) setCountdown(t => t-1) 
            if (countdown === 0) setDismiss(false) 

            console.log(countdown)
        }, 1000)

        return() => {clearTimeout(timer)}
    }, [countdown])

    function handleDismissAlert(){
        setDismiss(false)
    }

    return(

        dismiss &&
        <div className="flex rounded-md p-1 items-center">
            <div className="gap-1.5 flex justify-between items-center flex-col">
                <button className="flex gap-1" onClick={handleDismissAlert}>
                    <span>Update successful</span>
                    <HugeiconsIcon icon={Cancel01Icon}></HugeiconsIcon>
                </button>
                <div className="flex flex-col">
                    
                    <p className="font-medium">{message}</p>
                    <p>Dismissing in <span>{countdown} seconds</span></p>
                </div>
            </div>
            <a href="" className="text- cursor-pointer">View Details</a>
        </div>
    )
}