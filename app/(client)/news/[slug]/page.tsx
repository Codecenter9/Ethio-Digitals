
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  User,
  Heart,
  Clock,
  Share2,
  MessageCircle,
} from "lucide-react";
import blogs from "@/data/blogs";
import { Blog } from "@/types/blog";

// Generate static paths
export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

// Categories mock data
const categories: { name: string; count: number }[] = [
  { name: "Technology", count: 12 },
  { name: "Design", count: 8 },
  { name: "Business", count: 5 },
  { name: "Lifestyle", count: 7 },
  { name: "Travel", count: 3 },
];

// Mock comments data
const comments = [
  {
    id: 1,
    author: "Jane Smith",
    avatar: "/avatars/1.jpg",
    date: "2 days ago",
    content: "This was a really insightful post. Thanks for sharing your expertise on this topic!",
  },
  {
    id: 2,
    author: "Alex Johnson",
    avatar: "/avatars/2.jpg",
    date: "3 days ago",
    content: "I've been struggling with this exact issue. Your solution worked perfectly for me.",
  },
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
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{blog.comments} comments</span>
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
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

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
                  {blog.views ?? 1245} views
                </span>
              </div>
            </div>

            {/* Comments Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

              {/* Existing Comments */}
              <div className="space-y-6 mb-8">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4 p-4 bg-gray-800/30 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-gray-400">• {comment.date}</span>
                      </div>
                      <p className="text-gray-300">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
              <form className="space-y-4">
                <textarea
                  placeholder="Your Comment"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium"
                >
                  Post Comment
                </button>
              </form>
            </section>
          </main>

          {/* ================= SIDEBAR ================= */}
          <aside className="w-full lg:w-1/3 space-y-8">
            {/* About Author */}
            <div className="bg-gray-800/30 p-5 rounded-2xl">
              <h3 className="font-bold mb-4">About the Author</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium">{blog.author}</h4>
                  <p className="text-sm text-gray-400">Senior Developer</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                John is a seasoned developer with over 10 years of experience in web technologies
                and a passion for teaching others through blog posts and tutorials.
              </p>
            </div>

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
                    className="flex gap-3 items-center group"
                  >
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={b.image}
                        alt={b.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 group-hover:text-purple-400 transition-colors">
                        {b.title}
                      </h4>
                      <p className="text-xs text-gray-400">{b.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gray-800/30 p-5 rounded-2xl">
              <h3 className="font-bold mb-4">Subscribe to Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">
                Stay updated with our latest news and articles.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}