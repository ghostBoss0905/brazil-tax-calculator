import { useLocation } from "wouter";

import Breadcrumb from "@/components/Breadcrumb";
import SeoHead from "@/components/SeoHead";

const legalPages = {
  "/politica-de-privacidade": {
    title: "Política de Privacidade | Taxa de Importação",
    description:
      "Entenda como a Taxa de Importação trata dados de navegação e uso da calculadora.",
    h1: "Política de Privacidade",
    updated: "Junho de 2026",
    sections: [
      {
        heading: "Dados que podemos coletar",
        body: "Podemos coletar dados técnicos de navegação, como páginas acessadas, dispositivo, navegador, país aproximado e eventos de uso da calculadora. Quando houver campo de contato ou inscrição, coletamos apenas as informações fornecidas pelo usuário.",
      },
      {
        heading: "Como usamos esses dados",
        body: "Usamos os dados para manter o site funcionando, entender quais páginas ajudam os usuários, melhorar a calculadora, corrigir erros e medir desempenho em ferramentas como Google Search Console ou analytics.",
      },
      {
        heading: "Compartilhamento",
        body: "Não vendemos dados pessoais. Dados técnicos podem ser processados por provedores de hospedagem, analytics, segurança e ferramentas necessárias para operar o site.",
      },
      {
        heading: "Direitos do usuário",
        body: "O usuário pode solicitar acesso, correção ou exclusão de dados pessoais eventualmente fornecidos. Solicitações devem ser feitas pelos canais de contato publicados no site.",
      },
    ],
  },
  "/politica-de-cookies": {
    title: "Política de Cookies | Taxa de Importação",
    description:
      "Veja como cookies e tecnologias semelhantes podem ser usados na Taxa de Importação.",
    h1: "Política de Cookies",
    updated: "Junho de 2026",
    sections: [
      {
        heading: "O que são cookies",
        body: "Cookies são pequenos arquivos ou identificadores usados para lembrar preferências, medir uso do site, melhorar desempenho e ajudar na segurança da navegação.",
      },
      {
        heading: "Tipos de cookies",
        body: "Podemos usar cookies essenciais para funcionamento do site, cookies de desempenho para entender uso agregado e cookies de terceiros quando ferramentas externas forem necessárias.",
      },
      {
        heading: "Como gerenciar",
        body: "O usuário pode bloquear ou apagar cookies nas configurações do navegador. Algumas funções podem ficar limitadas se cookies essenciais forem desativados.",
      },
    ],
  },
  "/aviso-legal": {
    title: "Aviso Legal e Limites da Estimativa | Taxa de Importação",
    description:
      "Leia o aviso legal sobre estimativas de imposto de importação, ICMS e Remessa Conforme.",
    h1: "Aviso Legal",
    updated: "Junho de 2026",
    sections: [
      {
        heading: "Estimativa, não orientação fiscal",
        body: "A Taxa de Importação oferece uma estimativa educacional para ajudar consumidores a comparar o custo final de compras internacionais. O conteúdo não constitui orientação fiscal, jurídica ou contábil.",
      },
      {
        heading: "Valor oficial",
        body: "O valor oficial pode variar conforme Receita Federal, plataforma, checkout, transportadora, Correios, câmbio, descrição da mercadoria, frete, seguro, estado de destino e regras vigentes no momento da importação.",
      },
      {
        heading: "Fontes e atualização",
        body: "As páginas usam fontes públicas, como Receita Federal e Portal Compras Internacionais. Como regras de importação podem mudar, revise sempre o checkout e fontes oficiais antes de finalizar a compra.",
      },
      {
        heading: "Responsabilidade do usuário",
        body: "A decisão de compra é responsabilidade do usuário. Use a calculadora como apoio para comparar cenários, não como garantia de cobrança final.",
      },
    ],
  },
};

export const legalPagePaths = Object.keys(legalPages);

export default function LegalPage() {
  const [location] = useLocation();
  const page =
    legalPages[location as keyof typeof legalPages] ??
    legalPages["/aviso-legal"];

  return (
    <>
      <SeoHead
        title={page.title}
        description={page.description}
        canonical={`https://www.taxadeimportacao.com${location}`}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 text-slate-800">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: page.h1 },
          ]}
        />

        <h1 className="mb-4 text-4xl font-bold text-[#071933]">{page.h1}</h1>
        <p className="mb-8 text-sm text-slate-500">
          Última atualização: {page.updated}
        </p>

        {page.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="mb-3 text-2xl font-semibold text-[#071933]">
              {section.heading}
            </h2>
            <p className="leading-relaxed">{section.body}</p>
          </section>
        ))}

        <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed">
          <p className="font-semibold text-[#071933]">
            Importante para compras internacionais
          </p>
          <p className="mt-2">
            Antes de pagar uma compra, confirme os tributos no checkout, nos
            Correios, na transportadora ou nas páginas oficiais da Receita
            Federal. A calculadora serve para comparação e planejamento.
          </p>
        </div>
      </main>
    </>
  );
}
