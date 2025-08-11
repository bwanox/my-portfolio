"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
	{
		type: "work",
		title: "Full-stack Developer",
		company: "ANCFCC",
		date: "Jul 2025 - Jul 2025",
		description: `Designed and developed a full-stack web app to automate voucher and ticket management for the social services department. Built the backend in ASP.NET Core 8 (REST API) with secure Active Directory/LDAP authentication and the frontend in Angular 20. Deployed and tested using Docker (LDAP, MySQL, SMTP) with Serilog for advanced logging. Integrated OCR for automated payment processing, reducing errors. Managed the full project lifecycle from requirements and UML modeling to deployment and staff training.`,
	},
	{
		type: "work",
		title: "Technical Lead",
		company: "Junior Entreprise ENSA KENITRA",
		date: "Sep 2024 - Jul 2025",
		description: `Directed technical projects and mobile app development from concept to delivery. Managed requirements gathering, planning, and agile sprints while coordinating a multidisciplinary team. Ensured high-quality code, optimized performance, and mentored members on best practices for scalable software solutions.`,
	},
	{
		type: "education",
		title: "Computer Engineering, Computer Science",
		company: "Ecole Nationale des Sciences Appliquées - Kénitra",
		date: "Aug 2025 - Aug 2028",
		description: `Currently pursuing a Computer Engineering degree with a focus on software development, project management, and systems design. Consistently achieving top academic performance with a First-Class standing.`,
	},
	{
		type: "education",
		title: "Preparatory Classes",
		company: "Ecole Nationale des Sciences Appliquées - Kénitra",
		date: "Sep 2023 - Jul 2025",
		description: `Completed intensive preparatory studies in engineering fundamentals, project management, and Python programming. Developed strong problem-solving skills and a solid foundation for advanced software and systems engineering.`,
	},
];


const TimelineIcon = ({ type }: { type: string }) => {
	return (
		<div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80 border-2 border-accent/50 box-glow z-10">
			{type === "work" ? (
				<Briefcase className="h-6 w-6 text-accent" />
			) : (
				<GraduationCap className="h-6 w-6 text-accent" />
			)}
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
					<div
						className="absolute left-6 top-0 h-full w-0.5 bg-accent/30"
						aria-hidden="true"
					/>
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
													<p className="text-sm text-accent font-semibold">
														{item.company}
													</p>
													<CardTitle className="text-xl font-bold text-white mt-1">
														{item.title}
													</CardTitle>
												</div>
												<span className="text-sm text-white/50 whitespace-nowrap">
													{item.date}
												</span>
											</div>
										</CardHeader>
										<CardContent>
											<p className="text-white/70">
												{item.description}
											</p>
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
