"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Heart, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../layout/sectionheading";
import blogs from "@/data/blogs";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export const Blogs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    // calculate indexes
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

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

            {/* Blog Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {currentBlogs.map((blog) => (
                    <article
                        data-aos="fade-left"
                        data-aos-delay={100 + blog.id * 50}
                        key={blog.id}
                        className="group relative bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
                    >
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={`${blog.title} cover image`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-purple-300">
                                {blog.category}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <header>
                                <Link
                                    href={`/news/${blog.slug}`}
                                    className="text-xl font-semibold text-white mb-3 block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                                >
                                    {blog.title}
                                </Link>
                            </header>

                            <p className="text-gray-400 mb-4 line-clamp-2">{blog.excerpt}</p>

                            {/* Meta info */}
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" aria-hidden="true" />
                                    <span>{blog.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" aria-hidden="true" />
                                    <time dateTime={new Date(blog.date).toISOString()}>
                                        {blog.date}
                                    </time>
                                </div>
                            </div>

                            <footer className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <Heart className="w-4 h-4" aria-hidden="true" />
                                        <span>{blog.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                                        <span>{blog.comments}</span>
                                    </div>
                                    <span>{blog.readTime}</span>
                                </div>

                                <Link
                                    href={`/news/${blog.slug}`}
                                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </footer>
                        </div>
                    </article>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(currentPage - 1);
                                }}
                            />
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    href="#"
                                    isActive={currentPage === i + 1}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(i + 1);
                                    }}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {totalPages > 3 && <PaginationEllipsis />}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(currentPage + 1);
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </section>
    );
};

export default Blogs;
