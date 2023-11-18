import { cn } from "lib";

export const Reveal = ({ showBackground }: { showBackground: boolean }) => (
    <div
        className={cn(
            "fixed inset-0 bg-black transition-all duration-300",
            showBackground ? "opacity-0" : "opacity-100"
        )}
    />
);
