import type { Metadata } from 'next'
import NoExperienceContent from './NoExperienceContent'

export const metadata: Metadata = {
  title: 'How to Create Music with No Experience | Ace-Step 1.5',
  description:
    'Create professional music without any experience. AI-powered music generation for absolute beginners. From idea to track in 30 seconds.',
  keywords: [
    'how to create music with no experience',
    'music creation for beginners',
    'no experience music maker',
    'easy music creation',
    'make music without skills',
    'music generator no experience',
  ],
  openGraph: {
    title: 'How to Create Music with No Experience | Ace-Step 1.5',
    description:
      'Create professional music without any experience. AI-powered music generation for absolute beginners.',
    type: 'website',
    url: 'https://ace-step15.top/beginners/no-experience',
  },
}

export default function NoExperiencePage() {
  return <NoExperienceContent />
}
