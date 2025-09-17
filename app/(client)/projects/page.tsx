import type { Metadata } from "next";
import { SharedHero } from "@/components/layout/breadcrumb";
import ProjectCards from "@/components/cards/projectcards";

export const metadata: Metadata = {
  title: "Projects ",
  description:
    "Explore our projects across Web Development, Mobile Apps, UI/UX Design, and Graphics. Discover how we deliver innovative digital solutions.",
  keywords: [
    "Projects",
    "YourCompany",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Graphics Design",
    "Digital Solutions",
  ],
  openGraph: {
    title: "Projects | YourCompany",
    description:
      "Explore our portfolio of projects in web, mobile apps, UI/UX, and graphics. See how YourCompany builds innovation.",
    url: "https://yourdomain.com/projects",
    siteName: "YourCompany",
    images: [
      {
        url: "https://yourdomain.com/og-projects.jpg", // replace with real image
        width: 1200,
        height: 630,
        alt: "Projects - YourCompany",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | YourCompany",
    description:
      "Check out our projects across web, mobile, UI/UX, and graphics. Innovation in action.",
    images: ["https://yourdomain.com/og-projects.jpg"], // replace with real image
  },
};

export default function ProjectPage() {
  return (
    <section className="bg-gray-900">
      <SharedHero
        title="Projects"
        description="Explore our portfolio of projects that showcase our expertise in design, development, and digital innovation."
      />

      <ProjectCards />
    </section>
  );
}
