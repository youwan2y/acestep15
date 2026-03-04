import type { Metadata } from 'next'
import TutorialContent from './TutorialContent'

export const metadata: Metadata = {
  title: 'How to Make Music with AI - Text to Music Tutorial | Ace-Step 1.5',
  description: 'Learn how to generate AI music from text descriptions. Complete guide to text-to-music AI, prompt engineering tips, and best practices for creating professional tracks.',
  keywords: [
    'text to music AI',
    'how to make music with AI',
    'AI music tutorial',
    'AI music prompts',
    'prompt to music',
    'AI music generation guide',
  ],
  openGraph: {
    title: 'How to Make Music with AI - Text to Music Tutorial',
    description: 'Complete guide to generating AI music from text. Prompt engineering tips and best practices.',
    type: 'article',
    url: 'https://ace-step15.top/tutorial/text-to-music',
  },
}

export default function TextToMusicTutorial() {
  return <TutorialContent />
}
