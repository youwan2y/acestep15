import type { Metadata } from 'next'
import BackgroundMusicContent from './BackgroundMusicContent'

export const metadata: Metadata = {
  title: 'Free YouTube Background Music No Copyright | Ace-Step 1.5',
  description:
    'Download free AI-generated background music for YouTube videos. No copyright claims, royalty-free, monetization-safe. Create custom tracks in seconds.',
  keywords: [
    'youtube background music free no copyright',
    'free music for youtube videos no copyright',
    'free ai music for youtube no claim',
    'royalty-free youtube music',
    'no copyright background music',
    'youtube safe music',
  ],
  openGraph: {
    title: 'Free YouTube Background Music No Copyright | Ace-Step 1.5',
    description:
      'Download free AI-generated background music for YouTube videos. No copyright claims, royalty-free, monetization-safe.',
    type: 'website',
    url: 'https://ace-step15.top/youtube/background-music',
  },
}

export default function BackgroundMusicPage() {
  return <BackgroundMusicContent />
}
