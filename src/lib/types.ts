import type { LucideIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export interface Project {
  title: string;
  description: string;
  techStack: string;
  image: string | StaticImageData;
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
