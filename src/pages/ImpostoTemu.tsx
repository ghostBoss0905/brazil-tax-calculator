import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";

export default function ImpostoTemu() {
  return (
    <>
      <SeoHead
        title="Imposto Temu Brasil 2026: Como Calcular Taxas"
        description="Entenda como calcular imposto da Temu no Brasil em 2026, com Remessa Conforme, ICMS, frete, câmbio e comparação antes da compra."
        canonical="https://www.taxadeimportacao.com/imposto-temu-brasil"
        faqs={[
          {
            question: "A Temu participa do Remessa Conforme?",
            answer:
              "A Receita Federal lista empresas e plataformas certificadas no Programa Remessa Conforme. Antes de comprar, confirme no checkout se os tributos aparecem discriminados.",
          },
          {
            question: "Compra da Temu abaixo de US$50 fica sem imposto?",
            answer:
              "Em plataformas certificadas, o Imposto de Importação federal pode ser 0% até US$50, mas o ICMS estadual pode continuar sendo cobrado.",
          },
          {
            question: "Frete da Temu entra no cálculo?",
            answer:
              "Sim. Produto, frete e seguro, quando houver, podem compor o valor usado para estimar a importação.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Imposto da Temu no Brasil: Como Calcular em 2026
        </h1>

        <DirectAnswer>
          <p>
            Para calcular o imposto da Temu, some produto, frete e seguro,
            converta para reais, confirme se os tributos aparecem no checkout
            e estime o ICMS do estado de entrega antes de comparar com uma
            compra nacional.
          </p>
        </DirectAnswer>

        <p className="text-lg mb-8">
          A Temu virou uma das buscas mais comuns para quem compra produtos
          internacionais baratos. O risco é olhar apenas o preço do anúncio e
          esquecer que o custo final no Brasil pode incluir{" "}
          <a href="/icms-importacao-brasil" className="text-blue-600 underline">
            ICMS
          </a>
          , câmbio, frete e regras do{" "}
          <a
            href="/o-que-e-remessa-conforme"
            className="text-blue-600 underline"
          >
            Remessa Conforme
          </a>.
        </p>

        <p className="mb-6">
          Este guia ajuda a estimar a compra antes de pagar. Ele é útil para
          produtos de baixo valor, kits com muitos itens e pedidos em que o
          frete muda a faixa de tributação. Se você já tem preço, frete, câmbio
          e estado de entrega, use a calculadora da página inicial.
        </p>

        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl mb-10"
        >
          Calcular imposto da Temu
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          O que muda quando os tributos aparecem no checkout?
        </h2>

        <p className="mb-6">
          Quando a plataforma mostra os tributos antes do pagamento, o
          comprador consegue ver melhor o custo final. Isso não elimina a
          necessidade de conferir a conta, mas reduz a chance de surpresa na
          chegada da encomenda.
        </p>

        <p className="mb-6">
          Se o checkout não informar tributos com clareza, trate a compra com
          mais cautela. A cobrança pode aparecer depois, no fluxo de entrega ou
          liberação da remessa, dependendo da operação.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Compra da Temu abaixo de US$50
        </h2>

        <p className="mb-6">
          Para compras em plataformas certificadas no Programa Remessa Conforme,
          a Receita Federal informa que o Imposto de Importação federal pode
          ser 0% até US$50. Ainda assim, o ICMS estadual pode continuar sendo
          cobrado, então "abaixo de US$50" não significa necessariamente "sem
          tributos".
        </p>

        <p className="mb-6">
          O detalhe prático é considerar produto e frete juntos. Um carrinho
          aparentemente barato pode mudar de faixa se o frete ou seguro entrar
          na base usada para a importação.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo rápido
        </h2>

        <p className="mb-6">
          Imagine um carrinho de US$42 com frete de US$6. A primeira leitura
          deve ser o total da operação, não apenas o valor de cada item. Depois,
          converta para reais, confira o estado de entrega e veja se a loja
          mostra impostos no checkout.
        </p>

        <p className="mb-6">
          Se o preço final ficar próximo do valor vendido no Brasil, a compra
          nacional pode ser melhor por prazo, garantia e troca. Se a diferença
          continuar grande mesmo depois dos tributos, a importação pode fazer
          sentido.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Checklist antes de comprar na Temu
        </h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Confira se produto, frete e tributos aparecem no checkout.</li>
          <li>Calcule o total em reais usando um câmbio realista.</li>
          <li>Considere o ICMS do estado de entrega.</li>
          <li>Compare com o preço do mesmo produto no Brasil.</li>
          <li>Guarde comprovante de compra e detalhes do pedido.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Perguntas frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          A Temu participa do Remessa Conforme?
        </h3>
        <p className="mb-4">
          A Receita Federal mantém uma lista de empresas certificadas no
          Programa Remessa Conforme. Mesmo assim, o comprador deve confirmar no
          checkout se a operação mostra tributos antes do pagamento.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Compra abaixo de US$50 fica sem imposto?
        </h3>
        <p className="mb-4">
          Pode ficar sem Imposto de Importação federal em plataforma
          certificada, mas o ICMS estadual pode continuar aparecendo na compra.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Vale a pena dividir o pedido?
        </h3>
        <p className="mb-4">
          Dividir pedidos apenas para tentar mudar a tributação pode gerar
          custos extras, fretes diferentes e risco de comparação errada. O
          melhor é simular o custo final de cada carrinho.
        </p>

        <OfficialSources
          sources={[
            {
              label: "Receita Federal - Empresas certificadas no Programa Remessa Conforme",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/empresas-certificadas-no-programa-remessa-conforme-prc",
            },
            {
              label: "Receita Federal - Casos em que não é preciso pagar Imposto de Importação",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/preciso-pagar-impostos-nas-compras-internacionais/saiba-em-quais-casos-nao-e-preciso-pagar-impostos-em-suas-compras-internacionais",
            },
          ]}
        />

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Maio de 2026. Use esta página como estimativa antes da
          compra; o valor oficial depende do checkout e do processo de
          importação.
        </p>

        <RelatedGuides currentPath="/imposto-temu-brasil" />
      </main>
    </>
  );
}
