import { labData } from "@/lib/data";
import { ProjectStatus } from "@/components/os/project-status";
import * as motion from "motion/react-client";

export default function LabPage() {
  return (
    <div className="flex-1 flex flex-col p-6 lg:p-12 min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl space-y-16"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Lab</h1>
          <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest">
            Experiments, prototypes, and unfinished things
          </p>
        </div>

        <div className="border border-border bg-background shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/30 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <div className="col-span-12 md:col-span-5">EXPERIMENT / ID</div>
            <div className="col-span-12 md:col-span-4 hidden md:block">DESCRIPTION</div>
            <div className="col-span-12 md:col-span-3 text-right">STATE</div>
          </div>

          {/* List */}
          <div className="divide-y divide-border/50">
            {labData.length === 0 ? (
              <div className="p-8 text-center text-sm font-mono uppercase tracking-widest text-muted-foreground">
                No active experiments published yet.
              </div>
            ) : (
              labData.map((item) => (
                <div 
                  key={item.id} 
                  className="grid grid-cols-12 gap-4 p-4 items-start md:items-center hover:bg-muted/10 transition-colors"
                >
                  <div className="col-span-12 md:col-span-5 flex flex-col gap-1">
                    <span className="font-semibold text-foreground tracking-tight">{item.name}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{item.id}</span>
                  </div>
                  
                  <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-none">
                      {item.description}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-3 flex md:justify-end mt-2 md:mt-0">
                    <ProjectStatus status={item.status} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
