'use client'

import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { useState, useEffect } from "react";

type AlertToastProps = {
    message: string
    status: 'update' | 'success' | 'caution' | 'failed'
    time: number
}

export const AlertToast = ({ message, status, time }: AlertToastProps) => {
    const [visible, setVisible] = useState(true);
    const [countdown, setCountdown] = useState(time);
    console.log(countdown)
    useEffect(() => {
        if (!visible) return;
        if (countdown <= 0) { setVisible(false); return; }

        const timer = setTimeout(() => setCountdown(t => t - 1), 1000);
        return () => clearTimeout(timer);
    }, [countdown, visible]);

    if (!visible) return null;

    return (
        <div className="flex flex-col rounded-md p-3 gap-2 w-72 shadow border border-neutral-200">
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-sm">Update successful</span>
                    <p className="text-sm text-neutral-500">{message}</p>
                    <p className="text-xs text-neutral-400">
                        Dismissing in <span className="font-medium">{countdown}s</span>
                    </p>
                </div>

                <button onClick={() => setVisible(false)}>
                    <HugeiconsIcon icon={Cancel01Icon} size={16} />
                </button>
            </div>

            {/* Progress bar — duration is just the `time` prop, stays in sync for free */}
            <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
                <div
                    className="h-full bg-neutral-400 rounded-full"
                    style={{
                        animation: `shrink ${time}s linear forwards`,
                    }}
                />
            </div>
        </div>
    );
};