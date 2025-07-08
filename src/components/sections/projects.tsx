'use client';

import type { Project } from '@/lib/types';
import type { PersonalizePortfolioOutput } from '@/ai/flows/personalize-portfolio';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  projects: Project[];
  highlightedProjects: PersonalizePortfolioOutput['highlightedProjects'] | undefined;
  isLoading: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ProjectCard = ({ project, isHighlighted }: { project: Project; isHighlighted: boolean }) => (
  <motion.div variants={cardVariants} className="[perspective:1000px] group h-full">
    <Card className={cn(
      "overflow-hidden transition-all duration-500 flex flex-col h-full bg-card/50 backdrop-blur-sm relative transform-style-preserve-3d group-hover:shadow-2xl group-hover:shadow-primary/20",
      "group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:-rotate-y-3",
      isHighlighted ? 'border-2 border-primary shadow-xl shadow-primary/20' : 'border-border'
    )}>
      <CardHeader className="p-0 relative">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={project.aiHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="p-6 absolute bottom-0 w-full transition-transform duration-500 [transform:translateZ(40px)]">
          <CardTitle className="font-headline text-xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
            {project.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <p className="text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.split(', ').map(tech => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <div className="flex w-full justify-end gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  </motion.div>
);

const ProjectSkeleton = () => (
    <div className="flex flex-col space-y-0 bg-card/50 rounded-lg overflow-hidden border border-border h-full">
        <Skeleton className="aspect-video w-full" />
        <div className="p-6 space-y-4 flex-grow">
            <div className="space-y-2">
                <Skeleton className="h-5 w-3/4" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
            </div>
             <div className="flex flex-wrap gap-2 pt-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-12 rounded-full" />
            </div>
        </div>
        <div className="p-6 pt-2 flex justify-end gap-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-28 rounded-md" />
        </div>
    </div>
)

export default function ProjectsSection({ projects, highlightedProjects, isLoading }: ProjectsSectionProps) {
  const highlightedTitles = highlightedProjects?.map(p => p.title) || [];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Projects Showcase
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Here are some of the projects I'm most proud of. Each one represents a unique challenge and a valuable learning experience.
          </p>
        </div>
        <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {isLoading ? 
                Array.from({ length: 4 }).map((_, i) => <ProjectSkeleton key={i} />) : 
                projects.map(project => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        isHighlighted={highlightedTitles.includes(project.title)}
                    />
                ))
            }
        </motion.div>
      </div>
    </section>
  );
}
