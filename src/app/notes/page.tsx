import { notesData } from "@/lib/data";
import { SystemLabel } from "@/components/os/system-label";
import * as motion from "motion/react-client";

export default function NotesPage() {
  return (
    <div className="flex-1 flex flex-col p-6 lg:p-12 min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl space-y-16"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Notes</h1>
          <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest">
            Observations and technical ideas
          </p>
        </div>

        <div className="space-y-16">
          {notesData.length === 0 ? (
            <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Notes archive is empty.
            </div>
          ) : (
            notesData.map((note) => (
              <article key={note.id} className="space-y-4 group">
                <SystemLabel label={note.date} className="group-hover:text-foreground transition-colors" />
                <p className="text-foreground leading-relaxed text-[15px]">
                  {note.content}
                </p>
              </article>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}
