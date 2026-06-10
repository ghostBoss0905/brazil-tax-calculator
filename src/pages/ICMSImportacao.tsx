import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import { icmsStatePages } from "@/pages/ICMSPorEstado";
import Breadcrumb from "@/components/Breadcrumb";

export default function ICMSImportacao() {
  return (
    <>
      <SeoHead
        title="ICMS Importação Brasil 2026 | Tabela por Estado e Cálculo"
        description="ICMS de importação por estado. Tabela 2026 atualizada. Veja a alíquota do seu estado e calcule o custo final da importação."
        canonical="https://www.taxadeimportacao.com/icms-importacao-brasil"
        faqs={[
          {
            question: "O ICMS é cobrado em todas as importações?",
            answer:
              "Sim, na maioria das compras internacionais para o Brasil, o ICMS faz parte da tributação e varia conforme o estado de destino. A alíquota estadual oscila entre 17% e 20%, dependendo da unidade federativa, e incide sobre uma base de cálculo que pode incluir produto, frete, seguro e o próprio Imposto de Importação. Mesmo compras abaixo de US$50 em plataformas certificadas no Remessa Conforme, onde o Imposto de Importação federal é 0%, ainda pagam ICMS. Por isso, é fundamental informar o estado de entrega ao calcular o custo total da importação.",
          },
          {
            question: "Qual é o ICMS de importação no Brasil?",
            answer:
              "A alíquota de ICMS na importação varia entre 17% e 20%, conforme o estado de destino e a regra aplicável à compra. Estados como Santa Catarina e Espírito Santo usam 17%, enquanto Minas Gerais e Ceará aplicam 20%. A base de cálculo do ICMS é calculada por dentro e pode incluir o valor do produto, frete, seguro e Imposto de Importação, amplificando o efeito no custo final. Para estimar corretamente, use a calculadora informando o estado de entrega.",
          },
          {
            question: "Como pagar o ICMS de importação?",
            answer:
              "Em compras feitas por plataformas certificadas no Remessa Conforme, o ICMS costuma ser cobrado no checkout junto com o Imposto de Importação, antes do pagamento. Fora do programa, o ICMS pode ser cobrado quando a encomenda chega ao Brasil, por meio dos Correios ou da transportadora, com notificação de pagamento pendente. O pagamento pode ser feito no ambiente Minhas Importações ou no aplicativo dos Correios. Sempre confira se os tributos aparecem no checkout para evitar surpresas na entrega.",
          },
          {
            question: "O ICMS aparece no checkout?",
            answer:
              "Em compras feitas dentro do Remessa Conforme, o ICMS pode aparecer discriminado no checkout junto com o Imposto de Importação, antes do pagamento. Fora desse fluxo, o ICMS é cobrado na chegada da encomenda ao Brasil, pelos Correios ou pela transportadora. A diferença é importante: no Remessa Conforme, compras até US$50 têm Imposto de Importação de 0%, mas o ICMS (17% a 20%) continua aparecendo. Verificar a tela de pagamento antes de finalizar o pedido é a forma mais segura de prever o custo total.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-6">
        ICMS na Importação do Brasil (2026)
      </h1>

      <DirectAnswer>
        <p>
          ICMS na importação é um imposto estadual que pode entrar no custo de
          compras internacionais. Ele varia conforme o estado de destino e deve
          ser considerado junto com produto, frete, seguro e Imposto de
          Importação.
        </p>
      </DirectAnswer>

      <Breadcrumb items={[
        { label: "Início", href: "/" },
        { label: "ICMS na importação" }
      ]} />

      <p className="text-lg mb-8">
        O ICMS é um dos principais impostos cobrados em compras internacionais
        no Brasil. Mesmo compras abaixo de US$50 podem pagar ICMS dependendo
        do estado. Se você ainda está montando a conta completa, veja também
        como{" "}
        <a
          href="/calcular-taxas-importacao"
          className="text-blue-600 underline"
        >
          calcular taxas de importação
        </a>.
      </p>

      <p className="mb-6">
        Muita gente calcula apenas o Imposto de Importação e esquece o ICMS.
        Esse é um erro comum. O ICMS pode aumentar bastante o custo final
        porque ele não incide apenas sobre o preço do produto em dólar. A base
        de cálculo pode considerar produto, frete, seguro e o próprio imposto
        de importação, conforme as regras aplicadas à operação.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        O Que é ICMS?
      </h2>

      <p className="mb-6">
        ICMS significa Imposto sobre Circulação de Mercadorias e Serviços.
        Ele é cobrado pelos estados brasileiros.
      </p>

      <p className="mb-6">
        No contexto de compras internacionais, o ICMS entra porque a mercadoria
        será entregue em um estado brasileiro. Por isso, duas pessoas comprando
        o mesmo produto podem ter custos finais diferentes se morarem em
        estados com regras ou alíquotas diferentes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Quanto é o ICMS na Importação?
      </h2>

      <p className="mb-6">
        A Receita Federal informa que a cobrança costuma variar entre 17% e
        20%, conforme o estado e a regra aplicada à compra.
      </p>

      <p className="mb-6">
        Essa variação é importante para o comprador. Quem busca entender o
        ICMS na importação normalmente quer saber por que o valor final ficou
        maior do que esperava. Em muitos casos, a resposta está na forma como
        o ICMS é calculado por dentro, aumentando a base antes da aplicação da
        alíquota.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Por que o ICMS aumenta tanto o valor final?
      </h2>

      <p className="mb-6">
        O ICMS pode parecer pequeno quando visto apenas como uma porcentagem,
        mas o efeito no total pode ser maior porque ele entra em uma base que
        já inclui outros custos. Produto, frete, seguro e imposto de importação
        podem formar a base da cobrança. Assim, uma compra que parecia barata
        em dólar pode ficar bem mais cara em reais.
      </p>

      <p className="mb-6">
        Por isso, uma calculadora de importação precisa pedir o estado de
        destino. Sem esse dado, o resultado pode ser apenas uma estimativa
        genérica e pouco confiável.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Compras Abaixo de US$50 Pagam ICMS?
      </h2>

      <p className="mb-6">
        Sim. Mesmo compras abaixo de US$50 podem pagar ICMS dependendo
        da plataforma e do estado brasileiro.
      </p>

      <p className="mb-6">
        O limite de US$50 é frequentemente confundido com isenção total, mas a
        regra não deve ser interpretada dessa forma. As orientações da Receita
        Federal deixam claro que compras internacionais podem envolver Imposto
        de Importação e ICMS. O tratamento depende da modalidade, da plataforma
        e do enquadramento da operação; veja o resumo na{" "}
        <a
          href="/tabela-imposto-importacao-brasil"
          className="text-blue-600 underline"
        >
          tabela de imposto de importação
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Como Calcular o ICMS?
      </h2>

      <p className="mb-6">
        O cálculo depende do valor do produto, frete e imposto de importação.
      </p>

      <p className="mb-6">
        Para uma simulação simples, comece pelo valor dos produtos, some frete
        e seguro quando houver, converta para reais e aplique a regra de
        Imposto de Importação. Depois, calcule o ICMS conforme a alíquota do
        estado de destino. A calculadora automatiza esse processo para reduzir
        o risco de erro manual.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        ICMS de importação por estado
      </h2>

      <p className="mb-6">
        Se você já sabe o estado de entrega, veja também o guia específico para
        estimar a compra com mais contexto local.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        {icmsStatePages.map(({ path, state }) => (
          <a
            key={path}
            href={path}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 shadow-sm hover:border-[#008272] hover:text-[#008272]"
          >
            ICMS importação {state.name}
          </a>
        ))}
      </div>

      <a
        href="/"
        className="inline-block bg-[#008272] hover:bg-[#06264b] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors mb-10"
      >
        Calcular Imposto de Importação
      </a>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        FAQ - Perguntas Frequentes
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        O ICMS é cobrado em todas as importações?
      </h3>

      <p className="mb-4">
        Sim, na maioria das compras internacionais para o Brasil, o ICMS faz
        parte da tributação e varia conforme o estado de destino. A alíquota
        estadual oscila entre 17% e 20%, dependendo da unidade federativa, e
        incide sobre uma base de cálculo que pode incluir produto, frete, seguro
        e o próprio Imposto de Importação. Mesmo compras abaixo de US$50 em
        plataformas certificadas no Remessa Conforme, onde o Imposto de
        Importação federal é 0%, ainda pagam ICMS. Por isso, é fundamental
        informar o estado de entrega ao calcular o custo total da importação.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Qual é o ICMS de importação no Brasil?
      </h3>

      <p className="mb-4">
        A alíquota de ICMS na importação varia entre 17% e 20%, conforme o
        estado de destino e a regra aplicável à compra. Estados como Santa
        Catarina e Espírito Santo usam 17%, enquanto Minas Gerais e Ceará
        aplicam 20%. A base de cálculo do ICMS é calculada por dentro e pode
        incluir o valor do produto, frete, seguro e Imposto de Importação,
        amplificando o efeito no custo final. Para estimar corretamente, use a
        calculadora informando o estado de entrega.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Como pagar o ICMS de importação?
      </h3>

      <p className="mb-4">
        Em compras feitas por plataformas certificadas no Remessa Conforme, o
        ICMS costuma ser cobrado no checkout junto com o Imposto de Importação,
        antes do pagamento. Fora do programa, o ICMS pode ser cobrado quando a
        encomenda chega ao Brasil, por meio dos Correios ou da transportadora,
        com notificação de pagamento pendente. O pagamento pode ser feito no
        ambiente Minhas Importações ou no aplicativo dos Correios. Sempre
        confira se os tributos aparecem no checkout para evitar surpresas na
        entrega.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        O ICMS aparece no checkout?
      </h3>

      <p className="mb-4">
        Em compras feitas dentro do Remessa Conforme, o ICMS pode aparecer
        discriminado no checkout junto com o Imposto de Importação, antes do
        pagamento. Fora desse fluxo, o ICMS é cobrado na chegada da encomenda
        ao Brasil, pelos Correios ou pela transportadora. A diferença é
        importante: no Remessa Conforme, compras até US$50 têm Imposto de
        Importação de 0%, mas o ICMS (17% a 20%) continua aparecendo.
        Verificar a tela de pagamento antes de finalizar o pedido é a forma mais
        segura de prever o custo total.
      </p>

      <p className="text-sm text-gray-500 mt-12">
        Atualizado em Junho de 2026. Fonte: Receita Federal, Portal Compras
        Internacionais e orientações públicas sobre ICMS em remessas
        internacionais.
      </p>

      <RelatedGuides currentPath="/icms-importacao-brasil" />

      </main>
    </>
  );
}
