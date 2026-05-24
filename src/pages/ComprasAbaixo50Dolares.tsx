import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";

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
          className="inline-block bg-black text-white px-6 py-3 rounded-xl mb-10"
        >
          Simular compra abaixo de US$50
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Perguntas frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Compra abaixo de US$50 ainda paga ICMS?
        </h3>
        <p className="mb-4">
          Sim, pode pagar. O ICMS é estadual e pode continuar sendo cobrado
          mesmo quando o Imposto de Importação federal é 0%.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          A regra vale para qualquer site?
        </h3>
        <p className="mb-4">
          Não. A regra mais favorável depende de a compra estar em plataforma
          certificada no Programa Remessa Conforme.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Como saber se estou no Remessa Conforme?
        </h3>
        <p className="mb-4">
          Confira se a Receita Federal lista a empresa como certificada e, no
          momento da compra, veja se o checkout mostra os tributos antes do
          pagamento.
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
          Atualizado em Maio de 2026. A regra pode depender do enquadramento da
          compra, da plataforma e do estado de destino.
        </p>

        <RelatedGuides currentPath="/compras-internacionais-abaixo-50-dolares" />
      </main>
    </>
  );
}
