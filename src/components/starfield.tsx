"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useMemo } from "react";

export const Starfield = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const parallaxX = useTransform(mouseX, [-0.5, 0.5], ["1%", "-1%"]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], ["1%", "-1%"]);

  // Generate random stars
  const generateStars = (count: number, size: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * size + 1,
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 2,
    }));
  };

  const smallStars = useMemo(() => generateStars(150, 2), []);
  const mediumStars = useMemo(() => generateStars(100, 3), []);
  const largeStars = useMemo(() => generateStars(50, 4), []);

  const StarLayer = ({ 
    stars, 
    className, 
    speed = 180 
  }: { 
    stars: Array<{ id: number; x: number; y: number; size: number; opacity: number; animationDelay: number }>;
    className: string;
    speed?: number;
  }) => (
    <div
      className={cn("absolute inset-0 w-full h-full", className)}
      style={{ animation: `star-pan ${speed}s linear infinite` }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @keyframes star-pan {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-100px) translateY(-50px); }
        }
      `}</style>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40">
          <StarLayer stars={smallStars} className="" speed={180} />
        </div>
        <div className="absolute inset-0 opacity-25">
          <StarLayer stars={mediumStars} className="" speed={300} />
        </div>
        <div className="absolute inset-0 opacity-15">
          <StarLayer stars={largeStars} className="" speed={450} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </motion.div>
    </>
  );
};
