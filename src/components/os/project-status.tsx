import React from "react";
import { cn } from "@/lib/utils";

export type ProjectStatusType = "ACTIVE" | "BUILDING" | "PAUSED" | "ARCHIVED" | "EXPERIMENT" | "SHIPPED";

interface ProjectStatusProps {
  status: ProjectStatusType;
  className?: string;
}

const statusMap: Record<ProjectStatusType, { symbol: string; colorClass: string }> = {
  ACTIVE: { symbol: "●", colorClass: "text-foreground" },
  BUILDING: { symbol: "●", colorClass: "text-[var(--teal-restrained)]" },
  PAUSED: { symbol: "○", colorClass: "text-muted-foreground" },
  ARCHIVED: { symbol: "×", colorClass: "text-muted-foreground" },
  EXPERIMENT: { symbol: "◇", colorClass: "text-foreground" },
  SHIPPED: { symbol: "●", colorClass: "text-foreground" },
};

export function ProjectStatus({ status, className }: ProjectStatusProps) {
  const { symbol, colorClass } = statusMap[status] || statusMap["ARCHIVED"];

  return (
    <div className={cn("inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest", className)}>
      <span className={cn("text-xs leading-none", colorClass)}>{symbol}</span>
      <span className="text-muted-foreground">{status}</span>
    </div>
  );
}
