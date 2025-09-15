"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "../layout/sectionheading";

type Testimonial = {
    name: string;
    role: string;
    avatar: string;
    comment: string;
    rating: number;
};

const testimonials: Testimonial[] = [
    {
        name: "Sara Bekele",
        role: "Business Owner",
        avatar: "/images/about.webp",
        comment:
            "Working with EthioDigitals was a game changer for my business. They built a modern website and gave us the digital presence we needed to reach more customers.",
        rating: 5,
    },
    {
        name: "Michael Tesfaye",
        role: "Startup Founder",
        avatar: "/images/about.webp",
        comment:
            "Their team was creative, reliable, and fast. From design to launch, everything was smooth, and the final product exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Hana Yared",
        role: "Marketing Manager",
        avatar: "/images/about.webp",
        comment:
            "EthioDigitals helped us grow our online campaigns with smart strategies and great content. They really understand how to connect with audiences.",
        rating: 5,
    },
    {
        name: "Daniel Mekonnen",
        role: "E-commerce Manager",
        avatar: "/images/about.webp",
        comment:
            "Our online sales increased by 120% after EthioDigitals redesigned our website and implemented their SEO strategies.",
        rating: 5,
    },
    {
        name: "Liya Abraham",
        role: "Non-profit Director",
        avatar: "/images/about.webp",
        comment:
            "They perfectly captured our mission and vision in our website design. The donation system they implemented has been seamless.",
        rating: 5,
    },
];

export const Testimonials: React.FC = () => {
    return (
        <section className="relative py-12 md:py-24 px-6 md:px-12" aria-labelledby="testimonials-heading">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="relative max-w-7xl mx-auto z-10">
                {/* Section heading */}
                <SectionHeading
                    subtitle="Testimonials"
                    title="What Our Clients Say"
                    description="Hear from our satisfied clients and see how EthioDigitals is making a difference for businesses like yours."
                />

                {/* Carousel */}
                <div className="mt-12 md:mt-16">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col gap-5 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                                        {/* Rating */}
                                        <div className="flex gap-1 mb-2" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${i < testimonial.rating
                                                        ? "text-yellow-400 fill-yellow-400"
                                                        : "text-gray-600"}`}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>

                                        {/* Comment */}
                                        <p className="text-gray-200 leading-relaxed flex-grow text-lg italic">
                                            "{testimonial.comment}"
                                        </p>

                                        {/* Avatar & Name */}
                                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-700/50">
                                            <div className="relative w-12 h-12">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={`${testimonial.name} avatar`}
                                                    fill
                                                    className="rounded-full object-cover border-2 border-cyan-500/30"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                                                <p className="text-sm text-cyan-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Custom positioned arrows at bottom center */}
                        <div className="flex justify-center mt-10 gap-4">
                            <CarouselPrevious className="relative static left-0 transform-none bg-cyan-600 hover:bg-cyan-500 text-white border-0 w-12 h-12 rounded-full" />
                            <CarouselNext className="relative static right-0 transform-none bg-cyan-600 hover:bg-cyan-500 text-white border-0 w-12 h-12 rounded-full" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};