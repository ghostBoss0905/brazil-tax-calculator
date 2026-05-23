import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";

export default function CalcularTaxasImportacao() {
  return (
    <>
      <SeoHead
        title="Calcular Taxas de Importação 2026: Guia e Simulador"
        description="Aprenda como calcular taxas de importação no Brasil em 2026, incluindo Imposto de Importação, ICMS, frete, câmbio e Remessa Conforme."
        canonical="https://www.taxadeimportacao.com/calcular-taxas-importacao"
        faqs={[
          {
            question: "Como calcular taxas de importação?",
            answer:
              "Some produto, frete e seguro, converta para reais, aplique o Imposto de Importação conforme a regra da compra e depois estime o ICMS do estado de destino.",
          },
          {
            question: "Qual taxa entra no cálculo de importação?",
            answer:
              "Normalmente entram Imposto de Importação, ICMS estadual, frete, seguro quando houver e possíveis cobranças postais ou logísticas.",
          },
          {
            question: "Compras no Remessa Conforme pagam taxa?",
            answer:
              "Podem pagar ICMS e, dependendo do valor, Imposto de Importação. Sites certificados devem mostrar os tributos no checkout.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Como Calcular Taxas de Importação no Brasil (2026)
        </h1>

        <DirectAnswer>
          <p>
            Para calcular taxas de importação, some produto, frete e seguro,
            converta o total para reais, aplique o Imposto de Importação,
            estime o ICMS do estado de destino e adicione possíveis cobranças
            postais ou logísticas.
          </p>
        </DirectAnswer>

        <p className="text-lg mb-8">
          Para calcular taxas de importação no Brasil, você precisa olhar além
          do preço do produto. O custo final pode incluir frete internacional,
          câmbio, Imposto de Importação, ICMS estadual e, em alguns casos,
          cobranças dos{" "}
          <a
            href="/taxa-correios-importacao"
            className="text-blue-600 underline"
          >
            Correios
          </a>{" "}
          ou da transportadora.
        </p>

        <p className="mb-6">
          Esta página foi criada para quem quer estimar rapidamente quanto vai
          pagar antes de comprar em sites como AliExpress, Shein, Shopee, Amazon
          ou Temu. Se você já tem os valores da compra, use a calculadora. Se
          ainda está comparando produtos, siga o passo a passo abaixo.
          Para uma visão rápida das faixas, veja a{" "}
          <a
            href="/tabela-imposto-importacao-brasil"
            className="text-blue-600 underline"
          >
            tabela de imposto de importação
          </a>.
        </p>

        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl mb-10"
        >
          Usar simulador de taxas de importação
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Quais valores entram no cálculo?
        </h2>

        <p className="mb-6">
          O primeiro erro de muitos compradores é calcular apenas o preço do
          produto. Em compras internacionais, o valor relevante costuma ser o
          valor aduaneiro: produto, frete e seguro quando houver. Esse total é
          convertido para reais e serve de base para a cobrança dos tributos.
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Valor dos produtos comprados.</li>
          <li>Frete internacional.</li>
          <li>Seguro, se houver.</li>
          <li>Câmbio usado na compra.</li>
          <li>Imposto de Importação.</li>
          <li>ICMS do estado de destino.</li>
          <li>Possível cobrança postal ou logística.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Passo a passo para calcular taxas de importação
        </h2>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Some produto, frete e seguro.</li>
          <li>Converta o total para reais usando o câmbio da compra.</li>
          <li>Confira se a loja está no Programa Remessa Conforme.</li>
          <li>Aplique a regra de Imposto de Importação.</li>
          <li>Calcule o ICMS conforme o estado de entrega.</li>
          <li>Some cobranças postais, se existirem.</li>
          <li>Compare o custo final com uma compra nacional.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Fórmula simples para estimar o custo final
        </h2>

        <p className="mb-6">
          Uma forma simples de pensar no cálculo é:
        </p>

        <div className="bg-gray-100 rounded-lg p-5 mb-6">
          <p className="font-semibold">
            Custo final = produto + frete + seguro + Imposto de Importação +
            ICMS + possíveis cobranças postais
          </p>
        </div>

        <p className="mb-6">
          Essa fórmula é uma simplificação para ajudar na decisão de compra. Na
          prática, o ICMS pode ser calculado sobre uma base que já inclui outros
          valores. Por isso, usar uma calculadora reduz bastante o risco de
          estimar errado.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo prático
        </h2>

        <p className="mb-6">
          Imagine um produto de US$70, com frete de US$10. O valor inicial da
          importação é US$80. Se o câmbio usado for R$5,20, a base em reais
          será R$416 antes dos tributos. Depois entram a regra de Imposto de
          Importação e o ICMS do estado.
        </p>

        <p className="mb-6">
          Se a compra estiver em uma plataforma certificada no Remessa Conforme
          e passar de US$50, a Receita Federal informa a regra de 60% com
          desconto equivalente a US$30 sobre o imposto federal. Ainda assim, o
          ICMS pode fazer o custo final subir. Esse é exatamente o tipo de
          cenário em que a simulação vale a pena.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Como o Remessa Conforme muda o cálculo?
        </h2>

        <p className="mb-6">
          O Programa Remessa Conforme torna a cobrança mais previsível em sites
          certificados. Para compras de até US$50, a regra federal pode ser 0%
          de Imposto de Importação, mas o ICMS continua relevante. Acima de
          US$50, há regra federal própria e o ICMS também entra na conta. Veja
          o guia completo sobre{" "}
          <a
            href="/o-que-e-remessa-conforme"
            className="text-blue-600 underline"
          >
            Remessa Conforme
          </a>.
        </p>

        <p className="mb-6">
          O ponto mais importante é verificar o checkout. Se os tributos aparecem
          antes do pagamento, você tem mais clareza. Se não aparecem, pode haver
          cobrança quando a encomenda chegar ao Brasil.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Quando a compra internacional vale a pena?
        </h2>

        <p className="mb-6">
          A compra tende a valer a pena quando o custo final importado continua
          menor que o preço de uma alternativa no Brasil. Mas o cálculo não deve
          ser apenas financeiro. Prazo de entrega, garantia, troca, risco de
          tributação e confiabilidade do vendedor também importam.
        </p>

        <p className="mb-6">
          Para produtos baratos, o imposto pode eliminar a vantagem. Para itens
          caros ou difíceis de encontrar no Brasil, a importação pode continuar
          interessante mesmo depois das taxas.
        </p>

        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl mb-10"
        >
          Calcular minhas taxas agora
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          FAQ - Perguntas Frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Preciso calcular ICMS separadamente?
        </h3>

        <p className="mb-4">
          Sim. O ICMS é estadual e pode mudar o valor final. Por isso, a
          calculadora pede o estado de destino.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Frete entra no cálculo?
        </h3>

        <p className="mb-4">
          Sim. Frete e seguro, quando houver, podem entrar no valor aduaneiro
          usado como base da importação.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Posso usar a mesma conta para AliExpress, Shein e Shopee?
        </h3>

        <p className="mb-4">
          A lógica geral é parecida, mas você deve conferir se a compra aparece
          no checkout com tributos e se a plataforma está operando no Remessa
          Conforme.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Guias Relacionados
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="/tabela-imposto-importacao-brasil"
                className="text-blue-600 underline"
              >
                Tabela de imposto de importação
              </a>
            </li>
            <li>
              <a
                href="/taxa-correios-importacao"
                className="text-blue-600 underline"
              >
                Taxa dos Correios na importação
              </a>
            </li>
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
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Maio de 2026. Fonte: Receita Federal, Portal Compras
          Internacionais e orientações públicas sobre remessas internacionais.
        </p>
        <RelatedGuides currentPath="/calcular-taxas-importacao" />
      </main>
    </>
  );
}
