"use client";
import Link from "next/link";
import {
    LayoutDashboard,
    Users,
    Folder,
    FileText,
    Settings,
    Server,
    BarChart3,
    HelpCircle,
    ChevronFirst,
    ChevronLast,
    User,
} from "lucide-react";
import { Button } from "../ui/button";

const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/teams", label: "Teams", icon: Users },
    { href: "/admin/projects", label: "Projects", icon: Folder },
    { href: "/admin", label: "Blogs", icon: FileText },
    { href: "/admin", label: "Services", icon: Server },
    { href: "/admin", label: "Reports", icon: BarChart3 },
    { href: "/admin", label: "Settings", icon: Settings },
    { href: "/admin", label: "Support", icon: HelpCircle },
    { href: "/admin/users", label: "Admins", icon: User },
];

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (collapsed: boolean) => void;
    isMobileOpen: boolean;
    setIsMobileOpen: (open: boolean) => void;
}

export default function Sidebar({
    isCollapsed,
    setIsCollapsed,
    isMobileOpen,
    setIsMobileOpen,
}: SidebarProps) {


    return (
        <>
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside
                className={`fixed md:fixed inset-y-0 left-0 bg-gradient-to-b from-gray-900 to-gray-950 text-white p-4 transform transition-all duration-300 z-50 h-screen flex flex-col border-r border-gray-800 shadow-2xl
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 ${isCollapsed ? "w-20" : "w-64"}`}
            >
                <div className="flex items-center justify-between mb-8 pt-2">
                    <div
                        className={`flex items-center transition-all duration-300 ${isCollapsed ? "justify-center w-full" : "justify-start"
                            }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                            <span className="font-bold text-lg text-white">A</span>
                        </div>
                        {!isCollapsed && (
                            <h2 className="ml-3 text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Admin
                            </h2>
                        )}
                    </div>
                    {/* Collapse/Expand button */}
                    <Button
                        className="hidden md:flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 ml-2 border border-gray-700 shadow-sm cursor-pointer"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        {isCollapsed ? (
                            <ChevronLast size={18} className="text-gray-300" />
                        ) : (
                            <ChevronFirst size={18} className="text-gray-300" />
                        )}
                    </Button>
                </div>

                <hr className="h-2 w-full text-cyan-900" />
                {/* Navigation */}
                <nav className="flex-1 mt-2">
                    <ul className="space-y-1">
                        {links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="relative flex items-center p-3 rounded-xl hover:bg-indigo-600/30 transition-all duration-200 group border border-transparent hover:border-indigo-500/30"
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        <Icon size={20} className="flex-shrink-0 text-indigo-300" />
                                        {!isCollapsed && (
                                            <span className="ml-3 transition-opacity duration-300 text-gray-200 group-hover:text-white">
                                                {link.label}
                                            </span>
                                        )}
                                        {isCollapsed && (
                                            <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-50 border border-gray-700">
                                                {link.label}
                                                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rotate-45 bg-gray-900"></div>
                                            </div>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
}