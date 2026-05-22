import SeoHead from "@/components/SeoHead";

export default function RemessaConforme() {
  return (
    <>
      <SeoHead
        title="O Que é Remessa Conforme? Regras e Impostos 2026"
        description="Entenda o Programa Remessa Conforme, como funciona a cobrança de impostos em compras internacionais e quando usar a calculadora."
        canonical="https://www.taxadeimportacao.com/o-que-e-remessa-conforme"
        faqs={[
          {
            question: "O que é Remessa Conforme?",
            answer:
              "É um programa da Receita Federal para plataformas certificadas informarem e cobrarem os tributos de compras internacionais de forma antecipada.",
          },
          {
            question: "Compras abaixo de US$50 pagam imposto?",
            answer:
              "Sim. Mesmo compras abaixo de US$50 podem pagar Imposto de Importação e ICMS, de acordo com as regras vigentes.",
          },
          {
            question: "Como calcular o imposto antes de comprar?",
            answer:
              "Use uma calculadora de imposto de importação com valor do produto, frete, câmbio, estado e situação do Remessa Conforme.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-6">
        O Que é Remessa Conforme? (2026)
      </h1>

      <p className="text-lg mb-8">
        O Remessa Conforme é um programa da Receita Federal criado para
        simplificar a tributação de compras internacionais no Brasil.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Como Funciona o Remessa Conforme?
      </h2>

      <p className="mb-6">
        O programa permite que plataformas participantes reduzam o imposto
        de importação para compras internacionais.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Quais Plataformas Participam?
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>AliExpress</li>
        <li>Shein</li>
        <li>Shopee</li>
        <li>Amazon</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Qual é o Imposto?
      </h2>

      <p className="mb-6">
        Compras internacionais podem pagar:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>20% com Remessa Conforme</li>
        <li>60% sem Remessa Conforme</li>
        <li>ICMS estadual</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Vale a Pena?
      </h2>

      <p className="mb-6">
        Sim. O programa pode reduzir significativamente os custos de
        importação em plataformas participantes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        FAQ - Perguntas Frequentes
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        O AliExpress participa do Remessa Conforme?
      </h3>

      <p className="mb-4">
        Sim. O AliExpress participa oficialmente do programa.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Compras abaixo de US$50 pagam imposto?
      </h3>

      <p className="mb-4">
        Compras abaixo de US$50 podem pagar ICMS dependendo do estado.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Como calcular o imposto?
      </h3>

      <p className="mb-4">
        Use nossa calculadora gratuita para estimar os impostos antes
        de comprar.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Guias Relacionados
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="/imposto-aliexpress-brasil"
              className="text-blue-600 underline"
            >
              Como funciona o imposto do AliExpress
            </a>
          </li>

          <li>
            <a
              href="/imposto-shein-brasil"
              className="text-blue-600 underline"
            >
              Como funciona o imposto da Shein
            </a>
          </li>
        </ul>
      </div>

      <p className="text-sm text-gray-500 mt-12">
        Atualizado em Maio de 2026.
      </p>

      </main>
    </>
  );
}
