import { Metadata } from "next";
import { SharedHero } from "@/components/layout/breadcrumb";
import React from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Edit3,
  MessageCircle,
  Video,
  Wrench,
  Rocket,
  GraduationCap,
  CloudCog,
  Headphones
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Ethio Digitals' wide range of services including software development, graphics design, app development, IT consulting, cloud solutions, cybersecurity, and more.",
  keywords: [
    "Ethio Digitals Services",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Graphics Design",
    "Digital Marketing",
    "IT Consulting",
    "Cloud Solutions",
    "Cybersecurity",
    "Educational Training",
    "Maintenance Support",
  ],
  openGraph: {
    title: "Our Services | Ethio Digitals",
    description:
      "Discover Ethio Digitals' professional services: scalable web apps, creative graphics, secure cloud solutions, and expert IT consulting.",
    url: "https://ethiodigitals.com/services",
    siteName: "Ethio Digitals",
    images: [
      {
        url: "https://ethiodigitals.com/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ethio Digitals Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Ethio Digitals",
    description:
      "Explore our range of services from software development to cloud solutions. Build, grow, and secure your digital future with Ethio Digitals.",
    images: ["https://ethiodigitals.com/services-og.jpg"],
  },
};

const softwareServices = [
  {
    title: "Website Development",
    description:
      "Responsive and SEO-optimized websites using Next.js, React, and Laravel.",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile apps (iOS & Android) built with Flutter and React Native.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Cloud Solutions",
    description:
      "Migration, deployment, and management services on AWS, Azure, and Google Cloud.",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Cybersecurity",
    description:
      "Secure systems, penetration testing, and 24/7 threat monitoring.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, and reliable technical support.",
    icon: <Settings className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
  },
];

const creativeServices = [
  {
    title: "Graphics Design",
    description:
      "From logos to full branding & UI/UX, we create visuals that inspire.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social media, and data-driven campaigns to grow your brand.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Brand Identity",
    description:
      "Creative strategies to build unique, lasting brand presence.",
    icon: <Award className="w-6 h-6" />,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Content Creation",
    description:
      "Engaging blogs, videos, and visuals tailored to connect with your audience.",
    icon: <Edit3 className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Social Media Management",
    description:
      "Grow your presence with curated posts, campaigns, and audience engagement.",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Video & Motion Graphics",
    description:
      "Creative video production and animations that tell your story visually.",
    icon: <Video className="w-6 h-6" />,
    color: "from-rose-500 to-red-500",
  },
];

const otherServices = [
  {
    title: "IT Consulting",
    description:
      "Expert guidance for choosing the right technologies & strategies.",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-gray-500 to-blue-gray-500",
  },
  {
    title: "Startup Solutions",
    description:
      "MVP development, product launches, and growth strategy support.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Educational Training",
    description:
      "Hands-on digital skills, programming, and cloud training.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Cloud & DevOps Services",
    description:
      "Optimize infrastructure with automation, CI/CD pipelines, and monitoring.",
    icon: <CloudCog className="w-6 h-6" />,
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Technical Support",
    description:
      "Dedicated support for troubleshooting, system maintenance, and updates.",
    icon: <Headphones className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
];

const Services: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
      <SharedHero
        title="Our Services"
        description="Explore our wide range of digital services — from software engineering to creative solutions — designed to help you grow, innovate, and succeed."
      />

      <section className="max-w-7xl mx-auto py-12 md:py-20 px-6 md:px-12">
        {/* Software & Creative - 2 Cols Each */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Left Column - Software */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-400">
                Software & Technical
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareServices.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-xl overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-300 text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent transform -translate-x-1/2"></div>

          {/* Right Column - Creative */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center">
                <Palette className="w-6 h-6 text-pink-400" />
              </div>
              <h2 className="text-2xl font-semibold text-pink-400">
                Creative & Marketing
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creativeServices.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-xl overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-300 text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Divider for Mobile */}
        <div className="md:hidden my-12 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Other Services - 3 Cols */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Wrench className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold text-purple-400">
              Other Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <div
                key={service.title}
                className="group relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-xl overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-300 text-white">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;