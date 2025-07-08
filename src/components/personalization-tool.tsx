'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { personalizePortfolioAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import type { PersonalizePortfolioOutput } from '@/ai/flows/personalize-portfolio';
import { Wand2 } from 'lucide-react';

interface PersonalizationToolProps {
  onPersonalizationUpdate: (data: PersonalizePortfolioOutput | null) => void;
  onLoadingStateChange: (loading: boolean) => void;
}

const viewerProfiles = [
  { id: 'recruiter', label: 'Recruiter' },
  { id: 'developer', label: 'Fellow Developer' },
  { id: 'pm', label: 'Project Manager' },
  { id: 'investor', label: 'Investor / Founder' },
];

export default function PersonalizationTool({ onPersonalizationUpdate, onLoadingStateChange }: PersonalizationToolProps) {
  const [selectedProfile, setSelectedProfile] = useState('');
  const { toast } = useToast();

  const handleSubmit = async () => {
    onLoadingStateChange(true);
    const { data, error } = await personalizePortfolioAction(selectedProfile);
    if (error) {
      toast({
        title: 'Error',
        description: error,
        variant: 'destructive',
      });
    } else {
      onPersonalizationUpdate(data);
    }
    onLoadingStateChange(false);
  };
  
  const handleReset = () => {
    setSelectedProfile('');
    onPersonalizationUpdate(null);
  };

  return (
    <section className="py-24 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
            <Wand2 className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
            Personalize Your View
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            I've built projects for various audiences. Tell me who you are, and I'll use AI to highlight what's most relevant to you.
          </p>
        </div>
        <div className="mt-10">
          <RadioGroup
            value={selectedProfile}
            onValueChange={setSelectedProfile}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {viewerProfiles.map((profile) => (
              <div key={profile.id}>
                <RadioGroupItem value={profile.label} id={profile.id} className="sr-only" />
                <Label
                  htmlFor={profile.id}
                  className={`flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent/20 hover:text-accent-foreground cursor-pointer transition-all ${
                    selectedProfile === profile.label ? 'border-primary shadow-lg shadow-primary/20' : ''
                  }`}
                >
                  <span className="font-semibold">{profile.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" onClick={handleSubmit} disabled={!selectedProfile}>
            <Wand2 className="mr-2 h-4 w-4" />
            Apply Filter
          </Button>
          <Button size="lg" variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </section>
  );
}
