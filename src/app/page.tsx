'use client';

import { useState } from 'react';
import type { PersonalizePortfolioOutput } from '@/ai/flows/personalize-portfolio';
import type { Project, Achievement, CategorizedSkills } from '@/lib/types';

import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import PersonalizationTool from '@/components/personalization-tool';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import AchievementsSection from '@/components/sections/achievements';
import ContactSection from '@/components/sections/contact';
import { Award, Code, Crown, Bot } from 'lucide-react';
import { AnimatedWrapper } from '@/components/animated-wrapper';

const ALL_PROJECTS: Project[] = [
  {
    title: 'AI-Powered E-commerce Platform',
    description: 'A full-stack e-commerce solution that uses AI to provide personalized product recommendations and dynamic pricing.',
    techStack: 'Next.js, Python, TensorFlow, Stripe, PostgreSQL, Docker',
    image: 'https://placehold.co/1200x800.png',
    aiHint: 'ecommerce platform',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real-time Collaborative Whiteboard',
    description: 'A web application allowing multiple users to brainstorm and collaborate in real-time on a shared digital canvas.',
    techStack: 'React, Node.js, WebSockets, TypeScript, Redis',
    image: 'https://placehold.co/1200x800.png',
    aiHint: 'collaboration tool',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Cloud-Native DevOps Pipeline',
    description: 'Designed and implemented a CI/CD pipeline for a microservices architecture, reducing deployment time by 80%.',
    techStack: 'Kubernetes, Jenkins, Go, AWS, Terraform',
    image: 'https://placehold.co/1200x800.png',
    aiHint: 'cloud infrastructure',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Generative Art Installation',
    description: 'An interactive art piece using generative AI to create unique visuals based on audience movement and sound.',
    techStack: 'Python, PyTorch, openFrameworks, Raspberry Pi',
    image: 'https://placehold.co/1200x800.png',
    aiHint: 'generative art',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ALL_SKILLS: CategorizedSkills[] = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'TypeScript'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis'] },
    { category: 'AI/ML', skills: ['TensorFlow', 'PyTorch', 'LangChain', 'Genkit', 'Scikit-learn'] },
    { category: 'Project Management', skills: ['Agile', 'Scrum', 'Jira', 'Figma', 'Notion'] },
];

const ACHIEVEMENTS: Achievement[] = [
  { title: 'Google Project Management Certificate', issuer: 'Google', year: '2023', icon: Award },
  { title: 'Top 5% at National Coding Olympiad', issuer: 'NCO Committee', year: '2022', icon: Code },
  { title: 'AI Innovation Challenge Winner', issuer: 'TechCon 2023', year: '2023', icon: Bot },
  { title: 'Employee of the Year', issuer: 'Innovate Corp', year: '2021', icon: Crown },
];

export default function Home() {
  const [highlightedContent, setHighlightedContent] = useState<PersonalizePortfolioOutput | null>(null);
  const [isPersonalizing, setIsPersonalizing] = useState(false);

  const handlePersonalizationUpdate = (data: PersonalizePortfolioOutput | null) => {
    setHighlightedContent(data);
  };
  
  const handleLoadingStateChange = (loading: boolean) => {
    setIsPersonalizing(loading);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedWrapper>
          <AboutSection />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <PersonalizationTool 
            onPersonalizationUpdate={handlePersonalizationUpdate}
            onLoadingStateChange={handleLoadingStateChange}
          />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <ProjectsSection projects={ALL_PROJECTS} highlightedProjects={highlightedContent?.highlightedProjects} isLoading={isPersonalizing} />
        </AnimatedWrapper>
        <SkillsSection skills={ALL_SKILLS} highlightedSkills={highlightedContent?.highlightedSkills} isLoading={isPersonalizing} />
        <AchievementsSection achievements={ACHIEVEMENTS} />
        <AnimatedWrapper>
          <ContactSection />
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
}
