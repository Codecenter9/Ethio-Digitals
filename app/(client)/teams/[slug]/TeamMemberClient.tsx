"use client";
import { Github, Linkedin, Twitter, Globe, Mail, ArrowLeft, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TeamMember {
    id: number;
    name: string;
    slug: string;
    position: string;
    image: string;
    bio: string;
    socials: {
        github: string;
        linkedin: string;
        twitter: string;
        portfolio?: string;
    };
    skills: string[];
    projects: number;
    experience: string;
    location: string;
    joined: string;
}

export default function TeamMemberClient({ member }: { member: TeamMember }) {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="min-h-screen py-12 md:py-24 bg-gray-950 text-white">


            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="w-95 h-100 md:w-64 md:h-64 relative rounded-2xl overflow-hidden shadow-xl border-4 border-purple-500/20">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{member.name}</h1>
                        <p className="text-xl text-purple-400 mb-6">{member.position}</p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-purple-400">{member.projects}+</div>
                                <div className="text-sm text-gray-400">Projects</div>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-purple-400">{member.experience}</div>
                                <div className="text-sm text-gray-400">Experience</div>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <div className="flex items-center text-sm text-gray-400">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {member.location}
                                </div>
                                <div className="text-sm text-gray-400 mt-2">Location</div>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <div className="flex items-center text-sm text-gray-400">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {member.joined}
                                </div>
                                <div className="text-sm text-gray-400 mt-2">Joined</div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <Link
                                href={member.socials.github}
                                className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                                target="_blank"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                GitHub
                            </Link>
                            <Link
                                href={member.socials.linkedin}
                                className="flex items-center px-4 py-2 bg-blue-800/30 hover:bg-blue-800/50 rounded-lg transition-colors"
                                target="_blank"
                            >
                                <Linkedin className="w-5 h-5 mr-2" />
                                LinkedIn
                            </Link>
                            <Link
                                href={member.socials.twitter}
                                className="flex items-center px-4 py-2 bg-sky-800/30 hover:bg-sky-800/50 rounded-lg transition-colors"
                                target="_blank"
                            >
                                <Twitter className="w-5 h-5 mr-2" />
                                Twitter
                            </Link>
                            {member.socials.portfolio && (
                                <Link
                                    href={member.socials.portfolio}
                                    className="flex items-center px-4 py-2 bg-purple-800/30 hover:bg-purple-800/50 rounded-lg transition-colors"
                                    target="_blank"
                                >
                                    <Globe className="w-5 h-5 mr-2" />
                                    Portfolio
                                </Link>
                            )}
                            <Link
                                href={`mailto:${member.slug}@ethiodigitals.com`}
                                className="flex items-center px-4 py-2 bg-pink-800/30 hover:bg-pink-800/50 rounded-lg transition-colors"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Email
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="border-b border-gray-800 mb-8">
                    <nav className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab('about')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'about' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => setActiveTab('skills')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'skills' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'projects' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
                        >
                            Projects
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {activeTab === 'about' && (
                            <div className="bg-gray-900/50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                                    About {member.name}
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>

                                <h3 className="text-lg font-semibold mb-4 mt-8">Experience</h3>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-purple-500 pl-4 py-2">
                                        <h4 className="font-medium">Senior {member.position}</h4>
                                        <p className="text-sm text-gray-400">EthioDigitals • Full-time</p>
                                        <p className="text-sm text-gray-400">{member.joined} - Present • {member.location}</p>
                                    </div>
                                    <div className="border-l-2 border-gray-700 pl-4 py-2">
                                        <h4 className="font-medium">{member.position}</h4>
                                        <p className="text-sm text-gray-400">Tech Company • Full-time</p>
                                        <p className="text-sm text-gray-400">Jan 2018 - {member.joined} • 2 yrs</p>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold mb-4 mt-8">Education</h3>
                                <div className="border-l-2 border-gray-700 pl-4 py-2">
                                    <h4 className="font-medium">BSc in Computer Science</h4>
                                    <p className="text-sm text-gray-400">Addis Ababa University</p>
                                    <p className="text-sm text-gray-400">2014 - 2018</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'skills' && (
                            <div className="bg-gray-900/50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-6 flex items-center">
                                    <Award className="w-5 h-5 mr-2 text-purple-400" />
                                    Skills & Expertise
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {member.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold mb-4 mt-8">Certifications</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="bg-purple-500/10 p-2 rounded-lg mr-4">
                                            <Award className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">AWS Certified Developer</h4>
                                            <p className="text-sm text-gray-400">Amazon Web Services • 2022</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-purple-500/10 p-2 rounded-lg mr-4">
                                            <Award className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">React Advanced Certification</h4>
                                            <p className="text-sm text-gray-400">Meta • 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'projects' && (
                            <div className="bg-gray-900/50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-6">Recent Projects</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded-xl p-4">
                                        <h3 className="font-medium mb-2">E-Commerce Platform</h3>
                                        <p className="text-sm text-gray-400 mb-3">A full-stack e-commerce solution with React and Node.js</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">React</span>
                                            <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">Node.js</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-xl p-4">
                                        <h3 className="font-medium mb-2">Task Management App</h3>
                                        <p className="text-sm text-gray-400 mb-3">A collaborative task management application</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">Next.js</span>
                                            <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">MongoDB</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <Link
                                        href={member.socials.github}
                                        className="inline-flex items-center text-purple-400 hover:text-purple-300"
                                        target="_blank"
                                    >
                                        View all projects on GitHub <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-gray-900/50 rounded-2xl p-6">
                            <h3 className="font-bold mb-4">Availability</h3>
                            <div className="flex items-center mb-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                <span className="text-sm">Available for new projects</span>
                            </div>
                            <p className="text-sm text-gray-400">Response time: within 24 hours</p>
                        </div>

                        <div className="bg-gray-900/50 rounded-2xl p-6">
                            <h3 className="font-bold mb-4">Work Preferences</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm font-medium">Project Types</p>
                                    <p className="text-sm text-gray-400">Web Apps, APIs, Full-stack</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Team Size</p>
                                    <p className="text-sm text-gray-400">1-10 people</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Commitment</p>
                                    <p className="text-sm text-gray-400">Full-time, Part-time</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 rounded-2xl p-6">
                            <h3 className="font-bold mb-4">Contact Options</h3>
                            <div className="space-y-3">
                                <Link
                                    href={`mailto:${member.slug}@ethiodigitals.com`}
                                    className="flex items-center text-sm text-gray-300 hover:text-white"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Email directly
                                </Link>
                                <Link
                                    href="/contact"
                                    className="flex items-center text-sm text-gray-300 hover:text-white"
                                >
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Schedule meeting
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}