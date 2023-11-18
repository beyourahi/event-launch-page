import Image from "next/image";
import { Framework, frameworks, assets, cn } from "lib";

export const FrameworkRotation = ({ currentFramework }: CurrentFrameworkProps) => (
    <div className="relative mx-2 -mt-2 inline-flex h-[80px] w-[80px] align-middle">
        {frameworks.map((name, index) => (
            <Image
                key={name}
                src={assets[name]}
                className={cn(
                    "absolute left-0 top-0 h-full w-full object-contain object-center transition-all duration-300",
                    currentFramework === name
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
