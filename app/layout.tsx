import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { PropsWithChildren } from "react";
import { Poppins } from "next/font/google";
import { cn } from "lib";

export const metadata: Metadata = {
    title: "Event Launch Page",
    description: "Event Launch Page"
};

const font = Poppins({
    weight: "700",
    subsets: ["latin"]
});

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="scroll-smooth">
        <body className={cn("flex h-screen flex-col bg-[#111] text-white", font.className)}>
            <main className="flex-grow">{children}</main>
        </body>
    </html>
);

export default RootLayout;
