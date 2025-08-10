"use client";

import { useState, useRef, useEffect } from "react";
import { spaceDroidAssistant } from "@/ai/flows/space-droid-ai-assistant";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function SpaceDroidChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await spaceDroidAssistant({ message: input });
      const assistantMessage: Message = { role: "assistant", content: result.response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error communicating with AI assistant:", error);
      const errorMessage: Message = { role: "assistant", content: "Apologies, my circuits seem to be fried. I can't respond right now." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);
  
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages([{ role: 'assistant', content: "Greetings! I am the CX-1 Droid, your guide to this cosmic portfolio. How may I assist you today?" }]);
        setIsLoading(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button size="icon" className="rounded-full w-16 h-16 shadow-lg drop-shadow-glow">
            <Bot className="w-8 h-8" />
          </Button>
        </motion.div>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-background/80 backdrop-blur-lg border-accent/20 text-white">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-accent text-glow">
            <Bot />
            Space Droid Assistant
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}
                  >
                    {message.role === 'assistant' && <Bot className="w-6 h-6 text-accent flex-shrink-0" />}
                    <div className={`rounded-lg p-3 max-w-xs ${message.role === 'user' ? 'bg-primary/80 text-primary-foreground' : 'bg-secondary/50'}`}>
                      {message.content}
                    </div>
                     {message.role === 'user' && <User className="w-6 h-6 flex-shrink-0" />}
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <Bot className="w-6 h-6 text-accent flex-shrink-0" />
                    <div className="rounded-lg p-3 bg-secondary/50">
                      <div className="flex space-x-1">
                        <motion.div animate={{y: [0,-4,0]}} transition={{duration: 1, repeat: Infinity}} className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <motion.div animate={{y: [0,-4,0]}} transition={{duration: 1, repeat: Infinity, delay: 0.2}} className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <motion.div animate={{y: [0,-4,0]}} transition={{duration: 1, repeat: Infinity, delay: 0.4}} className="w-1.5 h-1.5 bg-accent rounded-full" />
                      </div>
                    </div>
                  </motion.div>
              )}
            </div>
          </ScrollArea>
        </div>
        <div className="p-4 border-t border-accent/20">
          <div className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my universe..."
              className="bg-input/50 focus:border-accent"
              disabled={isLoading}
            />
            <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
