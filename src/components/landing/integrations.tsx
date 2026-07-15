"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CursorIcon, WindsurfIcon, ClaudeIcon, AntigravityIcon } from "./icons";

const IDE_CONFIGS = [
  {
    id: "cursor",
    name: "Cursor",
    icon: CursorIcon,
    filename: ".cursor/mcp.json",
    code: `{
  "mcpServers": {
    "agentsight": {
      "command": "npx",
      "args": ["-y", "@itsraeyy/agentsight-mcp"]
    }
  }
}`
  },
  {
    id: "windsurf",
    name: "Windsurf",
    icon: WindsurfIcon,
    filename: "mcp_config.json",
    code: `{
  "mcpServers": {
    "agentsight": {
      "command": "npx",
      "args": ["-y", "@itsraeyy/agentsight-mcp"]
    }
  }
}`
  },
  {
    id: "claude",
    name: "Claude Code",
    icon: ClaudeIcon,
    filename: "CLI Command",
    code: `claude mcp add agentsight npx -y @itsraeyy/agentsight-mcp`
  },
  {
    id: "antigravity",
    name: "Antigravity",
    icon: AntigravityIcon,
    filename: "CLI Command",
    code: `npx antigravity-mcp add agentsight`
  }
];

export function Integrations() {
  const [activeIde, setActiveIde] = useState(IDE_CONFIGS[0]);
  const [copied, setCopied] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeIde.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integrations" className="py-24 md:py-32 px-6 md:px-16 bg-background relative overflow-hidden flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#06b6d4] mb-6">
            Integrations
          </div>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-balance max-w-2xl text-foreground">
            Native to your favorite Agentic IDE.
          </h3>
          <p className="text-[15px] text-muted-foreground mt-5 max-w-xl leading-relaxed text-balance">
            Zero cloud latency. AgentSight uses the Model Context Protocol (MCP) to stream DOM state straight into your local environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-8 md:gap-12 w-full items-stretch relative z-10">
          
          {/* IDE Selector Tabs with Spotlight Grid */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="flex flex-col gap-2 relative group/grid border border-border/50 rounded-2xl p-2 bg-card/30 backdrop-blur-sm"
          >
            {/* Spotlight Effect */}
            <div 
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/grid:opacity-100 hidden md:block"
              style={{
                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--foreground), transparent 40%)`,
                opacity: 0.05
              }}
            />

            {IDE_CONFIGS.map((ide) => {
              const isActive = activeIde.id === ide.id;
              return (
                <button
                  key={ide.id}
                  onClick={() => setActiveIde(ide)}
                  className={`relative text-left px-5 py-4 rounded-xl transition-all duration-300 font-medium text-[15px] flex items-center justify-between group/tab overflow-hidden ${
                    isActive
                      ? 'bg-muted/40 text-foreground shadow-sm border border-border/80'
                      : 'bg-transparent text-muted-foreground hover:bg-muted/20 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-md transition-colors duration-300 ${isActive ? 'bg-background shadow-sm border border-border/50' : 'bg-transparent border border-transparent'}`}>
                      <ide.icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover/tab:text-foreground'}`} />
                    </div>
                    <span className="tracking-tight">{ide.name}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="active-ide-indicator"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-foreground shadow-[0_0_8px_var(--foreground)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Code Terminal */}
          <div className="relative group/terminal rounded-2xl">
            {/* Ambient terminal glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-border/50 to-transparent rounded-[18px] opacity-0 group-hover/terminal:opacity-100 transition-opacity duration-1000 blur-sm hidden dark:block" />
            
            <div className="relative bg-zinc-950 border border-black/[0.06] rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.03),0_12px_32px_rgba(0,0,0,0.04)] dark:border-white/5 dark:border-t-white/10 dark:shadow-[0_24px_80px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col min-h-[380px] h-full backdrop-blur-2xl">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
              
              <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3c3c3c] transition-colors duration-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3c3c3c] transition-colors duration-500 delay-75" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3c3c3c] transition-colors duration-500 delay-150" />
                </div>
                <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-zinc-400 bg-white/[0.03] px-3 py-1 rounded-md border border-white/5 shadow-sm">
                  <Terminal className="w-3 h-3 opacity-70" />
                  {activeIde.filename}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  className={`h-7 px-2.5 transition-all text-xs text-zinc-400 hover:text-white hover:bg-white/5 ${copied ? 'text-white' : ''}`}
                >
                  {copied ? (
                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400" /> Copied</span>
                  ) : (
                    <span className="flex items-center gap-1.5"><Copy className="w-3 h-3" /> Copy</span>
                  )}
                </Button>
              </div>
              
              <div className="p-6 md:p-8 overflow-auto flex-1 relative flex items-center bg-gradient-to-b from-transparent to-black/10">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeIde.id}
                    initial={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[13px] md:text-[14px] font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed w-full"
                  >
                    {activeIde.code.split('\n').map((line, i) => {
                      let highlightedLine = line.replace(/("[^"]*")\s*(:?)/g, (match, p1, p2) => {
                        if (p2 === ':') {
                          return `<span class="text-[#9cdcfe]">${p1}</span>${p2}`;
                        }
                        return `<span class="text-[#ce9178]">${p1}</span>`;
                      });
                      
                      return (
                        <div key={i} className="flex gap-4 group/line hover:bg-white/[0.02] px-2 -mx-2 rounded transition-colors">
                          <span className="text-zinc-600 select-none text-right w-4 shrink-0">{i + 1}</span>
                          <span dangerouslySetInnerHTML={{ __html: highlightedLine || line }} />
                        </div>
                      );
                    })}
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
