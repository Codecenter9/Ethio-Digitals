"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const features = [
    "Agile and transparent development process",
    "Customized digital solutions for your business",
    "Dedicated and experienced professional team",
    "Commitment to long-term client success",
];

export const About: React.FC = () => {
    return (
        <section
            className="py-24 relative px-6 md:px-12"
            aria-labelledby="about-ethiodigitals"
        >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tl from-purple-500/15 to-transparent blur-3xl" />
            </div>

            <div className="container mx-auto flex flex-col-reverse md:flex-row gap-10 items-center">
                {/* Content */}
                <article
                    data-aos="fade-up"
                    className="flex flex-2 flex-col gap-6 bg-gray-900/20 p-5 rounded-lg"
                >
                    <header>
                        <h2
                            id="about-ethiodigitals"
                            data-aos="fade-down"
                            className="text-3xl md:text-4xl font-bold mb-3 text-white"
                        >
                            About <span className="text-pink-500">EthioDigitals</span>
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay={150}
                            className="text-gray-300 leading-relaxed"
                        >
                            At <strong>EthioDigitals</strong>, we specialize in delivering
                            cutting-edge <em>software development, digital transformation, and IT consultancy</em>.
                            Our team is passionate about helping businesses in Ethiopia and
                            beyond embrace technology to grow faster, smarter, and more sustainably.
                        </p>
                    </header>

                    {/* Features list */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((feature, idx) => (
                            <li
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={100 + idx * 50}
                                className="flex items-start gap-3 p-4 rounded-xl relative bg-gray-800/30 cards-gradient-border"
                            >
                                <Check className="w-6 h-6 text-pink-500 shrink-0" aria-hidden="true" />
                                <p className="text-gray-200">{feature}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Call to action */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay={150}
                        className="flex flex-wrap gap-4 mt-4"
                    >
                        <Link
                            href="/get-started"
                            className="relative group p-3 inline-block"
                        >
                            <span className="text-pink-600 font-medium relative">
                                Read More...
                                <span className="absolute left-0 -bottom-1 w-[10px] h-0.5 bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                            </span>
                        </Link>
                    </div>
                </article>

                {/* Image */}
                <div
                    data-aos="fade-left"
                    data-aos-delay={100}
                    className="flex-1 flex justify-center items-center"
                >
                    <Image
                        src="/images/team.webp"
                        width={450}
                        height={450}
                        alt="EthioDigitals team working on innovative software solutions"
                        className="rounded-xl object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
