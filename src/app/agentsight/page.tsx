import React from "react";
import { 
  Navbar, Hero, SocialProof, Quickstart, Workflow, 
  Integrations, Architecture, Shortcuts, FinalCTA, Footer 
} from "@/components/landing";

export default function AgentSightVercelPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground/10 selection:text-foreground">
      <Navbar />
      <main className="max-w-6xl mx-auto border-x border-border min-h-screen relative">
        {/* Ambient Grid Background for entire main section */}
        <div className="absolute inset-0 bg-grid-small opacity-[0.02] pointer-events-none -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        
        <Hero />
        <SocialProof />
        <Quickstart />
        <Workflow />
        <Integrations />
        <Architecture />
        <Shortcuts />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
