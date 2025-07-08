import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 sm:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2">
                        <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl shadow-primary/10 group">
                            <Image
                                src="https://placehold.co/800x800.png"
                                alt="Bilal Sahili"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-ai-hint="portrait professional"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent transition-all duration-300 group-hover:bg-background/20" />
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
                            About Me
                        </h2>
                        <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                            <p>
                                I am a versatile developer and project manager with a passion for building intelligent systems and seamless user experiences. With a foundation in full-stack development and a specialization in AI, I bridge the gap between complex back-end logic and beautiful, functional front-end design.
                            </p>
                            <p>
                                My journey in tech is driven by a curiosity to solve real-world problems and a commitment to continuous learning. Whether I'm architecting a scalable cloud application, training a machine learning model, or leading a team to deliver a project on time, I bring a blend of technical expertise and strategic thinking to every challenge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
