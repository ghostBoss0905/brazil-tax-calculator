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
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{intro}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {visibleGuides.map((guide) => (
          <a
            key={guide.href}
            href={guide.href}
            className="block rounded-lg border border-gray-200 p-4 hover:border-gray-400 transition-colors"
          >
            <span className="font-semibold text-gray-950">{guide.title}</span>
            <span className="block text-sm text-gray-600 mt-1">
              {guide.description}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
