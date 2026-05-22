import SeoHead from "@/components/SeoHead";

export default function ICMSImportacao() {
  return (
    <>
      <SeoHead
        title="ICMS Importação Brasil 2026: Como Calcular"
        description="Entenda como o ICMS de importação entra no cálculo de compras internacionais no Brasil e como estimar o custo final."
        canonical="https://www.taxadeimportacao.com/icms-importacao-brasil"
        faqs={[
          {
            question: "O ICMS é cobrado em todas as importações?",
            answer:
              "Na maioria das compras internacionais para o Brasil, o ICMS faz parte da cobrança tributária e varia conforme o estado.",
          },
          {
            question: "Qual é o ICMS de importação no Brasil?",
            answer:
              "A Receita Federal informa que a alíquota usada pode ficar entre 17% e 20%, conforme o estado e a regra aplicável.",
          },
          {
            question: "Como pagar o ICMS de importação?",
            answer:
              "Em sites certificados no Remessa Conforme, o pagamento costuma ocorrer na compra; fora dele, pode ser cobrado na chegada da encomenda.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-6">
        ICMS na Importação do Brasil (2026)
      </h1>

      <p className="text-lg mb-8">
        O ICMS é um dos principais impostos cobrados em compras internacionais
        no Brasil. Mesmo compras abaixo de US$50 podem pagar ICMS dependendo
        do estado.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        O Que é ICMS?
      </h2>

      <p className="mb-6">
        ICMS significa Imposto sobre Circulação de Mercadorias e Serviços.
        Ele é cobrado pelos estados brasileiros.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Quanto é o ICMS na Importação?
      </h2>

      <p className="mb-6">
        A Receita Federal informa que a cobrança costuma variar entre 17% e
        20%, conforme o estado e a regra aplicada à compra.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Compras Abaixo de US$50 Pagam ICMS?
      </h2>

      <p className="mb-6">
        Sim. Mesmo compras abaixo de US$50 podem pagar ICMS dependendo
        da plataforma e do estado brasileiro.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Como Calcular o ICMS?
      </h2>

      <p className="mb-6">
        O cálculo depende do valor do produto, frete e imposto de importação.
      </p>

      <a
        href="/"
        className="inline-block bg-black text-white px-6 py-3 rounded-xl mb-10"
      >
        Calcular Imposto de Importação
      </a>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        FAQ - Perguntas Frequentes
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        O ICMS é cobrado em todas as importações?
      </h3>

      <p className="mb-4">
        Na maioria dos casos, sim. O ICMS faz parte da tributação de compras
        internacionais no Brasil.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Qual estado cobra mais ICMS?
      </h3>

      <p className="mb-4">
        A alíquota pode variar entre estados, mas geralmente fica em torno
        de 17%.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Como pagar o ICMS?
      </h3>

      <p className="mb-4">
        O pagamento normalmente acontece junto com o imposto de importação
        no momento da liberação da encomenda.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Guias Relacionados
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="/o-que-e-remessa-conforme"
              className="text-blue-600 underline"
            >
              O que é Remessa Conforme?
            </a>
          </li>

          <li>
            <a
              href="/imposto-aliexpress-brasil"
              className="text-blue-600 underline"
            >
              Imposto do AliExpress no Brasil
            </a>
          </li>

          <li>
            <a
              href="/imposto-shein-brasil"
              className="text-blue-600 underline"
            >
              Imposto da Shein no Brasil
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
