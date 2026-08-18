import { SystemLabel } from "@/components/os/system-label";
import * as motion from "motion/react-client";

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col p-6 lg:p-12 min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl space-y-16"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">About</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 border-t border-border pt-8">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Identity
          </div>
          <div className="space-y-6 text-foreground leading-relaxed text-sm">
            <p>
              I am a builder and founder based in Addis Ababa, Ethiopia.
            </p>
            <p>
              My work exists at the intersection of product intuition and engineering depth. I am obsessed with software that feels invisible, systems that scale elegantly, and the mechanics of human behavior online.
            </p>
            <p>
              I spend most of my time exploring AI, infrastructure, language, and distribution. I do not believe in building for the sake of it. Every pixel and every API endpoint needs a reason to exist.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 border-t border-border pt-8">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Elsewhere
          </div>
          <div className="flex flex-col gap-4 text-sm font-mono uppercase tracking-widest">
            <a href="https://github.com/itsraeyyy" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline underline-offset-4 flex items-center gap-4 w-fit">
              <span className="text-muted-foreground">→</span> GitHub
            </a>
            <a href="https://x.com/itsraeyyy" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline underline-offset-4 flex items-center gap-4 w-fit">
              <span className="text-muted-foreground">→</span> X (Twitter)
            </a>
            <a href="mailto:raey@example.com" className="text-foreground hover:underline underline-offset-4 flex items-center gap-4 w-fit">
              <span className="text-muted-foreground">→</span> Email
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
