import React from "react";
import { Code2, Palette, Rocket, LineChart, Zap } from "lucide-react";

const WhatWeDo = () => {
    const services = [
        {
            icon: <Code2 className="w-10 h-10 text-pink-500" aria-hidden="true" />,
            title: "Software Development",
            description:
                "We build scalable, secure, and efficient applications tailored to solve real business problems.",
        },
        {
            icon: <Palette className="w-10 h-10 text-blue-500" aria-hidden="true" />,
            title: "UI/UX Design",
            description:
                "Crafting user-friendly interfaces with engaging experiences that delight and convert.",
        },
        {
            icon: <Rocket className="w-10 h-10 text-purple-500" aria-hidden="true" />,
            title: "Startup Solutions",
            description:
                "Helping startups grow faster with innovative tech solutions and MVP development.",
        },
        {
            icon: <LineChart className="w-10 h-10 text-green-500" aria-hidden="true" />,
            title: "Digital Transformation",
            description:
                "Empowering businesses with automation, cloud migration, and data-driven strategies.",
        },
        {
            icon: <Zap className="w-10 h-10 text-yellow-500" aria-hidden="true" />,
            title: "Automation",
            description:
                "Streamlining business processes to save time, reduce errors, and increase efficiency.",
        },
        {
            icon: <Rocket className="w-10 h-10 text-purple-500" aria-hidden="true" />,
            title: "Product Launch Support",
            description:
                "We guide startups through strategy, MVP development, and successful product launches.",
        },
    ];

    return (
        <section className="max-w-7xl py-12 md:pb-24 px-6 md:px-12">
            {/* Header */}
            <div className="text-start mb-16">
                <div
                    data-aos="fade-down"
                    className="inline-flex items-center mb-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20"
                >
                    <span className="text-sm font-medium text-pink-500">Services</span>
                </div>
                <h2
                    data-aos="fade-up"
                    data-aos-delay={50}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    What We Do
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay={100}
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
                >
                    Our team blends creativity, innovation, and technology to provide
                    solutions that drive growth and impact.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={100 + idx * 50}
                        key={idx}
                        className="bg-gray-900/20 p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        <div className="flex justify-start mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDo;
