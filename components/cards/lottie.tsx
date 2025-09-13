"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

type LottieAnimationProps = {
    src?: string; // path under /public
    width?: number | string;
    height?: number | string;
    loop?: boolean;
    autoplay?: boolean;
};

export default function LottieAnimation({
    src = "/lottie/lottie2.json",
    loop = true,
    autoplay = true,
}: LottieAnimationProps) {
    const [animationData, setAnimationData] = useState<null>(null);

    useEffect(() => {
        fetch(src)
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Failed to load Lottie JSON:", err));
    }, [src]);

    if (!animationData) {
        return <div className="text-gray-400">Loading animation...</div>;
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-full h-fit">
                <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
            </div>
        </div>
    );
}
