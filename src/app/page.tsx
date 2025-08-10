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
import universitycompanion from '@/assets/university-companion.png';
import pocketdoc from '@/assets/pocketdoc.png';
import schoolwebsite from '@/assets/schoolwebsite.png';
import chatbot from '@/assets/chatbot.png';

const ALL_PROJECTS: Project[] = [
  {
    title: '🚀 AI-Powered Smart University Companion',
    description: 'Transforming student life with an intelligent assistant that effortlessly manages your grades, assignments, and career guidance—all powered by cutting-edge AI and OCR technology!',
    techStack: 'React, Tailwind CSS, Firebase, Tesseract.js, OpenAI API',
    image: universitycompanion,
    aiHint: 'university companion',
    liveUrl: '#',
    githubUrl: 'https://github.com/bwanox/universitycompanion',
  },
  {
    title: '💊 Pocket Doc — Your Personal Medical Guide',
    description: 'A revolutionary medical app that delivers instant first aid advice, doctor recommendations, and smart health reminders—offline and on the go. Your health, simplified and always within reach!',
    techStack: 'React Native, Tailwind CSS, Firebase, Local Notifications',
    image: pocketdoc,
    aiHint: 'medical assistance app',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: '🏫 Next-Gen School Website with Powerful Admin Panel',
    description: 'A sleek, fully responsive school website featuring dynamic club showcases, course highlights, and a robust admin dashboard — empowering staff to effortlessly update content in real-time.',
    techStack: 'Next.js, React, Firebase, Vercel, Tailwind CSS',
    image: schoolwebsite,
    aiHint: 'school website',
    liveUrl: 'https://ensakinfo.vercel.app',
    githubUrl: 'https://github.com/bwanox/ensakwebsite',
  },
  {
    title: '🤖 3D AI Chatbot with a Spherical Avatar',
    description: 'An immersive, futuristic chatbot experience featuring a stunning 3D spherical face that listens and responds in real-time — blending React, Blender, and WebGL magic into one seamless interface.',
    techStack: 'React, Blender, Three.js, Node.js',
    image: chatbot,
    aiHint: 'chat bot with 3D avatar',
    liveUrl: '#',
    githubUrl: 'https://github.com/bwanox/chatbot',
  },
];


const ALL_SKILLS: CategorizedSkills[] = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'React Native',
      'Tailwind CSS',
      'SCSS',
      'TypeScript',
      'JavaScript',
      'Three.js'
    ]
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'Firebase (Auth, Firestore, Hosting)',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'RESTful API Development'
    ]
  },
  {
    category: 'AI/ML',
    skills: [
      'OpenAI API',
      'Tesseract.js (OCR)',
      'LangChain',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn'
    ]
  },
  {
    category: 'Project Management',
    skills: [
      'Agile Methodologies',
      'Scrum',
      'Jira',
      'Figma',
      'Notion'
    ]
  }
];


const ACHIEVEMENTS: Achievement[] = [
  { 
    title: 'Google Project Management Specialization Completed', 
    issuer: 'Google via Coursera', 
    year: '2024', 
    icon: Award 
  },
  { 
    title: 'Organized and Led Technical & Logistical Event for University Club', 
    issuer: 'EKJE Club', 
    year: '2023', 
    icon: Crown 
  },
  { 
    title: 'AI-Powered University Companion Project Developed', 
    issuer: 'Personal Project', 
    year: '2024', 
    icon: Bot 
  },
  { 
    title: 'Top Performer in Moroccan National Programming Challenges', 
    issuer: 'Regional Coding Olympiad', 
    year: '2022', 
    icon: Code 
  }
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
