import React from 'react';

const SoftwareSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Greta",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication, DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "120"
    },
    "description": "Greta is the next-gen vibe coding tool for autonomous growth engineering, marketing, and sales operations.",
    "url": "https://www.greta.sh"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SoftwareSchema;
