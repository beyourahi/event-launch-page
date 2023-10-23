import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const assets = {
    gradient:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F266e05dba3864799b4715cf4bfd8aa2a",
    square: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8997f779f33b430bb22ca667d1b73ade",
    figma: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe82b4bbd5a7c45b49897b9570893dfe2",
    react: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F95c70a06f779481a957c2b384e3a270d",
    svelte: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ffbe9dfb6bb09448ba4fe5feb4bb0e53e?format=webp",
    tailwind:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8d0b6724f6f6496dbf124bfc3af2a0b0?format=webp",
    vue: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F73a54a19443e48fab077e6f21687cd20?format=webp",
    qwik: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fddb7b5acc2d747f198e8ed90dc245f1a",
    safari: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F22ac9809c08e438db8e5716758a0b4ee?format=webp",
    chrome: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ff4c72f33c40b4b7bb220cffbc17ef2c2",
    mobile: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fc9bace408c6a4ab6b13a24b947f96517",
    desktop:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0cd3a13636be4aff87208714780c356c",
    builder:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F539de6bea0334a14afdfcccd452bf8a8",
    figmatwo:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8e5e45f981514bac840e2a5f1d46e579",
    cursor: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fbba6d6b3473d436098e3637650f64ee2"
};

export const frameworks = [
    "react",
    "chrome",
    "qwik",
    "mobile",
    "tailwind",
    "desktop",
    "vue",
    "safari",
    "svelte"
] as const;

export type Framework = (typeof frameworks)[number];

export const calculateTimeToEvent = () => {
    const eventDate = new Date("2023-12-31T09:00:00-07:00"); // December 31, 2023, 9 AM PT
    const currentDate = new Date();
    const timeRemaining = eventDate.getTime() - currentDate.getTime();

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};
