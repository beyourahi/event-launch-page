import { cn } from "lib";

interface Props {
    showBackground: boolean;
}

export const Reveal = ({ showBackground }: Props) => (
    <div
        className={cn(
            "fixed inset-0 bg-black transition-opacity duration-300",
            showBackground ? "opacity-0" : "opacity-100"
        )}
    />
);
