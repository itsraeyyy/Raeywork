import { ProjectStatusType } from "@/components/os/project-status";

export type ContentBlock = 
  | { type: "text"; text: string; label?: string }
  | { type: "image"; url: string; caption?: string; edgeToEdge?: boolean }
  | { type: "code"; code: string; language: string; filename?: string }
  | { type: "diagram"; description: string };

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: ProjectStatusType;
  category: string;
  year: string;
  role: string;
  stack: string[];
  link?: string;
  github?: string;
  content: ContentBlock[];
}

export const projectsData: Project[] = [
  {
    id: "andebet",
    name: "Andebet",
    slug: "andebet",
    description: "Giving Amharic a voice in the AI era. A comprehensive ecosystem for linguistic intelligence, transcription, and translation.",
    status: "ACTIVE",
    category: "AI / LANGUAGE",
    year: "2026",
    role: "Co-Founder",
    stack: ["Next.js", "Node.js"],
    content: [
      {
        type: "text",
        text: "Giving Amharic a voice in the AI era. A comprehensive ecosystem for linguistic intelligence, transcription, and translation. Built to bridge a critical language gap with precision."
      }
    ]
  },
  {
    id: "smoooth",
    name: "Smoooth",
    slug: "smoooth",
    description: "A fast, invisible infrastructure layer for modern applications.",
    status: "BUILDING",
    category: "INFRASTRUCTURE",
    year: "2026",
    role: "Engineer",
    stack: ["Go", "Redis", "PostgreSQL"],
    content: [
      {
        type: "text",
        text: "A fast, invisible infrastructure layer for modern applications."
      }
    ]
  },
  {
    id: "shotup",
    name: "ShotUp",
    slug: "shotup",
    description: "E-commerce imagery, elevated. An AI-powered tool that brings high-end, editorial product photography to anyone with a browser.",
    status: "SHIPPED",
    category: "AI / COMMERCE",
    year: "2024",
    role: "Founder",
    stack: ["Next.js", "Node.js"],
    content: [
      {
        type: "text",
        text: "E-commerce imagery, elevated. An AI-powered tool that brings high-end, editorial product photography to anyone with a browser."
      }
    ]
  },
  {
    id: "klaryo",
    name: "Klaryo",
    slug: "klaryo",
    description: "Feedback, clarified. A product intelligence platform designed to cut through the noise.",
    status: "BUILDING",
    category: "PRODUCT",
    year: "2023",
    role: "Founder",
    stack: ["Next.js", "Node.js"],
    content: [
      {
        type: "text",
        text: "Feedback, clarified. A product intelligence platform designed to cut through the noise and tell founders exactly what their users actually mean."
      }
    ]
  }
];

export interface LabItem {
  id: string;
  name: string;
  status: ProjectStatusType;
  description: string;
  type: string;
}

export const labData: LabItem[] = [];

export interface Note {
  id: string;
  date: string;
  content: string;
}

export const notesData: Note[] = [];
