'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
    };

    return (
        <section id="contact" className="py-24 sm:py-32 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
                        Let's Collaborate
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Have a project in mind or just want to connect? Drop me a message or find me on social media.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-6">
                         <h3 className="text-2xl font-headline font-semibold text-accent">Contact Information</h3>
                         <div className="space-y-4">
                             <a href="mailto:bilal.sahili@example.com" className="flex items-center gap-4 group">
                                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors"/>
                                <span className="text-lg text-muted-foreground group-hover:text-primary transition-colors">bilal.sahili@example.com</span>
                             </a>
                             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors"/>
                                <span className="text-lg text-muted-foreground group-hover:text-primary transition-colors">GitHub Profile</span>
                             </a>
                             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors"/>
                                <span className="text-lg text-muted-foreground group-hover:text-primary transition-colors">LinkedIn Profile</span>
                             </a>
                         </div>
                    </div>
                    <Card className="p-8 border-accent/20 bg-card/50">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="john.doe@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Let's talk about..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
