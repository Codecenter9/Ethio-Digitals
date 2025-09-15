"use client";
import { useState } from "react";
import Sidebar from "@/components/admin/sidebar";
import Topbar from "@/components/admin/topbar";
import "../../../styles/globals.css";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <html lang="en">
            <body className="bg-gray-900">
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
                        <main className="p-4 md:p-8 flex-1 bg-gray-900 text-white">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}