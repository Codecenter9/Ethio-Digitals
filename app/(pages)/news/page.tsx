import BlogList from "@/components/cards/blog-cards";
import { SharedHero } from "@/components/layout/breadcrumb";
import type { Metadata } from "next";

// ✅ SEO metadata for this page
export const metadata: Metadata = {
  title: "News ",
  description:
    "Explore insights, tips, and the latest trends in software development, web design, mobile apps, and digital solutions from Ethio Digitals.",
  keywords: [
    "Ethio Digitals Blog",
    "Software Development",
    "Web Design",
    "Mobile Apps",
    "Digital Solutions",
    "Tech Blog",
    "IT Insights",
  ],
  openGraph: {
    title: "News | Ethio Digitals",
    description:
      "Stay updated with Ethio Digitals' blog – articles on software engineering, digital solutions, and innovative technology.",
    url: "https://ethiodigitals.com/blog",
    siteName: "Ethio Digitals",
    images: [
      {
        url: "https://ethiodigitals.com/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ethio Digitals Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Ethio Digitals",
    description:
      "Explore insights, tips, and the latest trends in software development, web design, and digital solutions.",
    images: ["https://ethiodigitals.com/blog-og.jpg"],
  },
};

export default function BlogPage() {
  return (
    <section className="bg-gray-950 text-gray-100">
      <SharedHero
        title="News"
        description="Explore recent stories, trends, and important updates shaping the future of Ethio Digitals."
      />

      <div className="mx-auto py-12 md:py-24 px-6 md:px-12">
        {/* ✅ Blog Cards */}
        <BlogList />
      </div>
    </section>
  );
}
