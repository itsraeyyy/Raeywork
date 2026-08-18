import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AgentSightProvider } from '@itsraeyy/agentsight-client';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/os/navigation";
import { SystemLabel } from "@/components/os/system-label";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raey Tesfaye",
  description: "A personal space on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full bg-background text-foreground selection:bg-foreground selection:text-background"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ambient Grid */}
          <div className="fixed inset-0 pointer-events-none bg-grid-fine opacity-40 z-[-1]" />
          
          <div className="flex flex-col lg:flex-row min-h-screen max-w-[1400px] mx-auto border-x border-border bg-background/95 backdrop-blur-[2px]">
            {/* LEFT / TOP RAIL */}
            <aside className="lg:w-[260px] xl:w-[300px] lg:sticky lg:top-0 lg:h-screen border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between p-6 z-40 bg-background/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none">
              <div className="space-y-12">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-foreground flex items-center justify-center">
                    <div className="w-2 h-2 bg-background" />
                  </div>
                  <span className="font-semibold tracking-tight text-sm uppercase">RAEY.OS</span>
                </div>
                
                <div className="hidden lg:block">
                  <Navigation />
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="block lg:hidden mt-6 overflow-x-auto no-scrollbar pb-2">
                <Navigation />
              </div>

              <div className="hidden lg:flex flex-col gap-2 mt-12 pt-6 border-t border-dashed border-border/50">
                <SystemLabel label="LOCATION" value="ADDIS ABABA" />
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 min-w-0 relative flex flex-col">
              {process.env.NODE_ENV === 'development' ? (
                <AgentSightProvider>{children}</AgentSightProvider>
              ) : (
                children
              )}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
