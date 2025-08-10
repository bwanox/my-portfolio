"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const allSkills = {
  frontend: [
    { name: 'React & Next.js', level: 90 },
    { name: 'JavaScript & TypeScript', level: 95 },
    { name: 'HTML5 & CSS3', level: 98 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Three.js & WebGL', level: 70 },
  ],
  backend: [
    { name: 'Node.js & Express', level: 88 },
    { name: 'Python & Django', level: 75 },
    { name: 'SQL (PostgreSQL, MySQL)', level: 80 },
    { name: 'NoSQL (MongoDB, Firebase)', level: 78 },
    { name: 'Docker & Kubernetes', level: 70 },
  ],
  design: [
    { name: 'Figma', level: 92 },
    { name: 'UI/UX Principles', level: 85 },
    { name: 'User Research', level: 75 },
    { name: 'Prototyping & Wireframing', level: 90 },
    { name: 'Adobe Creative Suite', level: 80 },
  ],
  other: [
    { name: 'Agile & Scrum', level: 95 },
    { name: 'Project Management Tools (Jira)', level: 90 },
    { name: 'CI/CD & DevOps', level: 75 },
    { name: 'Generative AI APIs', level: 80 },
    { name: 'Git & Version Control', level: 98 },
  ]
};

type SkillCategory = keyof typeof allSkills;

export function Skills() {
  const [activeCategory, setActiveCategory] = React.useState<SkillCategory>("frontend");
  const skills = allSkills[activeCategory];

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-grid">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 text-glow">
            Technical Proficiency
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-card/30 backdrop-blur-sm border border-white/10 p-4 md:p-8 shadow-2xl">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.keys(allSkills).map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category as SkillCategory)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/90 font-medium">{skill.name}</span>
                    <span className="text-accent font-mono text-sm">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
