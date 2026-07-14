"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Terminal, Check, Copy, ExternalLink } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx @itsraeyy/agentsight-client init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 pt-32 pb-24 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-12 w-px h-full bg-border/50 hidden md:block" />
      <div className="absolute top-0 right-48 w-px h-full bg-border/50 hidden lg:block" />

      <div className="max-w-3xl relative z-10 mx-auto md:mx-0">
        {/* Ambient Background Glow for Hero */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#06b6d4] rounded-full opacity-15 blur-[100px] pointer-events-none" />

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
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 relative z-10"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06b6d4] to-[#10b981] animate-gradient-x">Visual Context</span> <br/>
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
          <div className="flex items-center justify-between w-full sm:w-[380px] border border-border bg-background hover:bg-muted/30 transition-all rounded-md p-1 pl-4 relative group hover:border-foreground/30 hover:shadow-sm">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
              <code className="text-[13px] font-mono text-foreground">npx @itsraeyy/agentsight-client init</code>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={handleCopy}
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
    </section>
  );
}
