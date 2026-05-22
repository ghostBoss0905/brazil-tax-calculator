import SeoHead from "@/components/SeoHead";

export default function ImpostoShopee() {
  return (
    <>
      <SeoHead
        title="Imposto Shopee Brasil 2026: Como Calcular Taxas"
        description="Entenda como calcular o imposto da Shopee no Brasil em 2026, com Remessa Conforme, ICMS, frete e custo final da compra."
        canonical="https://www.taxadeimportacao.com/imposto-shopee-brasil"
        faqs={[
          {
            question: "Compras da Shopee internacional pagam imposto?",
            answer:
              "Sim. Compras internacionais feitas pela Shopee podem pagar Imposto de Importação e ICMS, conforme o valor e a modalidade da compra.",
          },
          {
            question: "A Shopee participa do Remessa Conforme?",
            answer:
              "A Receita Federal lista empresas certificadas no Programa Remessa Conforme. O comprador deve conferir se a compra internacional mostra os tributos no checkout.",
          },
          {
            question: "Como calcular o imposto da Shopee antes de comprar?",
            answer:
              "Use valor do produto, frete, câmbio, estado de destino e indicação de Remessa Conforme para estimar o custo final.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Como Calcular o Imposto da Shopee no Brasil (2026)
        </h1>

        <p className="text-lg mb-8">
          Comprar produtos internacionais pela Shopee pode parecer barato no
          primeiro momento, mas o custo final depende dos impostos cobrados no
          Brasil. Antes de finalizar a compra, vale estimar o Imposto de
          Importação, o ICMS e o frete para evitar surpresa quando a encomenda
          chegar.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Quanto é o imposto da Shopee internacional?
        </h2>

        <p className="mb-6">
          A tributação depende do valor da compra, do frete, do estado de
          destino e da forma como a plataforma recolhe os tributos. Em compras
          internacionais, a Receita Federal informa que o Imposto de Importação
          pode ter regra reduzida para compras de até US$50 em sites
          certificados no Programa Remessa Conforme. Também pode haver cobrança
          de ICMS estadual.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Shopee, Remessa Conforme e ICMS
        </h2>

        <p className="mb-6">
          O Programa Remessa Conforme foi criado para que plataformas
          certificadas mostrem ao consumidor, ainda no checkout, os valores de
          produto, frete, Imposto de Importação, ICMS e outras despesas. Quando
          esses valores aparecem antes do pagamento, fica mais fácil comparar
          se a compra realmente compensa.
        </p>

        <p className="mb-6">
          Se os impostos não forem cobrados no momento da compra, a encomenda
          pode ser tributada na chegada ao Brasil. Nessa situação, o consumidor
          normalmente precisa pagar os valores indicados pelos Correios ou pela
          transportadora antes da entrega.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo simples de cálculo
        </h2>

        <p className="mb-6">
          Imagine uma compra internacional na Shopee com produto de US$40,
          frete de US$5 e câmbio de R$5,20. O valor base em reais seria a soma
          do produto e do frete convertida para reais. Depois entram o Imposto
          de Importação e o ICMS do estado de destino. Como o ICMS pode variar,
          a melhor forma é simular antes da compra.
        </p>

        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl mb-10"
        >
          Usar Calculadora de Imposto da Shopee
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          FAQ - Perguntas Frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Compras da Shopee abaixo de US$50 pagam imposto?
        </h3>

        <p className="mb-4">
          Sim. Mesmo compras abaixo de US$50 podem pagar Imposto de Importação
          e ICMS, conforme a regra aplicada à compra e ao estado de destino.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Como saber se o imposto já está incluído?
        </h3>

        <p className="mb-4">
          Confira o checkout. Sites certificados devem mostrar os tributos e
          despesas antes do pagamento, separando produto, frete, imposto e ICMS.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Vale a pena comprar produto internacional na Shopee?
        </h3>

        <p className="mb-4">
          Depende do preço final. Se o valor com imposto, ICMS e frete ainda
          ficar abaixo de uma alternativa no Brasil, a compra pode compensar.
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
                href="/icms-importacao-brasil"
                className="text-blue-600 underline"
              >
                ICMS na importação do Brasil
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
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Maio de 2026. Fonte: orientações públicas da Receita
          Federal sobre compras internacionais e Programa Remessa Conforme.
        </p>
      </main>
    </>
  );
}
