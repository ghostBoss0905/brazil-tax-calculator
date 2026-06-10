import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";
import Breadcrumb from "@/components/Breadcrumb";

export default function ComprasAbaixo50Dolares() {
  return (
    <>
      <SeoHead
        title="Compras Abaixo de US$50 Pagam Imposto? Regras 2026"
        description="Entenda quando compras internacionais abaixo de US$50 pagam imposto no Brasil em 2026, com Remessa Conforme, ICMS e exemplos."
        canonical="https://www.taxadeimportacao.com/compras-internacionais-abaixo-50-dolares"
        faqs={[
          {
            question: "Compras abaixo de US$50 pagam imposto no Brasil?",
            answer:
              "Em plataformas certificadas no Remessa Conforme, o Imposto de Importação federal é 0% para compras até US$50, mas o ICMS estadual continua sendo cobrado com alíquotas entre 17% e 20%, dependendo do estado de destino. Fora do Remessa Conforme, compras abaixo de US$50 podem pagar Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Portanto, o limite de US$50 não garante isenção total — sempre simule o custo final com a calculadora antes de comprar.",
          },
          {
            question: "O limite de US$50 inclui frete?",
            answer:
              "Para estimar a compra com segurança, considere produto, frete e seguro quando houver, pois esses valores podem compor a base de cálculo da importação. Uma compra que parece abaixo de US$50 pelo preço do produto pode ultrapassar o limite quando o frete internacional é adicionado. Se o valor total (produto + frete + seguro) exceder US$50, a regra de Imposto de Importação de 0% pode não se aplicar, e a alíquota pode mudar para 60% com desconto de US$30 dentro do RC ou 60% fora dele. Por isso, sempre use o valor total do carrinho ao verificar o enquadramento.",
          },
          {
            question: "Fora do Remessa Conforme a regra muda?",
            answer:
              "Sim. Compras fora de plataformas certificadas no Remessa Conforme podem pagar Imposto de Importação de 60% sobre o valor aduaneiro, cobrado quando a encomenda chega ao Brasil. Além disso, o ICMS estadual (17% a 20%) também é cobrado, e a cobrança aparece por meio dos Correios ou da transportadora, sem previsibilidade no checkout. Dentro do RC, o Imposto de Importação é 0% até US$50 e 60% com desconto de US$30 acima, com tributos exibidos antes do pagamento. A diferença no custo final pode ser significativa entre os dois cenários.",
          },
          {
            question: "Como saber se estou no Remessa Conforme?",
            answer:
              "Confira a lista pública de empresas certificadas no site da Receita Federal e, no momento da compra, veja se o checkout mostra os tributos antes do pagamento. Plataformas como AliExpress, Shein e Shopee participam do programa, mas em marketplaces, a operação pode depender do vendedor específico. Se os impostos aparecem discriminados no checkout (Imposto de Importação e ICMS), a compra está dentro do RC. Se não aparecem, a cobrança pode ocorrer na chegada ao Brasil com alíquota de 60% de Imposto de Importação.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Compras Internacionais Abaixo de US$50 Pagam Imposto?
        </h1>

        <DirectAnswer>
          <p>
            Em compras de até US$50 feitas em plataformas certificadas no
            Remessa Conforme, o Imposto de Importação federal pode ser 0%, mas
            o ICMS estadual pode continuar sendo cobrado no checkout.
          </p>
        </DirectAnswer>

        <Breadcrumb items={[
          { label: "Início", href: "/" },
          { label: "Compras abaixo de US$50" }
        ]} />

        <p className="text-lg mb-8">
          A dúvida sobre compras abaixo de US$50 é uma das mais importantes
          para quem compra em AliExpress, Shein, Shopee, Temu, Amazon e outras
          lojas internacionais. A resposta curta é: pode não haver Imposto de
          Importação federal, mas isso não significa custo final sem tributos.
        </p>

        <p className="mb-6">
          O ponto central é saber se a compra foi feita em uma plataforma
          certificada no{" "}
          <a
            href="/o-que-e-remessa-conforme"
            className="text-blue-600 underline"
          >
            Remessa Conforme
          </a>{" "}
          e se os tributos aparecem no checkout antes do pagamento.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Regra prática para até US$50
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 pr-4">Situação</th>
                <th className="py-3 pr-4">Imposto federal</th>
                <th className="py-3">ICMS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b align-top">
                <td className="py-3 pr-4">
                  Plataforma certificada no Remessa Conforme
                </td>
                <td className="py-3 pr-4">Pode ser 0% até US$50</td>
                <td className="py-3">Pode ser cobrado conforme o estado</td>
              </tr>
              <tr className="border-b align-top">
                <td className="py-3 pr-4">
                  Compra fora de plataforma certificada
                </td>
                <td className="py-3 pr-4">
                  Pode seguir regra diferente na chegada ao Brasil
                </td>
                <td className="py-3">Pode ser cobrado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          O limite é só o produto?
        </h2>

        <p className="mb-6">
          Para não errar na decisão, considere o custo da operação como um
          todo: produto, frete e seguro quando houver. Na prática do consumidor,
          uma compra que parece abaixo de US$50 pelo preço do produto pode
          deixar de ser tão simples quando o frete entra na comparação.
        </p>

        <p className="mb-6">
          Por isso, antes de pagar, simule sempre com o valor total do carrinho
          e o estado de destino. Essa é a forma mais segura de estimar se o
          preço final ainda compensa.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo simples
        </h2>

        <p className="mb-6">
          Produto de US$35 com frete de US$8 parece barato. Mesmo se o Imposto
          de Importação federal for 0% em plataforma certificada, o ICMS pode
          aparecer no checkout. Se o câmbio estiver alto, a diferença para uma
          compra nacional pode ficar pequena.
        </p>

        <a
          href="/"
          className="inline-block bg-[#008272] hover:bg-[#06264b] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors mb-10"
        >
          Simular compra abaixo de US$50
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Perguntas frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Compras abaixo de US$50 pagam imposto no Brasil?
        </h3>
        <p className="mb-4">
          Em plataformas certificadas no Remessa Conforme, o Imposto de
          Importação federal é 0% para compras até US$50, mas o ICMS estadual
          continua sendo cobrado com alíquotas entre 17% e 20%, dependendo do
          estado de destino. Fora do Remessa Conforme, compras abaixo de US$50
          podem pagar Imposto de Importação de 60% sobre o valor aduaneiro,
          além do ICMS. Portanto, o limite de US$50 não garante isenção total —
          sempre simule o custo final com a calculadora antes de comprar.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          O limite de US$50 inclui frete?
        </h3>
        <p className="mb-4">
          Para estimar a compra com segurança, considere produto, frete e seguro
          quando houver, pois esses valores podem compor a base de cálculo da
          importação. Uma compra que parece abaixo de US$50 pelo preço do
          produto pode ultrapassar o limite quando o frete internacional é
          adicionado. Se o valor total (produto + frete + seguro) exceder US$50,
          a regra de Imposto de Importação de 0% pode não se aplicar, e a
          alíquota pode mudar para 60% com desconto de US$30 dentro do RC ou 60% fora dele. Por isso,
          sempre use o valor total do carrinho ao verificar o enquadramento.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Fora do Remessa Conforme a regra muda?
        </h3>
        <p className="mb-4">
          Sim. Compras fora de plataformas certificadas no Remessa Conforme
          podem pagar Imposto de Importação de 60% sobre o valor aduaneiro,
          cobrado quando a encomenda chega ao Brasil. Além disso, o ICMS
          estadual (17% a 20%) também é cobrado, e a cobrança aparece por meio
          dos Correios ou da transportadora, sem previsibilidade no checkout.
          Dentro do RC, o Imposto de Importação é 0% até US$50 e 60% com desconto de US$30 acima, com
          tributos exibidos antes do pagamento. A diferença no custo final pode
          ser significativa entre os dois cenários.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Como saber se estou no Remessa Conforme?
        </h3>
        <p className="mb-4">
          Confira a lista pública de empresas certificadas no site da Receita
          Federal e, no momento da compra, veja se o checkout mostra os tributos
          antes do pagamento. Plataformas como AliExpress, Shein e Shopee
          participam do programa, mas em marketplaces, a operação pode depender
          do vendedor específico. Se os impostos aparecem discriminados no
          checkout (Imposto de Importação e ICMS), a compra está dentro do RC.
          Se não aparecem, a cobrança pode ocorrer na chegada ao Brasil com
          alíquota de 60% de Imposto de Importação.
        </p>

        <OfficialSources
          sources={[
            {
              label: "Receita Federal - Casos em que não é preciso pagar Imposto de Importação",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/preciso-pagar-impostos-nas-compras-internacionais/saiba-em-quais-casos-nao-e-preciso-pagar-impostos-em-suas-compras-internacionais",
            },
            {
              label: "Receita Federal - Quais são os impostos devidos",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/preciso-pagar-impostos-nas-compras-internacionais/quais-sao-os-impostos-devidos",
            },
          ]}
        />

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Junho de 2026. A regra pode depender do enquadramento da
          compra, da plataforma e do estado de destino.
        </p>

        <RelatedGuides currentPath="/compras-internacionais-abaixo-50-dolares" />
      </main>
    </>
  );
}
