"use client";

import { useState, useEffect, useRef } from "react";
import { Framework, frameworks } from "lib";
import { BackgroundColor } from "components/BackgroundColor";
import { Gradient } from "components/Gradient";
import { Grid } from "components/Grid";
import { Reveal } from "components/Reveal";
import { Heading } from "components/Heading";
import { SubHeading } from "components/SubHeading";
import { ClaimTicketButton } from "components/ClaimTicketButton";
import { CountdownTimer } from "components/CountdownTimer";
import { Cursor } from "components/Cursor";

const Home = () => {
    const eventDate = new Date("2023-12-31T09:00:00-07:00"); // December 31, 2023, 9 AM PT

    const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);
    const [showBackground, setShowBackground] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        let currentIndex = 0;

        const rotateFrameworks = () => {
            setCurrentFramework(frameworks[currentIndex]);
            currentIndex = (currentIndex + 1) % frameworks.length;
        };

        const intervalID = setInterval(rotateFrameworks, 2000);

        return () => clearInterval(intervalID);
    }, []);

    useEffect(() => setShowBackground(true), []);

    return (
        <>
            <BackgroundColor currentFramework={currentFramework} />
            <Gradient />
            <Grid />
            <Reveal showBackground={showBackground} />

            <div className="relative z-10 mx-auto mt-20 flex max-w-7xl flex-col items-center">
                <Heading currentFramework={currentFramework} />
                <SubHeading />
                <ClaimTicketButton currentFramework={currentFramework} />
                <CountdownTimer currentFramework={currentFramework} eventDate={eventDate} />
            </div>

            <Cursor buttonRef={buttonRef} />
        </>
    );
};

export default Home;
