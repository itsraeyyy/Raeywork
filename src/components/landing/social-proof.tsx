"use client";

import React from "react";
import { SiNextdotjs, SiVite, SiReact } from "@icons-pack/react-simple-icons";
import { CursorIcon, WindsurfIcon, ClaudeIcon } from "./icons";

export function SocialProof() {
  const frameworks = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vite", icon: SiVite },
    { name: "React", icon: SiReact },
    { name: "Cursor", icon: CursorIcon },
    { name: "Windsurf", icon: WindsurfIcon },
    { name: "Claude Code", icon: ClaudeIcon }
  ];

  return (
    <section className="pt-20 md:pt-32 pb-32 md:pb-48 border-b border-border/50 bg-background flex flex-col items-center justify-center overflow-hidden">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-12 text-center">
        Seamlessly integrates with elite agentic IDEs & frameworks
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 max-w-5xl">
        {frameworks.map((framework, i) => (
          <div key={i} className="flex items-center gap-3 text-[#666666] hover:text-foreground transition-all duration-500 group cursor-default">
            <framework.icon className="w-6 h-6 transition-colors duration-500" />
            <span className="font-medium text-[15px] tracking-tight">{framework.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


