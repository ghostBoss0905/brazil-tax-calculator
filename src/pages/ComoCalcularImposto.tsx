import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import Breadcrumb from "@/components/Breadcrumb";

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
              "As compras internacionais para o Brasil podem pagar Imposto de Importação e ICMS estadual, além de custos de frete e seguro incluídos na base de cálculo. O Imposto de Importação é 0% até US$50 em plataformas certificadas no Remessa Conforme, 60% com desconto de US$30 acima de US$50 no RC, ou 60% fora do programa. O ICMS estadual varia de 17% a 20% conforme o estado de destino e incide sobre uma base que pode incluir produto, frete, seguro e o próprio Imposto de Importação. Por isso, o custo final pode ser significativamente maior que o preço anunciado no site.",
          },
          {
            question: "Como funciona o Remessa Conforme?",
            answer:
              "O Remessa Conforme é um programa da Receita Federal que permite a plataformas certificadas informar e cobrar os tributos no momento da compra, antes do pagamento. Compras até US$50 em plataformas certificadas têm Imposto de Importação de 0%, enquanto acima de US$50 a regra usa 60% com desconto de US$30. Sem o programa, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, sem esse desconto, cobrado na chegada ao Brasil. O ICMS estadual (17% a 20%) é cobrado em todos os cenários, dentro ou fora do programa.",
          },
          {
            question: "Como calcular o imposto antes de comprar?",
            answer:
              "Informe o valor do produto, frete internacional, câmbio do dia, estado de destino e se a loja participa do Remessa Conforme. Some produto e frete, converta para reais, aplique o Imposto de Importação (0% até US$50 com RC, 60% com desconto de US$30 acima de US$50 com RC, ou 60% sem RC) e depois calcule o ICMS estadual (17% a 20%). Use a calculadora deste site para automatizar o processo e compare o custo final com uma compra nacional antes de decidir pela importação.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Como Calcular Imposto de Importação no Brasil em 2026
        </h1>

        <DirectAnswer>
          <p>
            Para calcular imposto de importação no Brasil, some produto, frete
            e seguro, converta para reais, aplique a regra de Imposto de
            Importação e estime o ICMS do estado de entrega. Depois compare o
            custo final com uma compra nacional.
          </p>
        </DirectAnswer>

        <Breadcrumb items={[
          { label: "Início", href: "/" },
          { label: "Como calcular imposto de importação" }
        ]} />

        <p className="text-lg mb-8">
          Comprar produtos internacionais na Shopee, AliExpress, Amazon ou
          Shein ficou mais caro após as novas regras de importação no Brasil.
        </p>

        <p className="mb-6">
          Neste guia atualizado de 2026, você aprenderá como calcular imposto
          de importação no Brasil passo a passo. Se quiser apenas uma estimativa
          rápida, veja também o guia para{" "}
          <a
            href="/calcular-taxas-importacao"
            className="text-blue-600 underline"
          >
            calcular taxas de importação
          </a>
          .
        </p>

        <p className="mb-6">
          O objetivo é mostrar o raciocínio por trás do cálculo. Assim, você
          consegue avaliar compras em lojas como AliExpress, Shein, Shopee,
          Amazon ou Temu antes de pagar. O preço que aparece no anúncio quase
          nunca é suficiente para decidir se a importação vale a pena.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Quais impostos são cobrados?
        </h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Imposto de Importação</li>
          <li>ICMS estadual</li>
          <li>Taxas de frete</li>
        </ul>

        <p className="mb-6">
          Além desses pontos, o seguro internacional e outras despesas
          informadas pela plataforma também podem entrar no valor total. A
          Receita Federal orienta que compras internacionais devem considerar o
          valor dos bens, frete e seguro quando houver. Depois entram as regras
          de Imposto de Importação e{" "}
          <a
            href="/icms-importacao-brasil"
            className="text-blue-600 underline"
          >
            ICMS na importação
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Passo a passo para calcular
        </h2>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Some o valor dos produtos comprados.</li>
          <li>Adicione frete internacional e seguro, se houver.</li>
          <li>Converta o valor para reais usando o câmbio da compra.</li>
          <li>Confira se a loja participa do Remessa Conforme.</li>
          <li>Aplique o Imposto de Importação conforme a regra da compra.</li>
          <li>Calcule o ICMS do estado de destino.</li>
          <li>Compare o custo final com uma opção vendida no Brasil.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Como funciona o Remessa Conforme?
        </h2>

        <p className="mb-6">
          O programa Remessa Conforme altera a forma de cobrança dos impostos em
          compras internacionais abaixo de US$50. Para entender a regra em mais
          detalhes, consulte o guia sobre{" "}
          <a
            href="/o-que-e-remessa-conforme"
            className="text-blue-600 underline"
          >
            Remessa Conforme
          </a>.
        </p>

        <p className="mb-6">
          Em plataformas certificadas, os tributos tendem a aparecer no
          checkout, antes do pagamento. Isso ajuda o consumidor a enxergar o
          custo final. Fora desse fluxo, a cobrança pode aparecer apenas quando
          a encomenda chega ao Brasil, antes da entrega, junto com eventuais
          cobranças como a{" "}
          <a
            href="/taxa-correios-importacao"
            className="text-blue-600 underline"
          >
            taxa dos Correios na importação
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo de cálculo
        </h2>

        <p className="mb-6">
          Produto: US$100 <br />
          Frete: US$20 <br />
          Câmbio: R$5,20
        </p>

        <p className="mb-6">
          Dependendo do estado, o valor final pode ultrapassar R$900 após ICMS
          e imposto de importação. Para comparar faixas e cenários, veja a{" "}
          <a
            href="/tabela-imposto-importacao-brasil"
            className="text-blue-600 underline"
          >
            tabela de imposto de importação
          </a>.
        </p>

        <p className="mb-6">
          Esse exemplo mostra por que uma compra aparentemente barata pode
          mudar de figura. Quando o produto passa de dólar para real e recebe
          imposto, o custo final pode se aproximar de uma compra nacional. Por
          outro lado, se o preço importado continuar muito menor mesmo depois
          dos tributos, a compra ainda pode compensar.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Erros comuns ao estimar imposto
        </h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Calcular apenas o preço do produto e esquecer o frete.</li>
          <li>Usar uma cotação de dólar antiga.</li>
          <li>Ignorar o ICMS do estado de destino.</li>
          <li>Presumir que compra abaixo de US$50 não paga nada.</li>
          <li>Não verificar se os tributos aparecem no checkout.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Quando a importação vale a pena?
        </h2>

        <p className="mb-6">
          A importação tende a valer a pena quando o preço final, já com frete,
          Imposto de Importação e ICMS, continua menor do que o preço no Brasil.
          Também pode fazer sentido quando o produto não é vendido localmente.
          Se a diferença for pequena, prazo de entrega, garantia e troca podem
          pesar contra a compra internacional.
        </p>

        <a
          href="/"
          className="inline-block bg-[#008272] hover:bg-[#06264b] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors mb-10"
        >
          Calculadora de Imposto de Importação
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          FAQ - Perguntas Frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Quais impostos são cobrados em compras internacionais?
        </h3>
        <p className="mb-4">
          As compras internacionais para o Brasil podem pagar Imposto de
          Importação e ICMS estadual, além de custos de frete e seguro
          incluídos na base de cálculo. O Imposto de Importação é 0% até US$50
          em plataformas certificadas no Remessa Conforme, 60% com desconto de US$30 acima de US$50
          no RC, ou 60% fora do programa. O ICMS estadual varia de 17% a 20%
          conforme o estado de destino e incide sobre uma base que pode incluir
          produto, frete, seguro e o próprio Imposto de Importação. Por isso, o
          custo final pode ser significativamente maior que o preço anunciado
          no site.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Como funciona o Remessa Conforme?
        </h3>
        <p className="mb-4">
          O Remessa Conforme é um programa da Receita Federal que permite a
          plataformas certificadas informar e cobrar os tributos no momento da
          compra, antes do pagamento. Compras até US$50 em plataformas
          certificadas têm Imposto de Importação de 0%, enquanto acima de US$50
          a regra usa 60% com desconto de US$30. Sem o programa, o Imposto de
          Importação pode chegar a 60% sobre o valor aduaneiro, sem esse
          desconto, cobrado na chegada ao Brasil. O ICMS estadual (17% a 20%) é
          cobrado em todos os cenários, dentro ou fora do programa.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Como calcular o imposto antes de comprar?
        </h3>
        <p className="mb-4">
          Informe o valor do produto, frete internacional, câmbio do dia, estado
          de destino e se a loja participa do Remessa Conforme. Some produto e
          frete, converta para reais, aplique o Imposto de Importação (0% até
          US$50 com RC, 60% com desconto de US$30 acima de US$50 com RC, ou 60% sem RC) e depois
          calcule o ICMS estadual (17% a 20%). Use a calculadora deste site para
          automatizar o processo e compare o custo final com uma compra nacional
          antes de decidir pela importação.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Junho de 2026. Fonte: Receita Federal, Portal Compras
          Internacionais e orientações sobre remessas internacionais.
        </p>
        <RelatedGuides currentPath="/como-calcular-imposto-importacao-brasil" />
      </main>
    </>
  );
}
