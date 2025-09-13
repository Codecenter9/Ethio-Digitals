import { SharedHero } from "@/components/layout/breadcrumb";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Github,
    MessageCircle,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact ",
    description:
        "Get in touch with Ethio Digitals Software Company. Contact us for software development, web design, mobile apps, and digital solutions in Ethiopia.",
    keywords: [
        "Contact Ethio Digitals",
        "Software Company Ethiopia",
        "Web Development",
        "Mobile Apps",
        "IT Solutions",
        "Software Development Ethiopia",
    ],
    openGraph: {
        title: "Contact Us | Ethio Digitals",
        description:
            "Reach out to Ethio Digitals for inquiries, support, and business opportunities. We provide software, web, and mobile solutions across Ethiopia.",
        url: "https://ethiodigitals.com/contact", // replace with your real URL
        siteName: "Ethio Digitals",
        images: [
            {
                url: "https://ethiodigitals.com/contact-og.jpg", // replace with a contact-themed OG image
                width: 1200,
                height: 630,
                alt: "Contact Ethio Digitals",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Ethio Digitals",
        description:
            "Get in touch with Ethio Digitals Software Company for software development and digital solutions.",
        images: ["https://ethiodigitals.com/contact-og.jpg"], // replace with real OG image
    },
};

const Contact = () => {
    return (
        <section className="bg-gray-950 text-gray-100">
            {/* Hero Section */}
            <SharedHero
                title="Contact Us"
                description="We’d love to hear from you. Reach out to Ethio Digitals for support, collaborations, or any inquiries."
            />

            {/* Contact Form & Subscription */}
            <div
                data-aos="fade-right"
                data-aos-delay={50}
                className="mx-auto py-12 md:py-24 px-6 md:px-12 grid md:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="md:col-span-2 bg-gray-900/20 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-pink-400">
                        Send us a message
                    </h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none"
                        ></textarea>
                        <button className="w-full md:w-max py-3 px-10 rounded-lg bg-pink-500 hover:bg-pink-600 transition font-semibold shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Subscribe Section */}
                <div
                    data-aos="fade-left"
                    data-aos-delay={50}
                    className="bg-gray-900/20 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-pink-400">
                        Subscribe
                    </h2>
                    <p className="mb-6 text-gray-300">
                        Stay updated with our latest news, articles, and resources.
                    </p>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none"
                        />
                        <button className="w-full py-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition font-semibold shadow-md">
                            Subscribe
                        </button>
                    </form>

                    {/* Social Icons */}
                    <div className="flex flex-wrap items-center gap-6 mt-10">
                        <Link href="#" className="hover:text-pink-400 transition">
                            <Facebook />
                        </Link>
                        <Link href="#" className="hover:text-pink-400 transition">
                            <Twitter />
                        </Link>
                        <Link href="#" className="hover:text-pink-400 transition">
                            <Linkedin />
                        </Link>
                        <Link href="#" className="hover:text-pink-400 transition">
                            <Instagram />
                        </Link>
                        <Link href="#" className="hover:text-pink-400 transition">
                            <Youtube />
                        </Link>
                        <Link href="#" className="hover:text-pink-400 transition">
                            <Github />
                        </Link>
                        <Link href="#" className="hover:text-pink-400 transition">
                            <MessageCircle />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Contact Details */}
            <div className="pt-12 pb-24">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-gray-900/30 rounded-lg p-8 flex flex-row gap-5 items-center">
                        <MapPin className="w-10 h-10 text-pink-400" />
                        <p className="text-2xl text-gray-300">Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="bg-gray-900/30 rounded-lg p-8 flex flex-row gap-5 items-center">
                        <Phone className="w-10 h-10 text-pink-400" />
                        <p className="text-2xl text-gray-300">+251 912 345 678</p>
                    </div>
                    <div className="bg-gray-900/30 rounded-lg p-8 flex flex-row gap-5 items-center">
                        <Mail className="w-10 h-10 text-pink-400" />
                        <p className="text-2xl text-gray-300">info@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
