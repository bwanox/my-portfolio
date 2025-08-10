"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

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

  const Stars = ({ className, speed = 180 }: { className: string, speed?: number }) => (
    <div
      className={cn("absolute inset-0 bg-repeat", className)}
      style={{ animation: `star-pan ${speed}s linear infinite` }}
    />
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: parallaxX, y: parallaxY }}
      className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
    >
      <div className="absolute inset-0 opacity-50">
        <Stars className="bg-[url(/stars1.svg)] bg-[length:512px_512px]" speed={180} />
      </div>
      <div className="absolute inset-0 opacity-30">
        <Stars className="bg-[url(/stars2.svg)] bg-[length:1024px_1024px]" speed={300} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </motion.div>
  );
};
