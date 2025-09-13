"use client";
import React from "react";
import {
    Users,
    Globe2,
    Cpu,
    Award,
    ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "../layout/sectionheading";

const Features = () => {
    const features = [
        {
            icon: <Users className="w-8 h-8 text-pink-500" />,
            title: "Expert Development Team",
            description:
                "Our professional software engineers deliver scalable web and mobile solutions tailored to your business needs.",
        },
        {
            icon: <Globe2 className="w-8 h-8 text-pink-500" />,
            title: "Global Digital Presence",
            description:
                "We help companies in Ethiopia and beyond build a strong digital footprint through modern web technologies.",
        },
        {
            icon: <Cpu className="w-8 h-8 text-pink-500" />,
            title: "Cutting-Edge Technology",
            description:
                "Ethio Digitals leverages AI, cloud computing, and emerging technologies to keep your business ahead.",
        },
        {
            icon: <Award className="w-8 h-8 text-pink-500" />,
            title: "Proven Track Record",
            description:
                "We have successfully completed numerous projects, empowering startups, enterprises, and NGOs with digital solutions.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-pink-500" />,
            title: "Trusted & Secure Solutions",
            description:
                "Security and reliability are at the core of everything we build, ensuring your data and systems remain protected.",
        },
    ];

    return (
        <section className="relative py-6 md:py-12 mx-auto px-6 md:px-12  overflow-hidden">
            {/* <div className="absolute inset-0 opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-500/15 to-transparent blur-3xl" />
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-cyan-500/15 to-transparent blur-3xl" />
            </div> */}
            <SectionHeading
                subtitle="Features"
                title="Key Features of Ethio Digitals"
                description="Explore the innovative tools and solutions that set Ethio Digitals apart and help you achieve more."
            />

            <ul className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5 relative z-10">
                {features.map((feature, idx) => (
                    <li
                        data-aos="fade-up"
                        data-aos-delay={100 + idx * 50}
                        key={idx} className="relative flex flex-col gap-4 p-5 rounded-lg bg-gray-900/30  overflow-hidden group transition-all duration-300 hover:bg-gray-750">

                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-400 opacity-70 group-hover:opacity-100 transition-opacity"></div>


                        <div className="flex flex-row items-center gap-3">
                            <span className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center text-purple-300 group-hover:bg-purple-900/30 transition-colors">
                                {feature.icon}
                            </span>
                            <h3 className="text-lg text-white font-semibold">
                                {feature.title}
                            </h3>
                        </div>
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
