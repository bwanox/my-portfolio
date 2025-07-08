// src/app/actions.ts
'use server';

import { personalizePortfolio, type PersonalizePortfolioInput, type PersonalizePortfolioOutput } from '@/ai/flows/personalize-portfolio';

const ALL_PROJECTS = [
  {
    title: "AI-Powered E-commerce Platform",
    description: "A full-stack e-commerce solution that uses AI to provide personalized product recommendations and dynamic pricing.",
    techStack: "Next.js, Python, TensorFlow, Stripe, PostgreSQL, Docker",
  },
  {
    title: "Real-time Collaborative Whiteboard",
    description: "A web application allowing multiple users to brainstorm and collaborate in real-time on a shared digital canvas.",
    techStack: "React, Node.js, WebSockets, TypeScript, Redis",
  },
  {
    title: "Cloud-Native DevOps Pipeline",
    description: "Designed and implemented a CI/CD pipeline for a microservices architecture, reducing deployment time by 80%.",
    techStack: "Kubernetes, Jenkins, Go, AWS, Terraform",
  },
  {
    title: "Generative Art Installation",
    description: "An interactive art piece using generative AI to create unique visuals based on audience movement and sound.",
    techStack: "Python, PyTorch, openFrameworks, Raspberry Pi",
  },
];

const ALL_SKILLS = [
  // Frontend
  "React", "Next.js", "Tailwind CSS", "Three.js", "TypeScript",
  // Backend
  "Node.js", "Express", "Python", "Go", "PostgreSQL", "MongoDB", "Docker", "Redis",
  // AI/ML
  "TensorFlow", "PyTorch", "LangChain", "Genkit", "Scikit-learn",
  // Project Management
  "Agile", "Scrum", "Jira", "Figma", "Notion",
];

export async function personalizePortfolioAction(
  viewerBackground: string
): Promise<{ data: PersonalizePortfolioOutput | null; error: string | null }> {
  try {
    if (!viewerBackground) {
        return { data: null, error: null };
    }
      
    const input: PersonalizePortfolioInput = {
      viewerBackground,
      projects: ALL_PROJECTS,
      skills: ALL_SKILLS,
    };

    const result = await personalizePortfolio(input);
    return { data: result, error: null };
  } catch (error) {
    console.error("Error personalizing portfolio:", error);
    return { data: null, error: "Failed to personalize content. Please try again." };
  }
}
