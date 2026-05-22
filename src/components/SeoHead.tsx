import { Helmet } from "react-helmet";

type FAQ = {
  question: string;
  answer: string;
};

type SeoHeadProps = {
  title: string;
  description: string;
  canonical: string;
  faqs?: FAQ[];
};

export default function SeoHead({
  title,
  description,
  canonical,
  faqs = [],
}: SeoHeadProps) {
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {faqSchema ? (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      ) : null}
    </Helmet>
  );
}
