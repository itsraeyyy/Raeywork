"use client";

import React from "react";
import { Search } from "lucide-react";

export function Shortcuts() {
  return (
    <section id="shortcuts" className="py-24 md:py-32 px-6 md:px-16 bg-background relative overflow-hidden flex flex-col items-center">
      {/* Background radial gradient for focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80 mb-6">
            Command Palette
          </div>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-balance max-w-2xl text-foreground">
            Designed for keyboard navigation.
          </h3>
        </div>
        
        <div className="w-full max-w-2xl relative group/palette">
          {/* Ambient glow behind the palette */}
          <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[18px] opacity-0 group-hover/palette:opacity-100 transition-opacity duration-1000 blur-md pointer-events-none" />
          
          <div className="relative border border-white/10 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] flex flex-col">
            {/* Top inner highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

            {/* Search Input Area */}
            <div className="flex items-center px-5 py-4 border-b border-white/5 gap-3 bg-white/[0.02]">
              <Search className="w-5 h-5 text-muted-foreground/60" />
              <div className="text-[15px] text-muted-foreground/50 font-medium tracking-tight flex-1">
                Type a command or search...
              </div>
              <div className="flex items-center gap-1.5 opacity-60">
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded-[4px] text-[10px] font-mono text-muted-foreground border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">⌘</kbd>
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded-[4px] text-[10px] font-mono text-muted-foreground border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">K</kbd>
              </div>
            </div>
            
            {/* List of Shortcuts */}
            <div className="p-2 space-y-0.5 bg-gradient-to-b from-transparent to-black/40">
              {[
                { keys: ["⌘", "⇧", "A"], action: "Toggle annotation mode" },
                { keys: ["Space"], action: "Toggle runtime freeze" },
                { keys: ["Esc"], action: "Cancel or close popover" },
                { keys: ["↵"], action: "Submit annotation note" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-default group/item transition-colors duration-200 ${
                    i === 0 ? 'bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]' : 'hover:bg-white/[0.06]'
                  }`}
                >
                  <div className={`text-[13px] font-medium tracking-wide transition-colors ${
                    i === 0 ? 'text-foreground' : 'text-muted-foreground group-hover/item:text-foreground/90'
                  }`}>
                    {item.action}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.keys.map(k => (
                      <kbd 
                        key={k} 
                        className={`min-w-[22px] h-6 flex items-center justify-center px-1.5 rounded-[4px] text-[11px] font-mono font-medium border shadow-[0_2px_0_rgba(255,255,255,0.02)] transition-colors ${
                          i === 0 
                            ? 'bg-white/10 border-white/20 text-foreground' 
                            : 'bg-white/5 border-white/10 text-muted-foreground/70 group-hover/item:text-muted-foreground group-hover/item:border-white/20'
                        }`}
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
