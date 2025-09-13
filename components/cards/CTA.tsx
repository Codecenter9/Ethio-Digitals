"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "../ui/button";

const CTA = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail("");
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section className="relative w-full max-w-6xl mx-auto py-16 px-6 md:px-12 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                    Stay Updated
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Get the latest insights and offers delivered to your inbox.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-2 shadow-md max-w-md mx-auto"
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 w-full px-4 py-3 rounded-lg bg-transparent text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none border border-gray-300 dark:border-gray-600"
                    required
                    disabled={isSubmitting}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <svg
                                className="animate-spin h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            Subscribe
                        </>
                    )}
                </Button>
            </form>

            <p className="text-center text-gray-500 dark:text-gray-400 mt-4 text-sm">
                No spam, unsubscribe anytime.
            </p>
        </section>
    );
};

export default CTA;
