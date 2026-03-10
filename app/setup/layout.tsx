import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Database Setup | Ace-Step 1.5',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
