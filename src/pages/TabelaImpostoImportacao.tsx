import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";
import Breadcrumb from "@/components/Breadcrumb";

export default function TabelaImpostoImportacao() {
  return (
    <>
      <SeoHead
        title="Tabela Imposto Importação Brasil 2026 | ICMS, IPI e Taxas"
        description="Tabela completa de imposto de importação 2026. ICMS, IPI, Remessa Conforme e taxas por estado. Calcule o custo final em 3 segundos."
        canonical="https://www.taxadeimportacao.com/tabela-imposto-importacao-brasil"
        faqs={[
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
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Tabela de Imposto de Importação no Brasil (2026)
        </h1>

        <DirectAnswer>
          <p>
            A tabela de imposto de importação em 2026 ajuda a estimar se a
            compra entra na regra de até US$50, acima de US$50 ou fora do
            Remessa Conforme. O ICMS estadual continua sendo parte importante
            do custo final.
          </p>
        </DirectAnswer>

        <Breadcrumb items={[
          { label: "Início", href: "/" },
          { label: "Tabela imposto de importação" }
        ]} />

        <p className="text-lg mb-8">
          A tabela de imposto de importação ajuda a entender quanto uma compra
          internacional pode custar antes de chegar ao Brasil. Em 2026, o
          cálculo depende principalmente do valor aduaneiro da compra, da
          participação da loja no{" "}
          <a
            href="/o-que-e-remessa-conforme"
            className="text-blue-600 underline"
          >
            Programa Remessa Conforme
          </a>{" "}
          e do ICMS do estado de destino.
        </p>

        <p className="mb-6">
          Este guia resume as regras de forma prática para quem compra em sites
          como AliExpress, Shein, Shopee, Amazon, Temu e outras plataformas
          internacionais. A tabela abaixo não substitui a simulação completa,
          mas ajuda a saber qual regra provavelmente será aplicada. Para
          transformar a tabela em uma estimativa, use o guia de{" "}
          <a
            href="/calcular-taxas-importacao"
            className="text-blue-600 underline"
          >
          calcular taxas de importação
        </a>.
        </p>

        <p className="mb-6">
          A Receita Federal atualizou em 2026 as orientações do Portal Compras
          Internacionais. Por isso, esta tabela separa a regra de sites
          certificados no Remessa Conforme da regra de compras fora desse fluxo.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Tabela resumida para compras internacionais
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 pr-4">Situação da compra</th>
                <th className="py-3 pr-4">Imposto de Importação</th>
                <th className="py-3 pr-4">ICMS</th>
                <th className="py-3">Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b align-top">
                <td className="py-3 pr-4">
                  Site certificado no Remessa Conforme, até US$50
                </td>
                <td className="py-3 pr-4">0% federal</td>
                <td className="py-3 pr-4">17% a 20%, conforme o estado</td>
                <td className="py-3">
                  Os tributos devem aparecer no checkout antes do pagamento.
                </td>
              </tr>
              <tr className="border-b align-top">
                <td className="py-3 pr-4">
                  Site certificado no Remessa Conforme, acima de US$50
                </td>
                <td className="py-3 pr-4">
                  60%, com desconto equivalente a US$30
                </td>
                <td className="py-3 pr-4">17% a 20%, conforme o estado</td>
                <td className="py-3">
                  O desconto reduz o imposto federal a pagar, mas não elimina
                  o ICMS.
                </td>
              </tr>
              <tr className="border-b align-top">
                <td className="py-3 pr-4">
                  Site não certificado no Remessa Conforme
                </td>
                <td className="py-3 pr-4">60%</td>
                <td className="py-3 pr-4">17% a 20%, conforme o estado</td>
                <td className="py-3">
                  A cobrança pode ocorrer quando a encomenda chega ao Brasil.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          O que entra no valor aduaneiro?
        </h2>

        <p className="mb-6">
          A Receita Federal explica que a base do Imposto de Importação é o
          valor aduaneiro da encomenda internacional. Para simplificar, o
          consumidor pode pensar na soma do valor dos produtos, do frete e do
          seguro quando houver. Esse valor é convertido para reais e usado como
          ponto de partida para o cálculo.
        </p>

        <p className="mb-6">
          É por isso que uma compra de US$48 com frete de US$8 pode não ser
          analisada da mesma forma que um produto isolado de US$48 com frete
          grátis. O que importa para a conta é o conjunto da operação.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Como funciona a regra até US$50?
        </h2>

        <p className="mb-6">
          Para compras feitas em sites certificados no Programa Remessa
          Conforme, a Receita Federal informa que o Imposto de Importação
          federal é 0% quando o valor da compra é de até US$50. Isso não
          significa compra sem imposto, porque o ICMS estadual pode continuar
          sendo cobrado.
        </p>

        <p className="mb-6">
          Na prática, o comprador deve conferir o checkout. Se a plataforma
          mostra o valor do produto, frete, Imposto de Importação e ICMS antes
          do pagamento, fica mais fácil saber se o preço final compensa.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Como funciona a regra acima de US$50?
        </h2>

        <p className="mb-6">
          Para compras acima de US$50 em sites certificados no Remessa
          Conforme, a Receita Federal informa alíquota de 60% de Imposto de
          Importação, com desconto equivalente a US$30 sobre o imposto a pagar.
          Depois disso, ainda pode haver ICMS estadual.
        </p>

        <p className="mb-6">
          Esse desconto é importante porque reduz a cobrança federal em compras
          um pouco acima de US$50. Mesmo assim, o custo final pode subir
          bastante quando o{" "}
          <a href="/icms-importacao-brasil" className="text-blue-600 underline">
            ICMS
          </a>{" "}
          e o câmbio entram na conta.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Exemplo prático de uso da tabela
        </h2>

        <p className="mb-6">
          Imagine uma compra internacional de US$80, já somando produto e
          frete. Se ela for feita em uma plataforma certificada, a regra federal
          acima de US$50 pode aplicar 60% com desconto equivalente a US$30. Em
          seguida, entra o ICMS do estado de destino. O resultado final pode
          ficar bem diferente do preço visto no anúncio.
        </p>

        <p className="mb-6">
          Por isso, a tabela serve como orientação inicial, mas a decisão de
          compra deve ser feita com uma calculadora que considere câmbio,
          estado, frete e Remessa Conforme.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Como ler a tabela sem errar
        </h2>

        <p className="mb-6">
          Primeiro, identifique se a compra aparece no checkout como uma compra
          internacional com tributos discriminados. Depois, some produto, frete
          e seguro para entender o valor aduaneiro. Por fim, verifique o estado
          de entrega, porque o ICMS pode alterar o custo final mesmo quando a
          regra federal parece simples.
        </p>

        <p className="mb-6">
          A tabela não deve ser lida como promessa de preço final. Ela é uma
          referência para estimar o cenário mais provável antes de pagar. O
          valor final depende da declaração da remessa, da cobrança no checkout
          e da validação feita no processo de importação.
        </p>

        <a
          href="/"
          className="inline-block bg-[#008272] hover:bg-[#06264b] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors mb-10"
        >
          Calcular imposto de importação agora
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          FAQ - Perguntas Frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Compras abaixo de US$50 são isentas?
        </h3>

        <p className="mb-4">
          Em sites certificados no Remessa Conforme, o Imposto de Importação
          federal pode ser 0% até US$50, mas o ICMS estadual pode continuar
          sendo cobrado.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          A tabela vale para compras fora do Remessa Conforme?
        </h3>

        <p className="mb-4">
          Compras fora de sites certificados podem ter regra diferente,
          incluindo cobrança de 60% de Imposto de Importação e ICMS quando a
          encomenda chega ao Brasil.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          O imposto é calculado sobre produto ou produto mais frete?
        </h3>

        <p className="mb-4">
          A base de cálculo considera o valor aduaneiro, que inclui o valor dos
          bens, frete e seguro quando houver.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Por que o ICMS aparece mesmo quando o imposto federal é 0%?
        </h3>

        <p className="mb-4">
          Porque o Imposto de Importação federal e o ICMS estadual são cobranças
          diferentes. Em compras até US$50 dentro do Remessa Conforme, a regra
          federal pode ser 0%, mas o ICMS estadual ainda pode ser cobrado.
        </p>

        <OfficialSources
          sources={[
            {
              label: "Receita Federal - Quais são os impostos devidos",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/preciso-pagar-impostos-nas-compras-internacionais/quais-sao-os-impostos-devidos",
            },
            {
              label: "Receita Federal - Tributação de remessas internacionais",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/topicos/tributacao",
            },
            {
              label: "Receita Federal - Casos em que não é preciso pagar Imposto de Importação",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/preciso-pagar-impostos-nas-compras-internacionais/saiba-em-quais-casos-nao-e-preciso-pagar-impostos-em-suas-compras-internacionais",
            },
          ]}
        />

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Junho de 2026. Fonte: Receita Federal, Portal Compras
          Internacionais, página "Quanto vou pagar de impostos?" e orientações
          sobre o Programa Remessa Conforme.
        </p>
        <RelatedGuides currentPath="/tabela-imposto-importacao-brasil" />
      </main>
    </>
  );
}
