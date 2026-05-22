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
    );
}

for (const page of pages) {
  const html = updateHead(baseHtml, page);
  const outputPath = join(distPath, page.path, "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
  console.log(`Generated ${page.path}/index.html`);
}
