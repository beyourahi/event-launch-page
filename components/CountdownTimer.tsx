import { calculateTimeToEvent } from "lib";
import { useState, useEffect } from "react";
import { TimeUnit } from "./TimeUnit";
import { CurrentFrameworkProps } from "types";

interface CountdownTimer extends CurrentFrameworkProps {
    eventDate: Date;
}

export const CountdownTimer = ({ currentFramework, eventDate }: CountdownTimer) => {
    const [countdown, setCountdown] = useState(calculateTimeToEvent(eventDate));
    const timeLabels = ["DAYS", "HOURS", "MINUTES", "SECONDS"] as const;

    useEffect(() => {
        const interval = setInterval(() => setCountdown(calculateTimeToEvent(eventDate)), 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
