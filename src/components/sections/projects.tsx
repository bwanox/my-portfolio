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

interface ProjectsSectionProps {
  projects: Project[];
  highlightedProjects: PersonalizePortfolioOutput['highlightedProjects'] | undefined;
  isLoading: boolean;
}

const ProjectCard = ({ project, isHighlighted }: { project: Project; isHighlighted: boolean }) => (
  <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col h-full", isHighlighted ? 'border-primary shadow-xl shadow-primary/20' : '')}>
    <CardHeader className="p-0">
      <div className="relative aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.aiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-grow p-6 pt-0">
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
);

const ProjectSkeleton = () => (
    <div className="flex flex-col space-y-3">
        <Skeleton className="h-[225px] w-full rounded-xl" />
        <div className="space-y-2 p-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="p-2 pt-0 flex gap-2">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-8 w-1/4" />
        </div>
    </div>
)

export default function ProjectsSection({ projects, highlightedProjects, isLoading }: ProjectsSectionProps) {
  const highlightedTitles = highlightedProjects?.map(p => p.title) || [];

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
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}
