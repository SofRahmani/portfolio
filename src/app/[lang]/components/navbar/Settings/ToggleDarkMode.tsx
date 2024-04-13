"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useStoreTheme } from "@/store/theme.store";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../../ui/dropdown-menu";

export interface ModeToggleProps {
  lightLabel: string;
  darkLabel: string;
  systemLabel: string;
}

export function ModeToggle({ lightLabel, darkLabel, systemLabel }: ModeToggleProps) {
  const { setTheme } = useTheme();
  const { toggleTheme } = useStoreTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className=" font-sans ">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
            toggleTheme("light");
          }}
        >
          {lightLabel}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");
            toggleTheme("dark");
          }}
        >
          {darkLabel}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
