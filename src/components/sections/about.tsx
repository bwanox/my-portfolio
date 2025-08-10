"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Typewriter } from "@/components/typewriter";

const bioText = "A creative developer and project manager with a passion for building beautiful, functional, and user-centric digital experiences. I thrive in the cosmos of code, navigating the vast expanse of both frontend and backend development to bring ideas to life. My mission is to explore new technologies and create stellar applications that make an impact.";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-aurora">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 text-glow">
            About This Lifeform
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 p-2 box-glow"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <CardContent className="p-0"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="My Photo"
                  data-ai-hint="portrait man"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="md:col-span-3 text-lg text-white/80 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typewriter text={bioText} className="leading-relaxed" delay={500} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
