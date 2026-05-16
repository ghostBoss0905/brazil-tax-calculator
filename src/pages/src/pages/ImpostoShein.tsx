import { Helmet } from "react-helmet";

export default function ImpostoShein() {
  return (
    <>
      <Helmet>
        <title>
          Imposto Shein Brasil: Como Funciona em 2026
        </title>

        <meta
          name="description"
          content="Veja como funciona o imposto da Shein no Brasil em 2026. Descubra taxas, ICMS, Remessa Conforme e como calcular antes de comprar."
        />

        <link
          rel="canonical"
          href="https://www.taxadeimportacao.com/imposto-shein-brasil"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "A Shein cobra imposto no Brasil?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. Compras internacionais podem pagar imposto de importação e ICMS dependendo do valor.",
                },
              },
              {
                "@type": "Question",
                name: "A Shein participa do Remessa Conforme?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. A Shein participa oficialmente do programa Remessa Conforme.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">
          Imposto Shein Brasil: Como Funciona em 2026
        </h1>

        <p className="mb-6 text-lg">
          A Shein continua sendo uma das lojas internacionais mais populares no
          Brasil.
        </p>

        <p className="mb-6">
          Neste guia atualizado de 2026, você vai entender como funciona o
          imposto da Shein no Brasil e como calcular antes de comprar.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          A Shein Cobra Imposto no Brasil?
        </h2>

        <p className="mb-4">
          Sim. Compras internacionais na Shein podem pagar imposto de
          importação e ICMS.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Como Funciona o Remessa Conforme na Shein?
        </h2>

        <p className="mb-4">
          A Shein participa oficialmente do programa Remessa Conforme da Receita
          Federal.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Cenário</th>
                <th className="border p-3 text-left">Imposto</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Com Remessa Conforme</td>
                <td className="border p-3">20% + ICMS</td>
              </tr>

              <tr>
                <td className="border p-3">Sem Remessa Conforme</td>
                <td className="border p-3">60% + ICMS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Calculadora de Imposto Shein
        </h2>

        <p className="mb-4">
          Use nossa calculadora gratuita para estimar o valor final da sua
          compra.
        </p>

        <a
          href="/"
          className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-xl"
        >
          Usar Calculadora de Imposto
        </a>

        <h2 className="text-2xl font-bold mt-12 mb-4">
          FAQ - Perguntas Frequentes
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">
              A Shein cobra imposto automaticamente?
            </h3>

            <p>
              Em alguns casos, parte dos impostos pode aparecer diretamente no
              checkout.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Compras abaixo de US$50 pagam imposto?
            </h3>

            <p>
              Dependendo do estado, compras abaixo de US$50 ainda podem pagar
              ICMS.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <p className="text-sm text-gray-500">
            Publicado em Maio de 2026.
          </p>
        </div>
      </main>
    </>
  );
}
