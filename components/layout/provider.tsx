"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Preloader from "./preloader";

export default function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    // Show preloader on route change
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {loading && <Preloader />}
            <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
                {children}
            </div>
        </>
    );
}
