import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as motion from "motion/react-client";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col min-h-full">
      {/* Top action bar */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-md p-4 lg:p-6 flex justify-between items-center">
        <Link href="/work" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground flex items-center gap-2">
          <span>←</span> <span>BACK TO ARCHIVE</span>
        </Link>
        <div className="flex items-center gap-2">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-foreground hover:underline underline-offset-4">
              Visit Site ↗
            </a>
          )}
        </div>
      </div>

      <div className="p-6 lg:p-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Header Metadata */}
          <header className="space-y-12 mb-24">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
              {project.name}
            </h1>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-dashed border-border/50 text-sm">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Year</span>
                <span className="text-foreground">{project.year}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Role</span>
                <span className="text-foreground">{project.role}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Stack</span>
                <span className="text-foreground">{project.stack.join(", ")}</span>
              </div>
            </div>
          </header>

          {/* Dynamic Content Body */}
          <article className="space-y-24">
            {project.content.map((block, index) => {
              if (block.type === "text") {
                return (
                  <section key={index} className="max-w-2xl">
                    {block.label && (
                      <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                        {block.label}
                      </h2>
                    )}
                    <p className="text-foreground leading-relaxed text-[15px]">
                      {block.text}
                    </p>
                  </section>
                );
              }

              if (block.type === "image") {
                return (
                  <section key={index} className={`w-full ${block.edgeToEdge ? 'max-w-full' : 'max-w-3xl'}`}>
                    <div className="aspect-[4/3] md:aspect-video bg-muted border border-border flex flex-col items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-grid-fine opacity-20 transition-opacity group-hover:opacity-10" />
                      {/* Placeholder graphic for the artifact if URL isn't real */}
                      <div className="z-10 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                        [ Visual Artifact Rendering ]
                      </div>
                    </div>
                    {block.caption && (
                      <p className="mt-4 text-xs font-mono text-muted-foreground border-l border-border pl-4">
                        {block.caption}
                      </p>
                    )}
                  </section>
                );
              }

              if (block.type === "code") {
                return (
                  <section key={index} className="max-w-3xl border border-border bg-background">
                    {block.filename && (
                      <div className="border-b border-border bg-muted/30 px-4 py-2 font-mono text-[10px] text-muted-foreground">
                        {block.filename}
                      </div>
                    )}
                    <div className="p-4 overflow-x-auto bg-[#0C0A09]">
                      <pre className="font-mono text-[13px] text-[#FAFAF9] leading-relaxed">
                        <code>{block.code}</code>
                      </pre>
                    </div>
                  </section>
                );
              }

              if (block.type === "diagram") {
                return (
                  <section key={index} className="max-w-3xl">
                    <div className="h-64 border border-dashed border-border flex items-center justify-center bg-muted/10">
                      <div className="flex items-center gap-4 text-muted-foreground opacity-50">
                        <svg className="w-16 h-8 text-foreground" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <path d="M0,10 L10,5 L20,15 L30,2 L40,18 L50,10 L60,12 L70,4 L80,16 L90,8 L100,10" fill="none" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-xs font-mono text-muted-foreground text-center">
                      {block.description}
                    </p>
                  </section>
                );
              }

              return null;
            })}
          </article>
        </motion.div>
      </div>
    </div>
  );
}
