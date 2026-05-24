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
    faqs: [
      {
        question: "Compras abaixo de US$50 são isentas?",
        answer:
          "Em sites certificados no Remessa Conforme, o Imposto de Importação federal pode ser 0% até US$50, mas o ICMS estadual pode continuar sendo cobrado.",
      },
      {
        question: "A tabela vale para compras fora do Remessa Conforme?",
        answer:
          "Compras fora de sites certificados podem ter regra diferente, incluindo cobrança de 60% de Imposto de Importação e ICMS quando a encomenda chega ao Brasil.",
      },
      {
        question: "Por que o ICMS aparece mesmo quando o imposto federal é 0%?",
        answer:
          "Porque o Imposto de Importação federal e o ICMS estadual são cobranças diferentes. Em compras até US$50 dentro do Remessa Conforme, a regra federal pode ser 0%, mas o ICMS estadual ainda pode ser cobrado.",
      },
    ],
  },
  {
    path: "/taxa-correios-importacao",
    title: "Taxa dos Correios Importação 2026: Como Pagar",
    description:
      "Entenda a taxa dos Correios em compras internacionais, como consultar tributos no Minhas Importações e quando pagar imposto de importação.",
    faqs: [
      {
        question: "Onde pago a taxa dos Correios?",
        answer:
          "O pagamento é feito no ambiente Minhas Importações ou no app dos Correios, quando houver cobrança pendente para a encomenda.",
      },
      {
        question: "O que acontece se eu não pagar?",
        answer:
          "A encomenda pode não ser liberada para entrega e pode seguir o fluxo definido pelos Correios e pela Receita Federal para objetos não pagos.",
      },
      {
        question: "Posso pagar primeiro e pedir revisão depois?",
        answer:
          "A orientação mais segura é pedir revisão antes do pagamento quando você discordar da cobrança. Depois de pagar, a contestação pode seguir outro caminho e ficar mais difícil.",
      },
    ],
  },
  {
    path: "/calcular-taxas-importacao",
    title: "Calcular Taxas de Importação 2026: Guia e Simulador",
    description:
      "Aprenda como calcular taxas de importação no Brasil em 2026, incluindo Imposto de Importação, ICMS, frete, câmbio e Remessa Conforme.",
    faqs: [
      {
        question: "Preciso calcular ICMS separadamente?",
        answer:
          "Sim. O ICMS é estadual e pode mudar o valor final. Por isso, a calculadora pede o estado de destino.",
      },
      {
        question: "Frete entra no cálculo?",
        answer:
          "Sim. Frete e seguro, quando houver, podem entrar no valor aduaneiro usado como base da importação.",
      },
      {
        question: "A estimativa da calculadora é o valor final oficial?",
        answer:
          "Não. A calculadora serve para estimar o custo antes da compra. O valor oficial depende das informações declaradas, do enquadramento da remessa, do estado de destino e da cobrança registrada no checkout, nos Correios ou na transportadora.",
      },
    ],
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
  {
    path: "/imposto-temu-brasil",
    title: "Imposto Temu Brasil 2026: Como Calcular Taxas",
    description:
      "Entenda como calcular imposto da Temu no Brasil em 2026, com Remessa Conforme, ICMS, frete, câmbio e comparação antes da compra.",
    faqs: [
      {
        question: "A Temu participa do Remessa Conforme?",
        answer:
          "A Receita Federal lista empresas e plataformas certificadas no Programa Remessa Conforme. Antes de comprar, confirme no checkout se os tributos aparecem discriminados.",
      },
      {
        question: "Compra da Temu abaixo de US$50 fica sem imposto?",
        answer:
          "Em plataformas certificadas, o Imposto de Importação federal pode ser 0% até US$50, mas o ICMS estadual pode continuar sendo cobrado.",
      },
      {
        question: "Frete da Temu entra no cálculo?",
        answer:
          "Sim. Produto, frete e seguro, quando houver, podem compor o valor usado para estimar a importação.",
      },
    ],
  },
  {
    path: "/imposto-amazon-internacional-brasil",
    title: "Imposto Amazon Internacional Brasil 2026: Como Calcular",
    description:
      "Veja como estimar imposto em compras internacionais na Amazon em 2026, com Remessa Conforme, ICMS, frete e custo final.",
    faqs: [
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
    ],
  },
  {
    path: "/compras-internacionais-abaixo-50-dolares",
    title: "Compras Abaixo de US$50 Pagam Imposto? Regras 2026",
    description:
      "Entenda quando compras internacionais abaixo de US$50 pagam imposto no Brasil em 2026, com Remessa Conforme, ICMS e exemplos.",
    faqs: [
      {
        question: "Compras abaixo de US$50 pagam imposto no Brasil?",
        answer:
          "Em plataformas certificadas no Remessa Conforme, o Imposto de Importação federal pode ser 0%, mas o ICMS estadual pode continuar sendo cobrado.",
      },
      {
        question: "O limite de US$50 inclui frete?",
        answer:
          "Para estimar a compra com segurança, considere produto, frete e seguro quando houver, pois esses valores podem compor a operação de importação.",
      },
      {
        question: "Fora do Remessa Conforme a regra muda?",
        answer:
          "Sim. Compras fora de plataformas certificadas podem seguir regra diferente e ter cobrança na chegada ao Brasil.",
      },
    ],
  },
  {
    path: "/lojas-remessa-conforme",
    title: "Lojas no Remessa Conforme 2026: Como Conferir",
    description:
      "Veja como conferir lojas e marketplaces no Programa Remessa Conforme em 2026 e por que isso muda o imposto de importação.",
    faqs: [
      {
        question: "Como saber se uma loja está no Remessa Conforme?",
        answer:
          "Consulte a lista pública da Receita Federal e confirme no checkout se os tributos aparecem antes do pagamento.",
      },
      {
        question: "Toda oferta de marketplace segue a mesma regra?",
        answer:
          "Não necessariamente. Em marketplaces, a operação pode depender do vendedor, da logística e do que aparece no checkout.",
      },
      {
        question: "Estar no Remessa Conforme elimina o ICMS?",
        answer:
          "Não. O Remessa Conforme pode mudar a cobrança do Imposto de Importação federal, mas o ICMS estadual pode continuar sendo cobrado.",
      },
    ],
    howToSteps: [
      "Abra a lista oficial da Receita Federal.",
      "Procure a empresa ou plataforma.",
      "Verifique se a compra mostra tributos no checkout.",
      "Some produto, frete e seguro quando houver.",
      "Simule o custo final com ICMS do estado de entrega.",
    ],
  },
  {
    path: "/icms-importacao-sao-paulo",
    title: "ICMS Importação São Paulo 2026: Como Calcular",
    description:
      "Entenda como estimar ICMS de importação para São Paulo em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.",
    faqs: [
      {
        question: "Qual ICMS a calculadora usa para São Paulo?",
        answer:
          "Para São Paulo, a calculadora usa 18% como alíquota estimada de ICMS no estado de destino.",
      },
      {
        question: "Compra abaixo de US$50 para SP paga ICMS?",
        answer:
          "Pode pagar. Mesmo quando o Imposto de Importação federal é 0% em plataforma certificada, o ICMS estadual pode continuar aparecendo no custo final.",
      },
      {
        question: "O valor final é oficial?",
        answer:
          "Não. A página e a calculadora oferecem uma estimativa para decisão de compra. O valor oficial depende do checkout, da declaração da remessa e das autoridades competentes.",
      },
    ],
  },
  {
    path: "/icms-importacao-minas-gerais",
    title: "ICMS Importação Minas Gerais 2026: Como Calcular",
    description:
      "Entenda como estimar ICMS de importação para Minas Gerais em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.",
    faqs: [
      {
        question: "Qual ICMS a calculadora usa para Minas Gerais?",
        answer:
          "Para Minas Gerais, a calculadora usa 20% como alíquota estimada de ICMS no estado de destino.",
      },
      {
        question: "Compra abaixo de US$50 para MG paga ICMS?",
        answer:
          "Pode pagar. Mesmo quando o Imposto de Importação federal é 0% em plataforma certificada, o ICMS estadual pode continuar aparecendo no custo final.",
      },
      {
        question: "O valor final é oficial?",
        answer:
          "Não. A página e a calculadora oferecem uma estimativa para decisão de compra. O valor oficial depende do checkout, da declaração da remessa e das autoridades competentes.",
      },
    ],
  },
  {
    path: "/icms-importacao-parana",
    title: "ICMS Importação Paraná 2026: Como Calcular",
    description:
      "Entenda como estimar ICMS de importação para Paraná em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.",
    faqs: [
      {
        question: "Qual ICMS a calculadora usa para Paraná?",
        answer:
          "Para Paraná, a calculadora usa 19,5% como alíquota estimada de ICMS no estado de destino.",
      },
      {
        question: "Compra abaixo de US$50 para PR paga ICMS?",
        answer:
          "Pode pagar. Mesmo quando o Imposto de Importação federal é 0% em plataforma certificada, o ICMS estadual pode continuar aparecendo no custo final.",
      },
      {
        question: "O valor final é oficial?",
        answer:
          "Não. A página e a calculadora oferecem uma estimativa para decisão de compra. O valor oficial depende do checkout, da declaração da remessa e das autoridades competentes.",
      },
    ],
  },
  {
    path: "/icms-importacao-rio-de-janeiro",
    title: "ICMS Importação Rio de Janeiro 2026: Como Calcular",
    description:
      "Entenda como estimar ICMS de importação para Rio de Janeiro em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.",
    faqs: [
      {
        question: "Qual ICMS a calculadora usa para Rio de Janeiro?",
        answer:
          "Para Rio de Janeiro, a calculadora usa 22% como alíquota estimada de ICMS no estado de destino.",
      },
      {
        question: "Compra abaixo de US$50 para RJ paga ICMS?",
        answer:
          "Pode pagar. Mesmo quando o Imposto de Importação federal é 0% em plataforma certificada, o ICMS estadual pode continuar aparecendo no custo final.",
      },
      {
        question: "O valor final é oficial?",
        answer:
          "Não. A página e a calculadora oferecem uma estimativa para decisão de compra. O valor oficial depende do checkout, da declaração da remessa e das autoridades competentes.",
      },
    ],
  },
  {
    path: "/icms-importacao-santa-catarina",
    title: "ICMS Importação Santa Catarina 2026: Como Calcular",
    description:
      "Entenda como estimar ICMS de importação para Santa Catarina em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.",
    faqs: [
      {
        question: "Qual ICMS a calculadora usa para Santa Catarina?",
        answer:
          "Para Santa Catarina, a calculadora usa 17% como alíquota estimada de ICMS no estado de destino.",
      },
      {
        question: "Compra abaixo de US$50 para SC paga ICMS?",
        answer:
          "Pode pagar. Mesmo quando o Imposto de Importação federal é 0% em plataforma certificada, o ICMS estadual pode continuar aparecendo no custo final.",
      },
      {
        question: "O valor final é oficial?",
        answer:
          "Não. A página e a calculadora oferecem uma estimativa para decisão de compra. O valor oficial depende do checkout, da declaração da remessa e das autoridades competentes.",
      },
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
      dateModified: "2026-05-24",
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
      dateModified: "2026-05-24",
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

  if (page.faqs) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
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
