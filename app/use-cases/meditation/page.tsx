import type { Metadata } from 'next'
import MeditationContent from './MeditationContent'

export const metadata: Metadata = {
  title: 'Free Background Music for Meditation | Ace-Step 1.5',
  description:
    'Generate custom meditation music with AI. Relaxing ambient sounds, binaural beats, Perfect for meditation apps, yoga, wellness videos.',
  keywords: [
    'free background music for meditation',
    'meditation music generator',
    'relaxation music ai',
    'yoga background music',
    'mindfulness music',
    'ambient meditation music',
  ],
  openGraph: {
    title: 'Free Background Music for Meditation | Ace-Step 1.5',
    description:
      'Generate custom meditation music with AI. Relaxing ambient sounds, binaural beats, Perfect for meditation apps.',
    type: 'website',
    url: 'https://ace-step15.top/use-cases/meditation',
  },
}

export default function MeditationPage() {
  return <MeditationContent />
}
