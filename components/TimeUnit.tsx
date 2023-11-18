import { cn } from "lib";
import { NumberRotation } from "./NumberRotation";
import { CurrentFrameworkProps } from "types";

interface TimeUnit extends CurrentFrameworkProps {
    label: string;
    value: number;
}

export const TimeUnit = ({ label, value, currentFramework }: TimeUnit) => (
    <div className="flex flex-col">
        <div className="text-3xl font-semibold text-white">
            <NumberRotation number={value} />
        </div>

        <div
            className={cn("text-[10px] font-medium", {
                "text-purple-300": currentFramework === "qwik",
                "text-sky-300": currentFramework === "safari",
                "text-yellow-300": currentFramework === "chrome",
                "text-teal-300": currentFramework === "tailwind",
                "text-blue-300": currentFramework === "react",
                "text-green-300": currentFramework === "vue",
                "text-orange-400": currentFramework === "svelte",
                "text-red-300": currentFramework === "mobile",
                "text-neutral-300": currentFramework === "desktop"
            })}
        >
            {label}
        </div>
    </div>
);
