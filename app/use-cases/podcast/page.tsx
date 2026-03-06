import type { Metadata } from 'next'
import PodcastMusicContent from './PodcastMusicContent'

export const metadata: Metadata = {
  title: 'AI Music Generator for Podcasts — Free Royalty-Free Intro Music | ACE-Step 1.5',
  description:
    'Create custom podcast intro music, outro tracks, and episode background music with AI in seconds. Royalty-free, unique to your show, no subscription required.',
  keywords: [
    'ai music generator for podcasts',
    'free podcast intro music',
    'podcast background music ai',
    'royalty free podcast music',
    'ai podcast music generator',
    'free music for podcast intro',
    'podcast outro music generator',
    'custom podcast theme music',
  ],
  openGraph: {
    title: 'AI Music Generator for Podcasts | Free Royalty-Free Intro Music',
    description:
      'Generate custom podcast intro music, outro tracks, and episode background music with AI. Royalty-free, unique, no fees.',
    type: 'website',
    url: 'https://ace-step15.top/use-cases/podcast',
  },
}

export default function PodcastMusicPage() {
  return <PodcastMusicContent />
}
