import { useLocation } from "wouter";

import Breadcrumb from "@/components/Breadcrumb";
import RelatedGuides from "@/components/RelatedGuides";
import SeoHead from "@/components/SeoHead";
import NotFound from "@/pages/not-found";

const trustPages = {
  "/sobre": {
    title: "Sobre a Taxa de Importação | Calculadora para Compras Internacionais",
    description:
      "Conheça o propósito da Taxa de Importação: ajudar consumidores no Brasil a estimar impostos, ICMS, frete e Remessa Conforme antes de comprar.",
    h1: "Sobre a Taxa de Importação",
    answer:
      "A Taxa de Importação é uma calculadora independente criada para ajudar consumidores no Brasil a comparar o custo final de compras internacionais antes do pagamento.",
    sections: [
      {
        heading: "Propósito do site",
        body: "O site existe para transformar regras de importação em uma estimativa prática. O foco é ajudar quem compra em AliExpress, Shein, Shopee, Temu, Amazon internacional e outras lojas a entender produto, frete, câmbio, Imposto de Importação, ICMS e Remessa Conforme.",
      },
      {
        heading: "Como o conteúdo é produzido",
        body: "As páginas combinam fontes públicas, regras divulgadas por órgãos oficiais e exemplos de compra comuns para consumidores brasileiros. Sempre que uma regra pode variar por checkout, transportadora ou estado, a página deixa isso claro e recomenda conferência no pagamento.",
      },
      {
        heading: "Independência editorial",
        body: "A Taxa de Importação não é afiliada à Receita Federal, Correios, AliExpress, Shein, Shopee, Temu ou Amazon. As marcas são citadas apenas para explicar cenários de compra e facilitar a comparação de custos.",
      },
    ],
  },
  "/metodologia": {
    title: "Metodologia da Calculadora de Importação | Taxa de Importação",
    description:
      "Veja como a calculadora estima custo final de importação com produto, frete, câmbio, Imposto de Importação, ICMS e Remessa Conforme.",
    h1: "Metodologia da calculadora",
    answer:
      "A calculadora estima o custo final somando produto, frete, câmbio, regra de Imposto de Importação, ICMS estadual e o enquadramento informado no Remessa Conforme.",
    sections: [
      {
        heading: "Dados informados pelo usuário",
        body: "O cálculo começa com valor do produto, moeda, frete, taxa de câmbio, estado de destino e indicação de Remessa Conforme. Esses dados mudam o resultado, por isso a estimativa deve refletir o carrinho real antes do pagamento.",
      },
      {
        heading: "Como a estimativa é montada",
        body: "Produto e frete são convertidos para reais. Depois a calculadora aplica a regra federal informada para o cenário e soma o ICMS estimado do estado de entrega. Quando o pedido está no Remessa Conforme, compras até US$50 podem ter Imposto de Importação federal de 0%, mas o ICMS continua relevante.",
      },
      {
        heading: "Limites da simulação",
        body: "O valor exibido é uma estimativa educacional. O custo oficial pode variar conforme descrição da mercadoria, frete, seguro, câmbio usado, plataforma, transportadora, Correios, Receita Federal, estado de destino e regra vigente no momento da importação.",
      },
      {
        heading: "Como usamos exemplos",
        body: "Os exemplos das páginas foram criados para representar situações comuns de compra internacional. Eles não garantem o valor oficial, mas ajudam o usuário a comparar importação e compra nacional antes de decidir.",
      },
    ],
  },
  "/fontes-oficiais": {
    title: "Fontes Oficiais sobre Imposto de Importação | Taxa de Importação",
    description:
      "Veja as fontes usadas para orientar a calculadora: Receita Federal, Portal Compras Internacionais, Correios e páginas oficiais sobre remessas internacionais.",
    h1: "Fontes oficiais e referências",
    answer:
      "A Taxa de Importação usa fontes públicas e oficiais como base editorial, principalmente Receita Federal, Portal Compras Internacionais e Correios.",
    sections: [
      {
        heading: "Receita Federal",
        body: "A Receita Federal é a principal referência para regras de remessas internacionais, Imposto de Importação, Remessa Conforme e empresas certificadas no programa.",
      },
      {
        heading: "Portal Compras Internacionais",
        body: "O Portal Compras Internacionais ajuda o consumidor a acompanhar encomendas, entender pagamentos pendentes e consultar informações práticas sobre compras do exterior.",
      },
      {
        heading: "Correios e transportadoras",
        body: "Correios e transportadoras podem apresentar cobranças, prazos e procedimentos específicos. Por isso, páginas sobre taxa postal e entrega sempre indicam que o usuário confirme a informação no canal de atendimento da encomenda.",
      },
      {
        heading: "Revisão editorial",
        body: "As páginas são revisadas quando regras públicas mudam ou quando o comportamento observado em Search Console indica que uma explicação precisa ficar mais clara. A versão atual do conteúdo é Junho de 2026.",
      },
    ],
    sources: [
      {
        label: "Receita Federal - Remessas internacionais",
        href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa",
      },
      {
        label: "Receita Federal - Empresas certificadas no Remessa Conforme",
        href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/empresas-certificadas-no-programa-remessa-conforme-prc",
      },
      {
        label: "Portal Compras Internacionais",
        href: "https://www.portalcomprasinternacionais.com.br/",
      },
      {
        label: "Correios - Minhas Importações",
        href: "https://www.correios.com.br/receber/encomenda/internacional",
      },
    ],
  },
};

export const trustPagePaths = Object.keys(trustPages);

export default function TrustPage() {
  const [location] = useLocation();
  const page = trustPages[location as keyof typeof trustPages];

  if (!page) {
    return <NotFound />;
  }

  return (
    <>
      <SeoHead
        title={page.title}
        description={page.description}
        canonical={`https://www.taxadeimportacao.com${location}`}
      />

      <main className="mx-auto max-w-4xl px-6 py-12 text-slate-800">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: page.h1 },
          ]}
        />

        <h1 className="mb-5 text-4xl font-bold text-[#071933]">{page.h1}</h1>

        <section className="mb-10 rounded-2xl border border-[#008272]/20 bg-[#008272]/5 p-5">
          <p className="text-lg leading-relaxed text-slate-800">{page.answer}</p>
        </section>

        <div className="space-y-8">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-2xl font-semibold text-[#071933]">
                {section.heading}
              </h2>
              <p className="leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        {"sources" in page && page.sources ? (
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-2xl font-semibold text-[#071933]">
              Links de referência
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              {page.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700">
          <p className="font-semibold text-[#071933]">Última revisão</p>
          <p className="mt-1">
            Conteúdo revisado em Junho de 2026. Use a calculadora como apoio
            para comparação; confirme valores oficiais no checkout, nos Correios,
            na transportadora ou em fontes públicas competentes.
          </p>
        </div>

        <RelatedGuides currentPath={location} limit={6} />
      </main>
    </>
  );
}
