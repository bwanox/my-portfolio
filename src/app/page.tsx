import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Certifications } from '@/components/sections/certifications';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';
import { Starfield } from '@/components/starfield';
import { SpaceDroidChatbot } from '@/components/ai/space-droid-chatbot';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <Starfield />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <SpaceDroidChatbot />
    </div>
  );
}
