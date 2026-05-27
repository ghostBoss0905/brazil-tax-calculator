import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";
import Breadcrumb from "@/components/Breadcrumb";

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
              "A Receita Federal mantém uma lista pública de empresas e plataformas certificadas no Programa Remessa Conforme, e a Temu pode estar entre elas. Em compras dentro do programa, o Imposto de Importação federal pode ser 0% para valores até US$50, com ICMS estadual de 17% a 20% dependendo do estado; acima de US$50, a alíquota federal é reduzida dentro do RC. Fora do Remessa Conforme, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, além do ICMS. Antes de comprar, confirme no checkout se os tributos aparecem discriminados e use a calculadora de importação para estimar o custo total. Compare o valor final com alternativas vendidas no Brasil antes de decidir.",
          },
          {
            question: "Compra da Temu abaixo de US$50 fica sem imposto?",
            answer:
              "Em compras da Temu dentro do Programa Remessa Conforme, o Imposto de Importação federal pode ser 0% para valores até US$50 (produto + frete), mas o ICMS estadual continua sendo cobrado com alíquotas de 17% a 20% dependendo do estado de destino. Fora do Remessa Conforme, compras abaixo de US$50 podem estar sujeitas ao Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Portanto, 'abaixo de US$50' não significa necessariamente 'sem tributos' — o ICMS sempre pode incidir. Verifique no checkout se os tributos estão discriminados e use a calculadora para estimar o custo final antes de pagar. Compare o valor total com produtos vendidos no Brasil para avaliar se a importação realmente vale a pena.",
          },
          {
            question: "Frete da Temu entra no cálculo?",
            answer:
              "Sim, o frete internacional entra no valor aduaneiro usado como base para calcular o Imposto de Importação e o ICMS. Produto, frete e seguro, quando houver, compõem o total da operação que define a faixa de tributação — dentro ou acima de US$50 no Remessa Conforme. Um carrinho com produto de US$42 e frete de US$8, por exemplo, ultrapassa o limite de US$50 e muda a regra de Imposto de Importação de 0% para a alíquota reduzida dentro do RC, ou 60% fora dele. Por isso, sempre some produto e frete antes de avaliar se a compra fica em faixa de tributação mais favorável. Use a calculadora de importação para simular o custo total e compare com alternativas no Brasil.",
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

        <Breadcrumb items={[
          { label: "Início", href: "/" },
          { label: "Imposto Temu Brasil" }
        ]} />

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
          className="inline-block bg-[#008272] hover:bg-[#06264b] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors mb-10"
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
          Exemplo de cálculo na Temu
        </h2>

        <p className="mb-4">
          Veja um cálculo completo com números reais. Neste exemplo, o pedido
          fica exatamente no limite de US$50 — e mostra como US$1 de diferença
          pode mudar o custo total. Entrega em São Paulo (ICMS 18%).
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-3">Simulação: kit de organizadores na Temu</p>
          <ul className="space-y-1.5 text-sm mb-4 list-none pl-0">
            <li><span className="font-medium">Produto:</span> US$42 = R$218,40</li>
            <li><span className="font-medium">Frete internacional:</span> US$8 = R$41,60</li>
            <li><span className="font-medium">Câmbio:</span> R$5,20 por US$1</li>
            <li><span className="font-medium">Subtotal em reais:</span> R$260,00 (US$50 × R$5,20)</li>
            <li><span className="font-medium">Total em dólar:</span> US$50 — exatamente no limite (≤ US$50)</li>
          </ul>
          <div className="border-t border-gray-200 pt-3 mb-3">
            <p className="text-sm mb-1"><span className="font-medium">Imposto de Importação (II):</span> R$0,00 — no Remessa Conforme, pedidos até US$50 têm II de 0%</p>
            <p className="text-sm mb-1"><span className="font-medium">ICMS SP (18%):</span> R$260,00 × 18% = R$46,80</p>
            <p className="text-sm mb-1"><span className="font-medium">Total de tributos:</span> R$46,80</p>
          </div>
          <p className="font-bold text-lg">Custo final estimado: R$306,80</p>
          <p className="text-sm mt-2 text-gray-600">
            Carga tributária efetiva: 18%. Se o mesmo kit no Brasil custasse
            R$320, a importação compensaria (R$306,80 &lt; R$320).
          </p>
        </div>

        <p className="mb-4 font-semibold">
          E se o pedido fosse US$51? (frete de US$9)
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mb-6">
          <ul className="space-y-1.5 text-sm mb-4 list-none pl-0">
            <li><span className="font-medium">Produto:</span> US$42 = R$218,40</li>
            <li><span className="font-medium">Frete internacional:</span> US$9 = R$46,80</li>
            <li><span className="font-medium">Subtotal em reais:</span> R$265,20 (US$51 × R$5,20)</li>
            <li><span className="font-medium">Total em dólar:</span> US$51 — acima do limite (&gt; US$50)</li>
          </ul>
          <div className="border-t border-yellow-200 pt-3 mb-3">
            <p className="text-sm mb-1"><span className="font-medium">Imposto de Importação (II):</span> R$265,20 × 60% = R$159,12; desconto RC = US$30 × R$5,20 = R$156,00; II = R$159,12 − R$156,00 = R$3,12</p>
            <p className="text-sm mb-1"><span className="font-medium">ICMS SP (18%):</span> (R$265,20 + R$3,12) × 18% = R$48,30</p>
            <p className="text-sm mb-1"><span className="font-medium">Total de tributos:</span> R$51,42</p>
          </div>
          <p className="font-bold text-lg">Custo final estimado: R$316,62</p>
          <p className="text-sm mt-2 text-yellow-700">
            Só US$1 de diferença no total do pedido aumentou o custo final
            em R$9,82. Isso mostra como o limite de US$50 é decisivo na Temu —
            sempre some produto e frete antes de avaliar.
          </p>
        </div>

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
          A Receita Federal mantém uma lista pública de empresas e plataformas
          certificadas no Programa Remessa Conforme, e a Temu pode estar entre
          elas. Em compras dentro do programa, o Imposto de Importação federal
          pode ser 0% para valores até US$50, com ICMS estadual de 17% a 20%
          dependendo do estado; acima de US$50, a alíquota federal é reduzida
          dentro do RC. Fora do Remessa Conforme, o Imposto de Importação pode
          chegar a 60% sobre o valor aduaneiro, além do ICMS. Antes de comprar,
          confirme no checkout se os tributos aparecem discriminados e use a
          calculadora de importação para estimar o custo total. Compare o valor
          final com alternativas vendidas no Brasil antes de decidir.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Compra da Temu abaixo de US$50 fica sem imposto?
        </h3>
        <p className="mb-4">
          Em compras da Temu dentro do Programa Remessa Conforme, o Imposto de
          Importação federal pode ser 0% para valores até US$50 (produto +
          frete), mas o ICMS estadual continua sendo cobrado com alíquotas de
          17% a 20% dependendo do estado de destino. Fora do Remessa Conforme,
          compras abaixo de US$50 podem estar sujeitas ao Imposto de Importação
          de 60% sobre o valor aduaneiro, além do ICMS. Portanto, "abaixo de
          US$50" não significa necessariamente "sem tributos" — o ICMS sempre
          pode incidir. Verifique no checkout se os tributos estão discriminados
          e use a calculadora para estimar o custo final antes de pagar. Compare
          o valor total com produtos vendidos no Brasil para avaliar se a
          importação realmente vale a pena.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Frete da Temu entra no cálculo?
        </h3>
        <p className="mb-4">
          Sim, o frete internacional entra no valor aduaneiro usado como base
          para calcular o Imposto de Importação e o ICMS. Produto, frete e
          seguro, quando houver, compõem o total da operação que define a faixa
          de tributação — dentro ou acima de US$50 no Remessa Conforme. Um
          carrinho com produto de US$42 e frete de US$8, por exemplo, ultrapassa
          o limite de US$50 e muda a regra de Imposto de Importação de 0% para
          a alíquota reduzida dentro do RC, ou 60% fora dele. Por isso, sempre
          some produto e frete antes de avaliar se a compra fica em faixa de
          tributação mais favorável. Use a calculadora de importação para
          simular o custo total e compare com alternativas no Brasil.
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
