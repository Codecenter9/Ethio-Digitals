"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, Bell, MessageSquare, Menu, ChevronDown, LogOut, User, Settings } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

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
          <div className="relative group" ref={dropdownRef}>
            <Button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 focus:outline-none"
            >
              <Image
                src="/images/OIP.webp"
                alt="profile"
                className="rounded-full border-2 border-transparent group-hover:border-indigo-500 transition-colors"
                width={40}
                height={40}
              />
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </Button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700">
                <div className="px-4 py-2 border-b border-gray-700">
                  <p className="text-sm text-white">Signed in as</p>
                  <p className="text-sm font-medium text-gray-300">admin@example.com</p>
                </div>

                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  <User size={16} className="mr-2" />
                  Profile
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  <Settings size={16} className="mr-2" />
                  Settings
                </a>

                <div className="border-t border-gray-700 my-1"></div>

                <Button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                >
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}