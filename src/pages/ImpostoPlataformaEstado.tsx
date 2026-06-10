import { useLocation } from "wouter";

import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";
import RelatedGuides from "@/components/RelatedGuides";
import SeoHead from "@/components/SeoHead";
import NotFound from "@/pages/not-found";
import { icmsStatePages } from "@/pages/ICMSPorEstado";
import Breadcrumb from "@/components/Breadcrumb";

const platforms = [
  {
    slug: "aliexpress",
    name: "AliExpress",
    basePath: "/imposto-aliexpress-brasil",
    checkoutHint:
      "confirme se o checkout do AliExpress mostra os tributos antes do pagamento",
  },
  {
    slug: "shein",
    name: "Shein",
    basePath: "/imposto-shein-brasil",
    checkoutHint:
      "confirme se a Shein mostra imposto, ICMS e frete antes de finalizar",
  },
  {
    slug: "shopee",
    name: "Shopee",
    basePath: "/imposto-shopee-brasil",
    checkoutHint:
      "verifique se o item é internacional e se a Shopee informa tributos no checkout",
  },
  {
    slug: "temu",
    name: "Temu",
    basePath: "/imposto-temu-brasil",
    checkoutHint:
      "veja se a Temu discrimina tributos no checkout antes de pagar",
  },
  {
    slug: "amazon-internacional",
    name: "Amazon internacional",
    basePath: "/imposto-amazon-internacional-brasil",
    checkoutHint:
      "confirme se a oferta da Amazon é internacional e se os tributos aparecem na tela final",
  },
];

const states = icmsStatePages.map(({ state }) => state);

const platformInsights = {
  aliexpress: {
    purchasePattern:
      "No AliExpress, o risco mais comum é montar um carrinho com itens pequenos, cupons e fretes diferentes por vendedor. Some cada frete antes de avaliar o limite de US$50.",
    compareTip:
      "Compare principalmente eletrônicos, peças, acessórios e produtos sem garantia local. Se a diferença contra Mercado Livre ou Amazon Brasil for pequena, prazo e troca podem pesar mais.",
  },
  shein: {
    purchasePattern:
      "Na Shein, vários itens baratos podem ultrapassar US$50 rapidamente. O carrinho final depois de cupons é mais importante que o preço isolado de uma peça.",
    compareTip:
      "Compare roupas e itens de casa com opções nacionais quando houver dúvida de tamanho, troca ou qualidade. Uma economia pequena pode desaparecer se a peça não servir.",
  },
  shopee: {
    purchasePattern:
      "Na Shopee, confira primeiro se o anúncio é nacional ou internacional. Produtos enviados do Brasil não seguem a mesma lógica de importação.",
    compareTip:
      "Compare com vendedores nacionais dentro da própria Shopee. Às vezes o preço local fica próximo depois de ICMS, frete e prazo de entrega.",
  },
  temu: {
    purchasePattern:
      "Na Temu, pedidos com muitos itens de baixo valor podem mudar de faixa por poucos dólares. O frete grátis deve ser confirmado no checkout, não presumido.",
    compareTip:
      "A Temu costuma fazer mais sentido para acessórios, organização e itens difíceis de achar no Brasil. Para produtos comuns, compare com marketplaces nacionais.",
  },
  "amazon-internacional": {
    purchasePattern:
      "Na Amazon internacional, verifique vendedor, envio, garantia e tributos estimados no checkout. Ofertas internacionais podem aparecer ao lado de produtos já vendidos no Brasil.",
    compareTip:
      "Para eletrônicos e produtos acima de US$100, compare imposto, garantia local e devolução. Uma oferta importada só compensa se a diferença final for clara.",
  },
} as const;

const stateInsights = {
  "sao-paulo": {
    marketContext:
      "São Paulo tende a ter mais alternativas nacionais, entrega rápida e vendedores locais. Por isso, a importação precisa vencer não só no preço, mas também no prazo e na segurança.",
    decisionRule:
      "Para SP, uma diferença pequena contra o preço brasileiro raramente justifica prazo longo. Use a importação quando o item não existir no Brasil ou quando a economia final for consistente.",
  },
  "rio-de-janeiro": {
    marketContext:
      "No Rio de Janeiro, o ICMS estimado de 20% aumenta a necessidade de comparar com produto nacional. A diferença contra SP pode reduzir a vantagem de pedidos acima de US$50.",
    decisionRule:
      "Para RJ, seja mais conservador: se o produto existir no Brasil com entrega rápida e garantia, a importação precisa oferecer economia maior para compensar.",
  },
} as const;

function getPlatformInsight(slug: string) {
  return platformInsights[slug as keyof typeof platformInsights];
}

function getStateInsight(slug: string) {
  return stateInsights[slug as keyof typeof stateInsights];
}

export const platformStatePages = platforms.flatMap((platform) =>
  states.map((state) => ({
    path: `/imposto-${platform.slug}-${state.slug}`,
    title: `Imposto ${platform.name} ${state.name} 2026: Como Calcular`,
    description: `Calcule imposto de compras da ${platform.name} para ${state.name} em 2026, com ICMS de ${state.rate}, frete, câmbio e Remessa Conforme.`,
    platform,
    state,
  })),
);

function findPage(pathname: string) {
  return platformStatePages.find((page) => pathname === page.path);
}

export default function ImpostoPlataformaEstado() {
  const [location] = useLocation();
  const page = findPage(location);

  if (!page) {
    return <NotFound />;
  }

  const { platform, state } = page;
  const canonical = `https://www.taxadeimportacao.com${page.path}`;
  const platformInsight = getPlatformInsight(platform.slug);
  const stateInsight = getStateInsight(state.slug);
  const hasPriorityInsight = Boolean(platformInsight && stateInsight);

  return (
    <>
      <SeoHead
        title={page.title}
        description={page.description}
        canonical={canonical}
        faqs={[
          {
            question: `Como calcular imposto da ${platform.name} para ${state.name}?`,
            answer: `Some produto, frete e seguro, converta para reais, aplique a regra de Imposto de Importação e use ${state.rate} como ICMS estimado para ${state.name}.`,
          },
          {
            question: `Compra da ${platform.name} para ${state.code} abaixo de US$50 paga ICMS?`,
            answer:
              "Pode pagar. Mesmo em plataforma certificada no Remessa Conforme, o ICMS estadual pode continuar aparecendo no checkout.",
          },
          {
            question: `O imposto da ${platform.name} aparece no checkout?`,
            answer:
              "Em compras dentro do Remessa Conforme, os tributos podem aparecer antes do pagamento. Em outros fluxos, a cobrança pode ocorrer na chegada ao Brasil.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Imposto da {platform.name} para {state.name}: Como Calcular em 2026
        </h1>

        <DirectAnswer>
          <p>
            Para calcular imposto da {platform.name} para {state.name}, some
            produto, frete e seguro, converta para reais, considere a regra de
            Imposto de Importação e use {state.rate} como ICMS estimado para o
            estado {state.code}.
          </p>
        </DirectAnswer>

        <Breadcrumb items={[
          { label: "Início", href: "/" },
          { label: platform.name, href: platform.basePath },
          { label: `${state.name}` }
        ]} />

        <p className="text-lg mb-8">
          Uma compra internacional da {platform.name} pode ter custo final
          diferente dependendo do estado de entrega. Para {state.name}, a
          calculadora usa ICMS estimado de {state.rate}, além de frete, câmbio,
          valor do produto e regra do Remessa Conforme.
        </p>

        <p className="mb-6">
          Antes de pagar, {platform.checkoutHint}. Depois, compare o custo final
          com uma opção vendida no Brasil. Essa comparação é melhor que olhar
          apenas o preço em dólar no anúncio.
        </p>

        {hasPriorityInsight && (
          <section className="mb-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#008272]/20 bg-[#008272]/5 p-5">
              <h2 className="mb-2 text-xl font-semibold text-[#071933]">
                Atenção na {platform.name}
              </h2>
              <p className="leading-relaxed text-slate-700">
                {platformInsight?.purchasePattern}
              </p>
            </div>
            <div className="rounded-2xl border border-[#ffca28]/30 bg-[#ffca28]/10 p-5">
              <h2 className="mb-2 text-xl font-semibold text-[#071933]">
                Decisão para {state.code}
              </h2>
              <p className="leading-relaxed text-slate-700">
                {stateInsight?.marketContext}
              </p>
            </div>
          </section>
        )}

        <a
          href="/"
          className="inline-block bg-[#008272] hover:bg-[#06264b] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors mb-10"
        >
          Simular compra da {platform.name} para {state.code}
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          O que entra na conta?
        </h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Preço do produto na {platform.name}.</li>
          <li>Frete internacional e seguro, quando houver.</li>
          <li>Câmbio usado na compra.</li>
          <li>Imposto de Importação conforme a faixa da compra.</li>
          <li>ICMS estimado de {state.name}: {state.rate}.</li>
          <li>Possíveis cobranças postais ou logísticas.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Compra abaixo de US$50 na {platform.name}
        </h2>

        <p className="mb-6">
          Em plataformas certificadas no Remessa Conforme, compras de até US$50
          podem ter Imposto de Importação federal de 0%. Isso não elimina
          necessariamente o ICMS de {state.name}, que pode aparecer no checkout.
        </p>

        <p className="mb-6">
          Se o pedido tiver frete ou seguro, considere o valor total da compra
          antes de decidir. Uma compra aparentemente barata pode deixar de
          compensar quando o câmbio e o ICMS entram na conta.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo para {state.name}
        </h2>

        <p className="mb-6">
          Imagine um pedido da {platform.name} de US$60 com frete de US$8 para{" "}
          {state.name}. Primeiro some produto e frete, depois converta para
          reais. Em seguida, considere a regra de Imposto de Importação e o ICMS
          estimado de {state.rate}. Só então compare com o preço nacional.
        </p>

        {hasPriorityInsight && (
          <>
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Quando a compra tende a compensar
            </h2>
            <p className="mb-6">{platformInsight?.compareTip}</p>
            <p className="mb-6">{stateInsight?.decisionRule}</p>
          </>
        )}

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="mb-2 text-2xl font-semibold text-[#071933]">
            Checklist antes de finalizar
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            <li>Confirme se o produto é internacional ou já está no Brasil.</li>
            <li>Some produto, frete e seguro antes de olhar o limite de US$50.</li>
            <li>Confira se Imposto de Importação e ICMS aparecem no checkout.</li>
            <li>Compare o total estimado com uma alternativa vendida no Brasil.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Perguntas frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Como calcular imposto da {platform.name} para {state.name}?
        </h3>
        <p className="mb-4">
          Use produto, frete, seguro, câmbio, regra de Imposto de Importação e
          ICMS estimado de {state.rate} para {state.name}.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          A regra é igual para todos os estados?
        </h3>
        <p className="mb-4">
          Não. O ICMS é estadual, então o mesmo pedido da {platform.name} pode
          ter estimativa diferente em outro estado brasileiro.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          O valor final é garantido?
        </h3>
        <p className="mb-4">
          Não. A página oferece uma estimativa para decisão antes da compra. O
          valor oficial depende do checkout, da declaração da remessa e da
          cobrança no processo de importação.
        </p>

        <OfficialSources
          sources={[
            {
              label: "Receita Federal - Tributação de remessas internacionais",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/topicos/tributacao",
            },
            {
              label: "Receita Federal - Empresas certificadas no Programa Remessa Conforme",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/empresas-certificadas-no-programa-remessa-conforme-prc",
            },
          ]}
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <a
            href={platform.basePath}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 shadow-sm hover:border-[#008272] hover:text-[#008272]"
          >
            Guia geral da {platform.name}
          </a>
          <a
            href={`/icms-importacao-${state.slug}`}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 shadow-sm hover:border-[#008272] hover:text-[#008272]"
          >
            ICMS importação {state.name}
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Junho de 2026. A página usa a alíquota estimada aplicada
          pela calculadora para {state.name}; confirme sempre o valor exibido no
          checkout ou na cobrança oficial.
        </p>

        <RelatedGuides currentPath={page.path} limit={6} />
      </main>
    </>
  );
}
