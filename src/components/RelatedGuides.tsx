const guides = [
  {
    href: "/calcular-taxas-importacao",
    title: "Calcular taxas de importação",
    description: "Veja o passo a passo para estimar imposto, ICMS, frete e câmbio.",
  },
  {
    href: "/tabela-imposto-importacao-brasil",
    title: "Tabela de imposto de importação",
    description: "Entenda as regras de até US$50, acima de US$50 e Remessa Conforme.",
  },
  {
    href: "/taxa-correios-importacao",
    title: "Taxa dos Correios na importação",
    description: "Saiba como consultar cobranças no Minhas Importações.",
  },
  {
    href: "/o-que-e-remessa-conforme",
    title: "O que é Remessa Conforme?",
    description: "Conheça o programa e como ele muda a cobrança de tributos.",
  },
  {
    href: "/icms-importacao-brasil",
    title: "ICMS na importação",
    description: "Veja por que o ICMS pode aumentar o custo final da compra.",
  },
  {
    href: "/como-calcular-imposto-importacao-brasil",
    title: "Como calcular imposto de importação",
    description: "Aprenda a montar a conta antes de comprar do exterior.",
  },
  {
    href: "/imposto-aliexpress-brasil",
    title: "Imposto do AliExpress",
    description: "Calcule o custo final de compras internacionais no AliExpress.",
  },
  {
    href: "/imposto-shein-brasil",
    title: "Imposto da Shein",
    description: "Entenda taxas, ICMS e Remessa Conforme em pedidos da Shein.",
  },
  {
    href: "/imposto-shopee-brasil",
    title: "Imposto da Shopee",
    description: "Compare produtos nacionais e internacionais antes de comprar.",
  },
  {
    href: "/imposto-temu-brasil",
    title: "Imposto da Temu",
    description: "Veja como estimar tributos, ICMS e custo final antes de comprar.",
  },
  {
    href: "/imposto-amazon-internacional-brasil",
    title: "Imposto da Amazon internacional",
    description: "Entenda compras internacionais, tributos no checkout e comparação nacional.",
  },
  {
    href: "/compras-internacionais-abaixo-50-dolares",
    title: "Compras abaixo de US$50",
    description: "Saiba quando há imposto federal, ICMS e cobrança no checkout.",
  },
  {
    href: "/lojas-remessa-conforme",
    title: "Lojas no Remessa Conforme",
    description: "Confira como validar lojas certificadas antes de finalizar a compra.",
  },
  {
    href: "/icms-importacao-sao-paulo",
    title: "ICMS importação São Paulo",
    description: "Simule o custo final de compras internacionais para SP.",
  },
  {
    href: "/icms-importacao-minas-gerais",
    title: "ICMS importação Minas Gerais",
    description: "Veja como o ICMS de MG entra na estimativa da importação.",
  },
  {
    href: "/icms-importacao-parana",
    title: "ICMS importação Paraná",
    description: "Entenda a simulação de ICMS para compras internacionais no PR.",
  },
  {
    href: "/icms-importacao-rio-de-janeiro",
    title: "ICMS importação Rio de Janeiro",
    description: "Calcule o impacto do ICMS do RJ no custo final importado.",
  },
  {
    href: "/icms-importacao-santa-catarina",
    title: "ICMS importação Santa Catarina",
    description: "Compare importação e compra nacional usando o estado SC.",
  },
];

type RelatedGuidesProps = {
  currentPath?: string;
  title?: string;
  intro?: string;
  limit?: number;
};

export default function RelatedGuides({
  currentPath,
  title = "Guias relacionados",
  intro = "Continue entendendo os principais custos de compras internacionais no Brasil.",
  limit,
}: RelatedGuidesProps) {
  const visibleGuides = guides
    .filter((guide) => guide.href !== currentPath)
    .slice(0, limit ?? guides.length);

  return (
    <section className="mt-12">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-2 text-[#071933]">{title}</h2>
        <p className="text-slate-600">{intro}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {visibleGuides.map((guide) => (
          <a
            key={guide.href}
            href={guide.href}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-[#008272]"
          >
            <span className="absolute right-0 top-0 h-16 w-16 opacity-60">
              <span className="absolute right-0 top-0 h-8 w-8 bg-[#ffca28]/30 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
              <span className="absolute right-8 top-8 h-8 w-8 bg-[#0b7f55]/20 [clip-path:polygon(0_0,100%_100%,0_100%)]" />
              <span className="absolute right-0 top-8 h-8 w-8 bg-[#06264b]/10 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
            </span>
            <span className="relative block font-semibold text-[#071933] group-hover:text-[#008272]">
              {guide.title}
            </span>
            <span className="relative mt-1 block text-sm text-slate-600">
              {guide.description}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
