'use client';

import type { Achievement } from '@/lib/types';
import { motion } from 'framer-motion';

export default function AchievementsSection({ achievements }: { achievements: Achievement[] }) {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Certifications & Achievements
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A testament to my commitment to professional growth and excellence in the field.
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
            <div className="space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const itemVariants = {
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { delay: index * 0.2, ease: 'easeOut' } }
                };
                return (
                  <motion.div 
                    key={index} 
                    className="relative flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0">
                      <div className="absolute -left-1 top-1.5 h-12 w-12 rounded-full bg-background flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 pl-4 flex-grow">
                        <div className="rounded-lg bg-card/50 p-4 border border-border">
                            <p className="font-semibold text-lg text-foreground">{achievement.title}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                {achievement.issuer} - <span className="font-medium text-accent">{achievement.year}</span>
                            </p>
                        </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
