"use client";

import React, { useState } from "react";
import { Save, X, Link as LinkIcon, Tag, FileText, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SharedTitle from "@/components/admin/layout/sharedtitle";
import Tiptap from "@/components/admin/layout/tiptap";

const initialProject = {
    title: "",
    description: "",
    link: "",
    category: "",
    image: "",
};

const ProjectForm = () => {
    const [project, setProject] = useState(initialProject);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setProject((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProject((prev) => ({
                    ...prev,
                    image: reader.result as string,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Project:", project);
        alert("Project saved successfully!");
    };

    return (
        <div className="min-h-screen">
            <div className="w-full mx-auto">
                <SharedTitle title="Create New Project" />

                <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col flex-1 bg-gray-800/30 p-6 rounded-lg gap-4">
                        {/* Title */}
                        <div className="flex flex-col gap-2">
                            <label className="block text-sm font-medium mb-1 text-gray-300">Title</label>
                            <div className="relative">
                                <FileText
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    type="text"
                                    name="title"
                                    value={project.title}
                                    onChange={handleChange}
                                    placeholder="Project title"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-2">
                            <label className="block text-sm font-medium mb-1 text-gray-300">Category</label>
                            <div className="relative">
                                <Tag
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <select
                                    name="category"
                                    value={project.category}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Select category</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile App">Mobile App</option>
                                    <option value="UI/UX">UI/UX</option>
                                    <option value="AI & ML">AI & ML</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Project Link */}
                        <div className="flex flex-col gap-2">
                            <label className="block text-sm font-medium mb-1 text-gray-300">Project Link</label>
                            <div className="relative">
                                <LinkIcon
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    type="url"
                                    name="link"
                                    value={project.link}
                                    onChange={handleChange}
                                    placeholder="https://example.com"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col flex-1 gap-6">
                        {/* Project Image */}
                        <div className="bg-gray-800/30 p-6 rounded-lg">
                            <label className="block text-sm font-medium mb-3 text-gray-300">Project Image</label>
                            <label
                                htmlFor="image-upload"
                                className="flex flex-col items-center justify-center w-full h-48 rounded-lg cursor-pointer bg-gray-800/50 hover:bg-gray-800/70 transition-colors relative border-2 border-dashed border-gray-600 hover:border-gray-500"
                            >
                                {project.image ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project.image}
                                            alt="Preview"
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                        <Button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setProject((prev) => ({ ...prev, image: "" }));
                                            }}
                                            className="absolute top-2 right-2 p-1 h-8 w-8 bg-red-600/80 hover:bg-red-600 rounded-full"
                                        >
                                            <X size={16} />
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-gray-400">
                                        <ImageIcon size={32} className="mb-2" />
                                        <p className="mb-1 text-sm">Click to upload</p>
                                        <p className="text-xs">PNG, JPG, GIF</p>
                                    </div>
                                )}
                                <input
                                    id="image-upload"
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </label>
                        </div>

                        {/* Description with Tiptap */}
                        <div className="bg-gray-800/30 p-6 rounded-lg">
                            <label className="block text-sm font-medium mb-3 text-gray-300">Description</label>
                            <div className="h-[300px]">
                                <Tiptap
                                    value={project.description}
                                    onChange={(val) =>
                                        setProject((prev) => ({ ...prev, description: val }))
                                    }
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="bg-gray-800/30 p-6 rounded-lg">
                            <div className="flex flex-wrap gap-3 justify-end">
                                <button
                                    type="button"
                                    onClick={() => setProject(initialProject)}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                                >
                                    <X size={18} />
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                                >
                                    <Save size={18} />
                                    Save Project
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;