"use client";
import Image from "next/image";
import { Search, Bell, MessageSquare, Menu, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

interface TopbarProps {
  onMenuClick: () => void;
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

export default function Topbar({
  onMenuClick,
  isSidebarCollapsed,
  onToggleSidebar,
}: TopbarProps) {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 px-4 py-3 flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        <button
          className="md:hidden mr-3 p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-colors cursor-pointer"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
        <h1 className="font-semibold text-lg text-white">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-gray-700/50 rounded-full px-3 py-2 transition-all duration-200 focus-within:bg-gray-700 focus-within:ring-2 focus-within:ring-indigo-500/30">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none ml-2 text-sm w-40 placeholder-gray-400 text-white"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button className="p-2 rounded-full hover:bg-gray-700 relative transition-colors group">
            <Bell size={20} className="text-gray-300 group-hover:text-indigo-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <Button className="p-2 rounded-full hover:bg-gray-700 relative transition-colors group">
            <MessageSquare size={20} className="text-gray-300 group-hover:text-indigo-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
        </div>

        <div className="flex items-center gap-2 pl-2 border-l border-gray-700">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
          <div className="relative group">
            <Image
              src="/images/OIP.webp"
              alt="profile"
              className="rounded-full border-2 border-transparent group-hover:border-indigo-500 transition-colors"
              width={40}
              height={40}
            />
            <ChevronDown size={16} className="absolute -bottom-1 -right-1 bg-indigo-600 text-white rounded-full p-0.5" />
          </div>
        </div>
      </div>
    </header>
  );
}