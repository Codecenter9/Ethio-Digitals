"use client";

import React from "react";
import Image from "next/image";
import { Clock, User } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../layout/sectionheading";

type Blog = {
    id: number;
    title: string;
    image: string;
    author: string;
    date: string;
    description: string;
    slug?: string;
};

const blogs: Blog[] = [
    {
        id: 1,
        title: "Building Scalable Web Apps with Next.js",
        image: "/images/OIP.webp",
        author: "Juhar Endris",
        date: "Sep 5, 2025",
        description:
            "Discover how to leverage Next.js for performance and scalability in modern applications.",
        slug: "building-scalable-web-apps-with-nextjs",
    },
    {
        id: 2,
        title: "Mastering React for Frontend Development",
        image: "/images/OIP.webp",
        author: "Tech Team",
        date: "Aug 28, 2025",
        description:
            "Tips, tricks, and best practices for writing clean and maintainable React code.",
        slug: "mastering-react-for-frontend-development",
    },
    {
        id: 3,
        title: "Laravel & APIs: A Complete Guide",
        image: "/images/OIP.webp",
        author: "Dev Community",
        date: "Aug 15, 2025",
        description:
            "Learn how to build and secure RESTful APIs with Laravel, step by step.",
        slug: "laravel-apis-a-complete-guide",
    },
];

export const Blogs: React.FC = () => {
    return (
        <section
            className="py-12 md:py-24 px-6 md:px-12 relative"
            aria-labelledby="blogs-heading"
        >
            <SectionHeading
                subtitle="Blogs"
                title="Our Latest Blogs"
                description="Stay updated with insights, tips, and stories from EthioDigitals to inspire your digital journey."
            />

            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {blogs.map((blog) => (
                    <article
                        key={blog.id}
                        data-aos="fade-up"
                        data-aos-delay={100 + blog.id * 50}
                        className="bg-gray-900/30 rounded-xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-500 transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-gray-400 text-sm flex-1">{blog.description}</p>

                            {/* Meta info */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
                                <div className="flex items-center gap-1">
                                    <User size={16} aria-hidden="true" />
                                    <span>{blog.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={16} aria-hidden="true" />
                                    <span>{blog.date}</span>
                                </div>
                            </div>

                            {/* Read More link */}
                            <Link
                                href={`/news/${blog.slug || blog.id}`}
                                className="mt-6 inline-block group relative"
                            >
                                <span className="text-pink-600 font-medium relative">
                                    Read More...
                                    <span className="absolute left-0 -bottom-1 w-[10px] h-0.5 bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
