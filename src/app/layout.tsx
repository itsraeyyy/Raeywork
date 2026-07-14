import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AgentSightProvider } from '@itsraeyy/agentsight-client';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "AgentSight | Visual Context for AI Agents",
  description: "The zero-friction visual bridge that connects your browser to your IDE.",
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
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {process.env.NODE_ENV === 'development' ? (
            <AgentSightProvider>{children}</AgentSightProvider>
          ) : (
            children
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
