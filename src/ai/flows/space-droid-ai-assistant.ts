'use server';

/**
 * @fileOverview An AI assistant embodied as a space droid to guide users through the portfolio.
 *
 * - spaceDroidAssistant - A function that handles the conversation with the AI assistant.
 * - SpaceDroidAssistantInput - The input type for the spaceDroidAssistant function.
 * - SpaceDroidAssistantOutput - The return type for the spaceDroidAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SpaceDroidAssistantInputSchema = z.object({
  message: z.string().describe('The user message to the AI assistant.'),
});
export type SpaceDroidAssistantInput = z.infer<typeof SpaceDroidAssistantInputSchema>;

const SpaceDroidAssistantOutputSchema = z.object({
  response: z.string().describe('The AI assistant response to the user message.'),
});
export type SpaceDroidAssistantOutput = z.infer<typeof SpaceDroidAssistantOutputSchema>;

export async function spaceDroidAssistant(input: SpaceDroidAssistantInput): Promise<SpaceDroidAssistantOutput> {
  return spaceDroidAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'spaceDroidAssistantPrompt',
  input: {schema: SpaceDroidAssistantInputSchema},
  output: {schema: SpaceDroidAssistantOutputSchema},
  prompt: `You are a friendly AI chatbot embodied as a space droid, designed to guide users through a portfolio website.
  Your goal is to help users easily navigate and understand the presented information.
  You should answer basic questions about the portfolio content, such as the sections available, the skills showcased, and how to contact the portfolio owner.
  Keep your responses concise and engaging, using a futuristic and slightly humorous tone.

  User message: {{{message}}}
  `,
});

const spaceDroidAssistantFlow = ai.defineFlow(
  {
    name: 'spaceDroidAssistantFlow',
    inputSchema: SpaceDroidAssistantInputSchema,
    outputSchema: SpaceDroidAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
