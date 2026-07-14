"use client";

import React from "react";
import { Terminal, Layers, Zap, CheckCircle2 } from "lucide-react";

export function Quickstart() {
  const steps = [
    { icon: Terminal, title: "Detects Framework", desc: "Auto-integrates with Next.js or Vite." },
    { icon: Layers, title: "Injects Provider", desc: "Adds <AgentSightProvider/> to root layout." },
    { icon: Zap, title: "Configures MCP", desc: "Sets up Model Context Protocol." },
    { icon: CheckCircle2, title: "Installs Deps", desc: "Adds required packages seamlessly." }
  ];

  return (
    <section id="quickstart" className="border-y border-border/50 divide-y divide-border/50 md:divide-y-0 md:divide-x grid md:grid-cols-4 bg-background">
      {steps.map((item, i) => (
        <div key={i} className="p-8 md:p-12 bg-transparent hover:bg-muted/10 transition-all duration-500 group">
          <div className="w-8 h-8 border border-border rounded-md flex items-center justify-center mb-6 text-foreground group-hover:bg-foreground group-hover:text-background group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
            <item.icon className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-semibold mb-2 group-hover:text-foreground transition-colors">{item.title}</h3>
          <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
