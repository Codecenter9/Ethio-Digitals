"use client"
import React, { useEffect, useState } from "react";
import { Lightbulb, PenTool, Code, Rocket, Headphones } from "lucide-react";
import { SectionHeading } from "../layout/sectionheading";

const steps = [
    {
        title: "Idea & Research",
        desc: "We start with brainstorming, research, and understanding client needs.",
        icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Design",
        desc: "Our team creates wireframes, UI/UX, and prototypes for your product.",
        icon: <PenTool className="w-6 h-6 text-pink-500" />,
    },
    {
        title: "Development",
        desc: "We build scalable, modern, and reliable solutions with clean code.",
        icon: <Code className="w-6 h-6 text-blue-500" />,
    },
    {
        title: "Launch",
        desc: "We test thoroughly, deploy securely, and launch your product.",
        icon: <Rocket className="w-6 h-6 text-green-500" />,
    },
    {
        title: "Support",
        desc: "We provide ongoing support, updates, and improvements.",
        icon: <Headphones className="w-6 h-6 text-purple-500" />,
    },
];

export default function ProductTimeline() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setProgress(scrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section className="w-full px-6 md:px-12 relative py-16">

            <div className="mx-auto ">
                <SectionHeading
                    subtitle="How We Work"
                    title="Our Process"
                    description="Learn about the steps we take to deliver innovative digital solutions efficiently and effectively."
                />


                <div className="hidden md:flex items-start justify-between relative">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="relative flex flex-col items-center w-1/5 text-center"
                        >
                            <div
                                data-aos="fade-down"
                                data-aos-delay={100 + idx * 50}
                                className="z-10 flex items-center justify-center w-12 h-12 rounded-full 
                  bg-white dark:bg-gray-900 border border-gray-300 
                  dark:border-gray-700 shadow-md"
                            >
                                {step.icon}
                            </div>

                            {idx < steps.length - 1 && (
                                <svg
                                    data-aos="fade-up"
                                    data-aos-delay={100 + idx * 60}
                                    className="absolute top-6 left-1/2 w-full h-16 text-gray-400 dark:text-gray-600"
                                    viewBox="0 0 200 100"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0,50 Q100,0 200,50"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </svg>
                            )}

                            <svg
                                className="w-1 h-8 text-gray-400 dark:text-gray-600 mt-2"
                                viewBox="0 0 10 40"
                            >
                                <line
                                    x1="5"
                                    y1="0"
                                    x2="5"
                                    y2="30"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <polygon points="0,30 10,30 5,40" fill="currentColor" />
                            </svg>

                            <div
                                data-aos="fade-up"
                                data-aos-delay={100 + idx * 60}
                                className="relative mt-4 ml-6 text-start p-4 bg-gray-900/30 dark:bg-gray-800/40 
                rounded-2xl shadow-md max-w-xs">
                                <div className="absolute -left-2 top-6 w-0 h-0 
                  border-t-8 border-t-transparent 
                  border-b-8 border-b-transparent 
                  border-r-8 border-r-gray-900/30 dark:border-r-gray-800/40">
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <span className="px-2 py-1 rounded-full bg-pink-900/50 text-xs font-medium">
                                        {idx + 1}
                                    </span>
                                    <h3 className="font-semibold text-lg">{step.title}</h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                                    {step.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="md:hidden relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start mb-8">

                            {idx < steps.length - 1 && (
                                <div className="absolute left-6 top-12 w-px h-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
                                    <div
                                        className="w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                                        style={{ height: `${progress}%` }}
                                    />
                                    <svg
                                        className="absolute left-[-6px] top-full w-4 h-4 text-gray-400 dark:text-gray-600"
                                        viewBox="0 0 20 20"
                                    >
                                        <polygon points="0,0 20,0 10,10" fill="currentColor" />
                                    </svg>
                                </div>
                            )}

                            <div
                                data-aos="fade-right"
                                data-aos-delay={100 + idx * 50}
                                className="z-10 flex items-center justify-center w-12 h-12 rounded-full 
                  bg-white dark:bg-gray-900 border border-gray-300 
                  dark:border-gray-700 shadow-md"
                            >
                                {step.icon}
                            </div>

                            <div
                                data-aos="fade-left"
                                data-aos-delay={100 + idx * 60}
                                className="relative ml-6 text-start p-4 bg-gray-900/30 dark:bg-gray-800/40 
                rounded-2xl shadow-md max-w-xs">
                                <div className="absolute -left-2 top-6 w-0 h-0 
                  border-t-8 border-t-transparent 
                  border-b-8 border-b-transparent 
                  border-r-8 border-r-gray-900/30 dark:border-r-gray-800/40">
                                </div>

                                <div className="flex flex-row gap-3 items-center">
                                    <span className="px-2 py-1 rounded-full bg-pink-900/50 text-xs font-medium">
                                        {idx + 1}
                                    </span>
                                    <h3 className="font-semibold text-lg">{step.title}</h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                                    {step.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

