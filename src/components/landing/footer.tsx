export function Footer() {
  return (
    <footer className="border-t border-border p-6 md:p-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div className="flex items-center gap-2 font-semibold text-sm tracking-tight">
        <div className="w-4 h-4 bg-foreground rounded-[3px] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-background rounded-[1px]" />
        </div>
        AgentSight © {new Date().getFullYear()}
      </div>
      <div className="flex items-center gap-6 text-sm font-mono text-muted-foreground">
        <a href="https://github.com/itsraeyyy/Agentsight" className="hover:text-foreground transition-colors">GitHub</a>
        <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
        <a href="#" className="hover:text-foreground transition-colors">NPM Package</a>
      </div>
    </footer>
  );
}
