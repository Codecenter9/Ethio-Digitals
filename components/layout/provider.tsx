"use client";

import { useEffect, useState } from "react";
import Preloader from "./preloader";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Preloader />}
            <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
                {children}
            </div>
        </>
    );
}
