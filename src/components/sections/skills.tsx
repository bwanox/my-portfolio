"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const allSkills = {
  frontend: [
    { name: 'React & Next.js', level: 90 },          // Strong daily use
    { name: 'JavaScript & TypeScript', level: 92 }, // Very proficient, slight realism drop from 95
    { name: 'HTML5 & CSS3', level: 93 },            // Expert but leaving some room for growth
    { name: 'Tailwind CSS', level: 90 },             // Used extensively, solid skill
    { name: 'Bootstrap (Framework)', level: 80 },    // Good knowledge but less focus lately
    { name: 'Angular CLI', level: 65 },               // Used in one big project
    { name: 'Angular Material', level: 65 },          // Same as above
    { name: 'SASS', level: 75 },                       // Good, but less frequent use
    { name: 'jQuery', level: 70 },                     // Legacy skill, less recent use
    { name: 'Redux.js', level: 75 },                   // Used but not daily
    { name: 'Three.js & WebGL', level: 65 },           // Familiar, some project experience
  ],
  backend: [
    { name: 'Node.js & Express', level: 85 },         // Strong but some room to master advanced topics
    { name: 'Python & Django', level: 70 },           // Moderate use, mostly basic to intermediate
    { name: 'C (Programming Language)', level: 65 },  // Academic and some practical exposure
    { name: 'ASP.NET', level: 80 },                    // Solid experience from full project delivery
    { name: 'ASP.NET MVC', level: 65 },                // Less frequent use compared to Core
    { name: 'SQL (PostgreSQL, MySQL)', level: 78 },   // Strong SQL skills
    { name: 'NoSQL (MongoDB, Firebase)', level: 75 }, // Good experience with Firebase & MongoDB
    { name: 'Docker & Kubernetes', level: 75 },       // Confident with Docker, Kubernetes basic
    { name: 'Extract, Transform, Load (ETL)', level: 70 },  // Practical ETL work in OCR automation
    { name: 'LDAP', level: 65 },                        // Hands-on LDAP integration experience
    { name: 'LDAP Administration', level: 65 },        // Same as above
    { name: 'Optical Character Recognition (OCR)', level: 70 }, // Practical automation work done
    { name: 'Arduino IDE', level: 70 },                 // Hands-on with hardware programming
    { name: 'Arduino', level: 70 },                      // Same
  ],
  ai: [
    { name: 'Generative AI APIs', level: 75 },          // Good practical use, not advanced engineering yet
    { name: 'Prompt Engineering', level: 75 },          // Solid working knowledge
    { name: 'AI Prompting', level: 75 },                 // Same
    { name: 'Search Engine Optimization (SEO)', level: 70 }, // Good foundational SEO understanding
  ],
  engineering: [
    { name: 'Electronics', level: 75 },                  // Strong foundation but room to grow
    { name: 'Electrical Wiring', level: 70 },            // Practical exposure
    { name: 'Mechanics', level: 65 },                     // Academic level
    { name: 'Probability', level: 65 },                   // Academic knowledge
    { name: 'Object-oriented Languages', level: 75 },    // Good understanding
    { name: 'Engineering', level: 80 },                   // Broad engineering skills, confident
    { name: 'Mobile Application Development', level: 70 }, // Some project experience
    { name: 'Mobile Enterprise', level: 65 },             // Limited but some knowledge
    { name: 'Program Creation', level: 65 },              // Academic and practical exposure
    { name: 'Web Development', level: 85 },               // Very solid
    { name: 'Software Development', level: 85 },          // Confident in core skills
  ],
  management: [
    { name: 'Agile & Scrum', level: 90 },                 // Strong real-world experience
    { name: 'Agile Project Management', level: 88 },     // Confident leadership and methodology use
    { name: 'Agile & Waterfall Methodologies', level: 80 }, // Experience in both
    { name: 'Strategic Thinking', level: 75 },            // Developing skill
    { name: 'Change Management', level: 75 },             // Practical exposure
    { name: 'Business Writing', level: 75 },              // Solid but room to improve
    { name: 'Risk Management', level: 75 },               // Good basic understanding
    { name: 'Quality Management', level: 75 },            // Same as above
    { name: 'Project Management', level: 85 },            // Strong practical use
    { name: 'Technical Project Leadership', level: 80 }, // Good leadership experience
    { name: 'Employee Training', level: 75 },             // Some experience mentoring
    { name: 'Teamwork', level: 90 },                       // Excellent soft skills
    { name: 'Leadership', level: 85 },                     // Strong leadership in projects
    { name: 'Communication', level: 85 },                  // Very good communication skills
    { name: 'Problem Solving', level: 90 },                // Core strength
  ],
  other: [
    { name: 'CI/CD & DevOps', level: 70 },                 // Working knowledge
    { name: 'Git & Version Control', level: 95 },          // Very strong and daily use
    { name: 'Automation', level: 70 },                      // Practical experience
    { name: 'Project Management Tools (Jira)', level: 85 },// Strong experience
    { name: 'User Research', level: 70 },                   // Some practical exposure
    { name: 'Prototyping & Wireframing', level: 85 },      // Regular use
    { name: 'Adobe Creative Suite', level: 75 },            // Good design skills
    { name: 'Figma', level: 90 },                            // Solid daily use
    { name: 'UI/UX Principles', level: 80 },                // Good understanding
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
