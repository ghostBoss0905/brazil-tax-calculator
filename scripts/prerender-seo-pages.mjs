import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = new URL("../dist/", import.meta.url);
const baseHtmlPath = new URL("index.html", distDir);
const distPath = fileURLToPath(distDir);

const pages = [
  {
    path: "/imposto-aliexpress-brasil",
    title: "Imposto AliExpress Brasil 2026: Como Calcular Taxas",
    description:
      "Entenda como calcular o imposto do AliExpress no Brasil em 2026, com Remessa Conforme, ICMS, frete e custo final antes da compra.",
  },
  {
    path: "/imposto-shein-brasil",
    title: "Imposto Shein Brasil 2026: Como Calcular Taxas",
    description:
      "Veja como funciona o imposto da Shein no Brasil em 2026, incluindo Remessa Conforme, ICMS e como estimar o valor final da compra.",
  },
  {
    path: "/imposto-shopee-brasil",
    title: "Imposto Shopee Brasil 2026: Como Calcular Taxas",
    description:
      "Entenda como calcular o imposto da Shopee no Brasil em 2026, com Remessa Conforme, ICMS, frete e custo final da compra.",
  },
  {
    path: "/o-que-e-remessa-conforme",
    title: "O Que é Remessa Conforme? Regras e Impostos 2026",
    description:
      "Entenda o Programa Remessa Conforme, como funciona a cobrança de impostos em compras internacionais e quando usar a calculadora.",
  },
  {
    path: "/icms-importacao-brasil",
    title: "ICMS Importação Brasil 2026: Como Calcular",
    description:
      "Entenda como o ICMS de importação entra no cálculo de compras internacionais no Brasil e como estimar o custo final.",
  },
  {
    path: "/como-calcular-imposto-importacao-brasil",
    title: "Como Calcular Imposto de Importação no Brasil 2026",
    description:
      "Aprenda como calcular imposto de importação no Brasil em 2026. Veja ICMS, Remessa Conforme e custo final atualizado.",
    howToSteps: [
      "Some o valor dos produtos comprados.",
      "Adicione frete internacional e seguro, se houver.",
      "Converta o valor para reais usando o câmbio da compra.",
      "Confira se a loja participa do Remessa Conforme.",
      "Aplique o Imposto de Importação conforme a regra da compra.",
      "Calcule o ICMS do estado de destino.",
      "Compare o custo final com uma opção vendida no Brasil.",
    ],
  },
  {
    path: "/tabela-imposto-importacao-brasil",
    title: "Tabela de Imposto de Importação Brasil 2026",
    description:
      "Veja a tabela de imposto de importação no Brasil em 2026 para compras internacionais, com Remessa Conforme, ICMS e exemplos práticos.",
  },
  {
    path: "/taxa-correios-importacao",
    title: "Taxa dos Correios Importação 2026: Como Pagar",
    description:
      "Entenda a taxa dos Correios em compras internacionais, como consultar tributos no Minhas Importações e quando pagar imposto de importação.",
  },
  {
    path: "/calcular-taxas-importacao",
    title: "Calcular Taxas de Importação 2026: Guia e Simulador",
    description:
      "Aprenda como calcular taxas de importação no Brasil em 2026, incluindo Imposto de Importação, ICMS, frete, câmbio e Remessa Conforme.",
    howToSteps: [
      "Some produto, frete e seguro.",
      "Converta o total para reais usando o câmbio da compra.",
      "Confira se a loja está no Programa Remessa Conforme.",
      "Aplique a regra de Imposto de Importação.",
      "Calcule o ICMS conforme o estado de entrega.",
      "Some cobranças postais, se existirem.",
      "Compare o custo final com uma compra nacional.",
    ],
  },
];

const siteOrigin = "https://www.taxadeimportacao.com";
const baseHtml = await readFile(baseHtmlPath, "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildSchema(page) {
  const canonical = `${siteOrigin}${page.path}`;
  const pageId = `${canonical}#webpage`;
  const articleId = `${canonical}#article`;
  const breadcrumbId = `${canonical}#breadcrumb`;
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteOrigin}/#organization`,
      name: "Taxa de Importação",
      url: siteOrigin,
    },
    {
      "@type": "WebSite",
      "@id": `${siteOrigin}/#website`,
      name: "Taxa de Importação",
      url: siteOrigin,
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${siteOrigin}/#organization`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteOrigin,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: canonical,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": pageId,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: "pt-BR",
      isPartOf: {
        "@id": `${siteOrigin}/#website`,
      },
      breadcrumb: {
        "@id": breadcrumbId,
      },
      datePublished: "2026-05-23",
      dateModified: "2026-05-23",
    },
    {
      "@type": "Article",
      "@id": articleId,
      mainEntityOfPage: {
        "@id": pageId,
      },
      headline: page.title,
      description: page.description,
      inLanguage: "pt-BR",
      author: {
        "@type": "Organization",
        "@id": `${siteOrigin}/#organization`,
      },
      publisher: {
        "@id": `${siteOrigin}/#organization`,
      },
      datePublished: "2026-05-23",
      dateModified: "2026-05-23",
    },
  ];

  if (page.howToSteps) {
    graph.push({
      "@type": "HowTo",
      "@id": `${canonical}#howto`,
      name: page.title,
      description: page.description,
      inLanguage: "pt-BR",
      mainEntityOfPage: {
        "@id": pageId,
      },
      step: page.howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text: step,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function buildSchemaTag(page) {
  return `<script type="application/ld+json">${JSON.stringify(buildSchema(page))}</script>`;
}

function updateHead(html, page) {
  const canonical = `${siteOrigin}${page.path}`;

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/s,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/s,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace("</head>", `    ${buildSchemaTag(page)}\n  </head>`);
}

for (const page of pages) {
  const html = updateHead(baseHtml, page);
  const outputPath = join(distPath, page.path, "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
  console.log(`Generated ${page.path}/index.html`);
}
