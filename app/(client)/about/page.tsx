
import { SharedHero } from "@/components/layout/breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MissionAndVision from "@/components/cards/missionandvission";
import WhatWeDo from "@/components/cards/whatwedo";
import CTA from "@/components/cards/CTA";
import AboutImageCard from "@/components/cards/aboutimagecard";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn more about Ethio Digitals, our mission, vision, and the team dedicated to building innovative digital solutions for businesses and individuals.",
    keywords: [
        "About Ethio Digitals",
        "Ethio Digitals",
        "Software Development",
        "Web Design",
        "Mobile Apps",
        "Digital Solutions",
    ],
    openGraph: {
        title: "About Us | Ethio Digitals",
        description:
            "Discover who we are and what drives us. Learn about our mission, values, and the innovative projects we build.",
        url: "https://yourdomain.com/about",
        siteName: "Ethio Digitals",
        images: [
            {
                url: "https://yourdomain.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "About Us - Ethio Digitals",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Ethio Digitals",
        description:
            "Discover who we are and what drives us. Learn about our mission, values, and projects.",
        images: ["https://yourdomain.com/og-image.jpg"],
    },
};

export default function AboutPage() {
    return (
        <main className="relative">
            {/* Shared Hero Section */}
            <SharedHero
                title="About Us"
                description="At Ethio Digitals, we are passionate about delivering innovative digital solutions that empower businesses and individuals to grow, connect, and thrive in today’s fast-paced world."
            />

            {/* About Content */}
            <section className="relative bg-gray-950 z-10 max-w-full pt-12 md:pt-24 px-6 md:px-12 mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Image Card */}
                    <div
                        data-aos="fade-right"
                        data-aos-delay={50}
                        className="bg-gray-900/30 flex-1 rounded-2xl overflow-hidden flex-shrink-0"
                    >
                        <Image
                            src="/images/OIP.webp"
                            alt="Developers at Ethio Digitals"
                            width={400}
                            height={400}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Content Card */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay={100}
                        className="flex flex-col justify-center shadow-2xl rounded-3xl max-w-xl p-8 bg-gray-900/30 relative overflow-hidden"
                    >
                        {/* Decorative Background Circles */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>

                        {/* Title */}
                        <div className="relative mb-6 pb-4 border-b border-gray-700">
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                                Who We Are
                            </h2>
                            <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                        </div>

                        {/* Intro Paragraph */}
                        <p className="text-lg text-gray-300 leading-relaxed mb-8 relative z-10">
                            <span className="absolute -left-3 text-5xl text-pink-500/30 font-serif -top-2">“</span>
                            We are a passionate team of developers, designers, and problem solvers
                            dedicated to building software solutions and creative designs that
                            make an impact. Our goal is to combine innovation with usability,
                            delivering projects that empower businesses and individuals alike.
                        </p>

                        {/* Button */}
                        <div className="relative z-10">
                            <Link
                                href="/teams"
                                className="group inline-flex items-center justify-center w-full md:w-[50%] bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Visit Our Team
                                <svg
                                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Additional About Cards */}
                <AboutImageCard />
            </section>

            {/* Mission and Vision */}
            <MissionAndVision />

            {/* What We Do */}
            <WhatWeDo />

            {/* Call to Action */}
            <CTA />
        </main>
    );
}
