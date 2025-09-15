import { Metadata } from "next";
import { SharedHero } from "@/components/layout/breadcrumb";
import React from "react";

// ✅ Proper SEO metadata
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

// ✅ TypeScript type for a service
interface Service {
  title: string;
  description: string;
  path?: string;
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Responsive and SEO-optimized websites using the latest technologies like Next.js, React, and Laravel.",
    path: "/services/software-development",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile applications (iOS & Android) built with Flutter and React Native for smooth user experiences.",
    icon: "📱",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Graphics Design",
    description:
      "From logos to full brand identity and UI/UX design, we create visuals that inspire and engage.",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies including SEO, content creation, and social media campaigns that grow your business.",
    icon: "📈",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "IT Consulting",
    description:
      "Expert advice on choosing the right technologies, system design, and digital transformation strategies.",
    icon: "🛠️",
    color: "from-gray-500 to-blue-gray-500",
  },
  {
    title: "Educational Training",
    description:
      "Hands-on training programs in programming, cloud computing, and digital skills for students and professionals.",
    icon: "📚",
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud migration, deployment, and management services using AWS, Azure, and Google Cloud.",
    icon: "☁️",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with secure systems, penetration testing, and 24/7 threat monitoring.",
    icon: "🔒",
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, system monitoring, and regular updates to keep your solutions running smoothly.",
    icon: "🖥️",
    color: "from-cyan-500 to-blue-500",
  },
];

const Services: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
      <SharedHero
        title="Our Services"
        description="Explore the wide range of digital services we provide — designed to help you grow, innovate, and succeed in today's digital world."
      />

      <section className="max-w-7xl mx-auto py-12 md:py-24 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={100 + idx * 50}
              key={service.title}
              className="group relative bg-gray-900/50 p-8 rounded-2xl flex flex-col gap-5 border border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Gradient Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn more →
                </span>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-px -z-10`}
              >
                <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
