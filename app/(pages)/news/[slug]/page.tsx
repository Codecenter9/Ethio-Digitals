import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  User,
  Heart,
  Clock,
  Share2,
} from "lucide-react";
import blogs from "@/data/blogs";
import { Blog } from "@/types/blog";

// Generate static paths
export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

// Categories mock data (could later be dynamic)
const categories: { name: string; count: number }[] = [
  { name: "Technology", count: 12 },
  { name: "Design", count: 8 },
  { name: "Business", count: 5 },
  { name: "Lifestyle", count: 7 },
  { name: "Travel", count: 3 },
];

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog: Blog | undefined = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="min-h-screen py-12 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ================= MAIN CONTENT ================= */}
          <main className="w-full lg:w-2/3">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-400 mb-8">
              <Link
                href="/"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/news"
                className="hover:text-purple-400 transition-colors"
              >
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">{blog.title}</span>
            </nav>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-10">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="lead text-xl text-gray-300 mb-8">{blog.excerpt}</p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Introduction</h2>
              <p>
                In today&apos;s rapidly evolving digital landscape, businesses
                and individuals alike are constantly seeking innovative
                solutions...
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Key Trends</h2>
              <ul className="my-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  AI-powered automation across industries
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Decentralized technologies and Web3 integration
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Sustainable tech solutions for environmental challenges
                </li>
              </ul>
            </article>

            {/* Tags */}
            {/* {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {blog.tags.map((tag: any, index: any) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )} */}

            {/* Footer Buttons */}
            <div className="flex items-center justify-between py-6 border-t border-b border-gray-800 mb-12">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Heart className="w-5 h-5" />{" "}
                  <span>{blog.likes} Likes</span>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Share2 className="w-5 h-5" /> <span>Share</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">
                  {blog.views ?? 0} views
                </span>
              </div>
            </div>
          </main>

          {/* ================= SIDEBAR ================= */}
          <aside className="w-full lg:w-1/3 space-y-8">
            {/* Categories */}
            <div className="bg-gray-800/30 p-5 rounded-2xl">
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li
                    key={cat.name}
                    className="flex justify-between items-center"
                  >
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {cat.name}
                    </Link>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-800/30 p-5 rounded-2xl">
              <h3 className="font-bold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogs.slice(0, 3).map((b) => (
                  <Link
                    key={b.id}
                    href={`/news/${b.slug}`}
                    className="flex gap-3 items-center"
                  >
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                      <Image
                        src={b.image}
                        alt={b.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2">
                        {b.title}
                      </h4>
                      <p className="text-xs text-gray-400">{b.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
