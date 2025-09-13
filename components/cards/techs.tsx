"use client";
import React from "react";
import {
    Code,
    Server,
    Database,
    Layers,
    Globe,
    Cpu,
    Cloud,
    Terminal,
    GitBranch,
} from "lucide-react";

const Technologies = () => {
    const technologies = [
        { icon: <Globe />, name: "Next.js" },
        { icon: <Code />, name: "React" },
        { icon: <Database />, name: "Django" },
        { icon: <Server />, name: "Node.js" },
        { icon: <Layers />, name: "Laravel" },
        { icon: <Cpu />, name: ".NET" },
        { icon: <Cloud />, name: "Cloud" },
        { icon: <Terminal />, name: "Terminal" },
        { icon: <GitBranch />, name: "GitBranch" },
    ];

    return (
        <section
            data-aos="zoom-in"
            data-aos-delay={100}
            className="max-w-6xl bg-gray-900/30 mx-auto py-10 mb-12 md:my-18 px-6 md:px-12">

            <div
                className="grid grid-cols-2 md:grid-cols-6 gap-8 place-items-center">
                {technologies.map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex flex-row gap-3 items-center group cursor-pointer transition"
                    >
                        {/* Icon */}
                        <div
                            className="text-gray-700 dark:text-gray-300 opacity-70 group-hover:opacity-100 transition duration-300"
                        >
                            {React.cloneElement(tech.icon, { size: 50, strokeWidth: 1.5 })}
                        </div>

                        {/* Label */}
                        <p className="mt-2 text-xl font-medium opacity-70 group-hover:opacity-100 transition duration-300">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;
