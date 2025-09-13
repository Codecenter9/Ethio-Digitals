"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownProps {
  filterIcon: React.ElementType; // Lucide icon component
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export function Dropdown({
  title,
  options,
  selected,
  onSelect,
  filterIcon: FilterIcon,
}: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-gray-800 text-gray-200 hover:bg-gray-700 rounded-lg px-4 py-2 border-none focus:outline-none focus:ring-pink-500 focus:ring-2"
        >
          <FilterIcon className="w-5 h-5 text-pink-400" />
          {selected === "All" ? title : selected}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 bg-gray-900 rounded-lg overflow-hidden">
        <DropdownMenuLabel className="text-gray-200">{title}</DropdownMenuLabel>
        <DropdownMenuSeparator className="border-gray-700" />
        {options.map((opt) => (
          <DropdownMenuCheckboxItem
            key={opt}
            checked={selected === opt}
            onCheckedChange={() => onSelect(opt)}
            className={`text-gray-200 hover:bg-gray-800 ${selected === opt ? "bg-pink-500/30" : ""
              }`}
          >
            {opt}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
