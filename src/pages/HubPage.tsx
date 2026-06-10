import { useLocation } from "wouter";

import Breadcrumb from "@/components/Breadcrumb";
import DirectAnswer from "@/components/DirectAnswer";
import RelatedGuides from "@/components/RelatedGuides";
import SeoHead from "@/components/SeoHead";
import NotFound from "@/pages/not-found";

const hubs = {
  "/guias/regras-importacao": {
    title: "Regras de Importação 2026: Remessa Conforme, US$50 e ICMS",
    description:
      "Centro de guias sobre regras de importação no Brasil em 2026: Remessa Conforme, limite de US$50, desconto de US$30, ICMS e Correios.",
    h1: "Regras de importação no Brasil em 2026",
    answer:
      "Use este centro para entender quando o Imposto de Importação é 0%, quando entra a regra de 60% com desconto de US$30 e como o ICMS estadual muda o custo final.",
    sections: [
      {
        heading: "Comece pela regra que muda o cálculo",
        text: "Em plataformas certificadas no Remessa Conforme, compras até US$50 podem ter Imposto de Importação federal de 0%, mas o ICMS continua sendo cobrado. Acima de US$50, a regra federal usa 60% com desconto de US$30. Fora do programa, a cobrança pode chegar a 60% sem esse desconto.",
        links: [
          ["/o-que-e-remessa-conforme", "O que é Remessa Conforme"],
          ["/compras-internacionais-abaixo-50-dolares", "Compras abaixo de US$50"],
          ["/tabela-imposto-importacao-brasil", "Tabela de imposto de importação"],
        ],
      },
      {
        heading: "Depois confira cobrança e pagamento",
        text: "Mesmo quando a compra parece barata, frete, seguro, câmbio, Correios e transportadora podem alterar a decisão. Antes de pagar, confira se os tributos aparecem no checkout e compare com o preço nacional.",
        links: [
          ["/taxa-correios-importacao", "Taxa dos Correios"],
          ["/calcular-taxas-importacao", "Como calcular taxas de importação"],
          ["/icms-importacao-brasil", "ICMS na importação"],
        ],
      },
    ],
  },
  "/guias/lojas-internacionais": {
    title: "Lojas Internacionais: Imposto AliExpress, Shein, Shopee, Temu e Amazon",
    description:
      "Centro de guias para calcular imposto em AliExpress, Shein, Shopee, Temu e Amazon internacional no Brasil.",
    h1: "Imposto por loja internacional",
    answer:
      "Cada plataforma pode mostrar tributos de forma diferente no checkout. Use este centro para escolher a loja, entender o risco e voltar à calculadora com os dados certos.",
    sections: [
      {
        heading: "Guias por plataforma",
        text: "Antes de comparar preços, confirme se o item é internacional, se há frete, se os tributos aparecem no checkout e se a oferta está dentro do Remessa Conforme.",
        links: [
          ["/imposto-aliexpress-brasil", "Imposto AliExpress"],
          ["/imposto-shein-brasil", "Imposto Shein"],
          ["/imposto-shopee-brasil", "Imposto Shopee"],
          ["/imposto-temu-brasil", "Imposto Temu"],
          ["/imposto-amazon-internacional-brasil", "Imposto Amazon internacional"],
        ],
      },
      {
        heading: "Combinações de loja e estado",
        text: "Quando o usuário já sabe a loja e o estado de entrega, as páginas combinadas ajudam a estimar ICMS e decidir se a compra importada ainda compensa.",
        links: [
          ["/imposto-aliexpress-sao-paulo", "AliExpress para São Paulo"],
          ["/imposto-shein-sao-paulo", "Shein para São Paulo"],
          ["/imposto-shopee-rio-de-janeiro", "Shopee para Rio de Janeiro"],
          ["/imposto-temu-rio-de-janeiro", "Temu para Rio de Janeiro"],
        ],
      },
    ],
  },
  "/guias/icms-por-estado": {
    title: "ICMS por Estado na Importação: São Paulo, Rio de Janeiro e Brasil",
    description:
      "Centro de guias sobre ICMS de importação por estado, com páginas para São Paulo, Rio de Janeiro, Minas Gerais, Paraná e Santa Catarina.",
    h1: "ICMS de importação por estado",
    answer:
      "O ICMS é estadual. O mesmo produto importado pode ter custo final diferente em São Paulo, Rio de Janeiro, Minas Gerais, Paraná, Santa Catarina ou outro estado.",
    sections: [
      {
        heading: "Estados prioritários",
        text: "Comece pelos estados com maior intenção de busca e maior impacto na decisão de compra. Depois use a calculadora para simular o pedido completo.",
        links: [
          ["/icms-importacao-sao-paulo", "ICMS importação São Paulo"],
          ["/icms-importacao-rio-de-janeiro", "ICMS importação Rio de Janeiro"],
          ["/icms-importacao-minas-gerais", "ICMS importação Minas Gerais"],
          ["/icms-importacao-parana", "ICMS importação Paraná"],
          ["/icms-importacao-santa-catarina", "ICMS importação Santa Catarina"],
        ],
      },
      {
        heading: "Como usar o estado na decisão",
        text: "O estado de entrega deve entrar na simulação junto com produto, frete, câmbio, Remessa Conforme e comparação nacional. Essa combinação evita decisões baseadas apenas no preço em dólar.",
        links: [
          ["/icms-importacao-brasil", "Guia geral de ICMS"],
          ["/guias/lojas-internacionais", "Ver lojas internacionais"],
          ["/", "Abrir calculadora"],
        ],
      },
    ],
  },
};

export const hubPaths = Object.keys(hubs);

export default function HubPage() {
  const [location] = useLocation();
  const hub = hubs[location as keyof typeof hubs];

  if (!hub) {
    return <NotFound />;
  }

  return (
    <>
      <SeoHead
        title={hub.title}
        description={hub.description}
        canonical={`https://www.taxadeimportacao.com${location}`}
      />

      <main className="mx-auto max-w-4xl px-6 py-12 text-slate-800">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: "Guias" },
            { label: hub.h1 },
          ]}
        />

        <h1 className="mb-6 text-4xl font-bold text-[#071933]">{hub.h1}</h1>

        <DirectAnswer>
          <p>{hub.answer}</p>
        </DirectAnswer>

        <div className="mt-10 space-y-10">
          {hub.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-2xl font-semibold text-[#071933]">
                {section.heading}
              </h2>
              <p className="mb-5 leading-relaxed text-slate-700">
                {section.text}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {section.links.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 shadow-sm hover:border-[#008272] hover:text-[#008272]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#008272]/20 bg-[#008272]/5 p-6">
          <h2 className="mb-2 text-2xl font-semibold text-[#071933]">
            Próximo passo
          </h2>
          <p className="mb-4 text-slate-700">
            Depois de entender a regra, simule o pedido com produto, frete,
            câmbio, estado e Remessa Conforme.
          </p>
          <a
            href="/"
            className="inline-block rounded-xl bg-[#008272] px-6 py-3 font-semibold text-white hover:bg-[#06264b]"
          >
            Calcular imposto agora
          </a>
        </div>

        <RelatedGuides currentPath={location} limit={6} />
      </main>
    </>
  );
}
