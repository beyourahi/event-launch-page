import { calculateTimeToEvent } from "lib";
import { useState, useEffect } from "react";
import { TimeUnit } from "./TimeUnit";

export const CountdownTimer = ({ currentFramework }: CurrentFrameworkProps) => {
    const [countdown, setCountdown] = useState(calculateTimeToEvent());
    const timeLabels = ["DAYS", "HOURS", "MINUTES", "SECONDS"] as const;

    useEffect(() => {
        const interval = setInterval(() => setCountdown(calculateTimeToEvent()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={"flex gap-[10px] text-center"}>
            {timeLabels.map(label => (
                <TimeUnit
                    key={label}
                    label={label}
                    value={countdown[label.toLowerCase() as keyof typeof countdown]}
                    currentFramework={currentFramework}
                />
            ))}
        </div>
    );
};
