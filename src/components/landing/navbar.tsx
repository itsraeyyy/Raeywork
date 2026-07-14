"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { GithubIcon } from "./icons";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 h-16 relative flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-semibold text-[15px] tracking-tight cursor-default hover:opacity-80 transition-opacity">
          <div className="w-5 h-5 bg-foreground rounded-[4px] flex items-center justify-center shadow-sm">
            <div className="w-2 h-2 bg-background rounded-[1px]" />
          </div>
          AgentSight
        </div>
        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-xs font-mono text-muted-foreground">
          <a href="#quickstart" className="hover:text-foreground transition-colors hover:scale-105 transform">Quickstart</a>
          <a href="#workflow" className="hover:text-foreground transition-colors hover:scale-105 transform">Workflow</a>
          <a href="#features" className="hover:text-foreground transition-colors hover:scale-105 transform">Features</a>
          <a href="#integrations" className="hover:text-foreground transition-colors hover:scale-105 transform">Integrations</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/itsraeyyy/Agentsight" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-semibold group"
          >
            <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground transition-colors p-1.5 border border-transparent hover:border-border rounded-md relative"
            aria-label="Toggle theme"
          >
            <Sun className="w-3.5 h-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>
      </div>
    </nav>
  );
}
