export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Ace-Step 1.5',
    applicationCategory: 'MusicApplication',
    operatingSystem: 'Web',
    description:
      'Advanced AI-powered music generation model for creating professional-quality tracks in seconds.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier available',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    author: {
      '@type': 'Organization',
      name: 'Ace-Step Team',
    },
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ace-Step 1.5',
    url: 'https://ace-step15.top',
    logo: 'https://ace-step15.top/icon.svg',
    sameAs: [
      'https://twitter.com/acestep15',
      'https://github.com/acestep15',
    ],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ace-Step 1.5',
    url: 'https://ace-step15.top',
    description:
      'Next-generation AI music generation model for creating professional-quality music in seconds.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ace-step15.top/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}
