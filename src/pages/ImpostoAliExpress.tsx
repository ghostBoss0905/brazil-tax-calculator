import { Helmet } from "react-helmet";

export default function ImpostoAliExpress() {
  return (
    <>
      <Helmet>
        <title>
          Como Calcular o Imposto do AliExpress no Brasil (2026)
        </title>

        <meta
          name="description"
          content="Descubra como calcular o imposto do AliExpress no Brasil em 2026. Veja exemplos práticos, ICMS, Remessa Conforme e use a calculadora grátis."
        />

        <link
          rel="canonical"
          href="https://www.taxadeimportacao.com/imposto-aliexpress-brasil"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Compras do AliExpress abaixo de US$50 pagam imposto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. Compras abaixo de US$50 podem pagar ICMS dependendo do estado.",
                },
              },
              {
                "@type": "Question",
                name: "O AliExpress participa do Remessa Conforme?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. O AliExpress participa oficialmente do programa Remessa Conforme.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">
          Como Calcular o Imposto do AliExpress no Brasil (2026)
        </h1>

        <p className="mb-6 text-lg">
          Comprar no AliExpress ficou mais caro desde 2024. Mas com a informação
          certa, você ainda pode economizar bastante.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Quanto é o Imposto do AliExpress no Brasil?
        </h2>

        <p className="mb-4">
          Compras internacionais acima de US$50 podem pagar até 60% de imposto
          de importação + ICMS.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Como Funciona o Remessa Conforme?
        </h2>

        <p className="mb-4">
          O Remessa Conforme reduz o imposto para 20% em lojas participantes
          como o AliExpress.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Calculadora de Imposto do AliExpress
        </h2>

        <p className="mb-4">
          Use nossa calculadora gratuita para descobrir exatamente quanto você
          vai pagar.
        </p>

        <a
          href="/"
          className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-xl"
        >
          Usar Calculadora de Imposto de Importação
        </a>

        <h2 className="text-2xl font-bold mt-12 mb-4">
          FAQ - Perguntas Frequentes
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">
              Compras do AliExpress abaixo de US$50 pagam imposto?
            </h3>

            <p>
              Sim. Compras abaixo de US$50 podem pagar ICMS dependendo do
              estado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              O AliExpress participa do Remessa Conforme?
            </h3>

            <p>
              Sim. O AliExpress participa oficialmente do programa.
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Atualizado em Maio de 2026.
        </p>
      </main>
    </>
  );
}
