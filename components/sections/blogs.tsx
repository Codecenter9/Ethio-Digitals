"use client";
import React from "react";
import Image from "next/image";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../layout/sectionheading";

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "Building Scalable Web Apps with Next.js",
            image: "/images/OIP.webp",
            author: "Juhar Endris",
            date: "Sep 5, 2025",
            description:
                "Discover how to leverage Next.js for performance and scalability in modern applications.",
        },
        {
            id: 2,
            title: "Mastering React for Frontend Development",
            image: "/images/OIP.webp",
            author: "Tech Team",
            date: "Aug 28, 2025",
            description:
                "Tips, tricks, and best practices for writing clean and maintainable React code.",
        },
        {
            id: 3,
            title: "Laravel & APIs: A Complete Guide",
            image: "/images/OIP.webp",
            author: "Dev Community",
            date: "Aug 15, 2025",
            description:
                "Learn how to build and secure RESTful APIs with Laravel, step by step.",
        },
    ];

    return (
        <section className="py-12 relative px-6 md:py-24 md:px-12 mx-auto">
            <SectionHeading
                subtitle="Blogs"
                title="Our Latest Blogs"
                description="Stay updated with insights, tips, and stories from Ethio Digitals to inspire your digital journey."
            />


            <div className="grid md:grid-cols-3 gap-5">
                {blogs.map((blog) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={100 + blog.id * 50}
                        key={blog.id}
                        className="bg-gray-900/30 rounded-xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-500 transition">
                                {blog.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">
                                {blog.description}
                            </p>

                            {/* Meta Info */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-4">
                                <div className="flex items-center gap-1">
                                    <User size={16} />
                                    {blog.author}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={16} />
                                    {blog.date}
                                </div>
                            </div>

                            <Link href="blogs"
                                className="mt-6 p-3 group relative "
                            >
                                <span className=" text-pink-600 font-medium relative">
                                    Read More...
                                    <span className="absolute left-0 -bottom-1 w-[10px] h-0.5 bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
