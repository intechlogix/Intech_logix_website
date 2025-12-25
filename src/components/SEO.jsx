import React, { useEffect } from 'react';

const SEO = ({
  title = "Intech Logix - Digital Marketing & Web Development Services",
  description = "Transform your business with Intech Logix's comprehensive digital marketing, SEO, web development, and automation services. Get measurable results and grow your online presence.",
  keywords = "digital marketing, SEO services, web development, app development, HubSpot automation, video editing, WordPress development, lead generation, online marketing",
  canonicalUrl = "",
  ogType = "website",
  ogImage = "/images/about-image.jpg",
  ogImageAlt = "Intech Logix - Digital Marketing & Web Development Services",
  twitterCard = "summary_large_image",
  twitterSite = "@IntechLogix",
  twitterCreator = "@IntechLogix",
  structuredData = null,
  noindex = false,
  nofollow = false,
  author = "Intech Logix Team",
  publisher = "Intech Logix",
  alternateLanguages = [],
  breadcrumbs = null,
  faqData = null,
  videoData = null,
  reviewData = null,
  articleData = null,
  productData = null
}) => {
  // Get current URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;
  const siteUrl = "https://intechlogix.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : currentUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Default structured data for the website
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Intech Logix",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/logo-512x512.png`,
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+447367061286",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": "Worldwide",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        "sameAs": [
          "https://facebook.com/intechlogix",
          "https://www.linkedin.com/in/intech-logix-5128b6219/",
          "https://twitter.com/intechlogix",
          "https://www.instagram.com/intechlogix/"
        ],
        "foundingDate": "2018",
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "UK",
          "addressRegion": "London"
        },
        "email": "info@intechlogix.com",
        "priceRange": "$",
        "serviceArea": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing",
                "description": "Comprehensive digital marketing services including social media marketing, PPC advertising, and content strategy"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Services",
                "description": "Technical SEO, local SEO, content optimization, and link building services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Web Development",
                "description": "Custom web development, e-commerce solutions, and progressive web apps"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "App Development", 
                "description": "iOS, Android, and cross-platform mobile app development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HubSpot CRM Setup",
                "description": "CRM setup, workflow automation, and marketing automation services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Video Editing",
                "description": "Professional video editing, motion graphics, and content creation"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Intech Logix",
        "description": description,
        "publisher": {
          "@id": `${siteUrl}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  // Build robots meta content
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  else robotsContent.push('index');
  if (nofollow) robotsContent.push('nofollow');
  else robotsContent.push('follow');
  robotsContent.push('max-snippet:-1', 'max-image-preview:large', 'max-video-preview:-1');

  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tag
    const setMetaTag = (selector, content, property = null) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to set or update link tag
    const setLinkTag = (rel, href, attributes = {}) => {
      let element = document.querySelector(`link[rel="${rel}"]${href ? `[href="${href}"]` : ''}`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (href) element.setAttribute('href', href);
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    // Helper function to set or update script tag
    const setScriptTag = (type, content, id = null) => {
      const selector = id ? `script#${id}` : `script[type="${type}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('script');
        element.setAttribute('type', type);
        if (id) element.setAttribute('id', id);
        document.head.appendChild(element);
      }
      element.textContent = content;
    };

    // Basic meta tags
    setMetaTag('meta[name="description"]', description);
    setMetaTag('meta[name="keywords"]', keywords);
    setMetaTag('meta[name="author"]', author);
    setMetaTag('meta[name="publisher"]', publisher);

    // Build robots content
    const robotsContent = [];
    if (noindex) robotsContent.push('noindex');
    else robotsContent.push('index');
    if (nofollow) robotsContent.push('nofollow');
    else robotsContent.push('follow');
    robotsContent.push('max-snippet:-1', 'max-image-preview:large', 'max-video-preview:-1');
    setMetaTag('meta[name="robots"]', robotsContent.join(', '));

    // Canonical URL
    setLinkTag('canonical', fullCanonicalUrl);

    // Viewport and mobile optimization
    setMetaTag('meta[name="viewport"]', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    setMetaTag('meta[name="theme-color"]', '#3b82f6');
    setMetaTag('meta[name="mobile-web-app-capable"]', 'yes');
    setMetaTag('meta[name="apple-mobile-web-app-capable"]', 'yes');
    setMetaTag('meta[name="apple-mobile-web-app-status-bar-style"]', 'default');

    // Open Graph meta tags
    setMetaTag('meta[property="og:type"]', ogType, 'og:type');
    setMetaTag('meta[property="og:title"]', title, 'og:title');
    setMetaTag('meta[property="og:description"]', description, 'og:description');
    setMetaTag('meta[property="og:image"]', fullOgImage, 'og:image');
    setMetaTag('meta[property="og:image:alt"]', ogImageAlt, 'og:image:alt');
    setMetaTag('meta[property="og:url"]', fullCanonicalUrl, 'og:url');
    setMetaTag('meta[property="og:site_name"]', 'Intech Logix', 'og:site_name');
    setMetaTag('meta[property="og:locale"]', 'en_US', 'og:locale');

    // Twitter Card meta tags
    setMetaTag('meta[name="twitter:card"]', twitterCard);
    setMetaTag('meta[name="twitter:site"]', twitterSite);
    setMetaTag('meta[name="twitter:creator"]', twitterCreator);
    setMetaTag('meta[name="twitter:title"]', title);
    setMetaTag('meta[name="twitter:description"]', description);
    setMetaTag('meta[name="twitter:image"]', fullOgImage);
    setMetaTag('meta[name="twitter:image:alt"]', ogImageAlt);

    // Additional SEO meta tags
    setMetaTag('meta[name="language"]', 'English');
    setMetaTag('meta[name="revisit-after"]', '7 days');
    setMetaTag('meta[name="distribution"]', 'global');
    setMetaTag('meta[name="rating"]', 'general');

    // Structured data
    setScriptTag('application/ld+json', JSON.stringify(finalStructuredData), 'structured-data-main');

    // Breadcrumb structured data
    if (breadcrumbs) {
      setScriptTag('application/ld+json', JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": `${siteUrl}${crumb.href}`
        }))
      }), 'structured-data-breadcrumbs');
    }

    // FAQ structured data
    if (faqData) {
      setScriptTag('application/ld+json', JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }), 'structured-data-faq');
    }

    // Video structured data
    if (videoData) {
      setScriptTag('application/ld+json', JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": videoData.name,
        "description": videoData.description,
        "thumbnailUrl": videoData.thumbnailUrl,
        "uploadDate": videoData.uploadDate,
        "duration": videoData.duration,
        "contentUrl": videoData.contentUrl,
        "embedUrl": videoData.embedUrl,
        "publisher": {
          "@type": "Organization",
          "name": "Intech Logix",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo-512x512.png`,
            "width": 512,
            "height": 512
          }
        }
      }), 'structured-data-video');
    }

    // Review structured data
    if (reviewData) {
      setScriptTag('application/ld+json', JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Intech Logix"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": reviewData.rating,
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": reviewData.authorName
        },
        "reviewBody": reviewData.reviewText,
        "datePublished": reviewData.datePublished
      }), 'structured-data-review');
    }

    // Article structured data
    if (articleData) {
      setScriptTag('application/ld+json', JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": articleData.headline,
        "description": articleData.description,
        "image": articleData.image ? `${siteUrl}${articleData.image}` : fullOgImage,
        "datePublished": articleData.datePublished,
        "dateModified": articleData.dateModified || articleData.datePublished,
        "author": {
          "@type": "Person",
          "name": articleData.author || author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Intech Logix",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo-512x512.png`,
            "width": 512,
            "height": 512
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": fullCanonicalUrl
        }
      }), 'structured-data-article');
    }

    // Product structured data
    if (productData) {
      setScriptTag('application/ld+json', JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productData.name,
        "description": productData.description,
        "image": productData.image ? `${siteUrl}${productData.image}` : fullOgImage,
        "brand": {
          "@type": "Brand",
          "name": "Intech Logix"
        },
        "offers": {
          "@type": "Offer",
          "price": productData.price || "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Intech Logix"
          }
        },
        "aggregateRating": productData.rating ? {
          "@type": "AggregateRating",
          "ratingValue": productData.rating.value,
          "reviewCount": productData.rating.count
        } : undefined
      }), 'structured-data-product');
    }

    // Performance and security hints
    setLinkTag('preconnect', 'https://fonts.googleapis.com');
    setLinkTag('preconnect', 'https://fonts.gstatic.com', { crossOrigin: 'true' });
    setLinkTag('dns-prefetch', 'https://www.google-analytics.com');
    setLinkTag('dns-prefetch', 'https://us.i.posthog.com');

  }, [title, description, keywords, canonicalUrl, ogType, ogImage, ogImageAlt, twitterCard, 
      twitterSite, twitterCreator, noindex, nofollow, author, publisher, alternateLanguages, 
      breadcrumbs, faqData, videoData, reviewData, articleData, productData, structuredData,
      finalStructuredData, fullCanonicalUrl, fullOgImage, siteUrl]);

  return null;
};

// HOC to wrap components with SEO (no provider needed anymore)
export const withSEO = (Component) => {
  return function WrappedComponent(props) {
    return <Component {...props} />;
  };
};

export default SEO;
