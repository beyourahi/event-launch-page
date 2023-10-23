import Image from "next/image";
import { assets } from "lib";

export const SubHeading = () => (
    <p className="mb-8">
        <span className="text-gray-300">Join us for an AI launch event by </span>
        <Image
            alt="Builder.io logo"
            className="-mt-1 ml-1 inline-block"
            width={100}
            height={20}
            src={assets.builder}
        />
        {" + "}
        <Image
            alt="Figma logo"
            className="mx-1 inline-block"
            width={55}
            height={20}
            src={assets.figmatwo}
        />
    </p>
);
