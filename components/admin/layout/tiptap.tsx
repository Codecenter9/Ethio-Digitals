"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
    Bold,
    Italic,
    Heading1,
    Heading2,
    Heading3,
    List,
    Quote,
    Code,
    Link as LinkIcon,
    Unlink,
    Pilcrow,
} from "lucide-react";

export default function Tiptap({
    value,
    onChange,
}: {
    value: string;
    onChange: (val: string) => void;
}) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: true,
                autolink: true,
                HTMLAttributes: {
                    class: "text-blue-400 underline hover:text-blue-500",
                },
            }),
        ],
        content: value || "<p>Start writing here...</p>",
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) return null;

    const setLink = () => {
        const url = prompt("Enter a link:");
        if (url) {
            editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
        }
    };

    const unsetLink = () => {
        editor.chain().focus().unsetLink().run();
    };

    return (
        <div
            className="flex flex-col rounded-lg border border-gray-700 
                transition"
        >
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-2 border-b border-gray-700 px-3 py-2">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-2 rounded ${editor.isActive("bold")
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Bold"
                >
                    <Bold size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-2 rounded ${editor.isActive("italic")
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Italic"
                >
                    <Italic size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`p-2 rounded ${editor.isActive("paragraph")
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Paragraph"
                >
                    <Pilcrow size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`p-2 rounded ${editor.isActive("heading", { level: 1 })
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Heading 1"
                >
                    <Heading1 size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`p-2 rounded ${editor.isActive("heading", { level: 2 })
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Heading 2"
                >
                    <Heading2 size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`p-2 rounded ${editor.isActive("heading", { level: 3 })
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Heading 3"
                >
                    <Heading3 size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-2 rounded ${editor.isActive("bulletList")
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Bullet List"
                >
                    <List size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`p-2 rounded ${editor.isActive("blockquote")
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Blockquote"
                >
                    <Quote size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`p-2 rounded ${editor.isActive("codeBlock")
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    type="button"
                    title="Code Block"
                >
                    <Code size={18} />
                </button>
                <button
                    onClick={setLink}
                    className={`p-2 rounded text-gray-300 hover:bg-gray-700`}
                    type="button"
                    title="Add Link"
                >
                    <LinkIcon size={18} />
                </button>
                <button
                    onClick={unsetLink}
                    className={`p-2 rounded text-gray-300 hover:bg-gray-700`}
                    type="button"
                    title="Remove Link"
                >
                    <Unlink size={18} />
                </button>
            </div>

            {/* Editor Content */}
            <div
                className="flex-1 min-h-max cursor-text p-4 text-gray-200 
                   focus:outline-none hover:cursor-text prose prose-invert max-w-none"
                onClick={() => editor.chain().focus().run()}
            >
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}