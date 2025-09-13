"use client";

import React from "react";
import { Users, Globe2, Cpu, Award, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../layout/sectionheading";

type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        icon: <Users className="w-8 h-8 text-pink-500" aria-hidden="true" />,
        title: "Expert Development Team",
        description:
            "Our professional software engineers deliver scalable web and mobile solutions tailored to your business needs.",
    },
    {
        icon: <Globe2 className="w-8 h-8 text-pink-500" aria-hidden="true" />,
        title: "Global Digital Presence",
        description:
            "We help companies in Ethiopia and beyond build a strong digital footprint through modern web technologies.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-pink-500" aria-hidden="true" />,
        title: "Cutting-Edge Technology",
        description:
            "EthioDigitals leverages AI, cloud computing, and emerging technologies to keep your business ahead.",
    },
    {
        icon: <Award className="w-8 h-8 text-pink-500" aria-hidden="true" />,
        title: "Proven Track Record",
        description:
            "We have successfully completed numerous projects, empowering startups, enterprises, and NGOs with digital solutions.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-pink-500" aria-hidden="true" />,
        title: "Trusted & Secure Solutions",
        description:
            "Security and reliability are at the core of everything we build, ensuring your data and systems remain protected.",
    },
];

export const Features: React.FC = () => {
    return (
        <section
            className="relative py-12 px-6 md:px-12 mx-auto overflow-hidden"
            aria-labelledby="features-heading"
        >
            {/* Section heading */}
            <SectionHeading
                subtitle="Features"
                title="Key Features of EthioDigitals"
                description="Explore the innovative tools and solutions that set EthioDigitals apart and help you achieve more."
            />

            {/* Features list */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 relative z-10">
                {features.map((feature, idx) => (
                    <li
                        key={idx}
                        data-aos="fade-up"
                        data-aos-delay={100 + idx * 50}
                        className="relative flex flex-col gap-4 p-5 rounded-lg bg-gray-900/30 group overflow-hidden transition-all duration-300 hover:bg-gray-800"
                    >
                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-400 opacity-70 group-hover:opacity-100 transition-opacity"></div>

                        {/* Feature header */}
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center text-purple-300 group-hover:bg-purple-900/30 transition-colors">
                                {feature.icon}
                            </span>
                            <h3 className="text-lg text-white font-semibold">{feature.title}</h3>
                        </div>

                        {/* Feature description */}
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            {feature.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Features;
