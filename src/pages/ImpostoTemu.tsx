import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";
import Breadcrumb from "@/components/Breadcrumb";

export default function ImpostoTemu() {
  return (
    <>
      <SeoHead
        title="Imposto Temu Brasil 2026 | Calcule Taxas em Segundos"
        description="Calcule o imposto da Temu em 3 segundos. Atualizado jun/2026. Simples, rápido e atualizado com as regras do Remessa Conforme."
        canonical="https://www.taxadeimportacao.com/imposto-temu-brasil"
        faqs={[
          {
            question: "A Temu participa do Remessa Conforme?",
            answer:
              "A Receita Federal mantém uma lista pública de empresas e plataformas certificadas no Programa Remessa Conforme, e a Temu pode estar entre elas. Em compras dentro do programa, o Imposto de Importação federal pode ser 0% para valores até US$50, com ICMS estadual de 17% a 20% dependendo do estado; acima de US$50, a alíquota federal é 60% com desconto de US$30 dentro do RC. Fora do Remessa Conforme, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, além do ICMS. Antes de comprar, confirme no checkout se os tributos aparecem discriminados e use a calculadora de importação para estimar o custo total. Compare o valor final com alternativas vendidas no Brasil antes de decidir.",
          },
          {
            question: "Compra da Temu abaixo de US$50 fica sem imposto?",
            answer:
              "Em compras da Temu dentro do Programa Remessa Conforme, o Imposto de Importação federal pode ser 0% para valores até US$50 (produto + frete), mas o ICMS estadual continua sendo cobrado com alíquotas de 17% a 20% dependendo do estado de destino. Fora do Remessa Conforme, compras abaixo de US$50 podem estar sujeitas ao Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Portanto, 'abaixo de US$50' não significa necessariamente 'sem tributos' — o ICMS sempre pode incidir. Verifique no checkout se os tributos estão discriminados e use a calculadora para estimar o custo final antes de pagar. Compare o valor total com produtos vendidos no Brasil para avaliar se a importação realmente vale a pena.",
          },
          {
            question: "Frete da Temu entra no cálculo?",
            answer:
              "Sim, o frete internacional entra no valor aduaneiro usado como base para calcular o Imposto de Importação e o ICMS. Produto, frete e seguro, quando houver, compõem o total da operação que define a faixa de tributação — dentro ou acima de US$50 no Remessa Conforme. Um carrinho com produto de US$42 e frete de US$8, por exemplo, ultrapassa o limite de US$50 e muda a regra de Imposto de Importação de 0% para a alíquota de 60% com desconto de US$30 dentro do RC, ou 60% fora dele. Por isso, sempre some produto e frete antes de avaliar se a compra fica em faixa de tributação mais favorável. Use a calculadora de importação para simular o custo total e compare com alternativas no Brasil.",
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
          Temu: preços ultra-baixo e o limite de US$50
        </h2>

        <p className="mb-6">
          O limite de US$50 é especialmente crítico na Temu porque a
          estratégia de preços da plataforma faz a maioria dos itens
          individuais custar entre US$1 e US$15, o que incentiva adicionar
          vários produtos ao mesmo pedido. O problema é que 5 a 8 itens pequenos
          mais o frete podem facilmente ultrapassar US$50, ativando a alíquota
          maior de Imposto de Importação. Na Temu, mais do que em qualquer
          outra plataforma, o total do carrinho exige monitoramento cuidadoso —
          um pedido de US$48 com frete de US$3 permanece com II de 0%, mas
          adicionar um item de US$2 eleva o total a US$53 e muda tudo.
        </p>

        <p className="mb-6">
          A Temu oferece promoções de pacote como "3 itens com 20% de desconto"
          ou "5 itens com frete grátis", que incentivam adicionar produtos para
          atingir esses patamares. O preço descontado que você efetivamente paga
          define a base tributária, mas o frete ainda entra no total. Um pacote
          que reduz o preço final (produto + frete) para abaixo de US$50 é
          ideal; um que empurra o total acima de US$50 pode anular a economia
          com impostos mais altos. Sempre calcule o custo final com a calculadora
          antes de aceitar qualquer promoção de volume.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Cupons Temu e cálculo de imposto
        </h2>

        <p className="mb-6">
          A Temu tem uma estratégia agressiva de cupons: frequentemente oferece
          descontos na primeira compra (como "30% off no primeiro pedido"),
          promoções sazonais e descontos exclusivos do app. No Remessa
          Conforme, o imposto é calculado sobre o valor que você efetivamente
          paga após os cupons. Se um cupom de 30% reduz um pedido de US$60 para
          US$42 (mais frete de US$8 = US$50), a alíquota de II de 0% se aplica.
          Mas isso só funciona se o valor final cobrado (produto após desconto +
          frete) for ≤US$50. Sempre simule com o preço após cupom, não com o
          original — a calculadora de importação ajuda a verificar o resultado.
        </p>

        <p className="mb-6">
          A Temu também anuncia frete grátis em pedidos acima de um determinado
          valor. Se o componente de frete for realmente zero, o valor total do
          pedido é apenas o preço do produto, facilitando permanecer dentro do
          limite de US$50. Porém, verifique se "frete grátis" significa que o
          custo de frete foi efetivamente zerado ou simplesmente embutido no
          preço do produto — a segunda opção não altera a base de cálculo
          tributária, pois produto + frete (mesmo oculto) continua sendo
          considerado. Confirme os valores no checkout antes de concluir a
          compra.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Categorias mais comuns na Temu e quando importar compensa
        </h2>

        <p className="mb-6">
          A Temu é mais forte em organização doméstica (caixas de
          armazenamento, utensílios de cozinha), acessórios de eletrônicos
          pequenos (cabos, suportes), acessórios de moda e materiais para
          DIY/artesanato. Esses itens geralmente custam US$2–10 cada, o que os
          torna ideais para pedidos que ficam abaixo de US$50 com II de 0%. Para
          categorias onde alternativas brasileiras existem em preços similares
          — como capas de celular básicas ou ferramentas simples de cozinha — a
          importação pode não compensar depois de somar ICMS e considerar o
          tempo de entrega. Avalie caso a caso usando a calculadora antes de
          decidir.
        </p>

        <p className="mb-6">
          Lojas brasileiras como Lojas Americanas, Mercado Livre e lojas
          locais de artesanato oferecem itens pequenos semelhantes a preços que,
          após os impostos da importação da Temu, podem ficar comparáveis. A
          importação pela Temu compensa mais para itens niche indisponíveis
          localmente, peças decorativas com designs únicos ou pedidos em
          quantidade onde o custo por item após impostos permanece bem abaixo
          das alternativas brasileiras. Use a calculadora para comparar o custo
          total da importação com o preço nacional e decidir com base em
          números, não apenas no preço de anúncio.
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
          a alíquota de 60% com desconto de US$30 dentro do RC, ou 60% fora dele. Por isso, sempre
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
          Atualizado em Junho de 2026. Use esta página como estimativa antes da
          compra; o valor oficial depende do checkout e do processo de
          importação.
        </p>

        <RelatedGuides currentPath="/imposto-temu-brasil" />
      </main>
    </>
  );
}
