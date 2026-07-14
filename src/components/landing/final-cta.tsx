"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

export function FinalCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx @itsraeyy/agentsight-client init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-40 px-6 md:px-16 border-b border-border/50 bg-background relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#06b6d4]/10 to-transparent rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-small opacity-[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
          Stop guessing CSS selectors.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl">
          Initialize AgentSight in your project in 10 seconds. Beam accurate visual context straight to your AI and ship perfect UI on the first try.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="flex items-center justify-between w-full sm:w-[380px] border border-border bg-background hover:bg-muted/30 transition-all rounded-md p-1 pl-4 relative group hover:border-[#06b6d4]/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.1)]">
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
          <Button className="h-10 px-8 rounded-md text-sm font-medium hover:scale-105 active:scale-95 transition-transform bg-foreground text-background shadow-sm hover:shadow-md">
            Read Docs
          </Button>
        </div>
      </div>
    </section>
  );
}
