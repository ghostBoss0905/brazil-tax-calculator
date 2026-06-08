import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = new URL("../dist/", import.meta.url);
const baseHtmlPath = new URL("index.html", distDir);
const distPath = fileURLToPath(distDir);

const pages = [
  {
    path: "/imposto-aliexpress-brasil",
    title: "Imposto AliExpress Brasil 2026 | Calcule Taxas em Segundos",
    description:
      "Calcule o imposto do AliExpress em 3 segundos. Atualizado jun/2026. ICMS, Remessa Conforme e custo final — sem surpresa.",
    h1: "Como Calcular o Imposto do AliExpress no Brasil (2026)",
    directAnswer: "O imposto do AliExpress depende do valor do produto, do frete, do câmbio, do estado de destino e se a compra está em plataforma certificada no Remessa Conforme. Para estimar, some produto e frete, converta para reais e aplique Imposto de Importação e ICMS.",
    introParagraph: "Comprar no AliExpress pode parecer barato, mas o custo final no Brasil pode incluir Imposto de Importação, ICMS, frete e câmbio. O AliExpress tem milhares de vendedores com certificação diferente no Remessa Conforme, o que muda a tributação. O frete varia de 15 a 60 dias e pode elevar o total acima de US$50, mudando a faixa de II. Cupons e AliCoins reduzem o preço pago, mas o imposto é calculado sobre o valor final. Antes de comprar, estime o valor total e compare com alternativas vendidas no Brasil.",
    sections: [
      {
        heading: "Como usar este guia antes de comprar no AliExpress",
        paragraphs: [
          "O ponto mais importante é calcular o pedido completo, não apenas o preço do produto. Some produto, frete e seguro quando houver, confira se os tributos aparecem no checkout e selecione o estado de entrega para estimar o ICMS correto.",
          "No AliExpress, vendedores, cupons, moedas e frete podem mudar bastante o custo final. Um carrinho que parece abaixo de US$50 pode ultrapassar o limite quando o frete entra na conta, alterando a regra de Imposto de Importação.",
        ],
      },
      {
        heading: "Quando a compra costuma compensar",
        paragraphs: [
          "A importação tende a fazer mais sentido quando o produto não existe facilmente no Brasil ou quando o preço final, já com impostos, fica claramente abaixo de uma alternativa nacional. Para eletrônicos, peças e acessórios, compare também prazo, garantia e risco de devolução.",
          "Se a diferença final for pequena, comprar no Brasil pode ser melhor por causa de garantia local, entrega mais rápida e menor incerteza. A calculadora ajuda a transformar essa comparação em números antes do pagamento.",
        ],
      },
    ],
    calculationExample: {
      title: "Exemplo rápido: pedido do AliExpress para São Paulo",
      rows: [
        "Produto: US$38",
        "Frete internacional: US$7",
        "Total considerado: US$45",
        "Cenário: Remessa Conforme com ICMS de São Paulo",
      ],
      result:
        "Como o total fica até US$50, o Imposto de Importação federal pode ser 0% no Remessa Conforme, mas o ICMS de SP ainda entra na estimativa.",
      note:
        "Se o frete ou outro item levar o pedido acima de US$50, a regra muda. Por isso o total do carrinho é mais importante que o preço de um item isolado.",
    },
    faqs: [
      {
        question: "Compras do AliExpress abaixo de US$50 pagam imposto?",
        answer:
          "Sim. Compras abaixo de US$50 no AliExpress podem pagar imposto, dependendo do enquadramento da compra. Em plataformas certificadas no Programa Remessa Conforme, o Imposto de Importação federal é 0% para pedidos até US$50, mas o ICMS estadual continua sendo cobrado, com alíquotas que variam de 17% a 20% dependendo do estado de destino. Se a compra não estiver dentro do Remessa Conforme, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, além do ICMS. Por isso, mesmo pedidos de baixo valor podem ter custo final significativamente maior que o preço anunciado. Antes de comprar, use uma calculadora de importação para estimar o valor total e compare com alternativas vendidas no Brasil.",
      },
      {
        question: "O AliExpress participa do Remessa Conforme?",
        answer:
          "Sim. O AliExpress é uma das plataformas certificadas no Programa Remessa Conforme da Receita Federal. Isso significa que, em compras feitas pelo AliExpress dentro do programa, os tributos podem ser calculados e exibidos no checkout antes do pagamento, dando mais previsibilidade ao consumidor. No Remessa Conforme, compras até US$50 têm Imposto de Importação de 0%, e compras acima de US$50 têm alíquota reduzida, além do ICMS estadual que varia de 17% a 20% conforme o estado. Para confirmar o enquadramento, verifique se os tributos aparecem discriminados no checkout antes de finalizar o pedido.",
      },
      {
        question: "O imposto é cobrado na hora ou quando chega ao Brasil?",
        answer:
          "Em compras feitas dentro das regras do Remessa Conforme no AliExpress, os tributos costumam aparecer no checkout antes do pagamento, com valores calculados antecipadamente. Fora desse fluxo, como em compras de vendedores não-certificados, a cobrança pode ocorrer quando a encomenda chega ao Brasil, por meio dos Correios ou da transportadora, com Imposto de Importação de 60% e ICMS estadual. Para evitar surpresas, sempre confira se o checkout mostra os tributos antes de finalizar o pedido e use uma calculadora de importação para estimar o custo total. Compare o valor final com alternativas vendidas no Brasil antes de decidir pela importação.",
      },
    ],
  },
  {
    path: "/imposto-shein-brasil",
    title: "Imposto Shein Brasil 2026 | Calcule Taxas em Segundos",
    description:
      "Calcule o imposto da Shein em 3 segundos. Atualizado jun/2026. Simples, rápido e atualizado com as regras do Remessa Conforme.",
    h1: "Como Calcular o Imposto da Shein no Brasil (2026)",
    directAnswer: "O imposto da Shein depende do valor da compra, do frete, do câmbio, do estado de destino e se a Shein está no Remessa Conforme. Some produto e frete, converta para reais, aplique Imposto de Importação e ICMS do estado.",
    introParagraph: "Comprar na Shein pode parecer vantajoso, mas o custo final no Brasil pode incluir Imposto de Importação, ICMS e frete. Na Shein, é comum adicionar vários itens pequenos ao carrinho — cada blusa, acessório ou item de casa pode parecer barato, mas o total ultrapassa US$50 rapidamente, mudando a tributação. Cupons da Shein reduzem o preço do produto, mas não a base de cálculo do imposto. Tamanhos asiáticos são menores que os brasileiros, e a qualidade pode não corresponder ao custo total após tributos.",
    sections: [
      {
        heading: "O que observar no carrinho da Shein",
        paragraphs: [
          "Na Shein, a maioria das compras envolve vários itens pequenos. O risco é aprovar o pedido olhando só o desconto e perceber depois que produto mais frete passaram do limite de US$50.",
          "Use o valor final depois dos cupons, some o frete internacional e confira se o checkout mostra ICMS e Imposto de Importação. Esse é o jeito mais seguro de comparar a Shein com lojas brasileiras.",
        ],
      },
      {
        heading: "Tamanho, troca e preço nacional",
        paragraphs: [
          "Roupas importadas exigem cuidado extra com tamanho e devolução. Mesmo quando o imposto parece baixo, uma peça que não serve pode perder a vantagem econômica por causa de prazo, troca e frete de retorno.",
          "Antes de comprar acima de US$50, compare com Renner, C&A, Mercado Livre, Amazon Brasil e outras opções nacionais. Se a diferença final for pequena, a compra local pode ser mais segura.",
        ],
      },
    ],
    calculationExample: {
      title: "Exemplo rápido: pedido da Shein abaixo de US$50",
      rows: [
        "Produtos: US$44",
        "Frete: US$4",
        "Total considerado: US$48",
        "Cenário: Remessa Conforme com ICMS estadual",
      ],
      result:
        "O Imposto de Importação federal pode ser 0% no Remessa Conforme, mas o ICMS do estado de entrega continua sendo cobrado.",
      note:
        "Adicionar uma peça pequena pode levar o total acima de US$50. A simulação deve ser feita com o carrinho final.",
    },
    faqs: [
      {
        question: "Compras da Shein abaixo de US$50 pagam imposto?",
        answer:
          "Compras da Shein abaixo de US$50 podem pagar imposto dependendo da modalidade da compra e do estado de destino. Em compras feitas pelo Programa Remessa Conforme, o Imposto de Importação federal é de 0% para valores até US$50, mas o ICMS estadual continua sendo cobrado, com alíquotas que variam de 17% a 22% conforme o estado. Já em compras fora do Remessa Conforme, a regra pode incluir Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Por isso, mesmo pedidos pequenos podem ter um custo final significativamente maior que o preço do produto no site.",
      },
      {
        question: "Vale a pena comprar na Shein em 2026?",
        answer:
          "Vale a pena comprar na Shein em 2026 quando o preço final, já com impostos, continua abaixo de alternativas disponíveis no Brasil. Para pedidos até US$50 pelo Remessa Conforme, o Imposto de Importação é 0%, mas o ICMS (17% a 22%) ainda entra no custo. Para pedidos acima de US$50, o Imposto de Importação volta a ser cobrado e o custo final pode se aproximar ou ultrapassar o preço de lojas brasileiras. O comprador deve sempre simular o valor total antes de decidir, considerando produto, frete, câmbio e os tributos do estado de entrega.",
      },
      {
        question: "O imposto aparece antes de pagar?",
        answer:
          "Em compras feitas pela Shein dentro do Programa Remessa Conforme, os tributos devem aparecer discriminados no checkout antes do pagamento, incluindo ICMS e, quando aplicável, o Imposto de Importação. Essa transparência é uma das vantagens de comprar em plataformas certificadas pela Receita Federal. Se os tributos não aparecem no checkout, há risco de cobrança na chegada ao Brasil, quando a encomenda pode ser tributada com Imposto de Importação de 60% e ICMS do estado. Antes de finalizar o pedido, confira sempre se o valor dos impostos está visível na tela de pagamento.",
      },
    ],
  },
  {
    path: "/imposto-shopee-brasil",
    title: "Imposto Shopee Brasil 2026 | Calcule Taxas em Segundos",
    description:
      "Calcule o imposto da Shopee em 3 segundos. Atualizado jun/2026. ICMS, Remessa Conforme e custo final — compare antes de comprar.",
    h1: "Como Calcular o Imposto da Shopee no Brasil (2026)",
    directAnswer: "O imposto da Shopee internacional depende de produto, frete, câmbio, ICMS e forma de cobrança dos tributos. Confirme se o pedido é nacional ou internacional e se os impostos aparecem no checkout.",
    introParagraph: "Comprar produtos internacionais pela Shopee pode parecer barato, mas o custo final depende dos impostos cobrados no Brasil. Na Shopee, produtos nacionais e internacionais aparecem juntos na busca — confira se o item mostra 'Envio Internacional' ou 'Importado'. Shopee Coins reduzem o pagamento, mas não a base de cálculo do imposto. Vouchers de frete grátis podem manter o total abaixo de US$50, favorendo a faixa de II de 0%. Antes de finalizar, estime Imposto de Importação, ICMS e frete.",
    sections: [
      {
        heading: "Como separar produto nacional de produto internacional",
        paragraphs: [
          "A Shopee mistura ofertas nacionais e internacionais na mesma busca. Antes de calcular imposto, confirme se o anúncio mostra envio internacional, importado, prazo longo de entrega ou tributos no checkout.",
          "Se o produto já está no Brasil, a lógica de importação pode não se aplicar. Se vem do exterior, produto, frete, câmbio, ICMS e Remessa Conforme entram na decisão.",
        ],
      },
      {
        heading: "Vouchers, moedas e frete grátis",
        paragraphs: [
          "Descontos e moedas reduzem o valor pago, mas a simulação deve considerar o total final efetivamente cobrado. Frete grátis ajuda quando o componente de frete realmente fica zerado no checkout.",
          "O melhor caminho é comparar o custo final da importação com um vendedor nacional na própria Shopee ou em marketplaces brasileiros. A diferença precisa compensar prazo maior e eventual dificuldade de troca.",
        ],
      },
    ],
    calculationExample: {
      title: "Exemplo rápido: Shopee internacional",
      rows: [
        "Produto: US$31",
        "Frete após voucher: US$0",
        "Total considerado: US$31",
        "Cenário: compra dentro do Remessa Conforme",
      ],
      result:
        "O pedido pode ficar na faixa de Imposto de Importação federal de 0%, mas ainda precisa considerar o ICMS do estado de destino.",
      note:
        "Se o anúncio for nacional, compare pelo preço local. Se for internacional, use a calculadora antes de finalizar.",
    },
    faqs: [
      {
        question: "Compras da Shopee internacional pagam imposto?",
        answer:
          "Sim. Compras internacionais feitas pela Shopee estão sujeitas ao Imposto de Importação e ao ICMS estadual. Dentro do Remessa Conforme, compras até US$50 (produto + frete) podem ter Imposto de Importação de 0%, mas o ICMS estadual — entre 17% e 20% conforme o estado — continua sendo cobrado. Acima de US$50 no Remessa Conforme, a alíquota federal é 20% sobre o valor aduaneiro, mais ICMS. Fora do Remessa Conforme, o Imposto de Importação pode chegar a 60%, tornando o custo final significativamente maior.",
      },
      {
        question: "A Shopee participa do Remessa Conforme?",
        answer:
          "A Shopee é uma das plataformas que podem estar certificadas no Programa Remessa Conforme da Receita Federal. A lista oficial de empresas participantes é atualizada periodicamente e pode ser consultada no site da Receita. Quando a plataforma está certificada, os tributos aparecem discriminados no checkout — produto, frete, Imposto de Importação e ICMS — antes do pagamento. Se os impostos não aparecem no resumo da compra, o vendedor ou o fluxo pode estar fora do programa, e a cobrança pode ocorrer na chegada ao Brasil pelos Correios ou transportadora.",
      },
      {
        question: "Como calcular o imposto da Shopee antes de comprar?",
        answer:
          "Some o valor do produto e o frete internacional, converta para reais usando o câmbio do dia e identifique o estado de destino para o ICMS. Em compras dentro do Remessa Conforme até US$50, o Imposto de Importação federal é 0%, mas o ICMS (17% a 20%) incide sobre a base de cálculo. Acima de US$50 no Remessa Conforme, aplique 20% de Imposto de Importação sobre o valor aduaneiro e depois calcule o ICMS estadual. Fora do Remessa Conforme, o Imposto de Importação pode ser 60% sobre o valor total. Use a calculadora deste site para simular todos os cenários antes de finalizar a compra.",
      },
      {
        question: "Compras da Shopee abaixo de US$50 pagam imposto?",
        answer:
          "Sim, mesmo compras abaixo de US$50 podem ter cobrança de impostos. Em plataformas certificadas no Remessa Conforme, o Imposto de Importação federal pode ser 0% para valores até US$50 (produto + frete), mas o ICMS estadual continua sendo cobrado — a alíquota varia de 17% a 20% conforme o estado de destino. Fora do Remessa Conforme, compras abaixo de US$50 podem estar sujeitas ao Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Por isso, é fundamental verificar se a compra está dentro do programa e simular o custo total antes de pagar.",
      },
      {
        question: "Como saber se o imposto já está incluído?",
        answer:
          "Confira o checkout da Shopee antes de finalizar o pagamento. Em compras dentro do Remessa Conforme, a plataforma deve mostrar os tributos discriminados: valor do produto, frete, Imposto de Importação e ICMS, separadamente. Se esses valores não aparecem no resumo da compra, a cobrança pode ocorrer quando a encomenda chegar ao Brasil, pelos Correios ou pela transportadora, com notificação de pagamento pendente. Nessa situação, o consumidor precisa quitar os tributos antes da entrega. Sempre prefira compras em que os impostos são transparentes no checkout para evitar surpresas.",
      },
      {
        question: "Vale a pena comprar produto internacional na Shopee?",
        answer:
          "Depende do custo final comparado com uma alternativa nacional. Para compras dentro do Remessa Conforme até US$50, o Imposto de Importação pode ser 0%, mas o ICMS (17% a 20%) e o frete internacional ainda incidem. Acima de US$50, o Imposto de Importação de 20% dentro do RC ou 60% fora do RC pode elevar bastante o valor total. Em muitos casos, mesmo com tributação, o preço importado ainda fica abaixo da opção nacional, especialmente para eletrônicos e acessórios. Simule o custo total com a calculadora deste site e compare com produtos vendidos por lojistas brasileiros antes de decidir.",
      },
    ],
  },
  {
    path: "/o-que-e-remessa-conforme",
    title: "Remessa Conforme 2026 | O Que É, Regras e Como Funciona",
    description:
      "Entenda o Remessa Conforme em 5 minutos. Regras 2026, quais lojas participam, como funciona a cobrança de ICMS e quando paga imposto.",
    h1: "O Que é Remessa Conforme? (2026)",
    directAnswer: "Remessa Conforme é o programa da Receita Federal que permite a plataformas certificadas informar e recolher tributos de compras internacionais no checkout, dando mais previsibilidade ao consumidor.",
    introParagraph: "O Remessa Conforme é um programa da Receita Federal criado para simplificar a tributação de compras internacionais no Brasil. Em vez de descobrir a cobrança apenas quando a encomenda chega, o consumidor passa a ter mais previsibilidade quando compra em uma empresa certificada.",
    sections: [
      {
        heading: "O que muda para o consumidor",
        paragraphs: [
          "A principal mudança é a previsibilidade. Em uma compra dentro do Remessa Conforme, a plataforma tende a mostrar produto, frete, Imposto de Importação e ICMS antes do pagamento.",
          "Isso não significa compra sem imposto. Significa que o consumidor consegue ver melhor o custo total e decidir se a importação ainda vale a pena quando comparada com uma compra no Brasil.",
        ],
      },
      {
        heading: "Como conferir se a compra está no programa",
        paragraphs: [
          "Consulte a lista oficial da Receita Federal e, principalmente, confira o checkout. Se os tributos aparecem discriminados antes do pagamento, há mais previsibilidade sobre a cobrança.",
          "Em marketplaces, a situação pode variar por vendedor, logística e oferta. Por isso, não basta presumir que toda compra de uma mesma plataforma terá a mesma regra.",
        ],
      },
    ],
    calculationExample: {
      title: "Exemplo rápido: diferença entre dentro e fora do programa",
      rows: [
        "Pedido: US$45 em produto e frete",
        "Dentro do Remessa Conforme: II federal pode ser 0%",
        "Fora do Remessa Conforme: II pode chegar a 60%",
        "Em ambos os cenários: ICMS estadual pode ser cobrado",
      ],
      result:
        "O Remessa Conforme melhora a previsibilidade e pode reduzir o Imposto de Importação, mas não elimina o ICMS.",
      note:
        "Sempre simule o total antes de pagar, principalmente quando o pedido fica perto do limite de US$50.",
    },
    faqs: [
      {
        question: "O que é Remessa Conforme?",
        answer:
          "O Remessa Conforme é um programa da Receita Federal que permite a plataformas certificadas informar e recolher os tributos de compras internacionais no checkout, antes do pagamento. Sem o programa, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, cobrado quando a encomenda chega ao Brasil. Dentro do Remessa Conforme, compras até US$50 podem ter Imposto de Importação de 0%, e compras acima de US$50 têm alíquota reduzida a 20%. O ICMS estadual, que varia de 17% a 20% conforme o estado de destino, continua sendo cobrado em ambos os casos.",
      },
      {
        question: "Compras abaixo de US$50 pagam imposto?",
        answer:
          "Sim. Em plataformas certificadas no Remessa Conforme, o Imposto de Importação federal é 0% para compras até US$50, mas o ICMS estadual continua sendo cobrado com alíquotas entre 17% e 20%, dependendo do estado de destino. Fora do Remessa Conforme, mesmo compras abaixo de US$50 podem pagar Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Portanto, o limite de US$50 não garante compra sem tributos — sempre simule o custo total antes de pagar.",
      },
      {
        question: "Como calcular o imposto antes de comprar?",
        answer:
          "Use uma calculadora de imposto de importação informando o valor do produto, frete, câmbio do dia, estado de destino e se a loja participa do Remessa Conforme. O cálculo considera o Imposto de Importação (0% até US$50 com RC, 20% acima de US$50 com RC ou 60% sem RC) e o ICMS estadual (17% a 20%). Simular antes de comprar permite comparar o custo final com alternativas vendidas no Brasil e evitar surpresas na chegada da encomenda.",
      },
      {
        question: "O AliExpress participa do Remessa Conforme?",
        answer:
          "Sim. O AliExpress é uma das plataformas certificadas no Programa Remessa Conforme da Receita Federal. Isso significa que, em compras dentro do programa, os tributos aparecem discriminados no checkout antes do pagamento. Compras até US$50 têm Imposto de Importação de 0%, enquanto compras acima de US$50 pagam 20% de Imposto de Importação, mais ICMS estadual (17% a 20%). Para confirmar, verifique se os tributos estão visíveis na tela de pagamento antes de finalizar o pedido.",
      },
      {
        question: "Remessa Conforme significa compra sem imposto?",
        answer:
          "Não. O Remessa Conforme organiza e antecipa a cobrança dos tributos em empresas certificadas, mas não elimina impostos. Em compras até US$50, o Imposto de Importação federal pode ser 0%, mas o ICMS estadual (17% a 20%) continua sendo cobrado. Acima de US$50, o Imposto de Importação é 20% dentro do programa, contra 60% fora dele. O programa oferece previsibilidade, não isenção — sempre calcule o custo total antes de comprar.",
      },
    ],
  },
  {
    path: "/icms-importacao-brasil",
    title: "ICMS Importação Brasil 2026 | Tabela por Estado e Cálculo",
    description:
      "ICMS de importação por estado. Tabela 2026 atualizada. Veja a alíquota do seu estado e calcule o custo final da importação.",
    h1: "ICMS na Importação do Brasil (2026)",
    directAnswer: "ICMS na importação é um imposto estadual que pode entrar no custo de compras internacionais. Ele varia conforme o estado de destino e deve ser considerado junto com produto, frete, seguro e Imposto de Importação.",
    introParagraph: "O ICMS é um dos principais impostos cobrados em compras internacionais no Brasil. Mesmo compras abaixo de US$50 podem pagar ICMS dependendo do estado.",
    faqs: [
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
    ],
  },
  {
    path: "/como-calcular-imposto-importacao-brasil",
    title: "Como Calcular Imposto de Importação no Brasil 2026",
    description:
      "Aprenda como calcular imposto de importação no Brasil em 2026. Veja ICMS, Remessa Conforme e custo final atualizado.",
    h1: "Como Calcular Imposto de Importação no Brasil em 2026",
    directAnswer: "Para calcular imposto de importação no Brasil, some produto, frete e seguro, converta para reais, aplique a regra de Imposto de Importação e estime o ICMS do estado de entrega. Depois compare o custo final com uma compra nacional.",
    introParagraph: "Comprar produtos internacionais na Shopee, AliExpress, Amazon ou Shein ficou mais caro após as novas regras de importação no Brasil. Neste guia, você aprenderá como calcular imposto de importação passo a passo.",
    faqs: [
      {
        question: "Quais impostos são cobrados em compras internacionais?",
        answer:
          "As compras internacionais para o Brasil podem pagar Imposto de Importação e ICMS estadual, além de custos de frete e seguro incluídos na base de cálculo. O Imposto de Importação é 0% até US$50 em plataformas certificadas no Remessa Conforme, 20% acima de US$50 no RC, ou 60% fora do programa. O ICMS estadual varia de 17% a 20% conforme o estado de destino e incide sobre uma base que pode incluir produto, frete, seguro e o próprio Imposto de Importação. Por isso, o custo final pode ser significativamente maior que o preço anunciado no site.",
      },
      {
        question: "Como funciona o Remessa Conforme?",
        answer:
          "O Remessa Conforme é um programa da Receita Federal que permite a plataformas certificadas informar e cobrar os tributos no momento da compra, antes do pagamento. Compras até US$50 em plataformas certificadas têm Imposto de Importação de 0%, enquanto acima de US$50 a alíquota é 20%. Sem o programa, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, cobrado na chegada ao Brasil. O ICMS estadual (17% a 20%) é cobrado em todos os cenários, dentro ou fora do programa.",
      },
      {
        question: "Como calcular o imposto antes de comprar?",
        answer:
          "Informe o valor do produto, frete internacional, câmbio do dia, estado de destino e se a loja participa do Remessa Conforme. Some produto e frete, converta para reais, aplique o Imposto de Importação (0% até US$50 com RC, 20% acima de US$50 com RC, ou 60% sem RC) e depois calcule o ICMS estadual (17% a 20%). Use a calculadora deste site para automatizar o processo e compare o custo final com uma compra nacional antes de decidir pela importação.",
      },
    ],
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
    title: "Tabela Imposto Importação Brasil 2026 | ICMS, IPI e Taxas",
    description:
      "Tabela completa de imposto de importação 2026. ICMS, IPI, Remessa Conforme e taxas por estado. Calcule o custo final em 3 segundos.",
    h1: "Tabela de Imposto de Importação no Brasil (2026)",
    directAnswer: "A tabela de imposto de importação em 2026 ajuda a estimar se a compra entra na regra de até US$50, acima de US$50 ou fora do Remessa Conforme. O ICMS estadual continua sendo parte importante do custo final.",
    introParagraph: "A tabela de imposto de importação ajuda a entender quanto uma compra internacional pode custar antes de chegar ao Brasil. Em 2026, o cálculo depende do valor aduaneiro, da participação da loja no Remessa Conforme e do ICMS do estado.",
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
    h1: "Taxa dos Correios na Importação: Como Consultar e Pagar (2026)",
    directAnswer: "A taxa dos Correios na importação pode incluir o Despacho Postal e, quando houver tributação, os valores definidos pela Receita Federal. O pagamento normalmente aparece no ambiente Minhas Importações ou no aplicativo dos Correios.",
    introParagraph: "Quando uma compra internacional chega ao Brasil, o consumidor pode precisar pagar tributos de importação e valores cobrados pelos Correios antes da entrega.",
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
    h1: "Como Calcular Taxas de Importação no Brasil (2026)",
    directAnswer: "Para calcular taxas de importação, some produto, frete e seguro, converta o total para reais, aplique o Imposto de Importação, estime o ICMS do estado de destino e adicione possíveis cobranças postais ou logísticas.",
    introParagraph: "Para calcular taxas de importação no Brasil, você precisa olhar além do preço do produto. O custo final pode incluir frete internacional, câmbio, Imposto de Importação, ICMS estadual e cobranças dos Correios.",
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
    title: "Imposto Temu Brasil 2026 | Calcule Taxas em Segundos",
    description:
      "Calcule o imposto da Temu em 3 segundos. Atualizado jun/2026. Simples, rápido e atualizado com as regras do Remessa Conforme.",
    h1: "Imposto da Temu no Brasil: Como Calcular em 2026",
    directAnswer: "Para calcular o imposto da Temu, some produto, frete e seguro, converta para reais, confirme se os tributos aparecem no checkout e estime o ICMS do estado de entrega antes de comparar com uma compra nacional.",
    introParagraph: "A Temu virou uma das buscas mais comuns para quem compra produtos internacionais baratos. O risco é olhar apenas o preço do anúncio e esquecer que o custo final no Brasil pode incluir ICMS, câmbio, frete e regras do Remessa Conforme. Na Temu, o limite de US$50 é especialmente decisivo: itens custam US$1-15, e 5-8 produtos no carrinho ultrapassam o limite rapidamente. Cupons agressivos (30% off primeira compra) podem reduzir o valor pago, mas o imposto é calculado sobre o valor final. Verifique se o frete 'grátis' está incluso no preço ou realmente zerado.",
    sections: [
      {
        heading: "Por que a Temu exige atenção ao limite de US$50",
        paragraphs: [
          "A Temu incentiva pedidos com vários itens baratos. Isso ajuda no preço por produto, mas também aumenta o risco de o total do carrinho passar de US$50 quando o frete entra na soma.",
          "A decisão correta é olhar produto, frete e desconto final juntos. Um pedido de US$48 pode parecer seguro, mas um item extra ou um frete pequeno muda a faixa de tributação.",
        ],
      },
      {
        heading: "Quando importar pela Temu costuma fazer sentido",
        paragraphs: [
          "A importação pela Temu costuma ser mais interessante para itens pequenos, acessórios, organizadores, decoração e produtos difíceis de encontrar no Brasil. Para itens comuns, a diferença pode desaparecer depois de ICMS, prazo e risco de troca.",
          "Antes de pagar, compare o valor final estimado com Mercado Livre, Amazon Brasil, Lojas Americanas e lojas locais. O preço anunciado só importa depois que impostos e frete entram na conta.",
        ],
      },
    ],
    calculationExample: {
      title: "Exemplo rápido: carrinho da Temu no limite",
      rows: [
        "Produtos: US$42",
        "Frete: US$8",
        "Total considerado: US$50",
        "Cenário: Remessa Conforme com ICMS do estado",
      ],
      result:
        "O pedido fica exatamente no limite de US$50. O Imposto de Importação federal pode ser 0%, mas o ICMS estadual ainda deve ser considerado.",
      note:
        "Se o mesmo pedido subir para US$51, a regra muda. Na Temu, pequenos acréscimos no carrinho podem alterar o custo final.",
    },
    faqs: [
      {
        question: "A Temu participa do Remessa Conforme?",
        answer:
          "A Receita Federal mantém uma lista pública de empresas e plataformas certificadas no Programa Remessa Conforme, e a Temu pode estar entre elas. Em compras dentro do programa, o Imposto de Importação federal pode ser 0% para valores até US$50, com ICMS estadual de 17% a 20% dependendo do estado; acima de US$50, a alíquota federal é reduzida dentro do RC. Fora do Remessa Conforme, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, além do ICMS. Antes de comprar, confirme no checkout se os tributos aparecem discriminados e use a calculadora de importação para estimar o custo total. Compare o valor final com alternativas vendidas no Brasil antes de decidir.",
      },
      {
        question: "Compra da Temu abaixo de US$50 fica sem imposto?",
        answer:
          "Em compras da Temu dentro do Programa Remessa Conforme, o Imposto de Importação federal pode ser 0% para valores até US$50 (produto + frete), mas o ICMS estadual continua sendo cobrado com alíquotas de 17% a 20% dependendo do estado de destino. Fora do Remessa Conforme, compras abaixo de US$50 podem estar sujeitas ao Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Portanto, 'abaixo de US$50' não significa necessariamente 'sem tributos' — o ICMS sempre pode incidir. Verifique no checkout se os tributos estão discriminados e use a calculadora para estimar o custo final antes de pagar. Compare o valor total com produtos vendidos no Brasil para avaliar se a importação realmente vale a pena.",
      },
      {
        question: "Frete da Temu entra no cálculo?",
        answer:
          "Sim, o frete internacional entra no valor aduaneiro usado como base para calcular o Imposto de Importação e o ICMS. Produto, frete e seguro, quando houver, compõem o total da operação que define a faixa de tributação — dentro ou acima de US$50 no Remessa Conforme. Um carrinho com produto de US$42 e frete de US$8, por exemplo, ultrapassa o limite de US$50 e muda a regra de Imposto de Importação de 0% para a alíquota reduzida dentro do RC, ou 60% fora dele. Por isso, sempre some produto e frete antes de avaliar se a compra fica em faixa de tributação mais favorável. Use a calculadora de importação para simular o custo total e compare com alternativas no Brasil.",
      },
    ],
  },
  {
    path: "/imposto-amazon-internacional-brasil",
    title: "Imposto Amazon Internacional Brasil 2026: Como Calcular",
    description:
      "Veja como estimar imposto em compras internacionais na Amazon em 2026, com Remessa Conforme, ICMS, frete e custo final.",
    h1: "Imposto em Compra Internacional na Amazon Brasil",
    directAnswer: "Em compras internacionais na Amazon, calcule produto, frete, câmbio, Imposto de Importação e ICMS. O ponto decisivo é confirmar se a oferta mostra tributos no checkout antes do pagamento.",
    introParagraph: "A Amazon pode exibir produtos vendidos no Brasil e produtos internacionais no mesmo ambiente. A dúvida principal é: o preço mostrado já inclui impostos ou a cobrança pode aparecer depois? Ofertas vendidas pela Amazon seguem fluxo centralizado com tributos no checkout; ofertas de vendedores terceiros podem ter tributação diferente. Produtos importados acima de US$100 têm carga tributária significativa (II + ICMS), e a garantia pode não ser válida no Brasil. Antes de importar, compare com o mesmo produto na Amazon Brasil.",
    sections: [
      {
        heading: "Como identificar uma oferta internacional na Amazon",
        paragraphs: [
          "Antes de calcular imposto, verifique se o produto é vendido no Brasil ou enviado do exterior. A Amazon pode mostrar ofertas nacionais e internacionais no mesmo ambiente, com prazos, garantias e tributos diferentes.",
          "Observe os campos de vendedor, envio, prazo de entrega e impostos estimados no checkout. Se os tributos aparecem antes do pagamento, use esses valores como referência principal.",
        ],
      },
      {
        heading: "Garantia e comparação com a Amazon Brasil",
        paragraphs: [
          "Em produtos de maior valor, como eletrônicos, câmeras, acessórios profissionais e itens acima de US$100, a garantia pode pesar tanto quanto o imposto. Uma economia pequena pode não compensar se a troca ou assistência for difícil.",
          "Compare sempre com uma oferta nacional da Amazon Brasil ou de outro varejista local. A importação só deve vencer quando o custo final, prazo e risco ainda forem melhores que a alternativa brasileira.",
        ],
      },
    ],
    calculationExample: {
      title: "Exemplo rápido: eletrônico importado pela Amazon",
      rows: [
        "Produto: US$120",
        "Frete internacional: US$15",
        "Total considerado: US$135",
        "Cenário: acima de US$50, com II e ICMS",
      ],
      result:
        "Acima de US$50, o Imposto de Importação volta a pesar no custo final, e o ICMS estadual é calculado junto da operação.",
      note:
        "Para produtos de maior valor, compare também garantia local, prazo de entrega e política de devolução.",
    },
    faqs: [
      {
        question: "Compra internacional na Amazon paga imposto?",
        answer:
          "Sim, compras internacionais na Amazon estão sujeitas ao Imposto de Importação e ao ICMS estadual. Dentro do Remessa Conforme, compras até US$50 (produto + frete) podem ter Imposto de Importação de 0%, mas o ICMS estadual de 17% a 20% continua sendo cobrado conforme o estado de destino. Acima de US$50 no RC, a alíquota federal é reduzida; fora do programa, o Imposto de Importação pode chegar a 60% sobre o valor aduaneiro, além do ICMS. Antes de finalizar o pedido, confirme se o checkout da Amazon mostra os tributos discriminados. Use a calculadora de importação para estimar o custo total e compare com produtos vendidos no Brasil.",
      },
      {
        question: "Amazon e marketplace são a mesma coisa para imposto?",
        answer:
          "Não necessariamente. A Amazon pode vender diretamente como importador ou intermediar vendedores terceiros que seguem fluxos diferentes de tributação e logística. Em compras de vendedores dentro do Remessa Conforme, os tributos tendem a aparecer no checkout com Imposto de Importação de 0% até US$50 ou alíquota reduzida acima desse valor, mais ICMS de 17% a 20% conforme o estado. Em ofertas de vendedores fora do programa, a cobrança pode ocorrer na chegada ao Brasil com Imposto de Importação de 60% e ICMS estadual. Por isso, sempre verifique se a oferta é internacional e se os tributos estão incluídos ou discriminados no checkout antes de pagar. Use a calculadora para simular diferentes cenários e compare com alternativas brasileiras.",
      },
      {
        question: "Devo comparar com produto vendido no Brasil?",
        answer:
          "Sim, comparar o custo final da importação com alternativas vendidas no Brasil é essencial antes de decidir. Mesmo com Imposto de Importação de 0% até US$50 no Remessa Conforme, o ICMS estadual (17% a 20%), o frete internacional e o câmbio podem elevar o valor total significativamente. Acima de US$50, o Imposto de Importação dentro do RC volta a incidir, e fora do RC pode chegar a 60%, fazendo o custo final se aproximar ou ultrapassar o preço nacional. A compra no Brasil oferece vantagens como prazo de entrega menor, garantia local e possibilidade de troca que a importação não garante. Use a calculadora de importação para estimar o custo total e compare com o preço do mesmo produto em lojas brasileiras antes de decidir.",
      },
    ],
  },
  {
    path: "/compras-internacionais-abaixo-50-dolares",
    title: "Compras Abaixo de US$50 Pagam Imposto? Regras 2026",
    description:
      "Entenda quando compras internacionais abaixo de US$50 pagam imposto no Brasil em 2026, com Remessa Conforme, ICMS e exemplos.",
    h1: "Compras Internacionais Abaixo de US$50 Pagam Imposto?",
    directAnswer: "Em compras de até US$50 feitas em plataformas certificadas no Remessa Conforme, o Imposto de Importação federal pode ser 0%, mas o ICMS estadual pode continuar sendo cobrado no checkout.",
    introParagraph: "A dúvida sobre compras abaixo de US$50 é uma das mais importantes para quem compra em AliExpress, Shein, Shopee, Temu e Amazon. A resposta curta é: pode não haver Imposto de Importação federal, mas isso não significa custo final sem tributos.",
    faqs: [
      {
        question: "Compras abaixo de US$50 pagam imposto no Brasil?",
        answer:
          "Em plataformas certificadas no Remessa Conforme, o Imposto de Importação federal é 0% para compras até US$50, mas o ICMS estadual continua sendo cobrado com alíquotas entre 17% e 20%, dependendo do estado de destino. Fora do Remessa Conforme, compras abaixo de US$50 podem pagar Imposto de Importação de 60% sobre o valor aduaneiro, além do ICMS. Portanto, o limite de US$50 não garante isenção total — sempre simule o custo final com a calculadora antes de comprar.",
      },
      {
        question: "O limite de US$50 inclui frete?",
        answer:
          "Para estimar a compra com segurança, considere produto, frete e seguro quando houver, pois esses valores podem compor a base de cálculo da importação. Uma compra que parece abaixo de US$50 pelo preço do produto pode ultrapassar o limite quando o frete internacional é adicionado. Se o valor total (produto + frete + seguro) exceder US$50, a regra de Imposto de Importação de 0% pode não se aplicar, e a alíquota pode mudar para 20% dentro do RC ou 60% fora dele. Por isso, sempre use o valor total do carrinho ao verificar o enquadramento.",
      },
      {
        question: "Fora do Remessa Conforme a regra muda?",
        answer:
          "Sim. Compras fora de plataformas certificadas no Remessa Conforme podem pagar Imposto de Importação de 60% sobre o valor aduaneiro, cobrado quando a encomenda chega ao Brasil. Além disso, o ICMS estadual (17% a 20%) também é cobrado, e a cobrança aparece por meio dos Correios ou da transportadora, sem previsibilidade no checkout. Dentro do RC, o Imposto de Importação é 0% até US$50 e 20% acima, com tributos exibidos antes do pagamento. A diferença no custo final pode ser significativa entre os dois cenários.",
      },
      {
        question: "Como saber se estou no Remessa Conforme?",
        answer:
          "Confira a lista pública de empresas certificadas no site da Receita Federal e, no momento da compra, veja se o checkout mostra os tributos antes do pagamento. Plataformas como AliExpress, Shein e Shopee participam do programa, mas em marketplaces, a operação pode depender do vendedor específico. Se os impostos aparecem discriminados no checkout (Imposto de Importação e ICMS), a compra está dentro do RC. Se não aparecem, a cobrança pode ocorrer na chegada ao Brasil com alíquota de 60% de Imposto de Importação.",
      },
    ],
  },
  {
    path: "/lojas-remessa-conforme",
    title: "Lojas no Remessa Conforme 2026: Como Conferir",
    description:
      "Veja como conferir lojas e marketplaces no Programa Remessa Conforme em 2026 e por que isso muda o imposto de importação.",
    h1: "Lojas no Remessa Conforme: Como Conferir Antes de Comprar",
    directAnswer: "Para saber se uma loja está no Remessa Conforme, consulte a lista da Receita Federal e confirme se o checkout mostra os tributos antes do pagamento. Isso é essencial para estimar imposto e ICMS.",
    introParagraph: "O Programa Remessa Conforme é importante porque muda a previsibilidade de compras internacionais. Em vez de descobrir o imposto apenas na chegada ao Brasil, o consumidor tende a ver a cobrança no checkout das plataformas participantes.",
    faqs: [
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
    h1: "ICMS de Importação em São Paulo: Como Calcular em 2026",
    directAnswer: "Para estimar o ICMS de importação em São Paulo, use o estado de destino SP na calculadora. A alíquota estimada usada para São Paulo é 18%, junto com produto, frete, câmbio, Imposto de Importação e Remessa Conforme.",
    introParagraph: "São Paulo é o estado com o maior volume de compras internacionais no Brasil. A alíquota de ICMS de 18% para importação é uma das mais baixas entre os grandes estados, o que torna as compras mais favoráveis em comparação com Rio de Janeiro (22%) ou Minas Gerais (20%). Além disso, a maior parte dos hubs de entrega e centros de processamento aduaneiro estão em São Paulo, o que pode resultar em prazos de entrega mais rápidos. Mas o consumidor paulista também tem mais alternativas nacionais disponíveis, tornando a comparação com lojas brasileiras ainda mais importante antes de decidir pela importação.",
    sections: [
      {
        heading: "Por que São Paulo pode ter custo final menor",
        paragraphs: [
          "A alíquota estimada de 18% fica abaixo de estados como Rio de Janeiro e Minas Gerais. Para o mesmo produto, mesmo frete e mesmo câmbio, essa diferença pode reduzir o custo final da importação.",
          "Ainda assim, São Paulo também concentra muitas alternativas nacionais com entrega rápida. Por isso, o cálculo precisa comparar importação com compra local, não apenas imposto com imposto.",
        ],
      },
      {
        heading: "Como decidir antes de comprar",
        paragraphs: [
          "Use São Paulo como estado de destino na calculadora, informe produto, frete e câmbio, e selecione se a compra está no Remessa Conforme. Depois compare o resultado com marketplaces brasileiros.",
          "Se a economia final for pequena, a compra nacional pode vencer por prazo, garantia e facilidade de troca. Se o produto não existe no Brasil ou a diferença for grande, a importação pode continuar fazendo sentido.",
        ],
      },
    ],
    calculationExample: {
      title: "Exemplo rápido: ICMS de SP em compra de US$50",
      rows: [
        "Produto + frete: US$50",
        "Câmbio de exemplo: R$5,20",
        "Base estimada: R$260",
        "ICMS estimado para SP: 18%",
      ],
      result:
        "Mesmo com Imposto de Importação federal de 0% no Remessa Conforme até US$50, o ICMS de São Paulo ainda entra no custo final.",
      note:
        "A estimativa ajuda na decisão antes da compra, mas o valor oficial depende do checkout e da autoridade competente.",
    },
    faqs: [
      {
        question: "Qual ICMS a calculadora usa para São Paulo?",
        answer:
          "Para São Paulo, a calculadora usa 18% como alíquota estimada. Essa taxa é uma das mais baixas entre os estados com grande volume de importação, tornando o custo final mais favorável do que em Rio de Janeiro (22%) ou Minas Gerais (20%).",
      },
      {
        question: "O ICMS de São Paulo aparece no checkout?",
        answer:
          "Em compras dentro do Remessa Conforme, o ICMS pode aparecer antes do pagamento. Fora desse fluxo, a cobrança pode surgir no processo de importação.",
      },
      {
        question: "São Paulo tem vantagem na importação?",
        answer:
          "Em relação ao ICMS, sim. A alíquota de 18% em São Paulo é mais baixa que a de Rio de Janeiro (22%) ou Minas Gerais (20%), resultando em custo final menor para o mesmo pedido. São Paulo também concentra hubs de entrega que podem reduzir o prazo. Porém, o consumidor paulista dispõe de mais alternativas nacionais, o que exige comparação rigorosa entre o custo importado e o preço brasileiro.",
      },
      {
        question: "Esta estimativa substitui o valor oficial?",
        answer:
          "Não. Ela serve para decisão antes da compra. O valor oficial depende do checkout, da transportadora, dos Correios ou da autoridade competente.",
      },
    ],
  },
  {
    path: "/icms-importacao-minas-gerais",
    title: "ICMS Importação Minas Gerais 2026: Como Calcular",
    description:
      "Entenda como estimar ICMS de importação para Minas Gerais em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.",
    h1: "ICMS de Importação em Minas Gerais: Como Calcular em 2026",
    directAnswer: "Para estimar o ICMS de importação em Minas Gerais, use o estado de destino MG na calculadora. A alíquota estimada usada para Minas Gerais é 20%, junto com produto, frete, câmbio, Imposto de Importação e Remessa Conforme.",
    introParagraph: "O ICMS é um dos motivos pelos quais duas compras internacionais com o mesmo preço podem ter custos finais diferentes no Brasil. Para um comprador em Minas Gerais, o estado de destino precisa entrar na conta antes de decidir se vale a pena importar.",
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
    h1: "ICMS de Importação em Paraná: Como Calcular em 2026",
    directAnswer: "Para estimar o ICMS de importação em Paraná, use o estado de destino PR na calculadora. A alíquota estimada usada para Paraná é 19,5%, junto com produto, frete, câmbio, Imposto de Importação e Remessa Conforme.",
    introParagraph: "O ICMS é um dos motivos pelos quais duas compras internacionais com o mesmo preço podem ter custos finais diferentes no Brasil. Para um comprador em Paraná, o estado de destino precisa entrar na conta antes de decidir se vale a pena importar.",
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
    h1: "ICMS de Importação em Rio de Janeiro: Como Calcular em 2026",
    directAnswer: "Para estimar o ICMS de importação em Rio de Janeiro, use o estado de destino RJ na calculadora. A alíquota estimada usada para Rio de Janeiro é 22%, uma das mais altas do Brasil, junto com produto, frete, câmbio, Imposto de Importação e Remessa Conforme.",
    introParagraph: "Rio de Janeiro tem uma das alíquotas de ICMS mais altas para importação: 22%. Isso significa que o mesmo pedido internacional pode custar mais para um comprador fluminense do que para um comprador paulista (18%) ou catarinense (17%). A diferença de 4 pontos percentuais entre RJ e SP pode representar R$20-30 a mais em um pedido típico de US$50. Por isso, no Rio de Janeiro, a comparação com alternativas vendidas no Brasil é ainda mais decisiva — a carga tributária elevada reduz a vantagem do preço importado e, em muitos casos, torna a compra nacional mais econômica.",
    sections: [
      {
        heading: "Por que o Rio de Janeiro exige comparação mais rigorosa",
        paragraphs: [
          "Com alíquota estimada de 22%, o Rio de Janeiro tende a elevar mais o custo final da importação do que estados com ICMS menor. A diferença aparece principalmente quando a compra passa de US$50 ou quando o frete é alto.",
          "Por isso, o preço importado precisa ser significativamente menor para compensar. Se a diferença contra uma opção nacional for pequena, prazo, garantia e troca podem tornar a compra no Brasil mais vantajosa.",
        ],
      },
      {
        heading: "Como simular para RJ sem erro comum",
        paragraphs: [
          "Informe RJ como estado de destino e some produto, frete e seguro antes de avaliar a faixa de tributação. Não use apenas o preço do produto, porque o frete pode mudar a regra aplicável.",
          "Depois de estimar II e ICMS, compare com lojas brasileiras. Para consumidores no Rio de Janeiro, essa etapa é especialmente importante em eletrônicos, roupas, acessórios e produtos acima de US$50.",
        ],
      },
    ],
    calculationExample: {
      title: "Exemplo rápido: ICMS do RJ em compra de US$50",
      rows: [
        "Produto + frete: US$50",
        "Câmbio de exemplo: R$5,20",
        "Base estimada: R$260",
        "ICMS estimado para RJ: 22%",
      ],
      result:
        "Mesmo quando o Imposto de Importação federal pode ser 0% no Remessa Conforme, o ICMS do Rio de Janeiro continua elevando o total.",
      note:
        "A diferença contra estados com alíquota menor pode decidir se a importação ainda compensa.",
    },
    faqs: [
      {
        question: "Qual ICMS a calculadora usa para Rio de Janeiro?",
        answer:
          "Para Rio de Janeiro, a calculadora usa 22% como alíquota estimada. Essa taxa é uma das mais altas do Brasil, superior a São Paulo (18%) e Santa Catarina (17%), resultando em custo final mais elevado para o mesmo pedido.",
      },
      {
        question: "O ICMS de Rio de Janeiro aparece no checkout?",
        answer:
          "Em compras dentro do Remessa Conforme, o ICMS pode aparecer antes do pagamento. Fora desse fluxo, a cobrança pode surgir no processo de importação.",
      },
      {
        question: "Por que o ICMS do Rio de Janeiro é mais alto?",
        answer:
          "A alíquota de 22% é definida pela legislação estadual do Rio de Janeiro e incide sobre a base de cálculo da importação, que pode incluir produto, frete, seguro e o próprio Imposto de Importação. A diferença de 4 pontos percentuais em relação a São Paulo (18%) pode representar R$20-30 a mais em pedidos de US$50, tornando a comparação com produtos nacionais ainda mais importante.",
      },
      {
        question: "Esta estimativa substitui o valor oficial?",
        answer:
          "Não. Ela serve para decisão antes da compra. O valor oficial depende do checkout, da transportadora, dos Correios ou da autoridade competente.",
      },
    ],
  },
  {
    path: "/icms-importacao-santa-catarina",
    title: "ICMS Importação Santa Catarina 2026: Como Calcular",
    description:
      "Entenda como estimar ICMS de importação para Santa Catarina em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.",
    h1: "ICMS de Importação em Santa Catarina: Como Calcular em 2026",
    directAnswer: "Para estimar o ICMS de importação em Santa Catarina, use o estado de destino SC na calculadora. A alíquota estimada usada para Santa Catarina é 17%, junto com produto, frete, câmbio, Imposto de Importação e Remessa Conforme.",
    introParagraph: "O ICMS é um dos motivos pelos quais duas compras internacionais com o mesmo preço podem ter custos finais diferentes no Brasil. Para um comprador em Santa Catarina, o estado de destino precisa entrar na conta antes de decidir se vale a pena importar.",
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

const states = [
  { slug: "acre", name: "Acre", code: "AC", rate: "17%" },
  { slug: "alagoas", name: "Alagoas", code: "AL", rate: "20%" },
  { slug: "amazonas", name: "Amazonas", code: "AM", rate: "20%" },
  { slug: "amapa", name: "Amapá", code: "AP", rate: "18%" },
  { slug: "bahia", name: "Bahia", code: "BA", rate: "20,5%" },
  { slug: "ceara", name: "Ceará", code: "CE", rate: "20%" },
  { slug: "distrito-federal", name: "Distrito Federal", code: "DF", rate: "20%" },
  { slug: "espirito-santo", name: "Espírito Santo", code: "ES", rate: "17%" },
  { slug: "goias", name: "Goiás", code: "GO", rate: "19%" },
  { slug: "maranhao", name: "Maranhão", code: "MA", rate: "22%" },
  { slug: "minas-gerais", name: "Minas Gerais", code: "MG", rate: "20%" },
  { slug: "mato-grosso-do-sul", name: "Mato Grosso do Sul", code: "MS", rate: "17%" },
  { slug: "mato-grosso", name: "Mato Grosso", code: "MT", rate: "17%" },
  { slug: "para", name: "Pará", code: "PA", rate: "19%" },
  { slug: "paraiba", name: "Paraíba", code: "PB", rate: "20%" },
  { slug: "pernambuco", name: "Pernambuco", code: "PE", rate: "20,5%" },
  { slug: "piaui", name: "Piauí", code: "PI", rate: "21%" },
  { slug: "parana", name: "Paraná", code: "PR", rate: "19,5%" },
  { slug: "rio-de-janeiro", name: "Rio de Janeiro", code: "RJ", rate: "22%" },
  { slug: "rio-grande-do-norte", name: "Rio Grande do Norte", code: "RN", rate: "20%" },
  { slug: "rondonia", name: "Rondônia", code: "RO", rate: "17,5%" },
  { slug: "roraima", name: "Roraima", code: "RR", rate: "20%" },
  { slug: "rio-grande-do-sul", name: "Rio Grande do Sul", code: "RS", rate: "17%" },
  { slug: "santa-catarina", name: "Santa Catarina", code: "SC", rate: "17%" },
  { slug: "sao-paulo", name: "São Paulo", code: "SP", rate: "18%" },
  { slug: "sergipe", name: "Sergipe", code: "SE", rate: "19%" },
  { slug: "tocantins", name: "Tocantins", code: "TO", rate: "20%" },
];

const platforms = [
  { slug: "aliexpress", name: "AliExpress" },
  { slug: "shein", name: "Shein" },
  { slug: "shopee", name: "Shopee" },
  { slug: "temu", name: "Temu" },
  { slug: "amazon-internacional", name: "Amazon Internacional" },
];

const generatedStatePages = states.map((state) => ({
  path: `/icms-importacao-${state.slug}`,
  title: `ICMS Importação ${state.name} 2026: Como Calcular`,
  description: `Entenda como estimar ICMS de importação para ${state.name} em 2026, com imposto de importação, frete, câmbio e Remessa Conforme.`,
  h1: `ICMS de Importação em ${state.name}: Como Calcular em 2026`,
  directAnswer: `Para estimar o ICMS de importação em ${state.name}, use o estado de destino ${state.code} na calculadora. A alíquota estimada usada para ${state.name} é ${state.rate}, junto com produto, frete, câmbio, Imposto de Importação e Remessa Conforme.`,
  introParagraph: `O ICMS é um dos motivos pelos quais duas compras internacionais com o mesmo preço podem ter custos finais diferentes no Brasil. Para um comprador em ${state.name}, o estado de destino precisa entrar na conta antes de decidir se vale a pena importar.`,
  faqs: [
    {
      question: `Qual ICMS a calculadora usa para ${state.name}?`,
      answer: `A calculadora usa ${state.rate} como alíquota estimada para o estado de destino ${state.code}.`,
    },
    {
      question: `O ICMS de ${state.name} aparece no checkout?`,
      answer:
        "Em compras dentro do Remessa Conforme, o ICMS pode aparecer antes do pagamento. Fora desse fluxo, a cobrança pode surgir no processo de importação.",
    },
    {
      question: "Esta estimativa substitui o valor oficial?",
      answer:
        "Não. Ela serve para decisão antes da compra. O valor oficial depende do checkout, da transportadora, dos Correios ou da autoridade competente.",
    },
  ],
}));

const generatedPlatformStatePages = platforms.flatMap((platform) =>
  states.map((state) => ({
    path: `/imposto-${platform.slug}-${state.slug}`,
    title: `Imposto ${platform.name} ${state.name} 2026: Como Calcular`,
    description: `Calcule imposto de compras da ${platform.name} para ${state.name} em 2026, com ICMS de ${state.rate}, frete, câmbio e Remessa Conforme.`,
    h1: `Imposto da ${platform.name} para ${state.name}: Como Calcular em 2026`,
    directAnswer: `Para calcular imposto da ${platform.name} para ${state.name}, some produto, frete e seguro, converta para reais, considere a regra de Imposto de Importação e use ${state.rate} como ICMS estimado para o estado ${state.code}.`,
    introParagraph: `Uma compra internacional da ${platform.name} pode ter custo final diferente dependendo do estado de entrega. Para ${state.name}, a calculadora usa ICMS estimado de ${state.rate}, além de frete, câmbio, valor do produto e regra do Remessa Conforme.`,
    faqs: [
      {
        question: `Como calcular imposto da ${platform.name} para ${state.name}?`,
        answer: `Some produto, frete e seguro, converta para reais, aplique a regra de Imposto de Importação e use ${state.rate} como ICMS estimado para ${state.name}.`,
      },
      {
        question: `Compra da ${platform.name} para ${state.code} abaixo de US$50 paga ICMS?`,
        answer:
          "Pode pagar. Mesmo em plataforma certificada no Remessa Conforme, o ICMS estadual pode continuar aparecendo no checkout.",
      },
      {
        question: `O imposto da ${platform.name} aparece no checkout?`,
        answer:
          "Em compras dentro do Remessa Conforme, os tributos podem aparecer antes do pagamento. Em outros fluxos, a cobrança pode ocorrer na chegada ao Brasil.",
      },
    ],
  })),
);

const allPages = Array.from(
  new Map(
    [...generatedStatePages, ...generatedPlatformStatePages, ...pages].map(
      (page) => [page.path, page],
    ),
  ).values(),
);

const siteOrigin = "https://www.taxadeimportacao.com";
const socialImage = `${siteOrigin}/opengraph.jpg`;
const baseHtml = await readFile(baseHtmlPath, "utf8");

const homePage = {
  path: "/",
  title: "Calculadora Imposto Importação Brasil 2026 | ICMS, IPI & Taxas Grátis",
  description:
    "Calcule imposto de importação em 3 segundos. Atualizado jun/2026. Simples, rápido e gratuito para AliExpress, Shein, Shopee, Temu.",
  h1: "Calcule o custo final da importação",
  directAnswer:
    "Use a calculadora para estimar produto, frete, câmbio, Imposto de Importação, ICMS do estado de destino e regra do Remessa Conforme antes de finalizar uma compra internacional.",
  introParagraph:
    "A Taxa de Importação ajuda consumidores no Brasil a comparar o custo final de compras em AliExpress, Shein, Shopee, Temu, Amazon e outras lojas internacionais. Informe o valor do produto, frete, câmbio, estado de entrega e se os tributos aparecem no checkout para estimar o total em reais antes de comprar.",
  faqs: [
    {
      question: "Quanto pago de imposto para importar no Brasil?",
      answer:
        "O valor depende do produto, do frete, do câmbio, do estado de destino e das regras do Remessa Conforme. A calculadora estima Imposto de Importação, ICMS e possíveis cobranças adicionais para dar uma visão do custo final antes da compra.",
    },
    {
      question: "O ICMS muda de acordo com o estado?",
      answer:
        "Sim. O ICMS é estadual e pode variar conforme o destino da entrega. Por isso, duas compras com o mesmo preço podem ter custos finais diferentes em São Paulo, Rio de Janeiro, Minas Gerais, Santa Catarina ou outros estados.",
    },
    {
      question: "Como funciona o Remessa Conforme?",
      answer:
        "No Remessa Conforme, lojas certificadas podem mostrar e recolher tributos no checkout, antes do pagamento. Isso aumenta a previsibilidade, mas não elimina o ICMS estadual nem garante que toda compra internacional ficará sem imposto.",
    },
    {
      question: "Esta calculadora é exata?",
      answer:
        "Não. A calculadora oferece uma estimativa educacional para ajudar na decisão de compra. O valor oficial pode variar conforme declaração da remessa, regras vigentes, transportadora, Correios, checkout da loja e autoridade competente.",
    },
  ],
};

const pageLookup = new Map(
  [homePage, ...allPages].map((page) => [page.path, page]),
);
const priorityStateSlugs = [
  "sao-paulo",
  "rio-de-janeiro",
  "minas-gerais",
  "parana",
  "santa-catarina",
];

function uniqueValues(values) {
  return Array.from(new Set(values));
}

function buildPlatformStatePath(platformSlug, stateSlug) {
  return `/imposto-${platformSlug}-${stateSlug}`;
}

function findPlatformFromPath(path) {
  return platforms.find(
    (platform) =>
      path === `/imposto-${platform.slug}-brasil` ||
      path.startsWith(`/imposto-${platform.slug}-`),
  );
}

function findStateFromSlug(slug) {
  return states.find((state) => state.slug === slug);
}

function getRelatedPaths(path) {
  if (path === "/") {
    return pages.slice(0, 13).map((page) => page.path);
  }

  const platformStateMatch = path.match(
    /^\/imposto-(aliexpress|shein|shopee|temu|amazon-internacional)-(.+)$/,
  );

  if (platformStateMatch) {
    const [, platformSlug, stateSlug] = platformStateMatch;
    const platform = platforms.find((item) => item.slug === platformSlug);
    const state = findStateFromSlug(stateSlug);

    return uniqueValues([
      platform ? `/imposto-${platform.slug}-brasil` : "",
      state ? `/icms-importacao-${state.slug}` : "",
      "/o-que-e-remessa-conforme",
      "/compras-internacionais-abaixo-50-dolares",
      ...platforms
        .filter((item) => item.slug !== platformSlug)
        .map((item) => buildPlatformStatePath(item.slug, stateSlug)),
      ...priorityStateSlugs
        .filter((item) => item !== stateSlug)
        .slice(0, 2)
        .map((item) => buildPlatformStatePath(platformSlug, item)),
    ]).filter(Boolean);
  }

  const platform = findPlatformFromPath(path);

  if (platform && path === `/imposto-${platform.slug}-brasil`) {
    return uniqueValues([
      "/o-que-e-remessa-conforme",
      "/icms-importacao-brasil",
      "/compras-internacionais-abaixo-50-dolares",
      "/lojas-remessa-conforme",
      ...priorityStateSlugs
        .slice(0, 3)
        .map((stateSlug) => buildPlatformStatePath(platform.slug, stateSlug)),
      ...platforms
        .filter((item) => item.slug !== platform.slug)
        .map((item) => `/imposto-${item.slug}-brasil`),
    ]);
  }

  const stateMatch = path.match(/^\/icms-importacao-(.+)$/);

  if (stateMatch) {
    const stateSlug = stateMatch[1];
    const state = findStateFromSlug(stateSlug);

    if (state) {
      return uniqueValues([
        "/icms-importacao-brasil",
        ...platforms.map((item) => buildPlatformStatePath(item.slug, state.slug)),
        "/o-que-e-remessa-conforme",
        "/compras-internacionais-abaixo-50-dolares",
      ]);
    }
  }

  if (path === "/o-que-e-remessa-conforme") {
    return uniqueValues([
      "/lojas-remessa-conforme",
      "/compras-internacionais-abaixo-50-dolares",
      "/tabela-imposto-importacao-brasil",
      "/icms-importacao-brasil",
      ...platforms.map((platform) => `/imposto-${platform.slug}-brasil`),
    ]);
  }

  if (path === "/icms-importacao-brasil") {
    return uniqueValues([
      ...priorityStateSlugs.map((stateSlug) => `/icms-importacao-${stateSlug}`),
      "/o-que-e-remessa-conforme",
      "/calcular-taxas-importacao",
      "/tabela-imposto-importacao-brasil",
    ]);
  }

  return pages.map((page) => page.path);
}

function getRelatedLinks(page) {
  return getRelatedPaths(page.path)
    .filter((path) => path !== page.path && pageLookup.has(path))
    .slice(0, 8)
    .map((path) => {
      const relatedPage = pageLookup.get(path);
      return {
        href: `${siteOrigin}${path}`,
        label: relatedPage.h1 || relatedPage.title,
      };
    });
}

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
      dateModified: "2026-05-30",
    },
  ];

  if (page.path !== "/") {
    graph.push({
      "@type": "Article",
      "@id": articleId,
      mainEntityOfPage: {
        "@id": pageId,
      },
      headline: page.title,
      description: page.description,
      inLanguage: "pt-BR",
      image: socialImage,
      author: {
        "@type": "Organization",
        "@id": `${siteOrigin}/#organization`,
      },
      publisher: {
        "@id": `${siteOrigin}/#organization`,
      },
      datePublished: "2026-05-23",
      dateModified: "2026-05-30",
    });
  }

  // FAQPage schema is provided by SeoHead (React hydration) to avoid
  // duplicate FAQPage declarations that invalidate Google rich results.
  // The prerender body HTML still renders FAQ content for crawlers.

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

  // FAQPage omitted from @graph — provided by SeoHead (React) to avoid duplicate

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
  const ogType = page.path === "/" ? "website" : "article";

  let updated = html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/s,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/s,
      `<link rel="canonical" href="${canonical}" />`,
    );

  updated = updated
    .replace(/\s*<meta property="og:[^"]+" content=".*?" \/>\n/g, "")
    .replace(/\s*<meta name="twitter:[^"]+" content=".*?" \/>\n/g, "");

  // Insert Open Graph and Twitter Card meta tags before </head>
  const ogTwitterTags = [
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:site_name" content="Taxa de Importação" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:image" content="${socialImage}" />`,
    `<meta property="og:image:width" content="1280" />`,
    `<meta property="og:image:height" content="720" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${socialImage}" />`,
  ].join("\n    ");

  updated = updated.replace("</head>", `    ${ogTwitterTags}\n    ${buildSchemaTag(page)}\n  </head>`);
  return updated;
}

function buildBodyHtml(page) {
  const h1 = page.h1 ? escapeHtml(page.h1) : escapeHtml(page.title);
  const directAnswer = page.directAnswer ? escapeHtml(page.directAnswer) : "";
  const introParagraph = page.introParagraph ? escapeHtml(page.introParagraph) : "";
  const canonical = `${siteOrigin}${page.path}`;

  let body = "";
  body += `<main style="max-width:800px;margin:0 auto;padding:24px 16px 48px;font-family:Inter,system-ui,sans-serif;color:#071933;line-height:1.7">`;
  body += `<h1 style="font-size:2rem;font-weight:700;margin-bottom:1.5rem">${h1}</h1>`;

  if (directAnswer) {
    body += `<section style="margin-bottom:2rem;border:1px solid rgba(0,130,114,0.2);border-radius:12px;background:linear-gradient(135deg,rgba(0,130,114,0.08),white,rgba(255,202,40,0.15));padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">`;
    body += `<p style="margin-bottom:8px;font-size:0.85rem;font-weight:600;text-transform:uppercase;color:#008272">Resposta rápida</p>`;
    body += `<div style="font-size:1.1rem;line-height:1.6">${directAnswer}</div>`;
    body += `</section>`;
  }

  if (introParagraph) {
    body += `<p style="font-size:1.1rem;margin-bottom:2rem">${introParagraph}</p>`;
  }

  if (page.sections && page.sections.length > 0) {
    for (const section of page.sections) {
      body += `<section style="margin-top:2.25rem">`;
      body += `<h2 style="font-size:1.45rem;font-weight:650;margin-bottom:1rem;color:#071933">${escapeHtml(section.heading)}</h2>`;
      for (const paragraph of section.paragraphs ?? []) {
        body += `<p style="margin-bottom:1rem">${escapeHtml(paragraph)}</p>`;
      }
      body += `</section>`;
    }
  }

  if (page.calculationExample) {
    body += `<section style="margin-top:2.5rem;border:1px solid #dbe5ef;border-radius:16px;background:#f8fafc;padding:20px">`;
    body += `<h2 style="font-size:1.35rem;font-weight:650;margin-bottom:1rem;color:#071933">${escapeHtml(page.calculationExample.title)}</h2>`;
    if (page.calculationExample.rows?.length) {
      body += `<ul style="margin:0 0 1rem 1.25rem;padding:0">`;
      for (const row of page.calculationExample.rows) {
        body += `<li style="margin-bottom:0.35rem">${escapeHtml(row)}</li>`;
      }
      body += `</ul>`;
    }
    body += `<p style="font-weight:600;margin-bottom:0.75rem">${escapeHtml(page.calculationExample.result)}</p>`;
    if (page.calculationExample.note) {
      body += `<p style="font-size:0.95rem;color:#475569;margin-bottom:0">${escapeHtml(page.calculationExample.note)}</p>`;
    }
    body += `</section>`;
  }

  if (page.faqs && page.faqs.length > 0) {
    body += `<section style="margin-top:3rem">`;
    body += `<h2 style="font-size:1.5rem;font-weight:600;margin-bottom:1.5rem">Perguntas frequentes</h2>`;
    for (const faq of page.faqs) {
      body += `<div style="margin-bottom:1rem">`;
      body += `<h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.5rem">${escapeHtml(faq.question)}</h3>`;
      body += `<p style="margin-bottom:1rem">${escapeHtml(faq.answer)}</p>`;
      body += `</div>`;
    }
    body += `</section>`;
  }

  const relatedLinks = getRelatedLinks(page);

  if (relatedLinks.length > 0) {
    body += `<nav aria-label="Guias relacionados" style="margin-top:3rem">`;
    body += `<h2 style="font-size:1.5rem;font-weight:600;margin-bottom:1rem">Guias relacionados</h2>`;
    body += `<ul style="display:grid;gap:0.75rem;list-style:none;margin:0;padding:0">`;
    for (const link of relatedLinks) {
      body += `<li><a href="${link.href}" style="display:block;border:1px solid #e2e8f0;border-radius:12px;padding:12px 14px;color:#071933;text-decoration:none">${escapeHtml(link.label)}</a></li>`;
    }
    body += `</ul>`;
    body += `</nav>`;
  }

  body += `<p style="font-size:0.85rem;color:#64748b;margin-top:3rem">Atualizado em Maio de 2026. Fonte: Receita Federal, Portal Compras Internacionais e orientações sobre remessas internacionais.</p>`;
  body += `<p style="margin-top:1.5rem"><a href="${siteOrigin}" style="display:inline-block;background:#008272;color:white;padding:14px 28px;border-radius:12px;font-size:1.1rem;font-weight:600;text-decoration:none;box-shadow:0 2px 8px rgba(0,130,114,0.3)">Calcular imposto de importação</a></p>`;
  body += `</main>`;

  return body;
}

function buildSitemap() {
  const urls = [
    {
      path: "/",
    },
    ...allPages,
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (page) => `
  <url>
    <loc>${siteOrigin}${page.path}</loc>
    <lastmod>2026-05-30</lastmod>
  </url>`,
  )
  .join("\n")}

</urlset>
`;
}

await writeFile(join(distPath, "sitemap.xml"), buildSitemap());
console.log("Generated /sitemap.xml");

const homeHtml = updateHead(baseHtml, homePage);
const homeHtmlWithBody = homeHtml.replace(
  `<div id="root"></div>`,
  `<div id="root">${buildBodyHtml(homePage)}</div>`,
);
await writeFile(join(distPath, "index.html"), homeHtmlWithBody);
console.log("Generated /index.html");

for (const page of allPages) {
  const html = updateHead(baseHtml, page);
  const bodyHtml = buildBodyHtml(page);
  const htmlWithBody = html.replace(
    `<div id="root"></div>`,
    `<div id="root">${bodyHtml}</div>`,
  );
  const outputPath = join(distPath, page.path, "index.html");
  const cleanOutputPath = join(distPath, `${page.path}.html`);
  await mkdir(dirname(outputPath), { recursive: true });
  await mkdir(dirname(cleanOutputPath), { recursive: true });
  await writeFile(outputPath, htmlWithBody);
  await writeFile(cleanOutputPath, htmlWithBody);
  console.log(`Generated ${page.path}/index.html`);
}
