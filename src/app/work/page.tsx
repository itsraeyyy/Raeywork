import { projectsData } from "@/lib/data";
import { ProjectStatus } from "@/components/os/project-status";
import { SystemLabel } from "@/components/os/system-label";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function WorkPage() {
  return (
    <div className="flex-1 flex flex-col p-6 lg:p-12 min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl space-y-16"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Archive</h1>
          <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest">
            Selected projects and infrastructure
          </p>
        </div>

        <div className="border border-border bg-background shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/30 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <div className="col-span-5 md:col-span-4">ID / NAME</div>
            <div className="col-span-4 hidden md:block">CATEGORY</div>
            <div className="col-span-4 md:col-span-3 text-right">STATUS</div>
            <div className="col-span-3 md:col-span-1 text-right">YEAR</div>
          </div>

          {/* List */}
          <div className="divide-y divide-border/50">
            {projectsData.map((project) => (
              <Link 
                key={project.id} 
                href={`/work/${project.slug}`}
                className="grid grid-cols-12 gap-4 p-4 items-center group hover:bg-muted/30 transition-colors"
              >
                <div className="col-span-5 md:col-span-4 flex flex-col gap-1">
                  <span className="font-semibold text-foreground group-hover:text-foreground/80 tracking-tight">{project.name}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{project.id}</span>
                </div>
                
                <div className="col-span-4 hidden md:block">
                  <span className="font-mono text-[10px] text-muted-foreground border border-dashed border-border/50 px-2 py-1 bg-background/50">
                    {project.category}
                  </span>
                </div>

                <div className="col-span-4 md:col-span-3 flex justify-end">
                  <ProjectStatus status={project.status} />
                </div>

                <div className="col-span-3 md:col-span-1 flex justify-end">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
