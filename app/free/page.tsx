import type { Metadata } from 'next'
import FreePageContent from './FreePageContent'

export const metadata: Metadata = {
  title: 'Free AI Music Generator - No Watermark | Ace-Step 1.5',
  description: 'Generate professional AI music for free with Ace-Step 1.5. No watermark, royalty-free tracks for YouTube, videos, and content creators. Text to music in seconds.',
  keywords: [
    'free AI music generator',
    'AI music generator no watermark',
    'royalty free music',
    'background music generator',
    'text to music free',
    'AI music for YouTube',
  ],
  openGraph: {
    title: 'Free AI Music Generator - No Watermark | Ace-Step 1.5',
    description: 'Create professional AI music for free. No watermark, royalty-free for videos and content creators.',
    type: 'website',
    url: 'https://ace-step15.top/free',
  },
}

export default function FreePage() {
  return <FreePageContent />
}
