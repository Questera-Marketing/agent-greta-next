'use client';

import React from 'react';

const BreadcrumbSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.greta.sh"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Protocol",
        "item": "https://www.greta.sh/learninghub"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default BreadcrumbSchema;
