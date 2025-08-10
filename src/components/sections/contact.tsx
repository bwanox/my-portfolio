"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this to a server endpoint
    console.log("Transmission sent:", values);
    toast({
      title: "Transmission Sent!",
      description: "Your message is traveling through the cosmos. I'll get back to you soon.",
    });
    form.reset();
  }

  const socialIcons = [
    { icon: <Github className="h-6 w-6"/>, href: "#" },
    { icon: <Linkedin className="h-6 w-6"/>, href: "#" },
    { icon: <Mail className="h-6 w-6"/>, href: "#" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-aurora">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 text-glow">
            Send Transmission
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg p-8 shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent">Callsign // Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} className="bg-input/50 focus:border-accent" />
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
                      <FormLabel className="text-accent">Frequency // Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="bg-input/50 focus:border-accent" />
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
                      <FormLabel className="text-accent">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Type your message" {...field} rows={5} className="bg-input/50 focus:border-accent"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full box-glow text-lg py-6" disabled={form.formState.isSubmitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {form.formState.isSubmitting ? "Sending..." : "Send Transmission"}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
        
        <div className="mt-16 flex justify-center space-x-8">
            {socialIcons.map((item, i) => (
                <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5, color: 'hsl(var(--accent))' }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/70 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                >
                    {item.icon}
                </motion.a>
            ))}
        </div>
      </div>
    </section>
  );
}
