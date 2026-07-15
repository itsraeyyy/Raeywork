"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Terminal, Check, Copy, ExternalLink, Code2, ArrowRight } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx @itsraeyy/agentsight-client init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (isHovering) {
      setScanStep(1); // reticle snaps on
      const timer1 = setTimeout(() => setScanStep(2), 600); // scan starts
      const timer2 = setTimeout(() => setScanStep(3), 1600); // packet shoots
      const timer3 = setTimeout(() => setScanStep(4), 2200); // code arrives in IDE
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      setScanStep(0);
    }
  }, [isHovering]);

  return (
    <section 
      className="px-6 pt-32 pb-24 border-b border-border relative overflow-hidden group/hero"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-0 right-12 w-px h-full bg-border/50 hidden md:block" />
      <div className="absolute top-0 right-48 w-px h-full bg-border/50 hidden lg:block" />

      {/* Ambient Background Glow for Hero */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#06b6d4] rounded-full opacity-15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1fr_480px] gap-16 items-center">
        
        {/* Left Column: Typography */}
        <div className="max-w-3xl md:mx-0">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-foreground text-background">
              v1.0.0
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium border border-border text-muted-foreground">
              LOCAL-FIRST
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6 relative z-10"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0F766E] to-[#065F46] dark:from-[#06b6d4] dark:to-[#10b981] animate-gradient-x">Visual Context</span> <br/>
            for AI Agents.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            The zero-friction visual bridge that connects your browser to your IDE. Point, click, and instantly beam React components, DOM paths, and precise CSS context directly to your local AI coding agent.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Copy Command */}
            <div className="flex items-center justify-between w-full sm:w-[380px] border border-border bg-background hover:bg-muted/30 transition-all rounded-md p-1 pl-4 relative group hover:border-foreground/30 hover:shadow-sm cursor-copy" onClick={handleCopy}>
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                <code className="text-[13px] font-mono text-foreground">npx @itsraeyy/agentsight-client init</code>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                className={`h-8 w-8 p-0 transition-all border border-transparent ${copied ? 'text-green-500 bg-green-500/10' : 'text-muted-foreground group-hover:bg-muted group-hover:text-foreground'}`}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div key="check" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }}>
                      <Check className="w-3.5 h-3.5" />
                    </motion.div>
                  ) : (
                    <motion.div key="copy" initial={{ scale: 0, rotate: 90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: -90 }}>
                      <Copy className="w-3.5 h-3.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
            <Button className="h-10 px-6 rounded-md text-sm font-medium hover:scale-105 active:scale-95 transition-transform bg-foreground text-background shadow-sm hover:shadow-md">
              Documentation <ExternalLink className="w-3.5 h-3.5 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Targeting Reticle Extraction Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full aspect-[4/3] rounded-xl bg-card overflow-hidden flex items-center justify-between p-6 group/extraction border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.03),0_12px_32px_rgba(0,0,0,0.04)] dark:border-border/50 dark:shadow-[0_0_80px_rgba(0,0,0,0.4)]"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-small opacity-[0.05] pointer-events-none" />

          {/* Left Pane: Browser Mockup */}
          <div className="w-[45%] h-full bg-background dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505] rounded-lg relative z-10 flex flex-col overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/5 dark:border-t-white/10">
            <div className="h-6 border-b border-border/50 flex items-center px-2 gap-1.5 bg-muted/20">
              <div className="w-2 h-2 rounded-full bg-border/50" />
              <div className="w-2 h-2 rounded-full bg-border/50" />
              <div className="w-2 h-2 rounded-full bg-border/50" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
              <div className="w-24 h-2 bg-muted rounded mb-6" />
              
              {/* Target Element */}
              <div className="relative">
                <button className="px-4 py-2 bg-red-500/90 text-white rounded text-xs font-medium shadow-sm flex items-center gap-2">
                  Submit <ArrowRight className="w-3 h-3" />
                </button>

                {/* Targeting Reticle & Scanner */}
                <AnimatePresence>
                  {scanStep > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 1.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute -inset-1 z-20 pointer-events-none"
                    >
                      {/* Corner Brackets */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#06b6d4]" />
                      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#06b6d4]" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#06b6d4]" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#06b6d4]" />
                      
                      <div className="absolute inset-0 bg-[#06b6d4]/10 border border-[#06b6d4]/30" />

                      {/* Scanning Line */}
                      {scanStep >= 2 && (
                        <motion.div 
                          initial={{ top: 0, opacity: 0 }}
                          animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                          transition={{ duration: 1, ease: "linear" }}
                          className="absolute left-0 right-0 h-px bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]"
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-16 h-2 bg-muted rounded mt-6" />
            </div>
          </div>

          {/* The Bridge (SVG Path & Glowing Packet) */}
          <div className="absolute left-[30%] right-[30%] top-1/2 -translate-y-1/2 h-20 z-0 hidden lg:block">
            <svg width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="none" className="overflow-visible">
              <path 
                d="M0,40 C40,40 60,40 100,40" 
                stroke="var(--border)" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                fill="none" 
                className="dark:stroke-white/20"
              />
              <motion.circle 
                cx="0" 
                cy="40" 
                r="3" 
                fill="#06b6d4" 
                className="drop-shadow-[0_0_6px_#06b6d4]"
                animate={scanStep >= 3 ? { cx: [0, 100], opacity: [1, 1, 0] } : { cx: 0, opacity: 0 }}
                transition={scanStep >= 3 ? { duration: 0.6, ease: "easeInOut" } : { duration: 0 }}
              />
            </svg>
          </div>

          {/* Right Pane: IDE Mockup */}
          <div className="w-[45%] h-full bg-zinc-950 dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505] rounded-lg relative z-10 flex flex-col overflow-hidden border border-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:border-white/5 dark:border-t-white/10 dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
            <div className="h-6 border-b border-white/10 flex items-center px-3 gap-2 bg-zinc-900">
              <Code2 className="w-3 h-3 text-zinc-500" />
              <span className="text-[9px] font-mono text-zinc-400">AgentContext</span>
            </div>
            <div className="flex-1 p-3 font-mono text-[9px] leading-relaxed text-[#d4d4d4] overflow-hidden">
              <div className="text-[#6a9955] opacity-50 mb-2">// Awaiting payload...</div>
              
              <AnimatePresence>
                {scanStep >= 4 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-1"
                  >
                    <div className="text-[#9cdcfe]">target: <span className="text-[#ce9178]">"button.bg-red-500"</span></div>
                    <div className="text-[#c586c0]">React Node:</div>
                    <div className="pl-2 border-l border-white/10 ml-1 mt-1 text-[#ce9178]">
                      &lt;<span className="text-[#569cd6]">button</span> <span className="text-[#9cdcfe]">className</span>=<span className="text-[#ce9178]">"px-4 py-2 bg-red-500/90..."</span>&gt;
                      <br/>  Submit
                      <br/>&lt;/<span className="text-[#569cd6]">button</span>&gt;
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
