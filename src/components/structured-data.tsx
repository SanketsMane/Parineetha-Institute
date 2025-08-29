import Script from 'next/script'

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Parineetha",
    "alternateName": "Parineetha Institute",
    "description": "Best training institute in Bengaluru offering full stack development classes, AI/ML training, and tech courses with 95% placement rate.",
    "url": "https://parineetha.in",
    "logo": "https://parineetha.in/Parineetha-removebg-preview.png",
    "image": "https://parineetha.in/Parineetha-removebg-preview.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 8, 2nd Floor, 27th Cross Rd, Jayanagar 6th Block",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560070",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94802-16957",
      "contactType": "customer service",
      "email": "contact@parineetha.in",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://github.com/SanketsMane/Parineetha-Institute"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Full Stack Development",
          "description": "Master MERN stack with real-world projects and industry best practices",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Parineetha"
          },
          "courseMode": "Blended",
          "timeRequired": "P6M",
          "educationalLevel": "Beginner to Advanced",
          "skillRequired": "Basic computer knowledge",
          "teaches": ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS"]
        },
        {
          "@type": "Course",
          "name": "Data Science & Analytics",
          "description": "Python, machine learning, and advanced data visualization techniques",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Parineetha"
          },
          "courseMode": "Blended",
          "timeRequired": "P5M",
          "educationalLevel": "Intermediate",
          "teaches": ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Machine Learning"]
        },
        {
          "@type": "Course",
          "name": "AI & Machine Learning",
          "description": "Deep learning, neural networks, and artificial intelligence applications",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Parineetha"
          },
          "courseMode": "Blended",
          "timeRequired": "P4M",
          "educationalLevel": "Advanced",
          "teaches": ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Deep Learning"]
        }
      ]
    }
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://parineetha.in/#localbusiness",
    "name": "Parineetha",
    "description": "Best training institute in Bengaluru for full stack development, AI/ML, and tech courses",
    "image": "https://parineetha.in/Parineetha-removebg-preview.png",
    "telephone": "+91-94802-16957",
    "email": "contact@parineetha.in",
    "url": "https://parineetha.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 8, 2nd Floor, 27th Cross Rd, Jayanagar 6th Block",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560070",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9116",
      "longitude": "77.5946"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "hasMap": "https://goo.gl/maps/bengaluru-jayanagar",
    "isAccessibleForFree": false,
    "keywords": "best training institute Bengaluru, full stack development classes, coding bootcamp, programming courses, tech education"
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://parineetha.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://parineetha.in/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://parineetha.in/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://parineetha.in/contact"
      }
    ]
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Parineetha the best training institute in Bengaluru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Parineetha offers 95% placement rate, expert instructors with 10+ years experience, hands-on projects, and comprehensive courses in full stack development, AI/ML. We have trained 500+ successful graduates."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide placement assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 100% placement assistance with 95% success rate. Our career guidance includes resume building, interview preparation, and direct connections with top companies."
        }
      },
      {
        "@type": "Question",
        "name": "What is the duration of full stack development course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our full stack development course is 6 months long, covering MERN stack, real-world projects, and industry best practices."
        }
      },
      {
        "@type": "Question",
        "name": "Are classes available on weekends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer flexible learning options including weekday, weekend, and self-paced learning modules to fit your schedule."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  )
}
