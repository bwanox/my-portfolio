"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certs", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on link click
    const targetElement = document.querySelector(href);
    if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "top-4" : "top-0"
        )}
      >
        <div className="container mx-auto px-4">
          <nav
            className={cn(
              "mx-auto max-w-5xl rounded-full border transition-all duration-300 flex items-center justify-between p-2",
              scrolled ? "border-white/10 bg-black/30 backdrop-blur-lg" : "border-transparent"
            )}
          >
            <Link href="#home" onClick={(e) => scrollTo(e, '#home')}>
              <motion.span 
                whileHover={{ scale: 1.1, rotate: -10 }}
                className="font-headline text-2xl font-bold text-white transition-colors hover:text-accent text-glow"
              >
                CF
              </motion.span>
            </Link>
            <div className="hidden sm:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                  <Button variant="ghost" asChild onClick={(e) => scrollTo(e as any, link.href)}>
                    <a className="text-white/80 hover:text-white transition-colors">{link.name}</a>
                  </Button>
                </Link>
              ))}
            </div>
             <div className="hidden sm:block">
               <Button asChild className="box-glow">
                 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
               </Button>
             </div>
            <div className="sm:hidden">
              <Button onClick={() => setIsMenuOpen(true)} variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white"/>
              </Button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg sm:hidden"
          >
            <div className="container mx-auto px-4 h-full flex flex-col">
              <div className="flex justify-between items-center py-4">
                <Link href="#home" onClick={(e) => scrollTo(e, '#home')}>
                  <span className="font-headline text-2xl font-bold text-white">CF</span>
                </Link>
                <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon">
                  <X className="h-6 w-6 text-white"/>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} passHref>
                    <a onClick={(e) => scrollTo(e, link.href)} className="text-2xl font-medium text-white/80 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </Link>
                ))}
                 <Button asChild size="lg" className="mt-8 box-glow">
                   <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
