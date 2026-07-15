"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Eye, Pause, MousePointer2, MessageSquare, Bot, RefreshCcw, Command, ArrowRight, CheckCircle2, Check
} from "lucide-react";

export function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    { icon: Eye, title: "Spot", desc: "Notice a UI issue in your browser." },
    { icon: Pause, title: "Freeze", desc: "Hit Spacebar to pause transient states instantly." },
    { icon: MousePointer2, title: "Point & Click", desc: "Select the broken element to grab its context." },
    { icon: MessageSquare, title: "Describe", desc: "Tell your AI what you want changed." },
    { icon: Bot, title: "AI Fixes It", desc: "Your IDE pulls the visual context and writes code." },
    { icon: RefreshCcw, title: "Reload", desc: "Bug resolved. Layout restored." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [workflowSteps.length]);

  return (
    <section id="workflow" className="py-24 md:py-32 px-6 md:px-16 bg-muted/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#06b6d4] mb-4">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter">From visual bug to AI fix in seconds.</h3>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Steps Sidebar */}
        <div className="flex flex-col relative pl-2">
          {/* Timeline Line */}
          <div className="absolute left-[15px] top-8 bottom-8 w-px bg-border/50 z-0" />
          
          {workflowSteps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <motion.div 
                key={i} 
                onMouseEnter={() => setActiveStep(i)}
                className="cursor-pointer group py-5 pl-10 pr-5 relative transition-all duration-300 ease-out"
              >
                {/* Timeline Node */}
                <div className={`absolute left-2 top-[28px] -translate-y-1/2 w-[14px] h-[14px] rounded-full border-[3px] bg-background z-10 transition-colors duration-300 ${isActive ? 'border-foreground shadow-[0_0_12px_rgba(255,255,255,0.2)]' : 'border-border group-hover:border-muted-foreground'}`} />
                
                <h4 className={`text-sm font-medium tracking-tight flex items-center gap-2 mb-1 transition-colors ${isActive ? 'text-foreground' : 'text-[#555555] dark:text-[#444444] group-hover:text-foreground/70'}`}>
                  {step.title}
                </h4>
                <p className={`text-[13px] transition-colors leading-relaxed ${isActive ? 'text-muted-foreground' : 'text-[#555555] dark:text-[#444444] group-hover:text-muted-foreground/70'}`}>
                  {step.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

          {/* IDE / Browser Mockup */}
          <div className="w-full aspect-[16/10] bg-card dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505] border border-black/[0.06] dark:border-white/5 dark:border-t-white/10 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.03),0_12px_32px_rgba(0,0,0,0.04)] dark:shadow-none flex flex-col overflow-hidden relative">
          <div className="h-10 border-b border-border/50 flex items-center px-4 justify-between bg-muted/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-6 py-1 text-[11px] font-mono bg-background border border-border rounded text-muted-foreground flex items-center gap-2">
                <Command className="w-3 h-3" /> localhost:3000
              </div>
            </div>
            <div className="w-16" />
          </div>

          <div className="flex-1 relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none" />

            <AnimatePresence mode="popLayout">
              {activeStep === 0 && (
                <motion.div key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-md border border-black/[0.06] dark:border-white/5 dark:border-t-white/10 bg-card dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505] rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] p-6 space-y-6">
                  <div className="flex justify-between items-center border-b border-border/50 pb-4">
                    <div className="text-sm font-medium">Dashboard</div>
                    <div className="px-2 py-1 text-[10px] font-mono bg-red-500/10 text-red-500 border border-red-500/20 rotate-[-4deg] rounded-sm shadow-sm">
                      Submit Details
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-muted rounded" />
                    <div className="h-4 w-1/2 bg-muted rounded" />
                  </div>
                </motion.div>
              )}

              {activeStep === 1 && (
                <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-md border border-black/[0.06] dark:border-white/5 dark:border-t-white/10 bg-card dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505] rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] p-6 space-y-6 relative">
                   <div className="flex justify-between items-center border-b border-border/50 pb-4">
                    <div className="text-sm font-medium">Dashboard</div>
                    <div className="px-2 py-1 text-[10px] font-mono bg-red-500/10 text-red-500 border border-red-500/20 rotate-[-4deg] rounded-sm shadow-sm">
                      Submit Details
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-muted rounded" />
                    <div className="h-4 w-1/2 bg-muted rounded" />
                  </div>
                  
                  <div className="absolute inset-0 bg-blue-500/5 border-2 border-blue-500/50 rounded-md z-10 pointer-events-none" />
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-blue-500 text-background text-[9px] font-mono font-medium rounded shadow-sm z-20">
                    FROZEN
                  </div>
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-md border border-black/[0.06] dark:border-white/5 dark:border-t-white/10 bg-card dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505] rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] p-6 space-y-6">
                  <div className="flex justify-between items-center border-b border-border/50 pb-4 relative">
                    <div className="text-sm font-medium">Dashboard</div>
                    <div className="relative">
                      <div className="px-2 py-1 text-[10px] font-mono bg-red-500/10 text-red-500 border border-red-500/20 rotate-[-4deg] rounded-sm shadow-sm relative z-10">
                        Submit Details
                      </div>
                      <div className="absolute -inset-2 border border-blue-500 bg-blue-500/10 rounded pointer-events-none z-0" />
                      <div className="absolute -top-7 -right-4 bg-blue-500 text-background text-[10px] font-mono px-2 py-1 rounded shadow-lg whitespace-nowrap z-20">
                        Button.bg-red-500
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-muted rounded" />
                    <div className="h-4 w-1/2 bg-muted rounded" />
                  </div>
                </motion.div>
              )}

              {activeStep === 3 && (
                <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center z-30">
                  <div className="w-full h-full absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
                  <div className="bg-background dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505] border border-black/[0.06] dark:border-white/5 dark:border-t-white/10 rounded-lg shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:shadow-2xl p-4 w-[320px] relative z-10">
                    <div className="flex items-center justify-between mb-3 border-b border-border/50 pb-2">
                      <div className="flex items-center gap-2 text-xs font-medium"><MessageSquare className="w-3.5 h-3.5"/> AgentSight Note</div>
                    </div>
                    <div className="text-[13px] bg-muted/30 border border-border rounded p-3 text-foreground mb-4 font-mono">
                      Fix this button. Make it solid primary foreground, remove rotation, and ensure it aligns perfectly.
                    </div>
                    <div className="w-full bg-foreground text-background text-xs text-center py-2 rounded-md font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-foreground/90">
                      <ArrowRight className="w-3.5 h-3.5" /> Transmit Context to IDE
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStep === 4 && (
                <motion.div key="4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex absolute inset-0 z-40 bg-background border-t border-border/50">
                  {/* Left: Browser Frame */}
                  <div className="flex-1 border-r border-border/50 relative flex items-center justify-center p-6 bg-card dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505]">
                    <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-foreground text-background text-[9px] font-mono font-medium rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)] z-20">
                      SYNCING
                    </div>
                    <div className="w-full max-w-[200px] border border-black/[0.06] dark:border-white/5 dark:border-t-white/10 bg-card rounded shadow-[0_4px_12px_rgba(0,0,0,0.03)] p-4 relative z-10">
                      <div className="absolute -inset-2 border border-dashed border-foreground/50 bg-foreground/5 pointer-events-none rounded" />
                      <div className="px-2 py-1 text-[10px] font-mono bg-red-500/10 text-red-500 border border-red-500/20 rotate-[-4deg] rounded-sm shadow-sm relative z-10 text-center">
                        Submit Details
                      </div>
                    </div>
                  </div>
                  {/* Right: IDE Context */}
                  <div className="flex-1 bg-[#0A0A0A] flex flex-col">
                    <div className="h-8 bg-[#111] flex items-center px-4 gap-4 border-b border-[#222]">
                      <div className="text-[10px] text-muted-foreground font-mono">Agent Context</div>
                    </div>
                    <div className="p-4 font-mono text-[11px] leading-relaxed text-[#d4d4d4] flex-1 overflow-hidden">
                      <div className="text-[#6a9955] mb-2">// Incoming visual payload</div>
                      <div><span className="text-[#9cdcfe]">target</span>: <span className="text-[#ce9178]">"button.bg-red-500"</span>,</div>
                      <div><span className="text-[#9cdcfe]">issue</span>: <span className="text-[#ce9178]">"Align and fix color"</span></div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4"
                      >
                        <div className="text-[#6a9955] mb-1">// Generating patch...</div>
                        <div><span className="text-[#c586c0]">return</span> <span className="text-[#808080]">&lt;</span><span className="text-[#569cd6]">button</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"px-3 py-1.5..."</span></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStep === 5 && (
                <motion.div key="5" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="w-full max-w-md border border-black/[0.06] dark:border-white/5 dark:border-t-white/10 bg-card dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#050505] rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] p-6 space-y-6">
                  <div className="flex justify-between items-center border-b border-border/50 pb-4">
                    <div className="text-sm font-medium">Dashboard</div>
                    <div className="px-3 py-1.5 text-[11px] font-medium bg-foreground text-background rounded-md shadow-sm relative">
                      Submit Details
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        transition={{ delay: 0.3 }}
                        className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border-2 border-background"
                      >
                        <Check className="w-2.5 h-2.5 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-muted rounded" />
                    <div className="h-4 w-1/2 bg-muted rounded" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
