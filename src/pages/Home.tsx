export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Calculadora de Imposto de Importação no Brasil
        </h1>

        <p className="text-lg mb-6">
          Descubra quanto você vai pagar de imposto em compras internacionais
          no Brasil. Nossa calculadora aplica automaticamente as regras da
          Receita Federal, incluindo Remessa Conforme, ICMS e imposto de
          importação.
        </p>

        <div className="bg-gray-100 p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Como Funciona a Calculadora
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Informe o valor do produto</li>
            <li>Adicione o valor do frete</li>
            <li>Escolha o estado brasileiro</li>
            <li>Veja automaticamente os impostos aplicados</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Artigos Mais Recentes
          </h2>

          <div className="space-y-4">

            <a
              href="/imposto-aliexpress-brasil"
              className="block border p-4 rounded-xl hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                Imposto do AliExpress no Brasil
              </h3>

              <p>
                Veja como calcular o imposto do AliExpress em 2026.
              </p>
            </a>

            <a
              href="/imposto-shein-brasil"
              className="block border p-4 rounded-xl hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                Imposto da Shein no Brasil
              </h3>

              <p>
                Entenda como funciona o imposto da Shein e o Remessa Conforme.
              </p>
            </a>

            <a
              href="/o-que-e-remessa-conforme"
              className="block border p-4 rounded-xl hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                O Que é Remessa Conforme
              </h3>

              <p>
                Saiba como o programa reduz o imposto de importação.
              </p>
            </a>

            <a
              href="/icms-importacao-brasil"
              className="block border p-4 rounded-xl hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                ICMS na Importação no Brasil
              </h3>

              <p>
                Descubra como funciona o ICMS em compras internacionais.
              </p>
            </a>

          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Compras abaixo de US$50 pagam imposto?
              </h3>

              <p>
                Sim. Mesmo compras abaixo de US$50 podem pagar ICMS dependendo
                do estado e da plataforma utilizada.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                O que é Remessa Conforme?
              </h3>

              <p>
                É um programa da Receita Federal que reduz o imposto de
                importação em compras internacionais feitas em lojas
                participantes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Como calcular imposto de importação?
              </h3>

              <p>
                O cálculo depende do valor do produto, frete, ICMS e da
                participação no Remessa Conforme.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                O AliExpress participa do Remessa Conforme?
              </h3>

              <p>
                Sim. O AliExpress participa oficialmente do programa.
              </p>
            </div>

          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm text-gray-600">
            Atualizado em Maio de 2026. Informações baseadas nas regras atuais
            da Receita Federal do Brasil.
          </p>
        </div>

      </div>
    </main>
  );
}
