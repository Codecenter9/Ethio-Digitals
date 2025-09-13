"use client";
import { SharedHero } from "@/components/layout/breadcrumb";
import React from "react";

const softwareServices = [
    {
        name: "Web Development",
        details:
            "Responsive, scalable web applications using modern frameworks like React, Next.js, and Laravel.",
    },
    {
        name: "Mobile App Development",
        details:
            "Cross-platform mobile apps built with React Native and Flutter.",
    },
    {
        name: "Custom Software",
        details:
            "Tailored desktop and enterprise-grade solutions for unique business needs.",
    },
    {
        name: "API Development & Integration",
        details:
            "RESTful and GraphQL APIs with secure and seamless integrations.",
    },
];

const SoftwareDevelopment = () => {
    return (
        <main className="bg-gray-900 min-h-screen">
            <SharedHero
            />

            <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-10">
                {softwareServices.map((service, i) => (
                    <div
                        key={i}
                        className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
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

export default SoftwareDevelopment;
