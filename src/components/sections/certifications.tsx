"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star } from "lucide-react";

const certifications = [
	{
		name: "Google Project Management",
		issuer: "Google",
		isSpecial: true,
		description: "Issued Dec 2024. Completed Google Project Management program covering Agile & Waterfall methodologies, strategic thinking, change and risk management, business writing, and quality management.",
	},
	{
		name: "Front End Development Libraries",
		issuer: "freeCodeCamp",
		isSpecial: false,
		description: "Issued Oct 2024. Credential ID: bilalsahili-fedl. Skills: Bootstrap, React.js, SASS, jQuery, Redux.js.",
	},
	{
		name: "Prompt Engineering",
		issuer: "Sololearn",
		isSpecial: false,
		description: "Issued Oct 2024. Credential ID: CC-KEQRHYSE. Skills: Prompt Engineering, AI Prompting.",
	},
	{
		name: "SEO with AI",
		issuer: "Sololearn",
		isSpecial: false,
		description: "Issued Oct 2024. Credential ID: CC-Q4XIBZYA. Skills: Search Engine Optimization (SEO).",
	},
	{
		name: "Python Certificate",
		issuer: "HackerRank",
		isSpecial: false,
		description: "Issued Jul 2024. Demonstrated proficiency in Python programming.",
	},
];

const parseDescription = (desc: string) => {
	// Extract issued date, credential ID, and skills from description
	const issuedMatch = desc.match(/Issued\s([A-Za-z]+\s\d{4})/);
	const credentialMatch = desc.match(/Credential ID:\s([^\.\s]+)/);
	const skillsMatch = desc.match(/Skills:\s(.+?)(\.|$)/);

	const issued = issuedMatch ? issuedMatch[1] : null;
	const credential = credentialMatch ? credentialMatch[1] : null;
	const skills = skillsMatch ? skillsMatch[1] : null;

	// Remove extracted info from description for fallback
	let mainDesc = desc
		.replace(/Issued\s[A-Za-z]+\s\d{4}\.?\s?/, "")
		.replace(/Credential ID:\s[^\.\s]+\.?\s?/, "")
		.replace(/Skills:\s.+?(\.|$)/, "")
		.trim();

	return { issued, credential, skills, mainDesc };
};

const HexagonCard = ({ cert }: { cert: typeof certifications[0] }) => {
	const { issued, credential, skills, mainDesc } = parseDescription(cert.description);

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
				<div className="py-4 space-y-2 text-white/90">
					{issued && (
						<div>
							<span className="font-semibold text-accent">Issued:</span>{" "}
							<span>{issued}</span>
						</div>
					)}
					{credential && (
						<div>
							<span className="font-semibold text-accent">Credential ID:</span>{" "}
							<span>{credential}</span>
						</div>
					)}
					{skills && (
						<div>
							<span className="font-semibold text-accent">Skills:</span>{" "}
							<span>{skills}</span>
						</div>
					)}
					{mainDesc && (
						<div>
							<span className="font-semibold text-accent">Details:</span>{" "}
							<span>{mainDesc}</span>
						</div>
					)}
				</div>
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
						Certifications
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
