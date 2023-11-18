import { assets } from "lib";

export const Grid = () => (
    <div
        className="fixed inset-0 bg-[length:50px] opacity-30"
        style={{
            backgroundImage: `url(${assets.square})`
        }}
    />
);
