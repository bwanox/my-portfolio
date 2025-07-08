'use client';

import type { CategorizedSkills } from '@/lib/types';
import type { PersonalizePortfolioOutput } from '@/ai/flows/personalize-portfolio';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { BrainCircuit, Cog, Presentation, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillsSectionProps {
  skills: CategorizedSkills[];
  highlightedSkills: PersonalizePortfolioOutput['highlightedSkills'] | undefined;
  isLoading: boolean;
}

const categoryIcons: { [key in CategorizedSkills['category']]: LucideIcon } = {
    'Frontend': Cog,
    'Backend': Server,
    'AI/ML': BrainCircuit,
    'Project Management': Presentation
};

const SkillSkeleton = () => (
    <Card className="bg-card/50">
        <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-6 w-1/2" />
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                {Array.from({length: 8}).map((_, i) => (
                    <Skeleton key={i} className="h-7 w-20 rounded-full" />
                ))}
            </div>
        </CardContent>
    </Card>
);

export default function SkillsSection({ skills, highlightedSkills, isLoading }: SkillsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, ease: 'easeOut' }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut' } }
  };
  
  return (
    <section id="skills" className="py-24 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
            My Technical Toolkit
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From front-end frameworks to machine learning models, here's a look at the technologies I work with.
          </p>
        </div>
        <motion.div
            className="mt-16 grid gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {isLoading ?
           Array.from({length: 4}).map((_, i) => <SkillSkeleton key={i} />) :
           skills.map(category => {
            const Icon = categoryIcons[category.category];
            return (
              <motion.div key={category.category} variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm h-full border-border/80">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                      <Icon className="h-8 w-8 text-accent" />
                      <CardTitle className="font-headline text-2xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <Badge
                          key={skill}
                          className={cn("px-4 py-2 text-sm transition-all duration-300", highlightedSkills?.includes(skill) ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-secondary text-secondary-foreground')}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
