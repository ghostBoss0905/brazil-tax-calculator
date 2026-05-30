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
  image?: string;
  type?: "website" | "article";
};

export default function SeoHead({
  title,
  description,
  canonical,
  faqs = [],
  image = "https://www.taxadeimportacao.com/opengraph.jpg",
  type = "article",
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

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Taxa de Importação" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {faqSchema ? (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      ) : null}
    </Helmet>
  );
}
