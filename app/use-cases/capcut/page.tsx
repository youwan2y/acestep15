import type { Metadata } from 'next'
import CapcutMusicContent from './CapcutMusicContent'

export const metadata: Metadata = {
  title: 'AI Music Generator for CapCut Videos — Free & Royalty-Free | ACE-Step 1.5',
  description:
    'CapCut\'s built-in music is used by millions. Generate unique AI music for your CapCut videos in seconds — no copyright claims on TikTok, YouTube, or Instagram.',
  keywords: [
    'ai music generator for capcut',
    'capcut background music free',
    'music for capcut videos no copyright',
    'capcut ai music',
    'free music for capcut tiktok',
    'royalty free music capcut',
    'capcut video music generator',
    'no copyright music capcut',
  ],
  openGraph: {
    title: 'AI Music Generator for CapCut Videos — Royalty-Free',
    description:
      'Beat CapCut\'s library with unique AI-generated music. No copyright claims on TikTok, YouTube, or Instagram. Free forever.',
    type: 'website',
    url: 'https://ace-step15.top/use-cases/capcut',
  },
}

export default function CapcutMusicPage() {
  return <CapcutMusicContent />
}
