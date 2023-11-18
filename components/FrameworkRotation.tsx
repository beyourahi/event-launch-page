import Image from "next/image";
import { Framework, frameworks, assets, cn } from "lib";
import { CurrentFrameworkProps } from "types";

export const FrameworkRotation = ({ currentFramework }: CurrentFrameworkProps) => (
    <div className="relative mx-2 inline-flex h-[80px] w-[80px] align-middle">
        {frameworks.map((framework, index) => (
            <Image
                key={framework}
                src={assets[framework]}
                className={cn(
                    "absolute left-0 top-0 h-full w-full object-contain object-center transition-all duration-300",
                    currentFramework === framework
                        ? "transform-none opacity-100"
                        : index > frameworks.indexOf(currentFramework as Framework)
                          ? "-translate-y-2 opacity-0"
                          : "translate-y-2 opacity-0"
                )}
                alt="Framework logo"
                fill
                priority
            />
        ))}
    </div>
);
