import SeoHead from "@/components/SeoHead";

export default function ComoCalcularImposto() {
  return (
    <>
      <SeoHead
        title="Como Calcular Imposto de Importação no Brasil 2026"
        description="Aprenda como calcular imposto de importação no Brasil em 2026. Veja ICMS, Remessa Conforme e custo final atualizado."
        canonical="https://www.taxadeimportacao.com/como-calcular-imposto-importacao-brasil"
        faqs={[
          {
            question: "Quais impostos são cobrados em compras internacionais?",
            answer:
              "As compras internacionais podem ter Imposto de Importação, ICMS estadual e custos de frete ou seguro incluídos na base de cálculo.",
          },
          {
            question: "Como funciona o Remessa Conforme?",
            answer:
              "O Remessa Conforme permite que plataformas certificadas informem e cobrem os tributos no momento da compra.",
          },
          {
            question: "Como calcular o imposto antes de comprar?",
            answer:
              "Informe valor do produto, frete, câmbio, estado de destino e se a loja participa do Remessa Conforme.",
          },
        ]}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px",
          lineHeight: "1.8",
        }}
      >
        <h1>Como Calcular Imposto de Importação no Brasil em 2026</h1>

        <p>
          Comprar produtos internacionais na Shopee, AliExpress, Amazon ou
          Shein ficou mais caro após as novas regras de importação no Brasil.
        </p>

        <p>
          Neste guia atualizado de 2026, você aprenderá como calcular imposto
          de importação no Brasil passo a passo.
        </p>

        <h2>Quais impostos são cobrados?</h2>

        <ul>
          <li>Imposto de Importação</li>
          <li>ICMS estadual</li>
          <li>Taxas de frete</li>
        </ul>

        <h2>Como funciona o Remessa Conforme?</h2>

        <p>
          O programa Remessa Conforme altera a forma de cobrança dos impostos em
          compras internacionais abaixo de US$50.
        </p>

        <h2>Exemplo de cálculo</h2>

        <p>
          Produto: US$100 <br />
          Frete: US$20 <br />
          Câmbio: R$5,20
        </p>

        <p>
          Dependendo do estado, o valor final pode ultrapassar R$900 após ICMS
          e imposto de importação.
        </p>

        <h2>Use nossa calculadora</h2>

        <p>
          Para calcular automaticamente todos os impostos de importação no
          Brasil, utilize nossa ferramenta gratuita:
        </p>

        <p>
          <a href="https://www.taxadeimportacao.com/">
            Calculadora de Imposto de Importação
          </a>
        </p>
      </div>
    </>
  );
}
