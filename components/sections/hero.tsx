"use client";

import React, { useEffect } from "react";
import { PlayCircle, CirclePercent } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "../ui/spotlight-new";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

export function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section
            className="relative min-h-screen pt-36 pb-12 w-full flex flex-col items-center justify-center antialiased overflow-hidden"
            aria-label="Hero Section"
        >
            <Spotlight />

            <div className="relative max-w-5xl z-10 px-6 mx-auto flex flex-col items-start md:items-center text-center md:text-center">
                {/* Limited Offer Badge */}
                <div
                    className="top-6 z-20 mb-6"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <div className="flex items-center gap-2 bg-green-600/90 text-white px-4 py-2 rounded-full shadow-lg w-fit">
                        <CirclePercent className="w-6 h-6 text-white animate-pulse drop-shadow-[0_0_6px_rgba(34,197,94,0.9)]" />
                        <span className="text-sm font-semibold">
                            Limited Offer: <span className="font-bold">30% OFF</span>
                        </span>
                    </div>
                </div>

                {/* Hero Title */}
                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-500 via-pink-500 to-neutral-400"
                >
                    Smart Digital Solutions for <br /> Growing Businesses
                </h1>

                {/* Hero Subtitle */}
                <p
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="mt-4 text-base md:text-lg text-neutral-300 max-w-xl"
                >
                    Build. Scale. Innovate. We craft modern web, mobile, and AI-powered
                    solutions to help your business shine online.
                </p>

                {/* Call to Actions */}
                <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                    <Link
                        href="/get-started"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="group relative px-6 py-3 flex items-center justify-center gap-3 rounded-full text-lg text-white bg-pink-500 overflow-hidden transition-all duration-500 ease-out hover:bg-pink-600"
                    >
                        <span className="absolute inset-0 bg-gray-950 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                        <span className="relative z-10">Get Started</span>
                    </Link>

                    <button
                        data-aos="fade-up"
                        data-aos-delay="450"
                        className="flex items-center gap-2 px-6 py-3 bg-neutral-900/70 backdrop-blur-md text-white rounded-2xl text-lg font-medium shadow-md hover:bg-neutral-800/90 hover:scale-105 transition-transform duration-300"
                        aria-label="Watch Demo"
                    >
                        <PlayCircle className="w-6 h-6 text-green-400 animate-pulse drop-shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
                        Watch Demo
                    </button>
                </div>
            </div>
        </section>
    );
}
