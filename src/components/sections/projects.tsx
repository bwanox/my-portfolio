"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
	{
		title: "Unfriend",
		description: "A social and academic hub for university students to connect, share, and collaborate.",
		longDescription:
			"Unfriend is a community-driven web app designed to bring students together in one space. It offers a dynamic community feed for sharing updates, a dedicated assignments and grades section with AI-powered career advice, and personalized spaces for each user. Built with Next.js and Firebase, the app delivers real-time interactivity and secure data management, while Tailwind CSS ensures a sleek, responsive design across all devices.",
		image: "/unifriend.png",
		aiHint: "community social feed university",
		tags: ["Next.js", "React", "Firebase", "Tailwind CSS", "AI Integration"],
		liveUrl: "https://unifriend.vercel.app",
	},
	{
		title: "Ensak",
		description: "A modern, interactive school platform for clubs, grades, and assignments.",
		longDescription:
			"Ensak is a comprehensive school web application designed to connect students, teachers, and clubs in one unified platform. Built with Next.js and Tailwind CSS, it offers features such as club showcases, assignment management, grade tracking with OCR extraction, and AI-powered career guidance. An integrated admin panel allows easy updates to news, highlights, members, and achievements, ensuring the platform stays dynamic and up to date.",
		image: "/ensak.png",
		aiHint: "school community platform",
		tags: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js", "Express"],
		liveUrl: "https://ensakinfo.vercel.app",

	},
	{
		title: "Cyber-Deck UI Kit",
		description: "A futuristic component library for sci-fi themed interfaces.",
		longDescription:
			"Designed for developers and designers, this UI kit provides a set of reusable React components with a distinct cyberpunk and sci-fi aesthetic. It's built with accessibility in mind and is highly customizable using Tailwind CSS. The design process was done in Figma, focusing on a consistent and immersive visual language.",
		image: "https://placehold.co/600x400.png",
		aiHint: "ui components",
		tags: ["Figma", "React", "Tailwind", "Storybook"],
		liveUrl: "#",
	},
	{
		title: "AI Droid Companion",
		description: "A conversational AI assistant integrated into a web platform.",
		longDescription:
			"This project showcases the integration of large language models to create a helpful and engaging chatbot. The AI Droid can answer user questions, provide information, and guide users through the website. The backend is powered by Genkit, running on a serverless architecture for efficiency and scalability.",
		image: "https://placehold.co/600x400.png",
		aiHint: "chatbot interface",
		tags: ["GenAI", "Next.js", "Genkit", "Vercel"],
		liveUrl: "#",
	},
];

export function Projects() {
	return (
		<section id="projects" className="py-24 sm:py-32 bg-aurora">
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 text-glow">
						Project Universe
					</h2>
					<div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>
				</motion.div>

				<Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
					<CarouselContent>
						{projects.map((project, index) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
								<div className="p-2 h-full">
									<motion.div
										className="h-full"
										whileHover={{
											y: -10,
											scale: 1.02,
											boxShadow: "0 0 30px hsl(var(--accent) / 0.5)",
										}}
										transition={{ type: "spring", stiffness: 300 }}
									>
										<Card className="h-full bg-card/60 backdrop-blur-sm border-accent/20 overflow-hidden flex flex-col transition-all duration-300 hover:border-accent">
											<CardHeader className="p-0 border-b border-accent/20">
												<Image
													src={project.image}
													alt={project.title}
													data-ai-hint={project.aiHint}
													width={600}
													height={400}
													className="w-full h-48 object-cover"
												/>
											</CardHeader>
											<CardContent className="p-6 flex-grow">
												<CardTitle className="text-white font-bold text-xl mb-2">
													{project.title}
												</CardTitle>
												<p className="text-white/70 text-sm">
													{project.description}
												</p>
											</CardContent>
											<CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
												<div className="flex flex-wrap gap-2">
													{project.tags.map((tag) => (
														<Badge
															key={tag}
															variant="secondary"
															className="bg-secondary/50 text-accent border border-accent/30"
														>
															{tag}
														</Badge>
													))}
												</div>
												<Dialog>
													<DialogTrigger asChild>
														<Button
															variant="outline"
															className="w-full mt-auto"
														>
															View Case Study
														</Button>
													</DialogTrigger>
													<DialogContent className="sm:max-w-3xl bg-card/80 backdrop-blur-lg border-accent/30 text-white">
														<DialogHeader>
															<DialogTitle className="text-3xl text-accent text-glow">
																{project.title}
															</DialogTitle>
															<DialogDescription className="text-white/70 pt-2">
																Detailed case study for{" "}
																{project.title}.
															</DialogDescription>
														</DialogHeader>
														<div className="grid md:grid-cols-2 gap-6 py-4">
															<div>
																<Image
																	src={project.image}
																	alt={project.title}
																	data-ai-hint={project.aiHint}
																	width={800}
																	height={450}
																	className="rounded-lg mb-4"
																/>
																<div className="flex flex-wrap gap-2">
																	{project.tags.map((tag) => (
																		<Badge
																			key={tag}
																			variant="secondary"
																			className="bg-secondary/50 text-accent border border-accent/30"
																		>
																			{tag}
																		</Badge>
																	))}
																</div>
															</div>
															<div className="space-y-4">
																<p className="text-white/90">
																	{project.longDescription}
																</p>
																<a
																	href={project.liveUrl}
																	target="_blank"
																	rel="noopener noreferrer"
																>
																	<Button className="box-glow">
																		<ExternalLink className="mr-2 h-4 w-4" /> View
																		Live Site
																	</Button>
																</a>
															</div>
														</div>
													</DialogContent>
												</Dialog>
											</CardFooter>
										</Card>
									</motion.div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="text-white bg-background/50 border-accent/20 hover:bg-accent disabled:opacity-50" />
					<CarouselNext className="text-white bg-background/50 border-accent/20 hover:bg-accent disabled:opacity-50" />
				</Carousel>
			</div>
		</section>
	);
}
