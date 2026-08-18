import React from "react";
import { cn } from "@/lib/utils";

interface SystemLabelProps {
  label: string;
  value?: string | React.ReactNode;
  className?: string;
  vertical?: boolean;
}

export function SystemLabel({ label, value, className, vertical = false }: SystemLabelProps) {
  return (
    <div className={cn("flex font-mono text-[10px] uppercase tracking-widest", vertical ? "flex-col gap-1" : "flex-row gap-4 items-baseline", className)}>
      <span className="text-muted-foreground w-16 shrink-0">{label}</span>
      {value && <span className="text-foreground">{value}</span>}
    </div>
  );
}
