interface ArticleStructuredDataProps {
  headline: string
  description: string
  author?: string
  datePublished?: string
  dateModified?: string
  image?: string
}

export default function ArticleStructuredData({
  headline,
  description,
  author = 'Ace-Step Team',
  datePublished,
  dateModified,
  image,
}: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ace-Step 1.5',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ace-step15.top/icon.svg',
      },
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
