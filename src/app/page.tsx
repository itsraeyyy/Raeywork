import * as motion from "motion/react-client";
import { ProjectStatus } from "@/components/os/project-status";
import { projectsData } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  const activeProject = projectsData.find(p => p.id === "andebet");

  return (
    <div className="flex-1 flex flex-col justify-center p-6 lg:p-12 min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <div className="space-y-4 mb-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            I make things I want to exist.
          </h1>
          <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest pt-2">
            Raey Tesfaye / Builder
          </p>
        </div>

        <div className="pt-8 border-t border-border flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-4">
              <span className="text-foreground shrink-0">→</span> 
              <span>Building <Link href="/work/andebet" className="text-foreground hover:underline underline-offset-4">Andebet</Link></span>
            </span>
            <span className="flex items-center gap-4">
              <span className="text-foreground shrink-0">→</span> 
              <span><Link href="/work" className="text-foreground hover:underline underline-offset-4">View Full Archive</Link></span>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
