import { cn } from "lib";
import { useRef } from "react";
import { CurrentFrameworkProps } from "types";

export const ClaimTicketButton = ({ currentFramework }: CurrentFrameworkProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="mb-8">
            <button
                ref={buttonRef}
                className={cn(
                    "rounded-md px-6 py-3 text-sm font-semibold text-black transition-colors duration-200",
                    {
                        "bg-purple-300 hover:bg-purple-400 active:bg-purple-600":
                            currentFramework === "qwik",
                        "bg-sky-300 hover:bg-sky-400 active:bg-sky-600":
                            currentFramework === "safari",
                        "bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-600":
                            currentFramework === "chrome",
                        "bg-teal-300 hover:bg-teal-400 active:bg-teal-600":
                            currentFramework === "tailwind",
                        "bg-blue-300 hover:bg-blue-400 active:bg-blue-600":
                            currentFramework === "react",
                        "bg-green-300 hover:bg-green-400 active:bg-green-600":
                            currentFramework === "vue",
                        "bg-orange-400 hover:bg-orange-400 active:bg-orange-600":
                            currentFramework === "svelte",
                        "bg-red-300 hover:bg-red-400 active:bg-red-600":
                            currentFramework === "mobile",
                        "bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-600":
                            currentFramework === "desktop"
                    }
                )}
            >
                Claim Ticket
            </button>
        </div>
    );
};
