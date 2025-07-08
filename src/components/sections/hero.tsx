'use client';

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-[calc(100vh-3.5rem)] w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full animated-gradient" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary animated-orb" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent animated-orb" style={{ animationDelay: '5s' }} />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold font-headline tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        Bilal Sahili
                    </h1>
                    <div className="mt-6">
                        <p className="text-xl md:text-2xl text-primary font-code mx-auto max-w-2xl h-8">
                           <span className="typing-effect">Full-Stack Developer & AI Engineer.</span>
                        </p>
                    </div>
                    <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground">
                        Crafting intuitive, high-performance digital experiences where technology meets creative innovation.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={scrollToAbout}>
                            Explore My Work
                            <ArrowDown className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" onClick={scrollToContact}>
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
