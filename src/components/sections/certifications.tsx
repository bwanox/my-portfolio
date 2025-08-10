"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star } from "lucide-react";

const certifications = [
  {
    name: "Google PM Specialization",
    issuer: "Google",
    isSpecial: true,
    description: "Completed a rigorous program on project management fundamentals, including agile methodologies, project planning, and execution."
  },
  {
    name: "Certified ScrumMaster®",
    issuer: "Scrum Alliance",
    isSpecial: false,
    description: "Demonstrated proficiency in Scrum principles and practices, qualified to lead agile development teams."
  },
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    isSpecial: false,
    description: "Validated technical expertise in developing and maintaining applications on the AWS platform."
  },
  {
    name: "Advanced React",
    issuer: "Wes Bos",
    isSpecial: false,
    description: "Mastered advanced React concepts including GraphQL, server-side rendering, and testing."
  },
  {
    name: "Cybersecurity Fundamentals",
    issuer: "CompTIA",
    isSpecial: false,
    description: "Gained foundational knowledge in cybersecurity principles, threats, and best practices."
  },
    {
    name: "UI/UX Design Expert",
    issuer: "Interaction Design Foundation",
    isSpecial: false,
    description: "Comprehensive training in user interface and user experience design principles."
  },
];

const HexagonCard = ({ cert }: { cert: typeof certifications[0] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05, zIndex: 10, y: -5 }}
          className="relative group cursor-pointer"
        >
          <div
            className={`relative w-[220px] h-[254px] transition-all duration-300 group-hover:drop-shadow-glow
              ${cert.isSpecial ? "drop-shadow-[0_0_15px_#FFD700]" : "drop-shadow-[0_0_15px_hsl(var(--accent)/0.5)]"}
            `}
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          >
            <div className="absolute inset-0 bg-card/60 backdrop-blur-sm border transition-colors duration-300" 
                 style={{
                   borderColor: cert.isSpecial ? "rgba(255, 215, 0, 0.5)" : "hsl(var(--accent)/0.3)",
                   clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                 }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 group-hover:to-black/50 transition-all duration-300"></div>
            <div className="flex flex-col items-center justify-center h-full text-center p-4 relative z-10">
              {cert.isSpecial && <Star className="text-yellow-400 absolute top-5 right-5 fill-yellow-400/50" />}
              <h3 className="font-bold text-white text-lg">{cert.name}</h3>
              <p className="text-white/60 text-sm mt-2">{cert.issuer}</p>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="bg-card/80 backdrop-blur-lg border-accent/30 text-white">
        <DialogHeader>
          <DialogTitle className={`text-2xl ${cert.isSpecial ? "text-yellow-400 text-glow" : "text-accent text-glow"}`}>{cert.name}</DialogTitle>
          <DialogDescription className="text-white/70 pt-2">
            Issued by {cert.issuer}
          </DialogDescription>
        </DialogHeader>
        <p className="py-4 text-white/90">{cert.description}</p>
      </DialogContent>
    </Dialog>
  );
};


export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-grid">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 text-glow">
            Holographic Certifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              <HexagonCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
