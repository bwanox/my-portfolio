"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "Stellar Solutions Inc.",
    date: "2020 - Present",
    description: "Led development of high-traffic web applications using React, Node.js, and serverless architectures. Mentored junior developers and improved deployment pipelines, reducing build times by 40%.",
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "Galaxy Digital",
    date: "2017 - 2020",
    description: "Developed and maintained client-facing features for a large-scale e-commerce platform. Contributed to a major migration from a monolithic backend to a microservices-based architecture.",
  },
  {
    type: "education",
    title: "B.S. in Computer Science",
    company: "Mars University",
    date: "2013 - 2017",
    description: "Graduated with honors. Focused on algorithms, artificial intelligence, and human-computer interaction. Lead of the competitive programming team.",
  },
];

const TimelineIcon = ({ type }: { type: string }) => {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80 border-2 border-accent/50 box-glow z-10">
      {type === "work" ? <Briefcase className="h-6 w-6 text-accent" /> : <GraduationCap className="h-6 w-6 text-accent" />}
    </div>
  );
};

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-grid">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 text-glow">
            Career Trajectory
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-accent/30" aria-hidden="true" />
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineIcon type={item.type} />
                <motion.div whileHover={{ y: -5 }}>
                  <Card className="flex-1 bg-card/50 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-colors duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-accent font-semibold">{item.company}</p>
                          <CardTitle className="text-xl font-bold text-white mt-1">{item.title}</CardTitle>
                        </div>
                        <span className="text-sm text-white/50 whitespace-nowrap">{item.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
