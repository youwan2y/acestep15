import type { Metadata } from 'next'
import GuideContent from './GuideContent'

export const metadata: Metadata = {
  title: 'AI Music Generator for Complete Beginners | Ace-Step 1.5',
  description:
    'Start creating music with AI - no experience needed. Complete beginner\'s guide to AI music generation. Make your first track in 5 minutes.',
  keywords: [
    'ai music generator for complete beginners',
    'make music without knowing theory',
    'beginner music maker',
    'ai music tutorial',
    'how to use ai music generator',
    'music creation for beginners',
  ],
  openGraph: {
    title: 'AI Music Generator for Complete Beginners | Ace-Step 1.5',
    description:
      'Start creating music with AI - no experience needed. Complete beginner\'s guide to AI music generation.',
    type: 'website',
    url: 'https://ace-step15.top/beginners/guide',
  },
}

export default function GuidePage() {
  return <GuideContent />
}
