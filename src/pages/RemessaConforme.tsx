import SeoHead from "@/components/SeoHead";
import RelatedGuides from "@/components/RelatedGuides";
import DirectAnswer from "@/components/DirectAnswer";
import Breadcrumb from "@/components/Breadcrumb";

export default function RemessaConforme() {
  return (
    <>
      <SeoHead
        title="Remessa Conforme 2026 | O Que É, Regras e Como Funciona"
        description="Entenda o Remessa Conforme em 5 minutos. Regras 2026, quais lojas participam, como funciona a cobrança de ICMS e quando paga imposto."
        canonical="https://www.taxadeimportacao.com/o-que-e-remessa-conforme"
        faqs={[
          {
            question: "O que é Remessa Conforme?",
            answer:
              "O Remessa Conforme é um programa da Receita Federal que permite a plataformas certificadas informar e recolher os tributos de compras internacionais no checkout, antes do pagamento. Sem o programa, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, cobrado quando a encomenda chega ao Brasil. Dentro do Remessa Conforme, compras até US$50 podem ter Imposto de Importação de 0%, e compras acima de US$50 têm alíquota de 60% com desconto de US$30 a 20%. O ICMS estadual, que varia de 17% a 20% conforme o estado de destino, continua sendo cobrado em ambos os casos.",
          },
          {
            question: "Compras abaixo de US$50 pagam imposto?",
            answer:
              "Sim. Em plataformas certificadas no Remessa Conforme, o Imposto de Importação federal é 0% para compras até US$50, mas o ICMS estadual continua sendo cobrado com alíquotas entre 17% e 20%, dependendo do estado de destino. Fora do Remessa Conforme, mesmo compras abaixo de US$50 podem pagar Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Portanto, o limite de US$50 não garante compra sem tributos — sempre simule o custo total antes de pagar.",
          },
          {
            question: "Como calcular o imposto antes de comprar?",
            answer:
              "Use uma calculadora de imposto de importação informando o valor do produto, frete, câmbio do dia, estado de destino e se a loja participa do Remessa Conforme. O cálculo considera o Imposto de Importação (0% até US$50 com RC, 60% com desconto de US$30 acima de US$50 com RC ou 60% sem RC) e o ICMS estadual (17% a 20%). Simular antes de comprar permite comparar o custo final com alternativas vendidas no Brasil e evitar surpresas na chegada da encomenda.",
          },
          {
            question: "O AliExpress participa do Remessa Conforme?",
            answer:
              "Sim. O AliExpress é uma das plataformas certificadas no Programa Remessa Conforme da Receita Federal. Isso significa que, em compras dentro do programa, os tributos aparecem discriminados no checkout antes do pagamento. Compras até US$50 têm Imposto de Importação de 0%, enquanto compras acima de US$50 pagam 60% de Imposto de Importação com desconto de US$30, mais ICMS estadual (17% a 20%). Para confirmar, verifique se os tributos estão visíveis na tela de pagamento antes de finalizar o pedido.",
          },
          {
            question: "Remessa Conforme significa compra sem imposto?",
            answer:
              "Não. O Remessa Conforme organiza e antecipa a cobrança dos tributos em empresas certificadas, mas não elimina impostos. Em compras até US$50, o Imposto de Importação federal pode ser 0%, mas o ICMS estadual (17% a 20%) continua sendo cobrado. Acima de US$50, o Imposto de Importação é 60% com desconto de US$30 dentro do programa; fora dele, a cobrança pode chegar a 60% sem esse desconto. O programa oferece previsibilidade, não isenção — sempre calcule o custo total antes de comprar.",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-6">
        O Que é Remessa Conforme? (2026)
      </h1>

      <DirectAnswer>
        <p>
          Remessa Conforme é o programa da Receita Federal que permite a
          plataformas certificadas informar e recolher tributos de compras
          internacionais no checkout, dando mais previsibilidade ao consumidor.
        </p>
      </DirectAnswer>

      <Breadcrumb items={[
        { label: "Início", href: "/" },
        { label: "Remessa Conforme" }
      ]} />

      <p className="text-lg mb-8">
        O Remessa Conforme é um programa da Receita Federal criado para
        simplificar a tributação de compras internacionais no Brasil.
      </p>

      <p className="mb-6">
        Para quem compra em sites como AliExpress, Shein, Shopee, Amazon ou
        outras plataformas internacionais, o programa mudou a forma como os
        impostos aparecem na compra. Em vez de descobrir a cobrança apenas
        quando a encomenda chega ao Brasil, o consumidor passa a ter mais
        previsibilidade quando compra em uma empresa certificada. Para comparar
        as faixas de cobrança, veja a{" "}
        <a
          href="/tabela-imposto-importacao-brasil"
          className="text-blue-600 underline"
        >
          tabela de imposto de importação
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Como Funciona o Remessa Conforme?
      </h2>

      <p className="mb-6">
        O programa permite que plataformas participantes reduzam o imposto
        de importação para compras internacionais.
      </p>

      <p className="mb-6">
        Segundo a Receita Federal, empresas certificadas devem informar ao
        comprador que o produto vem do exterior e mostrar o valor total cobrado,
        incluindo produto, frete internacional, seguro quando houver, Imposto
        de Importação, ICMS e outras despesas. Essa transparência é uma das
        principais vantagens para o consumidor.
      </p>

      <p className="mb-6">
        Na prática, isso significa que o usuário consegue comparar o preço
        final antes de pagar. Se uma blusa custa pouco, mas o imposto e o frete
        deixam o pedido caro, a decisão muda. Se o preço final ainda for
        competitivo, a importação pode continuar fazendo sentido. Use o guia
        de{" "}
        <a
          href="/calcular-taxas-importacao"
          className="text-blue-600 underline"
        >
          calcular taxas de importação
        </a>{" "}
        para montar essa conta.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Quais Plataformas Participam?
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>AliExpress</li>
        <li>Shein</li>
        <li>Shopee</li>
        <li>Amazon</li>
      </ul>

      <p className="mb-6">
        A lista de empresas certificadas pode mudar com o tempo. Por isso, em
        vez de presumir que toda compra de uma plataforma será tratada da mesma
        forma, confira sempre a tela de pagamento. Se os tributos estiverem
        destacados antes de concluir o pedido, você terá uma estimativa mais
        clara do custo final.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Qual é o Imposto?
      </h2>

      <p className="mb-6">
        Compras internacionais podem pagar:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>20% com Remessa Conforme</li>
        <li>60% sem Remessa Conforme</li>
        <li>ICMS estadual</li>
      </ul>

      <p className="mb-6">
        A regra exata depende do valor aduaneiro, da certificação da empresa,
        do tipo de operação e do estado de destino. A Receita Federal também
        orienta que o ICMS pode variar conforme a unidade federativa. Por isso,
        páginas que prometem um valor único para todo o Brasil podem induzir o
        consumidor ao erro. Entenda melhor no guia de{" "}
        <a href="/icms-importacao-brasil" className="text-blue-600 underline">
          ICMS na importação
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Qual é a vantagem para o consumidor?
      </h2>

      <p className="mb-6">
        A grande vantagem é saber o preço final antes da compra. Antes do
        Remessa Conforme, muitas pessoas compravam um produto barato e só
        descobriam a cobrança ao acompanhar a encomenda. Hoje, quando a compra
        segue o fluxo de uma plataforma certificada, o custo tributário tende a
        ficar mais visível.
      </p>

      <p className="mb-6">
        Isso não elimina imposto e não garante que toda compra será barata. O
        programa ajuda na previsibilidade. Para economizar de verdade, ainda é
        necessário comparar o valor final importado com o preço de uma compra
        nacional.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Vale a Pena?
      </h2>

      <p className="mb-6">
        Sim. O programa pode reduzir significativamente os custos de
        importação em plataformas participantes.
      </p>

      <p className="mb-6">
        Ele vale especialmente para quem compra com frequência e quer evitar
        surpresa. Mesmo assim, o consumidor deve manter atenção ao valor total
        do carrinho, ao frete, ao câmbio e ao ICMS. O melhor uso do programa é
        combinado com uma simulação antes do pagamento.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        FAQ - Perguntas Frequentes
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        O que é Remessa Conforme?
      </h3>

      <p className="mb-4">
        O Remessa Conforme é um programa da Receita Federal que permite a
        plataformas certificadas informar e recolher os tributos de compras
        internacionais no checkout, antes do pagamento. Sem o programa, o
        Imposto de Importação pode chegar a 60% sobre o valor aduaneiro,
        cobrado quando a encomenda chega ao Brasil. Dentro do Remessa
        Conforme, compras até US$50 podem ter Imposto de Importação de 0%, e
        compras acima de US$50 têm alíquota de 60% com desconto de US$30 a 20%. O ICMS estadual,
        que varia de 17% a 20% conforme o estado de destino, continua sendo
        cobrado em ambos os casos.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Compras abaixo de US$50 pagam imposto?
      </h3>

      <p className="mb-4">
        Sim. Em plataformas certificadas no Remessa Conforme, o Imposto de
        Importação federal é 0% para compras até US$50, mas o ICMS estadual
        continua sendo cobrado com alíquotas entre 17% e 20%, dependendo do
        estado de destino. Fora do Remessa Conforme, mesmo compras abaixo de
        US$50 podem pagar Imposto de Importação de 60% sobre o valor
        aduaneiro, além do ICMS. Portanto, o limite de US$50 não garante
        compra sem tributos — sempre simule o custo total antes de pagar.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Como calcular o imposto antes de comprar?
      </h3>

      <p className="mb-4">
        Use uma calculadora de imposto de importação informando o valor do
        produto, frete, câmbio do dia, estado de destino e se a loja participa
        do Remessa Conforme. O cálculo considera o Imposto de Importação (0%
        até US$50 com RC, 60% com desconto de US$30 acima de US$50 com RC ou 60% sem RC) e o ICMS
        estadual (17% a 20%). Simular antes de comprar permite comparar o
        custo final com alternativas vendidas no Brasil e evitar surpresas na
        chegada da encomenda.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        O AliExpress participa do Remessa Conforme?
      </h3>

      <p className="mb-4">
        Sim. O AliExpress é uma das plataformas certificadas no Programa
        Remessa Conforme da Receita Federal. Isso significa que, em compras
        dentro do programa, os tributos aparecem discriminados no checkout
        antes do pagamento. Compras até US$50 têm Imposto de Importação de 0%,
        enquanto compras acima de US$50 pagam 60% de Imposto de Importação com desconto de US$30,
        mais ICMS estadual (17% a 20%). Para confirmar, verifique se os
        tributos estão visíveis na tela de pagamento antes de finalizar o
        pedido.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Remessa Conforme significa compra sem imposto?
      </h3>

      <p className="mb-4">
        Não. O Remessa Conforme organiza e antecipa a cobrança dos tributos em
        empresas certificadas, mas não elimina impostos. Em compras até US$50,
        o Imposto de Importação federal pode ser 0%, mas o ICMS estadual (17%
        a 20%) continua sendo cobrado. Acima de US$50, o Imposto de
        Importação é 60% com desconto de US$30 dentro do programa; fora dele,
        a cobrança pode chegar a 60% sem esse desconto. O programa
        oferece previsibilidade, não isenção — sempre calcule o custo total
        antes de comprar.
      </p>

      <p className="text-sm text-gray-500 mt-12">
        Atualizado em Junho de 2026. Fonte: Receita Federal, Portal Compras
        Internacionais e orientações sobre o Programa Remessa Conforme.
      </p>

      <RelatedGuides currentPath="/o-que-e-remessa-conforme" />

      </main>
    </>
  );
}
