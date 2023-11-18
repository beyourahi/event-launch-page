import { assets, cn } from "lib";
import Image from "next/image";
import { FrameworkRotation } from "./FrameworkRotation";
import { CurrentFrameworkProps } from "types";

export const Heading = ({ currentFramework }: CurrentFrameworkProps) => (
    <h1 className="mb-20 max-w-3xl text-center text-5xl leading-snug">
        <Image
            src={assets.figma}
            alt="Figma Logo"
            className="mr-8 inline-block"
            width={50}
            height={50}
            priority
        />
        to <FrameworkRotation currentFramework={currentFramework} /> will{" "}
        <span
            className={cn("transition-colors duration-300", {
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
            never
        </span>{" "}
        be the same again.
    </h1>
);
