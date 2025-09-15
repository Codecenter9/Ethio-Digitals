"use client";
import { SharedHero } from "@/components/layout/breadcrumb";
import React from "react";

const graphicsServices = [
    {
        name: "Logo & Branding",
        details:
            "Unique brand identities that make your business stand out.",
    },
    {
        name: "UI/UX Design",
        details:
            "User-centered interfaces and prototypes for websites and apps.",
    },
    {
        name: "Marketing Materials",
        details:
            "Business cards, brochures, posters, and social media content.",
    },
    {
        name: "Illustrations & Motion Graphics",
        details:
            "Custom digital art and animations that tell your story visually.",
    },
];

const Graphics = () => {
    return (
        <main className="bg-gray-900 min-h-screen">
            <SharedHero
            />

            <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-10">
                {graphicsServices.map((service, i) => (
                    <div
                        key={i}
                        className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-all"
                    >
                        <h3 className="text-xl font-semibold text-white">
                            {service.name}
                        </h3>
                        <p className="text-gray-300 mt-2">{service.details}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Graphics;
