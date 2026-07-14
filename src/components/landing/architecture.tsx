"use client";

import React from "react";
import { Code, PlaySquare, MousePointer2, Shield, Pause } from "lucide-react";

export function Architecture() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 md:px-16 bg-background relative">
      <div className="absolute inset-0 bg-grid-small opacity-[0.02] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#06b6d4] mb-4">Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Everything you need to debug visually.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 (Large) */}
          <div className="lg:col-span-2 border border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl p-10 relative overflow-hidden group hover:border-foreground/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-grid-small opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" />
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
            <Code className="w-32 h-32" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold mb-3">Context Extraction Engine</h4>
              <p className="text-sm text-muted-foreground max-w-md mb-8">
                Gathers forensic context directly from the DOM without manual configuration.
              </p>
            </div>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "DOM Element Picking",
                "React Fiber Traversal",
                "Computed Styles Extraction",
                "Smart CSS Selectors"
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-[1px]" />
                  {feat}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-foreground opacity-50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-foreground opacity-50" />
        </div>

          {/* Feature 2 */}
          <div className="border border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl p-10 flex flex-col relative group hover:border-foreground/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="w-12 h-12 border border-border/50 rounded-xl flex items-center justify-center mb-8 bg-background group-hover:bg-foreground group-hover:text-background group-hover:-rotate-3 transition-all duration-500 shadow-sm">
              <PlaySquare className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-semibold mb-3 tracking-tight">Runtime Freeze</h4>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Pauses all CSS animations, JS <code className="font-mono text-xs text-foreground bg-muted/50 px-1.5 py-0.5 rounded-md group-hover:bg-muted-foreground/20 transition-colors">requestAnimationFrame</code> loops, and videos. Perfect for inspecting transient states.
            </p>
            <div className="mt-auto flex-1 bg-background/50 border border-border/50 rounded-xl overflow-hidden relative flex items-center justify-center min-h-[160px] shadow-inner">
            <div className="flex gap-3 items-center">
              <div className="w-6 h-6 border-2 border-foreground border-t-transparent rounded-full animate-spin group-hover:animate-none group-hover:opacity-30 transition-all" />
              <div className="flex gap-1.5">
                <div className="w-2 h-8 bg-muted-foreground/30 rounded-full animate-pulse group-hover:animate-none group-hover:opacity-30 transition-all" />
                <div className="w-2 h-6 bg-muted-foreground/30 rounded-full animate-pulse delay-75 group-hover:animate-none group-hover:opacity-30 transition-all" />
                <div className="w-2 h-10 bg-muted-foreground/30 rounded-full animate-pulse delay-150 group-hover:animate-none group-hover:opacity-30 transition-all" />
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-500">
              <span className="text-[10px] font-mono bg-blue-500 text-white px-2 py-1 rounded shadow-sm flex items-center gap-1.5"><Pause className="w-3 h-3"/> FROZEN</span>
            </div>
          </div>
        </div>

          {/* Feature 3 */}
          <div className="border border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl p-10 flex flex-col relative group hover:border-foreground/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="w-12 h-12 border border-border/50 rounded-xl flex items-center justify-center mb-8 bg-background group-hover:bg-foreground group-hover:text-background group-hover:rotate-3 transition-all duration-500 shadow-sm">
              <MousePointer2 className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-semibold mb-3 tracking-tight">Annotation Modes</h4>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Precision targeting across your DOM.
            </p>
            <div className="mt-auto flex-1 bg-background/50 border border-border/50 rounded-xl overflow-hidden relative min-h-[160px] p-6 flex flex-col gap-4 justify-center shadow-inner">
            <div className="w-full h-8 bg-background border border-border rounded flex items-center px-3 relative group/item hover:border-blue-500 hover:shadow-sm transition-all cursor-crosshair">
              <div className="w-1/2 h-2 bg-muted rounded" />
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-5 h-5 opacity-0 group-hover/item:opacity-100 transition-opacity z-10 pointer-events-none">
                <MousePointer2 className="w-5 h-5 text-blue-500 fill-blue-500/20" />
              </div>
            </div>
            <div className="w-3/4 h-8 bg-background border border-border rounded flex items-center px-3 relative group/item hover:border-blue-500 hover:shadow-sm transition-all cursor-crosshair">
              <div className="w-2/3 h-2 bg-muted rounded" />
               <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-5 h-5 opacity-0 group-hover/item:opacity-100 transition-opacity z-10 pointer-events-none">
                <MousePointer2 className="w-5 h-5 text-blue-500 fill-blue-500/20" />
              </div>
            </div>
          </div>
        </div>

          {/* Feature 4 (Large) */}
          <div className="lg:col-span-2 border border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl p-10 relative overflow-hidden group hover:border-foreground/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="relative z-10 h-full flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <div className="w-12 h-12 border border-border/50 rounded-xl flex items-center justify-center mb-8 bg-background group-hover:bg-foreground group-hover:text-background group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-semibold mb-3 tracking-tight">In-Memory MCP Bridge</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ephemeral state. No databases, no cloud. Data exists only while the server runs, communicating directly with your local AI via the Model Context Protocol.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4 w-full">
                <div className="p-4 border border-border/50 rounded-xl bg-background/80 backdrop-blur font-mono text-xs shadow-sm group-hover:border-[#06b6d4]/30 transition-colors">
                  <div className="text-muted-foreground mb-1.5 uppercase tracking-wider text-[10px]">Available Tool</div>
                  <div className="text-foreground font-medium">get_latest_visual_feedback()</div>
                </div>
                <div className="p-4 border border-border/50 rounded-xl bg-background/80 backdrop-blur font-mono text-xs shadow-sm group-hover:border-[#06b6d4]/30 transition-colors">
                  <div className="text-muted-foreground mb-1.5 uppercase tracking-wider text-[10px]">Available Tool</div>
                  <div className="text-foreground font-medium">clear_visual_feedback()</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
