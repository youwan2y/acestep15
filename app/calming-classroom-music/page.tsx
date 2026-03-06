import type { Metadata } from 'next'
import CalmingClassroomMusicContent from './CalmingClassroomMusicContent'

export const metadata: Metadata = {
  title: 'Calming Classroom Music Generator for Teachers | Ace-Step 1.5',
  description:
    'Generate free calming classroom music with AI. Calm music for classroom independent work, transitions, tests, and brain breaks. Royalty-free, no copyright.',
  keywords: [
    'calming classroom music',
    'calming music for classroom',
    'calm classroom music',
    'calm music for classroom',
    'classroom music generator',
    'background music for teachers',
    'calming classroom music generator',
  ],
  openGraph: {
    title: 'Calming Classroom Music Generator for Teachers | Ace-Step 1.5',
    description:
      'Generate free calming classroom music with AI. Perfect for independent work, transitions, tests, and brain breaks. Royalty-free.',
    type: 'website',
    url: 'https://ace-step15.top/calming-classroom-music',
  },
  alternates: {
    canonical: 'https://ace-step15.top/calming-classroom-music',
  },
}

export default function CalmingClassroomMusicPage() {
  return <CalmingClassroomMusicContent />
}
