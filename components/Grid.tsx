import { assets } from "lib";

export const Grid = () => (
    <div
        className="fixed inset-0 opacity-30"
        style={{
            backgroundImage: `url(${assets.square})`,
            backgroundSize: "50px"
        }}
    />
);
