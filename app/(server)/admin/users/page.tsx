"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import SharedTitle from "@/components/admin/layout/sharedtitle";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Users = () => {
    const [f_name, setFName] = useState("");
        const [l_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImage(file);

        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (signUpError) {
            alert(signUpError.message);
            setLoading(false);
            return;
        }

        const user = signUpData.user;
        if (!user) {
            alert("Signup failed. Please try again.");
            setLoading(false);
            return;
        }
        else {
            alert("Signup successful! Please check your email to confirm.");

        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl space-y-8">
                <SharedTitle title="Add New Admins" />
                <form onSubmit={handleSignup} className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                            <div className="mb-6 pb-4 border-b border-gray-700">
                                <h3 className="text-xl font-semibold text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    Basic Information
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">Enter the team members basic details</p>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        value={f_name}
                                        onChange={(e) => setFName(e.target.value)}
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
                                        focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        value={l_name}
                                        onChange={(e) => setLName(e.target.value)}
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
                                        focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
                                        focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                                        required
                                    />
                                </div>

                                <div className="">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Password *
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
                                        focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                            <div className="mb-6 pb-4 border-b border-gray-700">
                                <h3 className="text-xl font-semibold text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    Additional Information
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">Add details and a profile image</p>
                            </div>

                            <div className="space-y-5">

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Profile Image
                                    </label>

                                    {previewUrl ? (
                                        <div className="mb-4 flex flex-col items-center">
                                            <div className="relative">
                                                <Image
                                                    width={128}
                                                    height={128}
                                                    src={previewUrl}
                                                    alt="Preview"
                                                    className="w-32 h-32 object-cover rounded-lg border-2 border-purple-500 shadow-lg"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setImage(null);
                                                        setPreviewUrl(null);
                                                    }}
                                                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-2">Click the image to change</p>
                                        </div>
                                    ) : (
                                        <label className="flex flex-col items-center justify-center w-full h-40 
                                            border-2 border-dashed border-gray-600 rounded-xl cursor-pointer 
                                            bg-gray-800/50 hover:bg-gray-800 transition-all hover:border-purple-400 group">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 mb-2 group-hover:text-purple-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-sm text-gray-400 group-hover:text-purple-300 transition-colors">
                                                    Click to upload a profile image
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center pt-4">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 
                            hover:from-purple-700 hover:to-indigo-700 transition-all text-white font-semibold 
                            flex items-center justify-center disabled:opacity-50 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 cursor-pointer"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Adding Admin...
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                        Add Admin
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </form>
                <div className="mx-auto max-w-2xl">
                    {error && (
                        <div className="p-4 bg-red-900/30 border border-red-700 rounded-xl text-red-300 flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span>{error}</span>
                        </div>
                    )}

                    {success && (
                        <div className="p-4 bg-green-900/30 border border-green-700 rounded-xl text-green-300 flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Team member added successfully! They will now appear in your team list.</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Users
