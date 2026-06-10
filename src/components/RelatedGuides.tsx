type Guide = {
  href: string;
  title: string;
  description: string;
};

const platformGuides = [
  {
    slug: "aliexpress",
    name: "AliExpress",
    href: "/imposto-aliexpress-brasil",
  },
  {
    slug: "shein",
    name: "Shein",
    href: "/imposto-shein-brasil",
  },
  {
    slug: "shopee",
    name: "Shopee",
    href: "/imposto-shopee-brasil",
  },
  {
    slug: "temu",
    name: "Temu",
    href: "/imposto-temu-brasil",
  },
  {
    slug: "amazon-internacional",
    name: "Amazon internacional",
    href: "/imposto-amazon-internacional-brasil",
  },
];

const stateGuides = [
  { slug: "sao-paulo", name: "São Paulo", code: "SP" },
  { slug: "rio-de-janeiro", name: "Rio de Janeiro", code: "RJ" },
  { slug: "minas-gerais", name: "Minas Gerais", code: "MG" },
  { slug: "parana", name: "Paraná", code: "PR" },
  { slug: "santa-catarina", name: "Santa Catarina", code: "SC" },
];

const guides: Guide[] = [
  {
    href: "/guias/regras-importacao",
    title: "Centro de regras de importação",
    description: "Veja Remessa Conforme, US$50, US$30 de desconto, ICMS e Correios.",
  },
  {
    href: "/guias/lojas-internacionais",
    title: "Centro de lojas internacionais",
    description: "Acesse guias para AliExpress, Shein, Shopee, Temu e Amazon.",
  },
  {
    href: "/guias/icms-por-estado",
    title: "Centro de ICMS por estado",
    description: "Compare São Paulo, Rio de Janeiro, Minas Gerais, Paraná e outros estados.",
  },
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

const guideMap = new Map(guides.map((guide) => [guide.href, guide]));

function findPlatformByPath(path: string) {
  return platformGuides.find(
    (platform) =>
      path === platform.href || path.startsWith(`/imposto-${platform.slug}-`),
  );
}

function findStateBySlug(slug: string) {
  return stateGuides.find((state) => state.slug === slug);
}

function platformStateHref(platformSlug: string, stateSlug: string) {
  return `/imposto-${platformSlug}-${stateSlug}`;
}

function buildDynamicGuide(href: string): Guide | undefined {
  const staticGuide = guideMap.get(href);

  if (staticGuide) {
    return staticGuide;
  }

  const platformStateMatch = href.match(
    /^\/imposto-(aliexpress|shein|shopee|temu|amazon-internacional)-(.+)$/,
  );

  if (platformStateMatch) {
    const [, platformSlug, stateSlug] = platformStateMatch;
    const platform = platformGuides.find((item) => item.slug === platformSlug);
    const state = findStateBySlug(stateSlug);

    if (platform && state) {
      return {
        href,
        title: `Imposto ${platform.name} ${state.name}`,
        description: `Veja custo final, ICMS de ${state.code} e Remessa Conforme para esta compra.`,
      };
    }
  }

  const stateMatch = href.match(/^\/icms-importacao-(.+)$/);

  if (stateMatch) {
    const state = findStateBySlug(stateMatch[1]);

    if (state) {
      return {
        href,
        title: `ICMS importação ${state.name}`,
        description: `Entenda como o ICMS de ${state.code} muda o custo final.`,
      };
    }
  }

  return undefined;
}

function uniqueHrefs(hrefs: string[]) {
  return Array.from(new Set(hrefs));
}

function getRelatedHrefs(currentPath?: string) {
  if (!currentPath || currentPath === "/") {
    return guides.map((guide) => guide.href);
  }

  if (currentPath === "/guias/regras-importacao") {
    return uniqueHrefs([
      "/o-que-e-remessa-conforme",
      "/compras-internacionais-abaixo-50-dolares",
      "/tabela-imposto-importacao-brasil",
      "/taxa-correios-importacao",
      "/icms-importacao-brasil",
      "/guias/lojas-internacionais",
      "/guias/icms-por-estado",
    ]);
  }

  if (currentPath === "/guias/lojas-internacionais") {
    return uniqueHrefs([
      ...platformGuides.map((platformGuide) => platformGuide.href),
      "/lojas-remessa-conforme",
      "/guias/regras-importacao",
      "/guias/icms-por-estado",
    ]);
  }

  if (currentPath === "/guias/icms-por-estado") {
    return uniqueHrefs([
      "/icms-importacao-brasil",
      ...stateGuides.map((state) => `/icms-importacao-${state.slug}`),
      "/guias/regras-importacao",
      "/guias/lojas-internacionais",
    ]);
  }

  const platformStateMatch = currentPath.match(
    /^\/imposto-(aliexpress|shein|shopee|temu|amazon-internacional)-(.+)$/,
  );

  if (platformStateMatch) {
    const [, platformSlug, stateSlug] = platformStateMatch;
    const platform = platformGuides.find((item) => item.slug === platformSlug);
    const state = findStateBySlug(stateSlug);

    return uniqueHrefs([
      platform?.href ?? "",
      state ? `/icms-importacao-${state.slug}` : "",
      "/o-que-e-remessa-conforme",
      "/compras-internacionais-abaixo-50-dolares",
      ...platformGuides
        .filter((item) => item.slug !== platformSlug)
        .map((item) => platformStateHref(item.slug, stateSlug)),
      ...stateGuides
        .filter((item) => item.slug !== stateSlug)
        .slice(0, 2)
        .map((item) => platformStateHref(platformSlug, item.slug)),
    ]).filter(Boolean);
  }

  const platform = findPlatformByPath(currentPath);

  if (platform && currentPath === platform.href) {
    return uniqueHrefs([
      "/guias/lojas-internacionais",
      "/o-que-e-remessa-conforme",
      "/icms-importacao-brasil",
      "/compras-internacionais-abaixo-50-dolares",
      "/lojas-remessa-conforme",
      ...stateGuides
        .slice(0, 3)
        .map((state) => platformStateHref(platform.slug, state.slug)),
      ...platformGuides
        .filter((item) => item.slug !== platform.slug)
        .map((item) => item.href),
    ]);
  }

  const stateMatch = currentPath.match(/^\/icms-importacao-(.+)$/);

  if (stateMatch) {
    const state = findStateBySlug(stateMatch[1]);

    if (state) {
      return uniqueHrefs([
        "/guias/icms-por-estado",
        "/icms-importacao-brasil",
        ...platformGuides.map((item) => platformStateHref(item.slug, state.slug)),
        "/o-que-e-remessa-conforme",
        "/compras-internacionais-abaixo-50-dolares",
      ]);
    }
  }

  if (currentPath === "/o-que-e-remessa-conforme") {
    return uniqueHrefs([
      "/guias/regras-importacao",
      "/lojas-remessa-conforme",
      "/compras-internacionais-abaixo-50-dolares",
      "/tabela-imposto-importacao-brasil",
      "/icms-importacao-brasil",
      ...platformGuides.map((platformGuide) => platformGuide.href),
    ]);
  }

  if (currentPath === "/icms-importacao-brasil") {
    return uniqueHrefs([
      "/guias/icms-por-estado",
      ...stateGuides.map((state) => `/icms-importacao-${state.slug}`),
      "/o-que-e-remessa-conforme",
      "/calcular-taxas-importacao",
      "/tabela-imposto-importacao-brasil",
    ]);
  }

  return guides.map((guide) => guide.href);
}

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
  const preferredGuides = getRelatedHrefs(currentPath)
    .filter((href) => href !== currentPath)
    .map(buildDynamicGuide)
    .filter((guide): guide is Guide => Boolean(guide));
  const fallbackGuides = guides.filter(
    (guide) =>
      guide.href !== currentPath &&
      !preferredGuides.some((preferred) => preferred.href === guide.href),
  );
  const visibleGuides = [...preferredGuides, ...fallbackGuides].slice(
    0,
    limit ?? guides.length,
  );

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
