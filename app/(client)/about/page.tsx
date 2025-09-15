
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

            <section className="relative bg-gray-950 z-10 max-w-full pt-12 md:pt-24 px-6 md:px-12 mx-auto space-y-12">
                <div className="relative flex flex-col gap-0 rounded-2xl bg-gray-900/30 ">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>

                    <div className="grid md:grid-cols-2 gap-0 items-start">
                        {/* Image Card */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay={50}
                            className="flex-1 overflow-hidden flex-shrink-0"
                        >
                            <Image
                                src="/images/OIP.webp"
                                alt="Ethio Digitals Team at Work"
                                width={400}
                                height={400}
                                className="object-cover rounded-tl-2xl w-full h-full hover:scale-105 transition-all duration-300"
                            />
                        </div>

                        {/* First Content */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay={100}
                            className="flex flex-col justify-center p-8 overflow-hidden"
                        >
                            {/* Title */}
                            <div className="relative mb-6 pb-4 border-b border-gray-700">
                                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                                    Who We Are
                                </h2>
                                <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                            </div>

                            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                                <span className="absolute -left-3 text-5xl text-pink-500/30 font-serif -top-2">“</span>
                                <span className="font-semibold text-white">EthioDigitals</span> is a creative and
                                technology-driven company that helps businesses and individuals grow in the digital age.
                                Our team brings together experts in software development, social media, digital marketing,
                                content creation, graphic design and more. We work as one to deliver solutions that are simple,
                                effective, and built for real-world impact. From innovative apps and engaging websites to
                                impactful campaigns and stunning visuals, we focus on turning ideas into experiences that
                                connect, inspire, and deliver measurable results.
                            </p>
                        </div>
                    </div>

                    {/* Second Content */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay={150}
                        className="px-8 relative z-10"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            From building modern websites and mobile apps to managing social media,
                            creating engaging content, designing eye-catching graphics, and running
                            result-driven marketing campaigns — we do it all. Our mission is simple:
                            to make digital tools and strategies accessible, powerful, and useful
                            for everyone. With <span className="font-semibold text-white">EthioDigitals</span>,
                            you don’t just get services, you get a partner ready to explore opportunities
                            and take your ideas further.
                        </p>

                        <div className="mb-8">
                            <Link
                                href="/teams"
                                className="group inline-flex items-center justify-center w-full md:w-[20%] bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Meet Our Team
                            </Link>
                        </div>
                    </div>
                </div>

                <AboutImageCard />
            </section>


            <MissionAndVision />

            {/* What We Do */}
            <WhatWeDo />

            {/* Call to Action */}
            <CTA />
        </main>
    );
}
