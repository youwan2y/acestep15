import type { Metadata } from 'next'
import StudyFocusContent from './StudyFocusContent'

export const metadata: Metadata = {
  title: 'Study Music Generator No Vocals | Ace-Step 1.5',
  description:
    'Create focus-enhancing study music with AI. Instrumental lo-fi, Perfect for students.',
  keywords: [
    'study music generator no vocals',
    'free music for podcast intro',
    'focus music ai',
    'concentration music',
    'lo-fi study beats',
    'instrumental study music',
  ],
  openGraph: {
    title: 'Study Music Generator No Vocals | Ace-Step 1.5',
    description:
      'Create focus-enhancing study music with AI. Instrumental lo-fi. Perfect for students.',
    type: 'website',
    url: 'https://ace-step15.top/use-cases/study-focus',
  },
}

export default function StudyFocusPage() {
  return <StudyFocusContent />
}
