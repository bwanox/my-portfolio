"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-10" />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Orbiting planet"
            data-ai-hint="orbiting planet space"
            fill
            objectFit="cover"
            className="opacity-30"
            priority
          />
        </motion.div>
      </div>
      
      {/* Drifting Asteroid */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32"
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, 50, 150, 50, 0],
          rotate: [0, 0, 180, 180, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="https://placehold.co/128x128.png"
          alt="Drifting asteroid"
          data-ai-hint="asteroid space"
          width={128}
          height={128}
          className="opacity-20"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="font-headline text-5xl sm:text-7xl md:text-8xl font-bold text-white text-glow"
        >
          COSMIC FOLIO
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-xl text-lg md:text-xl text-accent"
        >
          Full-Stack Developer • Designer • Project Manager
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" onClick={() => scrollTo('#about')} className="box-glow">
            Explore My Universe
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce"/>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Launch Resume</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 16, 0]}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
