"use client";
import React, { useState } from "react";
import { Save, Upload, X, Tag, Type, FileText, Layers } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SharedTitle from "@/components/admin/layout/sharedtitle";

const initialBlogData = {
    id: 0,
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    description: "",
    image: "",
    tags: [] as string[],
};

const BlogForm = () => {
    const [blog, setBlog] = useState(initialBlogData);
    const [tagInput, setTagInput] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setBlog((prev) => ({ ...prev, [name]: value }));
    };

    const handleTagAdd = () => {
        if (tagInput.trim() && !blog.tags.includes(tagInput.trim())) {
            setBlog((prev) => ({
                ...prev,
                tags: [...prev.tags, tagInput.trim()],
            }));
            setTagInput("");
        }
    };

    const handleTagRemove = (tagToRemove: string) => {
        setBlog((prev) => ({
            ...prev,
            tags: prev.tags.filter((tag) => tag !== tagToRemove),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Blog data:", blog);
        alert("Blog post saved successfully!");
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setBlog((prev) => ({
                    ...prev,
                    image: reader.result as string,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen">
            <div className="w-full mx-auto">
                <SharedTitle title="Create New Blog" />

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div className="">
                        <label htmlFor="title" className="block text-sm font-medium mb-2">
                            Title
                        </label>
                        <div className="relative">
                            <Type className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={blog.title}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                                placeholder="Enter blog title"
                                required
                            />
                        </div>
                    </div>

                    {/* Slug */}
                    <div>
                        <label htmlFor="slug" className="block text-sm font-medium mb-2">
                            Slug
                        </label>
                        <div className="relative">
                            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                id="slug"
                                name="slug"
                                value={blog.slug}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                                placeholder="your-blog-slug"
                                required
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium mb-2">
                            Category
                        </label>
                        <div className="relative">
                            <Layers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <select
                                id="category"
                                name="category"
                                value={blog.category}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white"
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="Development">Development</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Business">Business</option>
                                <option value="Lifestyle">Lifestyle</option>
                            </select>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="">
                        <label htmlFor="tagInput" className="block text-sm font-medium mb-2">
                            Tags
                        </label>
                        <div className="flex gap-2 mb-3">
                            <div className="relative flex-1">
                                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    id="tagInput"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && (e.preventDefault(), handleTagAdd())
                                    }
                                    placeholder="Add tags and press Enter"
                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                                />
                            </div>
                            <Button
                                type="button"
                                onClick={handleTagAdd}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1 bg-indigo-900/70 text-indigo-100 px-3 py-0 rounded-full text-sm"
                                >
                                    {tag}
                                    <Button
                                        type="button"
                                        onClick={() => handleTagRemove(tag)}
                                        className="hover:text-red-400"
                                    >
                                        <X size={14} />
                                    </Button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium mb-2">
                            Featured Image
                        </label>
                        <label
                            htmlFor="image-upload"
                            className="flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer bg-gray-800/50 hover:bg-gray-700 transition-colors"
                        >
                            {blog.image ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={blog.image}
                                        alt="Preview"
                                        height={500}
                                        width={500}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <Button
                                        type="button"
                                        onClick={() => setBlog((prev) => ({ ...prev, image: "" }))}
                                        className="absolute top-2 right-2 p-1 bg-red-600 rounded-full"
                                    >
                                        <X size={16} />
                                    </Button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center">
                                    <Upload size={32} className="text-gray-400 mb-2" />
                                    <p className="mb-1 text-sm text-gray-400">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB)</p>
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

                    {/* Excerpt */}
                    <div className="col-span-2">
                        <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                            Excerpt
                        </label>
                        <textarea
                            id="excerpt"
                            name="excerpt"
                            value={blog.excerpt}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                            placeholder="Short summary of the blog..."
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={blog.description}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                            placeholder="Write full blog content..."
                            required
                        />
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 flex justify-end gap-4 pt-6 border-t border-gray-800">
                        <button
                            type="button"
                            className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                            onClick={() => setBlog(initialBlogData)}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white"
                        >
                            <Save size={18} />
                            Save Blog Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
