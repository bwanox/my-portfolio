import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  techStack: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  aiHint: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'AI/ML' | 'Project Management';

export interface CategorizedSkills {
  category: SkillCategory;
  skills: string[];
}
