import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  DollarSign,
  Euro,
  MapPin,
  Info,
  ArrowRight,
  ChevronDown,
  Scale,
  ShieldCheck,
  Copy,
  Share2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatBRL } from "@/lib/utils";
import { BRAZILIAN_STATES, FAQS } from "@/lib/constants";

const calculatorSchema = z.object({
  productValue: z.coerce
    .number()
    .min(0.01, "Valor do produto deve ser maior que zero"),
  currency: z.enum(["USD", "EUR"]),
  shippingCost: z.coerce
    .number()
    .min(0, "Frete não pode ser negativo")
    .default(0),
  exchangeRate: z.coerce.number().min(0.1, "Taxa de câmbio inválida"),
  state: z.string().length(2, "Selecione um estado válido"),
  isRemessaConforme: z.boolean().default(true),
});

type CalculatorFormValues = z.infer<typeof calculatorSchema>;

interface TaxResults {
  productBrl: number;
  shippingBrl: number;
  subtotalBrl: number;
  ii: number;
  cofins: number;
  icms: number;
  fee: number;
  total: number;
  effectiveRate: number;
}

function calculateTaxes(data: CalculatorFormValues): TaxResults {
  const { productValue, shippingCost, exchangeRate, state, isRemessaConforme } =
    data;

  const productBrl = productValue * exchangeRate;
  const shippingBrl = shippingCost * exchangeRate;
  const subtotalBrl = productBrl + shippingBrl;

  const stateObj = BRAZILIAN_STATES.find((s) => s.code === state);
  const stateRate = stateObj ? stateObj.rate / 100 : 0.17;

  let ii = 0;
  let cofins = 0;
  let icms = 0;
  let fee = 0;

  const totalUsd = productValue + shippingCost;
  const isBelow50 = totalUsd <= 50;

  if (isRemessaConforme) {
    if (isBelow50) {
      ii = subtotalBrl * 0.2;
    } else {
      const rawII = subtotalBrl * 0.6;
      const discountBrl = 20 * exchangeRate;
      ii = Math.max(rawII - discountBrl, 0);
    }

    cofins = 0;
    icms = (subtotalBrl + ii) * stateRate;
    fee = 0;
  } else {
    ii = subtotalBrl * 0.6;
    cofins = 0;
    icms = (subtotalBrl + ii) * stateRate;
    fee = 0;
  }

  const total = subtotalBrl + ii + cofins + icms + fee;
  const effectiveRate =
    subtotalBrl > 0 ? ((total - subtotalBrl) / subtotalBrl) * 100 : 0;

  return {
    productBrl,
    shippingBrl,
    subtotalBrl,
    ii,
    cofins,
    icms,
    fee,
    total,
    effectiveRate,
  };
}

export default function Home() {
  const [results, setResults] = useState<TaxResults | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      productValue: undefined,
      currency: "USD",
      shippingCost: 0,
      exchangeRate: 5.2,
      state: "SP",
      isRemessaConforme: true,
    },
  });

  const selectedCurrency = watch("currency");

  const onSubmit = (data: CalculatorFormValues) => {
    const calcResults = calculateTaxes(data);
    setResults(calcResults);

    if (window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById("results-panel")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  async function handleCopyResult() {
    if (!results) return;

    const text = [
      "Resultado estimado da importação no Brasil",
      "",
      `Moeda: ${watch("currency")}`,
      `Estado: ${watch("state")}`,
      `Subtotal: ${formatBRL(results.subtotalBrl)}`,
      `Imposto de Importação: ${formatBRL(results.ii)}`,
      `ICMS: ${formatBRL(results.icms)}`,
      `Total estimado: ${formatBRL(results.total)}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      alert("Não foi possível copiar o resultado.");
    }
  }

  async function handleShareResult() {
    if (!results) return;

    const text = [
      "Resultado estimado da importação no Brasil",
      `Subtotal: ${formatBRL(results.subtotalBrl)}`,
      `Total estimado: ${formatBRL(results.total)}`,
      `Imposto: ${formatBRL(results.ii)}`,
      `ICMS: ${formatBRL(results.icms)}`,
    ].join(" | ");

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Calculadora de Importação",
          text,
        });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(text);
        alert(
          "Compartilhamento indisponível neste dispositivo. Resultado copiado.",
        );
      } catch {
        alert("Não foi possível compartilhar.");
      }
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans pb-20 selection:bg-primary/20">
      <div
        className="absolute top-0 left-0 w-full h-[220px] sm:h-[260px] bg-primary/5 pointer-events-none -z-10"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-pattern.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[220px] sm:h-[260px] bg-gradient-to-b from-transparent to-background pointer-events-none -z-10" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12">
        <header className="mb-6 sm:mb-8 text-center flex flex-col items-center gap-3 sm:gap-4">
          <div className="bg-primary/10 p-3 rounded-2xl ring-1 ring-primary/20">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-icon.png`}
              alt="Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </div>

          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              Calculadora de{" "}
              <span className="text-primary">Imposto de Importação no Brasil</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Calcule rapidamente o custo final da sua compra internacional,
              incluindo imposto de importação e ICMS.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
          <div className="lg:col-span-5">
            <Card className="border-primary/10 shadow-lg shadow-primary/5 rounded-2xl">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-border/50 rounded-t-2xl pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calculator className="w-5 h-5" />
                  Dados da Compra
                </CardTitle>
                <CardDescription>
                  Preencha os campos e clique em calcular.
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-5">
                <form
                  id="tax-form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="currency">Moeda</Label>
                      <div className="relative">
                        <select
                          {...register("currency")}
                          className="flex h-12 w-full appearance-none rounded-xl border-2 border-input bg-background px-4 py-2 pr-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10 font-medium"
                        >
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="productValue">Valor do Produto</Label>
                      <Input
                        id="productValue"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        icon={
                          selectedCurrency === "USD" ? (
                            <DollarSign className="w-4 h-4" />
                          ) : (
                            <Euro className="w-4 h-4" />
                          )
                        }
                        {...register("productValue")}
                        className={
                          errors.productValue
                            ? "border-destructive focus-visible:ring-destructive/20"
                            : ""
                        }
                      />
                      {errors.productValue && (
                        <p className="text-xs text-destructive font-medium">
                          {errors.productValue.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="shippingCost">
                        Custo do Frete ({selectedCurrency})
                      </Label>
                      <Input
                        id="shippingCost"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        icon={
                          selectedCurrency === "USD" ? (
                            <DollarSign className="w-4 h-4" />
                          ) : (
                            <Euro className="w-4 h-4" />
                          )
                        }
                        {...register("shippingCost")}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="exchangeRate">
                          Taxa de Câmbio (R$)
                        </Label>
                        <span className="text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
                          Manual
                        </span>
                      </div>
                      <Input
                        id="exchangeRate"
                        type="number"
                        step="0.01"
                        placeholder="5.20"
                        icon={<span className="font-semibold text-sm">R$</span>}
                        {...register("exchangeRate")}
                        className={
                          errors.exchangeRate
                            ? "border-destructive focus-visible:ring-destructive/20"
                            : ""
                        }
                      />
                      {errors.exchangeRate && (
                        <p className="text-xs text-destructive font-medium">
                          {errors.exchangeRate.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">Estado de Destino</Label>
                    <div className="relative">
                      <select
                        {...register("state")}
                        className="flex h-12 w-full appearance-none rounded-xl border-2 border-input bg-background px-10 py-2 pr-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10 transition-all duration-200"
                      >
                        {BRAZILIAN_STATES.map((state) => (
                          <option key={state.code} value={state.code}>
                            {state.name} ({state.rate}%)
                          </option>
                        ))}
                      </select>
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl border border-secondary">
                    <div className="space-y-0.5 pr-3">
                      <Label className="text-base flex items-center gap-1.5 cursor-pointer">
                        Remessa Conforme
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              Lojas certificadas que cobram os impostos no
                              checkout.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Imposto cobrado no site da loja.
                      </p>
                    </div>
                    <Controller
                      name="isRemessaConforme"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="success"
                    size="lg"
                    className="w-full text-lg h-14 shadow-lg shadow-accent/20"
                  >
                    Calcular Impostos
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7" id="results-panel">
            <AnimatePresence mode="wait">
              {!results ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="border-2 border-dashed border-border rounded-2xl bg-secondary/20 p-6 sm:p-8 min-h-[180px] sm:min-h-[220px] flex items-center justify-center"
                >
                  <div className="text-center space-y-3 max-w-sm">
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <ShieldCheck className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Aguardando dados
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Preencha os valores e clique em calcular.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                >
                  <Card className="border-primary/20 shadow-xl shadow-primary/5 overflow-hidden rounded-2xl">
                    <div className="bg-primary px-4 py-6 sm:px-6 sm:py-8 text-primary-foreground text-center relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 w-full h-full opacity-10"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                          backgroundSize: "24px 24px",
                        }}
                      ></div>

                      <h2 className="text-primary-foreground/80 font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 relative z-10">
                        Custo Final Estimado
                      </h2>

                      <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight relative z-10 leading-none">
                        {formatBRL(results.total)}
                      </div>

                      <div className="mt-4 inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-sm font-medium relative z-10 backdrop-blur-sm">
                        <Scale className="w-4 h-4" />
                        Carga tributária efetiva:{" "}
                        {results.effectiveRate.toFixed(1)}%
                      </div>

                      <div className="mt-5 flex flex-col gap-3 justify-center relative z-10">
                        <Button
                          type="button"
                          variant="secondary"
                          className="w-full h-14 bg-white text-primary hover:bg-white/90 text-lg"
                          onClick={handleCopyResult}
                        >
                          <Copy className="w-5 h-5 mr-2" />
                          {copied ? "Copiado" : "Copiar resultado"}
                        </Button>

                        <Button
                          type="button"
                          variant="secondary"
                          className="w-full h-14 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg"
                          onClick={handleShareResult}
                        >
                          <Share2 className="w-5 h-5 mr-2" />
                          Compartilhar
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-0">
                      <div className="divide-y divide-border">
                        <div className="p-5 sm:p-6 bg-slate-50/30 dark:bg-slate-900/30">
                          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                            Valores Base
                          </h4>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm sm:text-base gap-4">
                              <span className="text-foreground font-medium">
                                Produto ({watch("currency")})
                              </span>
                              <span className="text-muted-foreground text-right">
                                {formatBRL(results.productBrl)}
                              </span>
                            </div>

                            <div className="flex justify-between items-center text-sm sm:text-base gap-4">
                              <span className="text-foreground font-medium">
                                Frete ({watch("currency")})
                              </span>
                              <span className="text-muted-foreground text-right">
                                {formatBRL(results.shippingBrl)}
                              </span>
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-border border-dashed font-semibold text-lg gap-4">
                              <span className="text-foreground">
                                Subtotal Base
                              </span>
                              <span className="text-right">
                                {formatBRL(results.subtotalBrl)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 sm:p-6">
                          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            Impostos & Taxas
                          </h4>

                          <div className="mb-5 p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <div className="flex justify-between items-center gap-4">
                              <span className="text-sm sm:text-base font-semibold text-foreground">
                                Total de Tributos
                              </span>
                              <span className="text-2xl sm:text-3xl font-extrabold text-destructive text-right">
                                {formatBRL(
                                  results.ii +
                                    results.icms +
                                    results.cofins +
                                    results.fee,
                                )}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="flex justify-between items-start gap-4">
                              <div>
                                <span className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-1.5">
                                  Imposto de Importação (II)
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Info className="w-3.5 h-3.5 text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      Imposto federal de importação.
                                    </TooltipContent>
                                  </Tooltip>
                                </span>
                              </div>
                              <span className="font-medium text-destructive text-right whitespace-nowrap">
                                {formatBRL(results.ii)}
                              </span>
                            </div>

                            <div className="flex justify-between items-start gap-4">
                              <div>
                                <span className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-1.5">
                                  ICMS ({watch("state")})
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Info className="w-3.5 h-3.5 text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      ICMS estadual estimado.
                                    </TooltipContent>
                                  </Tooltip>
                                </span>
                              </div>
                              <span className="font-medium text-destructive text-right whitespace-nowrap">
                                {formatBRL(results.icms)}
                              </span>
                            </div>

                            {results.cofins > 0 && (
                              <div className="flex justify-between items-start gap-4">
                                <span className="text-sm sm:text-base font-semibold text-foreground">
                                  PIS/COFINS
                                </span>
                                <span className="font-medium text-destructive text-right whitespace-nowrap">
                                  {formatBRL(results.cofins)}
                                </span>
                              </div>
                            )}

                            {results.fee > 0 && (
                              <div className="flex justify-between items-start gap-4">
                                <span className="text-sm sm:text-base font-semibold text-foreground">
                                  Despacho Postal
                                </span>
                                <span className="font-medium text-destructive text-right whitespace-nowrap">
                                  {formatBRL(results.fee)}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <div className="bg-muted p-4 text-xs text-muted-foreground text-center border-t border-border leading-relaxed">
                      <p>
                        <strong>Aviso:</strong> Esta é uma estimativa
                        educacional baseada em regras simplificadas. O valor
                        real pode variar conforme atualização normativa, câmbio,
                        frete e critérios alfandegários.
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <section className="mt-14 sm:mt-16 mb-12 max-w-3xl mx-auto">
          <div className="text-center mb-7">
            <h2 className="text-3xl font-bold text-foreground">
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground mt-2">
              Entenda melhor como funcionam as regras de importação no Brasil.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FaqAccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>

        <div className="max-w-3xl mx-auto mb-12 px-5 py-4 rounded-xl border border-border bg-muted/40 text-xs text-muted-foreground space-y-1">
          <p><strong>Versão das regras:</strong> 2026-03</p>
          <p><strong>Última verificação:</strong> Receita Federal do Brasil</p>
          <p><strong>Fonte oficial:</strong> Receita Federal e normas públicas aplicáveis</p>
          <p><strong>Aviso legal:</strong> Esta calculadora fornece uma estimativa. O valor final é definido pelas autoridades competentes no Brasil.</p>
        </div>
      </main>
    </div>
  );
}

function FaqAccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between focus:outline-none focus-visible:bg-secondary"
      >
        <span className="font-semibold text-foreground pr-4 text-base sm:text-lg">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-4 pt-1 text-muted-foreground leading-relaxed text-sm sm:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
