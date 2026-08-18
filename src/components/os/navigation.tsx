"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "WORK", path: "/work" },
  { name: "LAB", path: "/lab" },
  { name: "NOTES", path: "/notes" },
  { name: "ABOUT", path: "/about" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row lg:flex-col gap-6 lg:gap-4 font-mono text-[11px] uppercase tracking-widest p-4 lg:p-0 overflow-x-auto lg:overflow-visible no-scrollbar">
      {navItems.map((item) => {
        const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
        return (
          <Link
            key={item.name}
            href={item.path}
            className={cn(
              "transition-colors duration-200 relative whitespace-nowrap",
              isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.name}
            {isActive && (
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-foreground rounded-full hidden lg:block" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
