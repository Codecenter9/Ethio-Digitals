"use client";
import { Github, Linkedin, Twitter, Globe, Mail, ArrowLeft, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Enhanced sample data structure for fallback
const sampleMember = {
    id: "1",
    name: "John Doe",
    slug: "john-doe",
    position: "Senior Developer",
    profession: "Full Stack Developer",
    image: "/images/team.webp",
    bio: "Experienced developer with a passion for creating innovative solutions.",
    details: "John is a dedicated developer with over 5 years of experience in web development. He specializes in React, Node.js, and cloud technologies.",
    socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: "https://portfolio.com"
    },
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    projects: 12,
    experience: "5+ years",
    location: "Addis Ababa, Ethiopia",
    joined: "2022",
    email: "john@ethiodigitals.com",
    phone: "+251 912 345 678"
};

// Default skills to show when none are provided
const defaultSkills = [
    "JavaScript", "React", "Node.js", "TypeScript",
    "HTML/CSS", "Git", "REST APIs", "Problem Solving"
];

// Default projects to show when none are provided
const defaultProjects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application",
        technologies: ["TypeScript", "Next.js", "Firebase"]
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website with animations",
        technologies: ["React", "Tailwind CSS", "Framer Motion"]
    }
];

export default function TeamMemberClient({ member }: { member: any }) {
    const [activeTab, setActiveTab] = useState("about");

    const teamMember = member || sampleMember;

    const socials = teamMember.socials || {};
    const safeSocials = {
        github: socials.github || "#",
        linkedin: socials.linkedin || "#",
        twitter: socials.twitter || "#",
        portfolio: socials.portfolio || "#"
    };

    // Use provided skills or default skills if none available
    const skills = Array.isArray(teamMember.skills) && teamMember.skills.length > 0
        ? teamMember.skills
        : defaultSkills;

    // Determine projects count and data
    const projectsCount = teamMember.projects > 0 ? teamMember.projects : 8;
    const projectsToShow = teamMember.projects > 0 ? [] : defaultProjects;

    // Format email properly
    const email = teamMember.email || `${teamMember.slug}@ethiodigitals.com`;

    return (
        <div className="min-h-screen py-12 md:py-24 bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shadow-xl border-4 border-purple-500/20">
                            <Image
                                src={teamMember.image || "/images/team.webp"}
                                alt={teamMember.name}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = "/images/team.webp";
                                }}
                            />
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {teamMember.name}
                        </h1>
                        <p className="text-xl text-purple-400 mb-6">
                            {teamMember.profession || teamMember.position}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-purple-400">
                                    {projectsCount}+
                                </div>
                                <div className="text-sm text-gray-400">Projects</div>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-purple-400">
                                    {teamMember.experience || "3+"}
                                </div>
                                <div className="text-sm text-gray-400">Years Of Experience</div>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <div className="flex items-center text-sm text-gray-400">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {teamMember.location || "Ethiopia"}
                                </div>
                                <div className="text-sm text-gray-400 mt-2">Location</div>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <div className="flex items-center text-sm text-gray-400">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {teamMember.joined || "2023"}
                                </div>
                                <div className="text-sm text-gray-400 mt-2">Joined</div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <Link
                                href={safeSocials.github}
                                className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                GitHub
                            </Link>
                            <Link
                                href={safeSocials.linkedin}
                                className="flex items-center px-4 py-2 bg-blue-800/30 hover:bg-blue-800/50 rounded-lg transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-5 h-5 mr-2" />
                                LinkedIn
                            </Link>
                            <Link
                                href={safeSocials.twitter}
                                className="flex items-center px-4 py-2 bg-sky-800/30 hover:bg-sky-800/50 rounded-lg transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-5 h-5 mr-2" />
                                Twitter
                            </Link>
                            {safeSocials.portfolio && safeSocials.portfolio !== "#" && (
                                <Link
                                    href={safeSocials.portfolio}
                                    className="flex items-center px-4 py-2 bg-purple-800/30 hover:bg-purple-800/50 rounded-lg transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Globe className="w-5 h-5 mr-2" />
                                    Portfolio
                                </Link>
                            )}
                            <Link
                                href={`mailto:${email}`}
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
                            onClick={() => setActiveTab("about")}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "about"
                                ? "border-purple-500 text-purple-400"
                                : "border-transparent text-gray-400 hover:text-gray-300"
                                }`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => setActiveTab("skills")}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "skills"
                                ? "border-purple-500 text-purple-400"
                                : "border-transparent text-gray-400 hover:text-gray-300"
                                }`}
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => setActiveTab("projects")}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "projects"
                                ? "border-purple-500 text-purple-400"
                                : "border-transparent text-gray-400 hover:text-gray-300"
                                }`}
                        >
                            Projects
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {activeTab === "about" && (
                            <div className="bg-gray-900/50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                                    About {teamMember.name}
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {teamMember.details || teamMember.bio || `${teamMember.name} is a talented professional at Ethio Digitals with a passion for technology and innovation. They contribute to our team's success through their dedication and expertise.`}
                                </p>
                            </div>
                        )}

                        {activeTab === "skills" && (
                            <div className="bg-gray-900/50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-6 flex items-center">
                                    <Award className="w-5 h-5 mr-2 text-purple-400" />
                                    Skills & Expertise
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "projects" && (
                            <div className="bg-gray-900/50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-6">Recent Projects</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    {projectsToShow.length > 0 ? (
                                        // Show default projects if no projects data
                                        projectsToShow.map((project, index) => (
                                            <div key={index} className="bg-gray-800/50 rounded-xl p-4">
                                                <h3 className="font-medium mb-2 text-white">{project.title}</h3>
                                                <p className="text-sm text-gray-400 mb-3">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        // Show actual projects if available
                                        <>
                                            <div className="bg-gray-800/50 rounded-xl p-4">
                                                <h3 className="font-medium mb-2 text-white">E-Commerce Platform</h3>
                                                <p className="text-sm text-gray-400 mb-3">
                                                    A full-stack e-commerce solution with React and Node.js
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">React</span>
                                                    <span className="px-2 py-1 bg-green-900/30 text-green-300 rounded text-xs">Node.js</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-800/50 rounded-xl p-4">
                                                <h3 className="font-medium mb-2 text-white">Task Management App</h3>
                                                <p className="text-sm text-gray-400 mb-3">
                                                    A collaborative task management application
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">TypeScript</span>
                                                    <span className="px-2 py-1 bg-yellow-900/30 text-yellow-300 rounded text-xs">MongoDB</span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {projectsToShow.length === 0 && (
                                    <div className="mt-6 text-center">
                                        <Link
                                            href={safeSocials.github}
                                            className="inline-flex items-center text-purple-400 hover:text-purple-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View all projects on GitHub{" "}
                                            <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sidebar - Additional Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900/50 rounded-2xl p-6 sticky top-6">
                            <h3 className="text-lg font-bold mb-4 text-white">Additional Information</h3>

                            <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                                <p className="text-purple-400">{email}</p>
                            </div>

                            {teamMember.phone && (
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">Phone</h4>
                                    <p className="text-purple-400">{teamMember.phone}</p>
                                </div>
                            )}

                            <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                                <p className="text-white">{teamMember.location || "Addis Ababa, Ethiopia"}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-gray-400 mb-1">Joined</h4>
                                <p className="text-white">{teamMember.joined || "2023"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}