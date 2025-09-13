import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Heart, MessageCircle, Clock, Share2, Bookmark, Search, ArrowLeft } from "lucide-react";
import blogs from "@/data/blogs";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

// Sample categories data
const categories = [
  { name: "Technology", count: 12 },
  { name: "Design", count: 8 },
  { name: "Business", count: 5 },
  { name: "Lifestyle", count: 7 },
  { name: "Travel", count: 3 },
];

// Sample tags data
const tags = ["React", "NextJS", "UI/UX", "Web Development", "JavaScript", "Design", "AI", "Startup"];

// Sample comments data
const comments = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "/sample-avatars/avatar1.jpg",
    date: "3 days ago",
    content: "This is such an insightful post! I've been struggling with this exact issue in my projects. The solution you proposed worked perfectly. Thanks for sharing!",
    likes: 4,
  },
  {
    id: 2,
    author: "Michael Chen",
    avatar: "/sample-avatars/avatar2.jpg",
    date: "1 week ago",
    content: "Great write-up! I appreciate how you broke down complex concepts into easily understandable chunks. Looking forward to more content like this.",
    likes: 2,
  },
  {
    id: 3,
    author: "Emma Wilson",
    avatar: "/sample-avatars/avatar3.jpg",
    date: "2 weeks ago",
    content: "I've implemented a similar approach but ran into performance issues. Would love to hear your thoughts on optimizing the solution for larger datasets.",
    likes: 1,
  },
];

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="min-h-screen py-12 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <main className="w-full lg:w-2/3">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/news" className="hover:text-purple-400 transition-colors">Blog</Link>
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
              <p>In today's rapidly evolving digital landscape, businesses and individuals alike are constantly seeking innovative solutions to stay ahead of the curve. This comprehensive guide explores the latest trends and technologies that are shaping our future.</p>

              <h2 className="text-2xl font-bold mt-10 mb-4">The Current State of Technology</h2>
              <p>The technology sector continues to experience unprecedented growth, with breakthroughs in artificial intelligence, blockchain, and quantum computing revolutionizing how we interact with the digital world. These advancements are not only transforming industries but also redefining our daily lives.</p>

              <blockquote className="border-l-4 border-purple-500 pl-6 italic my-8">
                "The future belongs to those who understand that technology is not just a tool but an extension of human capability and creativity."
              </blockquote>

              <h2 className="text-2xl font-bold mt-10 mb-4">Key Trends to Watch</h2>
              <p>As we move further into the digital age, several key trends are emerging that deserve attention from both technologists and business leaders:</p>

              <ul className="my-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>AI-powered automation across industries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Decentralized technologies and Web3 integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Sustainable tech solutions for environmental challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Enhanced cybersecurity measures in response to evolving threats</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Implementation Strategies</h2>
              <p>Successfully implementing these technologies requires a strategic approach that balances innovation with practicality. Organizations should focus on building adaptable infrastructures that can evolve with technological advancements.</p>

              <div className="bg-gray-800/50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Pro Tip</h3>
                <p>When adopting new technologies, start with small pilot programs to test effectiveness before committing to large-scale implementation.</p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
              <p>The digital transformation journey is ongoing, with new developments emerging at an accelerating pace. By staying informed about these trends and adopting a forward-thinking mindset, businesses and individuals can position themselves for success in the increasingly digital future.</p>
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {blog.tags?.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Footer */}
            <div className="flex items-center justify-between py-6 border-t border-b border-gray-800 mb-12">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{blog.likes} Likes</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">{blog.views} views</span>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-800/30 p-6 rounded-2xl mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold">{blog.author}</h3>
                  <p className="text-sm text-gray-400">Senior Technology Writer</p>
                </div>
              </div>
              <p className="text-gray-300">
                {blog.author} is a technology enthusiast with over 10 years of experience in digital transformation.
                They are passionate about exploring emerging technologies and sharing insights with the community.
              </p>
            </div>

            {/* Comments Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span>Comments ({comments.length})</span>
              </h2>

              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-800/30 p-5 rounded-2xl">
                    <div className="flex gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold">{comment.author}</h4>
                        <p className="text-sm text-gray-400">{comment.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="mt-10 bg-gray-800/30 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Leave a comment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <textarea
                    placeholder="Your Comment"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </section>

            {/* Related Posts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.slice(0, 2).map((relatedBlog) => (
                  <article key={relatedBlog.id} className="bg-gray-800/30 rounded-2xl overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold mb-2 line-clamp-2">{relatedBlog.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{relatedBlog.date}</p>
                      <Link
                        href={`/news/${relatedBlog.slug}`}
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            {/* Search */}
            <div className="bg-gray-800/30 p-5 rounded-2xl mb-8">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="flex-1 px-4 py-2 bg-gray-700/50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg transition-colors">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-800/30 p-5 rounded-2xl mb-8">
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                      {category.name}
                    </Link>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-800/30 p-5 rounded-2xl mb-8">
              <h3 className="font-bold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogs.slice(0, 3).map((recentBlog) => (
                  <div key={recentBlog.id} className="flex gap-3">
                    <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden">
                      <Image
                        src={recentBlog.image}
                        alt={recentBlog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1 line-clamp-2">
                        <Link href={`/news/${recentBlog.slug}`} className="hover:text-purple-400 transition-colors">
                          {recentBlog.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-400">{recentBlog.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-gray-800/30 p-5 rounded-2xl mb-8">
              <h3 className="font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="px-3 py-1 text-sm bg-gray-700/50 hover:bg-purple-600 rounded-full transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-5 rounded-2xl mb-8">
              <h3 className="font-bold mb-4">Subscribe to our Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">Get the latest updates and news directly to your inbox.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
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