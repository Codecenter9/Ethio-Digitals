import * as React from "react"
import Image from "next/image"
import { Star } from "lucide-react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SectionHeading } from "../layout/sectionheading"

const testimonials = [
    {
        name: "Sara Bekele",
        role: "Entrepreneur",
        avatar: "/images/about.webp",
        comment:
            "Ethio Digitals transformed our online presence. Their team was professional, responsive, and delivered beyond expectations.",
        rating: 5,
    },
    {
        name: "Michael Tesfaye",
        role: "Startup Founder",
        avatar: "/images/about.webp",
        comment:
            "The experience was amazing! The project was delivered on time, with excellent attention to detail and creativity.",
        rating: 4,
    },
    {
        name: "Hana Yared",
        role: "Marketing Specialist",
        avatar: "/images/about.webp",
        comment:
            "We loved working with Ethio Digitals. Their dedication and innovative approach helped us scale our campaigns effectively.",
        rating: 5,
    },

    {
        name: "Hana Yared",
        role: "Marketing Specialist",
        avatar: "/images/about.webp",
        comment:
            "We loved working with Ethio Digitals. Their dedication and innovative approach helped us scale our campaigns effectively.",
        rating: 5,
    },

    {
        name: "Hana Yared",
        role: "Marketing Specialist",
        avatar: "/images/about.webp",
        comment:
            "We loved working with Ethio Digitals. Their dedication and innovative approach helped us scale our campaigns effectively.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="relative py-12 px-6 md:px-12">
            <div
                aria-hidden
                className="pointer-events-none fixed left-1/2 -translate-x-1/2 -top-0 z-0 opacity-80"
            >
                <svg
                    width="900"
                    height="600"
                    viewBox="0 0 900 600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <radialGradient id="pinkGlowGrad" cx="50%" cy="0%" r="60%">
                            <stop offset="0%" stopColor="#ff3ea5" stopOpacity="0.9" />
                            <stop offset="40%" stopColor="#ff3ea5" stopOpacity="0.45" />
                            <stop offset="75%" stopColor="#ff6bd6" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#ff6bd6" stopOpacity="0" />
                        </radialGradient>

                        <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="45" />
                        </filter>
                    </defs>

                    <circle
                        cx="450"
                        cy="30"
                        r="380"
                        fill="url(#pinkGlowGrad)"
                        filter="url(#softBlur)"
                    />
                </svg>
            </div>
            <div className="relative max-w-6xl mx-auto px-6">
                <SectionHeading
                    subtitle="Testimonials"
                    title="What Our Clients Say"
                    description="Hear from our satisfied clients and see how Ethio Digitals is making a difference for businesses like yours."
                />


                <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="bg-gray-900/50 rounded-2xl shadow-lg p-6 h-full flex flex-col gap-4">
                                    {/* Avatar & Name */}
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={50}
                                            height={50}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed flex-grow">
                                        {testimonial.comment}
                                    </p>

                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonial.rating
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-500"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Arrows wrapper */}
                    <div className="flex justify-center gap-4 mt-6 lg:mt-0 lg:block">
                        <CarouselPrevious className="bg-pink-500 relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-left-15" />
                        <CarouselNext className="bg-pink-500 relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-15" />
                    </div>
                </Carousel>

            </div>
        </section>
    )
}
