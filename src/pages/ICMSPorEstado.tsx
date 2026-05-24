import { useLocation } from "wouter";

import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";
import RelatedGuides from "@/components/RelatedGuides";
import SeoHead from "@/components/SeoHead";

const statePages = [
  {
    slug: "sao-paulo",
    name: "São Paulo",
    code: "SP",
    rate: "18%",
    buyerExample: "um comprador em São Paulo que importa roupas, eletrônicos ou acessórios",
    localNote:
      "São Paulo concentra muitas compras internacionais e comparações com marketplaces nacionais, então o ICMS pode mudar bastante a decisão de compra.",
  },
  {
    slug: "minas-gerais",
    name: "Minas Gerais",
    code: "MG",
    rate: "20%",
    buyerExample: "um comprador em Minas Gerais que compara importados com lojas brasileiras",
    localNote:
      "Em Minas Gerais, a simulação por estado ajuda a evitar comparar apenas o preço em dólar com o preço nacional.",
  },
  {
    slug: "parana",
    name: "Paraná",
    code: "PR",
    rate: "19,5%",
    buyerExample: "um comprador no Paraná que quer prever o custo antes do checkout",
    localNote:
      "No Paraná, pequenas diferenças de frete, câmbio e ICMS podem mudar se a importação ainda compensa.",
  },
  {
    slug: "rio-de-janeiro",
    name: "Rio de Janeiro",
    code: "RJ",
    rate: "22%",
    buyerExample: "um comprador no Rio de Janeiro avaliando produto internacional e entrega local",
    localNote:
      "No Rio de Janeiro, o ICMS estimado usado pela calculadora pode ter peso relevante no custo final da importação.",
  },
  {
    slug: "santa-catarina",
    name: "Santa Catarina",
    code: "SC",
    rate: "17%",
    buyerExample: "um comprador em Santa Catarina simulando compras em AliExpress, Shein, Shopee ou Temu",
    localNote:
      "Em Santa Catarina, a comparação com preço nacional ainda deve incluir prazo, garantia e possível cobrança no checkout.",
  },
];

const defaultState = statePages[0];

export const icmsStatePages = statePages.map((state) => ({
  path: `/icms-importacao-${state.slug}`,
  title: `ICMS Importação ${state.name} 2026: Como Calcular`,
  description: `Entenda como estimar ICMS de importação para ${state.name} em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.`,
  state,
}));

export default function ICMSPorEstado() {
  const [location] = useLocation();
  const state =
    statePages.find((item) => location.endsWith(item.slug)) ?? defaultState;
  const canonical = `https://www.taxadeimportacao.com/icms-importacao-${state.slug}`;

  return (
    <>
      <SeoHead
        title={`ICMS Importação ${state.name} 2026: Como Calcular`}
        description={`Entenda como estimar ICMS de importação para ${state.name} em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.`}
        canonical={canonical}
        faqs={[
          {
            question: `Qual ICMS a calculadora usa para ${state.name}?`,
            answer: `Para ${state.name}, a calculadora usa ${state.rate} como alíquota estimada de ICMS no estado de destino.`,
          },
          {
            question: `Compra abaixo de US$50 para ${state.code} paga ICMS?`,
            answer:
              "Pode pagar. Mesmo quando o Imposto de Importação federal é 0% em plataforma certificada, o ICMS estadual pode continuar aparecendo no custo final.",
          },
          {
            question: "O valor final é oficial?",
            answer:
              "Não. A página e a calculadora oferecem uma estimativa para decisão de compra. O valor oficial depende do checkout, da declaração da remessa e das autoridades competentes.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          ICMS de Importação em {state.name}: Como Calcular em 2026
        </h1>

        <DirectAnswer>
          <p>
            Para estimar o ICMS de importação em {state.name}, use o estado de
            destino {state.code} na calculadora. A alíquota estimada usada para
            {state.name} é {state.rate}, junto com produto, frete, câmbio,
            Imposto de Importação e Remessa Conforme.
          </p>
        </DirectAnswer>

        <p className="text-lg mb-8">
          O ICMS é um dos motivos pelos quais duas compras internacionais com o
          mesmo preço podem ter custos finais diferentes no Brasil. Para{" "}
          {state.buyerExample}, o estado de destino precisa entrar na conta
          antes de decidir se vale a pena importar.
        </p>

        <p className="mb-6">
          {state.localNote} Esta página explica como pensar no cálculo para{" "}
          {state.name}, mas a forma mais segura é simular o pedido completo com
          produto, frete, câmbio e a regra do{" "}
          <a
            href="/o-que-e-remessa-conforme"
            className="text-blue-600 underline"
          >
            Remessa Conforme
          </a>.
        </p>

        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl mb-10"
        >
          Simular importação para {state.code}
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          O que entra no cálculo para {state.name}?
        </h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Valor do produto comprado no exterior.</li>
          <li>Frete internacional e seguro, quando houver.</li>
          <li>Câmbio usado na compra.</li>
          <li>Imposto de Importação conforme a regra aplicável.</li>
          <li>ICMS estimado para {state.name}: {state.rate}.</li>
          <li>Possíveis cobranças postais ou logísticas.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Por que o estado muda o custo final?
        </h2>

        <p className="mb-6">
          O ICMS é estadual. Por isso, o mesmo produto pode ter uma estimativa
          diferente quando o destino é {state.name}, São Paulo, Minas Gerais,
          Paraná, Rio de Janeiro, Santa Catarina ou outro estado brasileiro.
        </p>

        <p className="mb-6">
          Esse detalhe é especialmente importante em compras de AliExpress,
          Shein, Shopee, Temu e Amazon internacional, porque o preço em dólar
          não mostra sozinho o custo final em reais.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Compra abaixo de US$50 para {state.code}
        </h2>

        <p className="mb-6">
          Em compras de até US$50 feitas em plataformas certificadas no Remessa
          Conforme, o Imposto de Importação federal pode ser 0%. Mesmo assim,
          o ICMS de {state.name} pode continuar entrando no checkout.
        </p>

        <p className="mb-6">
          Por isso, "abaixo de US$50" não deve ser lido como compra sem
          tributos. Para uma visão completa da faixa, veja o guia sobre{" "}
          <a
            href="/compras-internacionais-abaixo-50-dolares"
            className="text-blue-600 underline"
          >
            compras internacionais abaixo de US$50
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo prático para {state.name}
        </h2>

        <p className="mb-6">
          Imagine uma compra internacional com produto e frete somando US$80.
          Depois de converter para reais, você ainda precisa considerar a regra
          de Imposto de Importação e o ICMS estimado de {state.rate} para{" "}
          {state.name}. Se o resultado ficar próximo do preço nacional, talvez
          a compra no Brasil seja melhor por prazo e garantia.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Perguntas frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Qual ICMS a calculadora usa para {state.name}?
        </h3>
        <p className="mb-4">
          A calculadora usa {state.rate} como alíquota estimada para o estado
          de destino {state.code}.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          O ICMS de {state.name} aparece no checkout?
        </h3>
        <p className="mb-4">
          Em compras dentro do Remessa Conforme, o ICMS pode aparecer antes do
          pagamento. Fora desse fluxo, a cobrança pode surgir no processo de
          importação.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Esta estimativa substitui o valor oficial?
        </h3>
        <p className="mb-4">
          Não. Ela serve para decisão antes da compra. O valor oficial depende
          do checkout, da transportadora, dos Correios ou da autoridade
          competente.
        </p>

        <OfficialSources
          sources={[
            {
              label: "Receita Federal - Tributação de remessas internacionais",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/topicos/tributacao",
            },
            {
              label: "Receita Federal - Quais são os impostos devidos",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/preciso-pagar-impostos-nas-compras-internacionais/quais-sao-os-impostos-devidos",
            },
          ]}
        />

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Maio de 2026. A página usa a alíquota estimada aplicada
          pela calculadora para {state.name}; confirme sempre o valor informado
          no checkout ou na cobrança oficial.
        </p>

        <RelatedGuides currentPath={`/icms-importacao-${state.slug}`} />
      </main>
    </>
  );
}
