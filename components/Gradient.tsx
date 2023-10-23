import Image from "next/image";
import { assets } from "lib";

export const Gradient = () => (
    <Image
        src={assets.gradient}
        alt="gradient background"
        width={1200}
        height={1200}
        role="presentation"
        className="fixed inset-0 h-screen w-screen object-cover"
        priority
    />
);
