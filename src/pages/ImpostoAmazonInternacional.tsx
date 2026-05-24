import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";

export default function ImpostoAmazonInternacional() {
  return (
    <>
      <SeoHead
        title="Imposto Amazon Internacional Brasil 2026: Como Calcular"
        description="Veja como estimar imposto em compras internacionais na Amazon em 2026, com Remessa Conforme, ICMS, frete e custo final."
        canonical="https://www.taxadeimportacao.com/imposto-amazon-internacional-brasil"
        faqs={[
          {
            question: "Compra internacional na Amazon paga imposto?",
            answer:
              "Pode pagar, dependendo do valor, frete, enquadramento da compra, ICMS do estado e se os tributos aparecem no checkout.",
          },
          {
            question: "Amazon e marketplace são a mesma coisa para imposto?",
            answer:
              "Não necessariamente. A Amazon pode vender diretamente ou intermediar vendedores. Verifique se a oferta é internacional e se os tributos estão incluídos.",
          },
          {
            question: "Devo comparar com produto vendido no Brasil?",
            answer:
              "Sim. Compare o custo final importado com o preço nacional, prazo, garantia e possibilidade de troca.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Imposto em Compra Internacional na Amazon Brasil
        </h1>

        <DirectAnswer>
          <p>
            Em compras internacionais na Amazon, calcule produto, frete,
            câmbio, Imposto de Importação e ICMS. O ponto decisivo é confirmar
            se a oferta mostra tributos no checkout antes do pagamento.
          </p>
        </DirectAnswer>

        <p className="text-lg mb-8">
          A Amazon pode exibir produtos vendidos no Brasil e produtos
          internacionais no mesmo ambiente. Para SEO e para o consumidor, a
          dúvida principal é simples: o preço mostrado já inclui impostos ou a
          cobrança pode aparecer depois?
        </p>

        <p className="mb-6">
          Este guia foca em compras internacionais. Se a oferta for nacional,
          a lógica de importação não se aplica da mesma forma. Se a oferta for
          internacional, use a calculadora para comparar o preço final com uma
          opção vendida no Brasil.
        </p>

        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl mb-10"
        >
          Calcular imposto da Amazon
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Como identificar uma compra internacional
        </h2>

        <p className="mb-6">
          Antes de olhar o imposto, veja se o produto é vendido e enviado do
          Brasil ou se a oferta indica envio internacional. Também observe se o
          checkout mostra tributos, taxas de importação ou valores estimados de
          importação.
        </p>

        <p className="mb-6">
          Esse cuidado evita comparar coisas diferentes. Um produto nacional
          pode ser mais caro no anúncio, mas incluir prazo menor, garantia local
          e menos incerteza. Um produto internacional pode parecer mais barato,
          mas precisa ser analisado com imposto e frete.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          O que entra na estimativa?
        </h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Preço do produto internacional.</li>
          <li>Frete e seguro, quando houver.</li>
          <li>Câmbio usado na compra.</li>
          <li>Imposto de Importação conforme a regra aplicável.</li>
          <li>ICMS do estado de destino.</li>
          <li>Possíveis cobranças logísticas ou postais.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Amazon, Remessa Conforme e ICMS
        </h2>

        <p className="mb-6">
          A Receita Federal mantém uma página pública com empresas certificadas
          no Programa Remessa Conforme. Ainda assim, em marketplaces, a
          experiência pode variar conforme a oferta, o vendedor, a logística e
          o que aparece no checkout.
        </p>

        <p className="mb-6">
          Por isso, a regra prática é: se os tributos aparecem antes do
          pagamento, use esses valores como referência principal. Se não
          aparecem, simule o cenário com cautela e considere que a cobrança pode
          surgir no fluxo de importação.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo de decisão
        </h2>

        <p className="mb-6">
          Um produto internacional de US$120 pode parecer mais barato que a
          versão nacional. Mas depois de câmbio, frete, Imposto de Importação e
          ICMS, a diferença pode diminuir. Se a economia final for pequena, a
          compra nacional tende a ser mais simples por garantia e prazo.
        </p>

        <p className="mb-6">
          Se a economia continuar grande e o checkout mostrar tributos de forma
          transparente, a compra internacional pode fazer sentido. A decisão
          deve ser baseada no custo final, não no preço do anúncio.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Perguntas frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Compra internacional na Amazon paga imposto?
        </h3>
        <p className="mb-4">
          Pode pagar. A resposta depende do valor da operação, do frete, do
          estado de entrega e do enquadramento da remessa.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          O imposto já vem no preço?
        </h3>
        <p className="mb-4">
          Em algumas ofertas, o checkout pode mostrar tributos ou valores de
          importação. Verifique a tela final antes de pagar.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Posso usar a mesma tabela da Shein ou AliExpress?
        </h3>
        <p className="mb-4">
          A lógica geral é parecida, mas marketplaces podem ter vendedores e
          fluxos diferentes. Sempre confirme o que aparece no checkout da oferta
          específica.
        </p>

        <OfficialSources
          sources={[
            {
              label: "Receita Federal - Empresas certificadas no Programa Remessa Conforme",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/empresas-certificadas-no-programa-remessa-conforme-prc",
            },
            {
              label: "Receita Federal - Tributação de remessas internacionais",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/topicos/tributacao",
            },
          ]}
        />

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Maio de 2026. A simulação é uma estimativa; o valor
          oficial depende da oferta, do checkout e da importação.
        </p>

        <RelatedGuides currentPath="/imposto-amazon-internacional-brasil" />
      </main>
    </>
  );
}
