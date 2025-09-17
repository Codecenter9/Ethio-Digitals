"use client";

import { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ExternalLink, Eye } from "lucide-react";
import { Dropdown } from "../layout/dropdown";
import { Button } from "../ui/button";
import { Project } from "@/types/projects";
import { getProject } from "@/data/projects";


const ProjectCards: React.FC = () => {

    const [projects, setProject] = useState<Project[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getProject();
            console.log("Fetched Category:", data);
            setProject(data);
        })();
    }, []);

    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const categories: string[] = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

    const filteredProjects = projects.filter((p) => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-12 md:py-24 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Header with search and filter */}
                <div data-aos="fade-up" data-aos-delay={50} className="flex flex-row justify-end items-center gap-3 mb-12">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                        />
                    </div>

                    <Dropdown
                        filterIcon={Filter}
                        title="Filter"
                        options={categories}
                        selected={activeCategory}
                        onSelect={(cat: string) => setActiveCategory(cat)}
                    />
                </div>

                {/* Project Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={100 + project.id * 50}
                                key={project.id}
                                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800/30 to-gray-900/50 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-purple-300">
                                        {project.category}
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="flex gap-3">
                                            <Button className="p-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg">
                                                <Eye className="w-5 h-5" />
                                            </Button>
                                            <Link
                                                href={project.url}
                                                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                        {project.name}
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href={project.url}
                                            className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group-hover:underline"
                                        >
                                            View Project
                                            <ExternalLink className="w-4 h-4 ml-1" />
                                        </Link>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <span className="flex w-2 h-2 mr-1">
                                                <span className="absolute animate-ping inline-flex h-2 w-2 rounded-full bg-purple-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                            </span>
                                            Live
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="mx-auto w-24 h-24 rounded-full bg-gray-800/50 flex items-center justify-center mb-6">
                            <Search className="w-10 h-10 text-gray-500" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-300 mb-2">No projects found</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Try adjusting your search or filter to find what you are looking for.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectCards;
