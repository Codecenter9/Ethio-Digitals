import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className="py-24 relative items-center px-6 md:px-12 ">
            <div className="absolute inset-0 opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tl from-purple-500/15 to-transparent blur-3xl" />
            </div>
            <div className="container mx-auto flex flex-col-reverse md:flex-row gap-10">

                {/* Right: Content */}
                <article data-aos="fade-up" className="flex bg-gray-900/20 p-5 rounded-lg flex-2 flex-col gap-6">
                    <header>

                        <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold mb-3">
                            About <span className="text-pink-500">Ethio Digitals</span>
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="450" className="text-gray-300 leading-relaxed">
                            At <strong>Ethio Digitals</strong>, we specialize in delivering cutting-edge
                            <em> software development, digital transformation, and IT consultancy</em>.
                            Our team is passionate about helping businesses in Ethiopia and beyond
                            embrace technology to grow faster, smarter, and more sustainably.
                        </p>
                    </header>

                    {/* Features */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            "Agile and transparent development process",
                            "Customized digital solutions for your business",
                            "Dedicated and experienced professional team",
                            "Commitment to long-term client success"
                        ].map((feature, idx) => (
                            <li
                                data-aos="fade-up"
                                data-aos-delay={100 + idx * 50}
                                key={idx}
                                className="flex items-start gap-3 p-4 rounded-xl relative bg-gray-800/30 cards-gradient-border"
                            >
                                <Check className="w-6 h-6 text-pink-500 shrink-0" />
                                <p className="text-gray-200">{feature}</p>
                            </li>
                        ))}
                    </ul>

                    {/* CTAs */}
                    <div data-aos="fade-up"
                        data-aos-delay={150}
                        className="flex flex-wrap gap-4">
                        <Link href="/get-started" className="p-3 group relative">
                            <span className="text-pink-600 font-medium relative">
                                Read More...
                                <span className="absolute left-0 -bottom-1 w-[10px] h-0.5 bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                            </span>
                        </Link>
                    </div>


                </article>
                {/* Left: Image */}
                <div
                    data-aos="fade-left"
                    data-aos-delay={100}
                    className="flex-1 flex justify-center">
                    <Image
                        src="/images/team.webp"
                        width={450}
                        height={450}
                        alt="Ethio Digitals team working on innovative software solutions"
                        className="rounded-xl object-cover"
                        priority
                    />
                </div>

            </div>
        </section>
    )
}

export default About
