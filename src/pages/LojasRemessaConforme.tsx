import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import OfficialSources from "@/components/OfficialSources";
import Breadcrumb from "@/components/Breadcrumb";

const stores = [
  "AliExpress",
  "Shein",
  "Shopee",
  "Temu",
  "Amazon",
];

export default function LojasRemessaConforme() {
  return (
    <>
      <SeoHead
        title="Lojas no Remessa Conforme 2026: Como Conferir"
        description="Veja como conferir lojas e marketplaces no Programa Remessa Conforme em 2026 e por que isso muda o imposto de importação."
        canonical="https://www.taxadeimportacao.com/lojas-remessa-conforme"
        faqs={[
          {
            question: "Como saber se uma loja está no Remessa Conforme?",
            answer:
              "Consulte a lista pública de empresas certificadas no site da Receita Federal e confirme no checkout se os tributos aparecem antes do pagamento. Plataformas como AliExpress, Shein e Shopee participam do programa, mas a lista pode mudar com o tempo. No checkout de uma loja certificada, você verá Imposto de Importação e ICMS discriminados — se estiver dentro do RC, compras até US$50 têm II de 0% e acima de US$50 pagam 20%, mais ICMS de 17% a 20%. Se os tributos não aparecem no checkout, a compra pode estar fora do programa e pagar 60% de Imposto de Importação na chegada ao Brasil.",
          },
          {
            question: "Toda oferta de marketplace segue a mesma regra?",
            answer:
              "Não necessariamente. Em marketplaces, a operação pode depender do vendedor, da logística e do que aparece no checkout. Um marketplace certificado no Remessa Conforme pode ter vendedores que não seguem o programa, resultando em cobranças diferentes. Se os tributos aparecem discriminados no checkout (II de 0% até US$50 ou 20% acima, mais ICMS estadual de 17% a 20%), a oferta está dentro do RC. Se não aparecem, a cobrança pode ocorrer na chegada ao Brasil com Imposto de Importação de 60%. Confira sempre a tela de pagamento antes de finalizar o pedido.",
          },
          {
            question: "Estar no Remessa Conforme elimina o ICMS?",
            answer:
              "Não. O Remessa Conforme pode mudar a cobrança do Imposto de Importação federal (0% até US$50 ou 20% acima), mas o ICMS estadual continua sendo cobrado com alíquotas entre 17% e 20%, dependendo do estado de destino. Mesmo em compras abaixo de US$50 em lojas certificadas, onde o Imposto de Importação é 0%, o ICMS aparece no checkout ou na chegada da encomenda. O programa oferece previsibilidade na cobrança, não isenção de tributos. Para estimar o custo real, sempre inclua o ICMS do estado de entrega na simulação.",
          },
          {
            question: "A lista oficial muda?",
            answer:
              "Pode mudar. A Receita Federal atualiza periodicamente a lista de empresas certificadas no Programa Remessa Conforme, e novas plataformas podem ser adicionadas ou removidas. Por isso, a referência principal deve ser sempre a página oficial da Receita Federal, não listas copiadas em redes sociais ou sites terceiros. Antes de comprar, confirme se a loja ainda está certificada e verifique se os tributos aparecem no checkout. Use a calculadora de importação para estimar o custo total com o ICMS do estado de destino.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Lojas no Remessa Conforme: Como Conferir Antes de Comprar
        </h1>

        <DirectAnswer>
          <p>
            Para saber se uma loja está no Remessa Conforme, consulte a lista
            da Receita Federal e confirme se o checkout mostra os tributos antes
            do pagamento. Isso é essencial para estimar imposto e ICMS.
          </p>
        </DirectAnswer>

        <Breadcrumb items={[
          { label: "Início", href: "/" },
          { label: "Lojas Remessa Conforme" }
        ]} />

        <p className="text-lg mb-8">
          O Programa Remessa Conforme é importante porque muda a previsibilidade
          de compras internacionais. Em vez de descobrir o imposto apenas na
          chegada ao Brasil, o consumidor tende a ver a cobrança no checkout das
          plataformas participantes.
        </p>

        <p className="mb-6">
          Mesmo assim, estar em uma lista pública não substitui a conferência no
          pedido real. Em marketplaces, vendedores, logística e tipo de oferta
          podem mudar a forma como a compra aparece para o consumidor.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Plataformas que o consumidor costuma conferir
        </h2>

        <p className="mb-6">
          A lista oficial deve ser consultada diretamente na Receita Federal.
          Para navegação do site, estes são alguns nomes que compradores
          brasileiros pesquisam com frequência:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          {stores.map((store) => (
            <li key={store}>{store}</li>
          ))}
        </ul>

        <p className="mb-6">
          A presença de uma marca na pesquisa do consumidor não dispensa a
          checagem do checkout. O melhor sinal prático é ver produto, frete e
          tributos antes de finalizar o pagamento.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Como conferir do jeito certo
        </h2>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Abra a lista oficial da Receita Federal.</li>
          <li>Procure a empresa ou plataforma.</li>
          <li>Verifique se a compra mostra tributos no checkout.</li>
          <li>Some produto, frete e seguro quando houver.</li>
          <li>Simule o custo final com ICMS do estado de entrega.</li>
        </ol>

        <a
          href="/"
          className="inline-block bg-[#008272] hover:bg-[#06264b] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-colors mb-10"
        >
          Simular custo final da compra
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Por que o Remessa Conforme importa?
        </h2>

        <p className="mb-6">
          Em compras dentro do programa, o imposto tende a ser informado antes
          do pagamento. Isso ajuda a comparar o custo final com produtos
          vendidos no Brasil e reduz surpresas no recebimento.
        </p>

        <p className="mb-6">
          O programa não transforma toda compra internacional em compra sem
          imposto. O ICMS pode continuar sendo cobrado, e compras acima de
          determinadas faixas podem ter regras diferentes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Perguntas frequentes
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Como saber se uma loja está no Remessa Conforme?
        </h3>
        <p className="mb-4">
          Consulte a lista pública de empresas certificadas no site da Receita
          Federal e confirme no checkout se os tributos aparecem antes do
          pagamento. Plataformas como AliExpress, Shein e Shopee participam do
          programa, mas a lista pode mudar com o tempo. No checkout de uma loja
          certificada, você verá Imposto de Importação e ICMS discriminados — se
          estiver dentro do RC, compras até US$50 têm II de 0% e acima de US$50
          pagam 20%, mais ICMS de 17% a 20%. Se os tributos não aparecem no
          checkout, a compra pode estar fora do programa e pagar 60% de Imposto
          de Importação na chegada ao Brasil.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Toda oferta de marketplace segue a mesma regra?
        </h3>
        <p className="mb-4">
          Não necessariamente. Em marketplaces, a operação pode depender do
          vendedor, da logística e do que aparece no checkout. Um marketplace
          certificado no Remessa Conforme pode ter vendedores que não seguem o
          programa, resultando em cobranças diferentes. Se os tributos aparecem
          discriminados no checkout (II de 0% até US$50 ou 20% acima, mais ICMS
          estadual de 17% a 20%), a oferta está dentro do RC. Se não aparecem,
          a cobrança pode ocorrer na chegada ao Brasil com Imposto de Importação
          de 60%. Confira sempre a tela de pagamento antes de finalizar o
          pedido.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Estar no Remessa Conforme elimina o ICMS?
        </h3>
        <p className="mb-4">
          Não. O Remessa Conforme pode mudar a cobrança do Imposto de
          Importação federal (0% até US$50 ou 20% acima), mas o ICMS estadual
          continua sendo cobrado com alíquotas entre 17% e 20%, dependendo do
          estado de destino. Mesmo em compras abaixo de US$50 em lojas
          certificadas, onde o Imposto de Importação é 0%, o ICMS aparece no
          checkout ou na chegada da encomenda. O programa oferece
          previsibilidade na cobrança, não isenção de tributos. Para estimar o
          custo real, sempre inclua o ICMS do estado de entrega na simulação.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          A lista oficial muda?
        </h3>
        <p className="mb-4">
          Pode mudar. A Receita Federal atualiza periodicamente a lista de
          empresas certificadas no Programa Remessa Conforme, e novas plataformas
          podem ser adicionadas ou removidas. Por isso, a referência principal
          deve ser sempre a página oficial da Receita Federal, não listas
          copiadas em redes sociais ou sites terceiros. Antes de comprar,
          confirme se a loja ainda está certificada e verifique se os tributos
          aparecem no checkout. Use a calculadora de importação para estimar o
          custo total com o ICMS do estado de destino.
        </p>

        <OfficialSources
          sources={[
            {
              label: "Receita Federal - Empresas certificadas no Programa Remessa Conforme",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/empresas-certificadas-no-programa-remessa-conforme-prc",
            },
            {
              label: "Receita Federal - Programa Remessa Conforme: o que é e como funciona",
              href: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/programa-remessa-conforme-o-que-e-como-funciona/programa-remessa-conforme-o-que-e-como-funciona-1",
            },
          ]}
        />

        <p className="text-sm text-gray-500 mt-12">
          Atualizado em Maio de 2026. Consulte sempre a Receita Federal e o
          checkout da compra antes de pagar.
        </p>

        <RelatedGuides currentPath="/lojas-remessa-conforme" />
      </main>
    </>
  );
}
