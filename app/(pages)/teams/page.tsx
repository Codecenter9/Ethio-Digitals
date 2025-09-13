"use client";
import { SharedHero } from "@/components/layout/breadcrumb";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import CTA from "@/components/cards/CTA";
import { team } from "@/data/team";
import Link from "next/link";

const Teams = () => {
    return (
        <section className="bg-gray-950 min-h-screen">
            <SharedHero
                title="Our Team"
                description="Meet the passionate and talented people driving innovation at Ethio Digitals."
            />

            <div className="max-w-7xl mx-auto py-12 md:py-24 px-6 md:px-12">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12">
                    {team.map((member, idx) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={100 + idx * 50}
                            key={member.id} className="flex flex-col items-center text-center"
                        >
                            {/* Image Card with Hover Overlay */}
                            <div className="relative group w-full h-[350px] overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Crossed Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/80 via-transparent to-blue-500/80 opacity-0 group-hover:opacity-90 backdrop-blur-md scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
                                <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/80 via-transparent to-sky-400/80 opacity-0 group-hover:opacity-90 backdrop-blur-md scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 ease-out"></div>

                                {/* Social Icons */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                    <div className="flex gap-4">
                                        <a
                                            href={member.socials.github}
                                            className="p-2 bg-gray-800/70 rounded-full hover:bg-pink-500 transition"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-5 h-5 text-white" />
                                        </a>
                                        <a
                                            href={member.socials.linkedin}
                                            className="p-2 bg-gray-800/70 rounded-full hover:bg-blue-500 transition"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Linkedin className="w-5 h-5 text-white" />
                                        </a>
                                        <a
                                            href={member.socials.twitter}
                                            className="p-2 bg-gray-800/70 rounded-full hover:bg-sky-400 transition"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Twitter className="w-5 h-5 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Info outside the image */}
                            <div className="mt-4">
                                <Link
                                    href={`/teams/${member.slug}`}
                                    className="text-lg font-semibold text-white relative group"
                                >
                                    {member.name}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                <p className="text-sm text-gray-400 mt-1">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <CTA />
            </div>
        </section>
    );
};

export default Teams;