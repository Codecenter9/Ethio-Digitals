"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setFade(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-950 transition-opacity duration-700 ${
        fade ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-20 h-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rotating arc */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#outerGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="180 280"
          className="animate-rotate-outer"
        />
        
        {/* Inner rotating arc */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#innerGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="120 220"
          className="animate-rotate-inner"
        />
        
        <defs>
          <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes rotate-outer {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes rotate-inner {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        .animate-rotate-outer {
          animation: rotate-outer 1.5s linear infinite;
          transform-origin: center;
        }
        
        .animate-rotate-inner {
          animation: rotate-inner 1.2s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default Preloader;