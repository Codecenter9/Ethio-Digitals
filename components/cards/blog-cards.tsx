"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Search, Calendar, User, ArrowRight, Filter } from "lucide-react";
import { Dropdown } from "../layout/dropdown";
import blogs from "@/data/blogs";

export default function BlogList() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs = blogs.filter(
    (b) =>
      (activeCategory === "All" || b.category === activeCategory) &&
      b.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLoad = () => {
    if (visibleCount >= filteredBlogs.length) setVisibleCount(6);
    else setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="py-12 px-6 md:px-12">

      <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Filter for Mobile */}
          <div
            data-aos="fade-up"
            data-aos-delay={50}
            className="flex flex-row gap-3 items-center md:hidden mb-6">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
              />
            </div>

            <Dropdown
              filterIcon={Filter}
              title="Filter"
              options={categories}
              selected={activeCategory}
              onSelect={(cat) => {
                setActiveCategory(cat);
              }}
            />
          </div>

          {/* Blogs Grid */}
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-800/50 rounded-2xl h-96"
                />
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2">
                {filteredBlogs.slice(0, visibleCount).map((blog) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={100 + blog.id * 50}
                    key={blog.id}
                    className="group relative bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-purple-300">
                        {blog.category}
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <Link href={`/news/${blog.slug}`} className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {blog.title}
                      </Link>

                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{blog.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{blog.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
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

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredBlogs.length > 6 && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={toggleLoad}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    {visibleCount >= filteredBlogs.length
                      ? "Show Less"
                      : "Load More Articles"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Search */}
          <div
            data-aos="fade-up"
            data-aos-delay={50}
            className="hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Categories */}
          <div
            data-aos="fade-up"
            data-aos-delay={50} className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/30">
            <h2 className="text-lg font-semibold mb-4 text-white">Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer px-3 py-2 rounded-lg transition ${activeCategory === cat
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:bg-gray-700/50"
                    }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div
            data-aos="fade-up"
            data-aos-delay={50}
            className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/30">
            <h2 className="text-lg font-semibold mb-4 text-white">Recent Posts</h2>
            <ul className="space-y-4">
              {blogs.slice(0, 4).map((blog) => (
                <li key={blog.id} className="flex items-start gap-3">
                  <div className="flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/news/${blog.slug}`}
                      className="text-sm font-medium text-white hover:text-purple-400 transition line-clamp-2"
                    >
                      {blog.title}
                    </Link>
                    <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div
            data-aos="fade-up"
            data-aos-delay={50}
            className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/30">
            <h2 className="text-lg font-semibold mb-4 text-white">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {categories.filter(cat => cat !== "All").map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 hover:bg-purple-600 hover:text-white transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div
            data-aos="fade-up"
            data-aos-delay={50}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20">
            <h2 className="text-lg font-semibold mb-3 text-white">Subscribe</h2>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest articles delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}