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
          Atualizado em Maio de 2026. A página usa a alíquota estimada aplicada
          pela calculadora para {state.name}; confirme sempre o valor exibido no
          checkout ou na cobrança oficial.
        </p>

        <RelatedGuides currentPath={page.path} limit={6} />
      </main>
    </>
  );
}
