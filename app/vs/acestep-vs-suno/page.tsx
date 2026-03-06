import type { Metadata } from 'next'
import VsAcestepVsSunoContent from './VsAcestepVsSunoContent'

export const metadata: Metadata = {
  title: 'ACE-Step 1.5 vs Suno AI (2026): Full Comparison | Which Wins?',
  description:
    'ACE-Step 1.5 vs Suno AI: Detailed comparison of price, speed, quality, and features. The free open-source challenger takes on the #1 AI music tool.',
  keywords: [
    'ace-step vs suno',
    'ace-step vs suno ai',
    'suno vs ace-step',
    'ace-step 1.5 vs suno comparison',
    'suno ai alternative ace-step',
    'which is better suno or ace-step',
    'free suno alternative',
  ],
  openGraph: {
    title: 'ACE-Step 1.5 vs Suno AI (2026): Full Comparison',
    description:
      'The free open-source challenger vs. the #1 AI music tool. Full comparison: price, speed, quality, features.',
    type: 'website',
    url: 'https://ace-step15.top/vs/acestep-vs-suno',
  },
}

export default function VsAcestepVsSunoPage() {
  return <VsAcestepVsSunoContent />
}
