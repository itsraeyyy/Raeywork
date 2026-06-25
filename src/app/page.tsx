import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, AtSign, Mail } from "lucide-react";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
      
      {/* LEFT PANE - STICKY */}
      <div className="lg:w-[40%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border bg-grid-small relative overflow-hidden">
        {/* Subtle gradient overlay to fade the grid slightly */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background/80 pointer-events-none" />
        
        <div className="p-8 lg:p-12 relative z-10 flex items-center gap-3">
          <div className="w-6 h-6 bg-foreground flex items-center justify-center">
            <div className="w-3 h-3 bg-background" />
          </div>
          <span className="font-semibold tracking-tight text-sm uppercase">Raey Tesfaye</span>
        </div>

        <div className="p-8 lg:p-12 relative z-10 space-y-6 mt-auto lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl tracking-tight font-semibold text-foreground leading-[1.1]">
              Raey Tesfaye
            </h1>
            <p className="text-lg tracking-tight font-medium text-muted-foreground font-mono">
              Builder. Founder.
            </p>
            <p className="max-w-sm text-sm text-foreground mt-6 leading-relaxed">
              I build digital products with intent. Blending engineering depth with product 
              intuition to create experiences that are quiet, powerful, and deeply human.
            </p>
          </motion.div>
        </div>

        <div className="p-8 lg:p-12 relative z-10 mt-12 lg:mt-auto border-t border-dashed border-border/50 bg-background/50 backdrop-blur-sm">
          <h2 className="text-sm font-semibold mb-4 tracking-tight">Let's Build.</h2>
          <div className="flex flex-wrap gap-3">
            <Button size="sm" className="gap-2 h-9 px-4 rounded-none">
              <Mail className="h-4 w-4" /> Email
            </Button>
            <Button variant="outline" size="sm" className="gap-2 h-9 px-4 rounded-none bg-background">
              <AtSign className="h-4 w-4" /> X
            </Button>
            <Button variant="outline" size="sm" className="gap-2 h-9 px-4 rounded-none bg-background">
              <Code className="h-4 w-4" /> GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT PANE - SCROLLABLE */}
      <div className="lg:w-[60%] flex flex-col bg-background">
        
        {/* Top Nav (Sticky) */}
        <nav className="sticky top-0 z-20 bg-background/90 backdrop-blur-md border-b border-border px-8 lg:px-12 py-4 flex gap-8 text-[11px] font-mono text-muted-foreground uppercase tracking-widest overflow-x-auto whitespace-nowrap">
          <a href="#overview" className="hover:text-foreground transition-colors">Overview</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#stack" className="hover:text-foreground transition-colors">Infrastructure</a>
        </nav>

        {/* Philosophy Section */}
        <section id="overview" className="p-8 lg:p-16 border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl space-y-8"
          >
            <div className="space-y-2">
              <Badge variant="outline" className="font-mono text-[10px] rounded-none border-dashed uppercase tracking-wider mb-2">
                Manifesto
              </Badge>
              <h2 className="text-2xl tracking-tight font-semibold">Form Meets Function.</h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
              <p>
                I don't just write code; I build solutions. Whether I am architecting the backend 
                infrastructure or refining the user experience, my focus is always on the fundamental 
                purpose of the product.
              </p>
              <p>
                I believe the best software feels invisible—elegant, fast, and exactly what it needs 
                to be. No fluff. Just execution.
              </p>
              <p className="text-foreground border-l-2 border-foreground pl-4 mt-8">
                Currently based in Addis Ababa, I am obsessed with the intersection of language, 
                AI, and viral human mechanics.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="border-b border-border">
          <div className="p-8 lg:p-16 pb-8">
            <Badge variant="outline" className="font-mono text-[10px] rounded-none border-dashed uppercase tracking-wider mb-4">
              Features
            </Badge>
            <h2 className="text-2xl tracking-tight font-semibold mb-2">Selected Work</h2>
            <p className="text-sm text-muted-foreground">Products built to bridge gaps and cut through noise.</p>
          </div>
          
          {/* Bento Grid layout using 1px gap on a border-colored background to create thin borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-t border-border">
            
            <div className="bg-background p-8 lg:p-12 flex flex-col justify-between hover:bg-muted/10 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">Andebet</h3>
                  <span className="font-mono text-[10px] text-muted-foreground border border-dashed border-border px-2 py-1">01</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Giving Amharic a voice in the AI era. A comprehensive ecosystem for linguistic 
                  intelligence, transcription, and translation. Built to bridge a critical language 
                  gap with precision.
                </p>
              </div>
            </div>

            <div className="bg-background p-8 lg:p-12 flex flex-col justify-between hover:bg-muted/10 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">Klaryo</h3>
                  <span className="font-mono text-[10px] text-muted-foreground border border-dashed border-border px-2 py-1">02</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Feedback, clarified. A product intelligence platform designed to cut through the 
                  noise and tell founders exactly what their users actually mean.
                </p>
              </div>
            </div>

            <div className="bg-background p-8 lg:p-12 flex flex-col justify-between hover:bg-muted/10 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">ShotUp</h3>
                  <span className="font-mono text-[10px] text-muted-foreground border border-dashed border-border px-2 py-1">03</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  E-commerce imagery, elevated. An AI-powered tool that brings high-end, 
                  editorial product photography to anyone with a browser.
                </p>
              </div>
            </div>

            <div className="bg-background p-8 lg:p-12 flex flex-col justify-between hover:bg-muted/10 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">World Cup IQ</h3>
                  <span className="font-mono text-[10px] text-muted-foreground border border-dashed border-border px-2 py-1">04</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Social mechanics at scale. A viral, ego-driven football platform built to test 
                  knowledge and ignite competition during the ultimate global event.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Stack / Infrastructure */}
        <section id="stack" className="p-8 lg:p-16 pb-32 border-b border-border bg-dot">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl bg-background border border-border shadow-2xl"
          >
            {/* Dashboard Header Mock */}
            <div className="flex items-center justify-between border-b border-border p-4 bg-muted/30">
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="rounded-none font-mono text-[10px] uppercase">Infrastructure</Badge>
                <span className="text-xs font-medium tracking-tight">The Architecture of Intent</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
            </div>
            
            <div className="p-6 lg:p-8 space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect to our infrastructure and power your self-hosted setup. Actually, wait. 
                I use tools that allow me to move fast without compromising on scale or elegance.
              </p>
              
              <div className="font-mono text-xs overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-dashed border-border text-muted-foreground">
                      <th className="pb-3 font-normal">Technology</th>
                      <th className="pb-3 font-normal">Role</th>
                      <th className="pb-3 font-normal text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dashed divide-border/50">
                    <tr>
                      <td className="py-4 text-foreground">Next.js</td>
                      <td className="py-4 text-muted-foreground">Frontend & API</td>
                      <td className="py-4 text-right"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"/>Active</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-foreground">Node.js</td>
                      <td className="py-4 text-muted-foreground">Runtime</td>
                      <td className="py-4 text-right"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"/>Active</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-foreground">Supabase</td>
                      <td className="py-4 text-muted-foreground">Database & Auth</td>
                      <td className="py-4 text-right"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"/>Active</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-foreground">Prisma</td>
                      <td className="py-4 text-muted-foreground">ORM</td>
                      <td className="py-4 text-right"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"/>Active</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-foreground">Redis</td>
                      <td className="py-4 text-muted-foreground">Caching</td>
                      <td className="py-4 text-right"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"/>Active</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-foreground border-b-transparent">Docker</td>
                      <td className="py-4 text-muted-foreground border-b-transparent">Containerization</td>
                      <td className="py-4 text-right border-b-transparent"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"/>Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Footer */}
        <footer className="p-8 lg:p-12 text-center lg:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Raey Tesfaye. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Email</a>
            <a href="#" className="hover:text-foreground transition-colors">X (Twitter)</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
