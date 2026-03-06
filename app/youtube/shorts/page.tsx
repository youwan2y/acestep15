import type { Metadata } from 'next'
import ShortsContent from './ShortsContent'

export const metadata: Metadata = {
  title: 'Free Background Music for YouTube Shorts | Ace-Step 1.5',
  description:
    'Create viral YouTube Shorts with free AI background music. Trending sounds, no copyright issues. Perfect for 15-60 second videos.',
  keywords: [
    'youtube shorts background music free',
    'shorts music generator',
    'free music for youtube shorts',
    'trending shorts background music',
    'shorts sound effects',
    'youtube shorts music no copyright',
  ],
  openGraph: {
    title: 'Free Background Music for YouTube Shorts | Ace-Step 1.5',
    description:
      'Create viral YouTube Shorts with free AI background music. Trending sounds, no copyright issues.',
    type: 'website',
    url: 'https://ace-step15.top/youtube/shorts',
  },
}

export default function ShortsPage() {
  return <ShortsContent />
}
