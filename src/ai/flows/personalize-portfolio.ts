// src/ai/flows/personalize-portfolio.ts
'use server';

/**
 * @fileOverview A flow to personalize the portfolio content based on the viewer's background.
 *
 * - personalizePortfolio - A function that personalizes the portfolio content.
 * - PersonalizePortfolioInput - The input type for the personalizePortfolio function.
 * - PersonalizePortfolioOutput - The return type for the personalizePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizePortfolioInputSchema = z.object({
  viewerBackground: z
    .string()
    .describe('The professional background of the portfolio viewer.'),
  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      techStack: z.string(),
    })
  ).describe('Array of projects to consider for highlighting'),
  skills: z.array(z.string()).describe('List of skills to consider for highlighting'),
});
export type PersonalizePortfolioInput = z.infer<typeof PersonalizePortfolioInputSchema>;

const PersonalizePortfolioOutputSchema = z.object({
  highlightedProjects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      techStack: z.string(),
    })
  ).describe('Projects most relevant to the viewer.'),
  highlightedSkills: z.array(z.string()).describe('Skills most relevant to the viewer.'),
});
export type PersonalizePortfolioOutput = z.infer<typeof PersonalizePortfolioOutputSchema>;

export async function personalizePortfolio(input: PersonalizePortfolioInput): Promise<PersonalizePortfolioOutput> {
  return personalizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizePortfolioPrompt',
  input: {schema: PersonalizePortfolioInputSchema},
  output: {schema: PersonalizePortfolioOutputSchema},
  prompt: `You are an expert portfolio personalizer. Given a viewer's background, 
you will select the most relevant projects and skills from a list to highlight in a portfolio.

Viewer Background: {{{viewerBackground}}}

Available Projects:
{{#each projects}}
- Title: {{this.title}}, Description: {{this.description}}, Tech Stack: {{this.techStack}}
{{/each}}

Available Skills:
{{#each skills}}
- {{this}}
{{/each}}

Based on the viewer's background, select the 3 most relevant projects and 5 most relevant skills to highlight. Return the selected projects and skills in the specified JSON format.
Ensure that the highlighted skills are a subset of available skills, and that the highlighted projects are a subset of available projects.
`,
});

const personalizePortfolioFlow = ai.defineFlow(
  {
    name: 'personalizePortfolioFlow',
    inputSchema: PersonalizePortfolioInputSchema,
    outputSchema: PersonalizePortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
