"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { usePathname, useRouter } from "next/navigation";

export default function AdminAuthWrapper({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        if (!loading) {
            if (!user && pathname !== "/admin/login" && pathname !== "/admin/signup") {
                router.replace("/admin/login");
            }
            if (user && (pathname === "/admin/login" || pathname === "/admin/signup")) {
                router.replace("/admin"); // redirect logged in users away from auth pages
            }
        }
    }, [user, loading, pathname, router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-white">
                Loading...
            </div>
        );
    }

    // If user is not logged in and on login/signup page, render children (login/signup form)
    if (!user && (pathname === "/admin/login" || pathname === "/admin/signup")) {
        return <>{children}</>;
    }

    if (!user) return null; // redirecting

    // Authenticated layout
    return (
        <div className="flex">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                setIsCollapsed={setIsSidebarCollapsed}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />
            <div
                className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isSidebarCollapsed ? "md:ml-20" : "md:ml-64"
                    }`}
            >
                <Topbar
                    onMenuClick={() => setIsMobileOpen(!isMobileOpen)}
                    isSidebarCollapsed={isSidebarCollapsed}
                    onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                />
                <main className="p-4 md:p-8 flex-1 bg-gray-900 text-white">{children}</main>
            </div>
        </div>
    );
}
