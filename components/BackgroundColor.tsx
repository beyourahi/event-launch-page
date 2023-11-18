import { cn } from "lib";
import { CurrentFrameworkProps } from "types";

export const BackgroundColor = ({ currentFramework }: CurrentFrameworkProps) => (
    <div
        className={cn("fixed inset-0 opacity-25 transition-all delay-100 duration-300", {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop"
        })}
    />
);
