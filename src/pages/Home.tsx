import { useState } from "react";

export default function Home() {
  const [productValue, setProductValue] = useState("");
  const [shippingValue, setShippingValue] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function calculateTax() {
    const product = parseFloat(productValue) || 0;
    const shipping = parseFloat(shippingValue) || 0;

    const total = product + shipping;

    const importTax = total * 0.2;
    const icms = importTax * 0.17;

    const finalTotal = total + importTax + icms;

    setResult(finalTotal);
  }

  return (
    <main className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* HERO */}
        <div className="mb-12">

          <h1 className="text-4xl font-bold mb-4">
            Calculadora de Imposto de Importação no Brasil
          </h1>

          <p className="text-lg text-gray-700">
            Calcule rapidamente o imposto de importação, ICMS e Remessa
            Conforme em compras internacionais.
          </p>

        </div>

        {/* CALCULATOR */}
        <div className="border rounded-2xl p-6 mb-14 shadow-sm">

          <h2 className="text-2xl font-semibold mb-6">
            Calcular Imposto
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block mb-2 font-medium">
                Valor do Produto (US$)
              </label>

              <input
                type="number"
                value={productValue}
                onChange={(e) => setProductValue(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="100"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Frete Internacional (US$)
              </label>

              <input
                type="number"
                value={shippingValue}
                onChange={(e) => setShippingValue(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="20"
              />
            </div>

            <button
              onClick={calculateTax}
              className="bg-black text-white px-6 py-3 rounded-xl w-full"
            >
              Calcular Imposto
            </button>

          </div>

          {result !== null && (
            <div className="mt-8 border-t pt-6">

              <h3 className="text-xl font-semibold mb-4">
                Resultado
              </h3>

              <p className="text-lg">
                Total estimado com impostos:
              </p>

              <p className="text-3xl font-bold mt-2">
                US$ {result.toFixed(2)}
              </p>

            </div>
          )}

        </div>

        {/* ARTICLES */}
        <div className="mb-14">

          <h2 className="text-3xl font-bold mb-6">
            Guias de Importação
          </h2>

          <div className="space-y-4">

            <a
              href="/imposto-aliexpress-brasil"
              className="block border rounded-xl p-4 hover:bg-gray-50"
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
              className="block border rounded-xl p-4 hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                Imposto da Shein no Brasil
              </h3>

              <p>
                Entenda como funciona o imposto da Shein e do Remessa Conforme.
              </p>
            </a>

            <a
              href="/o-que-e-remessa-conforme"
              className="block border rounded-xl p-4 hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                O Que é Remessa Conforme
              </h3>

              <p>
                Saiba como funciona o programa da Receita Federal.
              </p>
            </a>

            <a
              href="/icms-importacao-brasil"
              className="block border rounded-xl p-4 hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                ICMS na Importação do Brasil
              </h3>

              <p>
                Descubra como funciona o ICMS em compras internacionais.
              </p>
            </a>

          </div>

        </div>

        {/* FAQ */}
        <div className="mb-14">

          <h2 className="text-3xl font-bold mb-6">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Compras abaixo de US$50 pagam imposto?
              </h3>

              <p>
                Sim. Dependendo do estado e da plataforma, compras abaixo
                de US$50 podem pagar ICMS.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                O que é Remessa Conforme?
              </h3>

              <p>
                É um programa da Receita Federal que reduz o imposto
                de importação em lojas participantes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Como calcular imposto de importação?
              </h3>

              <p>
                O cálculo depende do valor do produto, frete, ICMS
                e imposto de importação.
              </p>
            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="border-t pt-8">

          <p className="text-sm text-gray-500">
            Atualizado em Maio de 2026. Informações baseadas nas regras
            atuais da Receita Federal do Brasil.
          </p>

        </div>

      </div>
    </main>
  );
}
