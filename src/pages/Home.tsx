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
  ShoppingCart,
  BadgeCheck,
  Zap,
  HelpCircle,
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
import RelatedGuides from "@/components/RelatedGuides";

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
      ii = 0;
    } else {
      const rawII = subtotalBrl * 0.6;
      const discountBrl = 30 * exchangeRate;
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

function buildShareSummary(results: TaxResults, data: CalculatorFormValues) {
  const totalTributes = results.ii + results.icms + results.cofins + results.fee;
  const remessaStatus = data.isRemessaConforme
    ? "Remessa Conforme: sim"
    : "Remessa Conforme: não";

  return [
    "Estimativa de importação no Brasil",
    "Taxa de Importação - Calculadora gratuita",
    "",
    `Produto + frete: ${data.currency} ${(data.productValue + data.shippingCost).toFixed(2)}`,
    `Estado: ${data.state}`,
    remessaStatus,
    "",
    `Subtotal convertido: ${formatBRL(results.subtotalBrl)}`,
    `Imposto de Importação: ${formatBRL(results.ii)}`,
    `ICMS estimado: ${formatBRL(results.icms)}`,
    `Total de tributos: ${formatBRL(totalTributes)}`,
    `Custo final estimado: ${formatBRL(results.total)}`,
    "",
    "Simule em: https://www.taxadeimportacao.com/",
  ].join("\n");
}

function getTotalTributes(results: TaxResults) {
  return results.ii + results.icms + results.cofins + results.fee;
}

function getDecisionText(results: TaxResults) {
  const minimumBrazilPrice = results.total * 1.12;

  if (results.effectiveRate <= 25) {
    return {
      label: "Boa faixa para comparar",
      text: `Se no Brasil custar acima de ${formatBRL(minimumBrazilPrice)}, a importação pode compensar.`,
    };
  }

  if (results.effectiveRate <= 55) {
    return {
      label: "Compare com cuidado",
      text: `Procure preço nacional acima de ${formatBRL(minimumBrazilPrice)} para compensar prazo e garantia.`,
    };
  }

  return {
    label: "Atenção ao custo final",
    text: `A tributação está alta. Só compensa se o preço no Brasil for bem maior que ${formatBRL(minimumBrazilPrice)}.`,
  };
}

function escapeSvgText(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildShareImageSvg(results: TaxResults, data: CalculatorFormValues) {
  const decision = getDecisionText(results);
  const totalTributes = getTotalTributes(results);
  const orderValue = `${data.currency} ${(data.productValue + data.shippingCost).toFixed(2)}`;
  const remessa = data.isRemessaConforme ? "Sim" : "Não";
  const rows = [
    ["Pedido", orderValue],
    ["Estado", data.state],
    ["Remessa Conforme", remessa],
    ["Subtotal", formatBRL(results.subtotalBrl)],
    ["Tributos", formatBRL(totalTributes)],
    ["ICMS", formatBRL(results.icms)],
  ];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f5f8fb"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="22" stdDeviation="30" flood-color="#06264b" flood-opacity="0.14"/>
    </filter>
  </defs>
  <rect width="1080" height="1920" fill="url(#bg)"/>
  <g opacity="0.95">
    <polygon points="0,0 220,0 0,220" fill="#ffca28"/>
    <polygon points="0,220 220,0 220,440 0,440" fill="#0b7f55"/>
    <polygon points="0,440 220,440 0,660" fill="#06264b"/>
    <polygon points="860,0 1080,0 1080,220" fill="#ffca28" opacity="0.35"/>
    <polygon points="860,220 1080,0 1080,440" fill="#0b7f55" opacity="0.16"/>
    <polygon points="860,440 1080,220 1080,660" fill="#06264b" opacity="0.12"/>
  </g>
  <rect x="90" y="110" width="900" height="1660" rx="56" fill="#ffffff" filter="url(#shadow)"/>
  <g transform="translate(150 175)">
    <rect x="0" y="0" width="92" height="92" rx="26" fill="#06264b"/>
    <rect x="0" y="0" width="46" height="46" fill="#ffca28"/>
    <rect x="0" y="46" width="46" height="46" fill="#0b7f55"/>
    <rect x="46" y="0" width="46" height="46" fill="#f8e7a8"/>
    <text x="122" y="38" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" fill="#071933">Taxa de Importação</text>
    <text x="122" y="75" font-family="Inter, Arial, sans-serif" font-size="22" fill="#66758f">Brasil 2026</text>
  </g>
  <text x="150" y="420" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" fill="#008272">${escapeSvgText(decision.label)}</text>
  <text x="150" y="500" font-family="Inter, Arial, sans-serif" font-size="104" font-weight="900" fill="#06264b">${escapeSvgText(formatBRL(results.total))}</text>
  <text x="150" y="565" font-family="Inter, Arial, sans-serif" font-size="30" fill="#66758f">Custo final estimado da importação</text>
  <rect x="150" y="650" width="780" height="150" rx="30" fill="#f1f7f5"/>
  <text x="190" y="710" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#071933">Decisão rápida</text>
  <text x="190" y="760" font-family="Inter, Arial, sans-serif" font-size="26" fill="#41516b">${escapeSvgText(decision.text)}</text>
  <g transform="translate(150 875)">
    ${rows
      .map(
        ([label, value], index) => `
    <g transform="translate(0 ${index * 105})">
      <rect x="0" y="0" width="780" height="78" rx="20" fill="${index % 2 === 0 ? "#f8fafc" : "#ffffff"}" stroke="#e2e8f0"/>
      <text x="28" y="49" font-family="Inter, Arial, sans-serif" font-size="26" fill="#66758f">${escapeSvgText(label)}</text>
      <text x="752" y="49" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#071933">${escapeSvgText(value)}</text>
    </g>`,
      )
      .join("")}
  </g>
  <rect x="150" y="1535" width="780" height="125" rx="28" fill="#06264b"/>
  <text x="190" y="1588" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="800" fill="#ffca28">Simule antes de pagar</text>
  <text x="190" y="1632" font-family="Inter, Arial, sans-serif" font-size="24" fill="#ffffff">taxadeimportacao.com</text>
  <text x="150" y="1715" font-family="Inter, Arial, sans-serif" font-size="20" fill="#8a96aa">Estimativa educacional. O valor oficial depende do checkout, Correios, transportadora e autoridade competente.</text>
</svg>`;
}

async function buildShareImageBlob(results: TaxResults, data: CalculatorFormValues) {
  const svg = buildShareImageSvg(results, data);
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  try {
    const image = new Image();
    image.decoding = "async";
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("Não foi possível gerar imagem."));
      image.src = url;
    });

    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas indisponível.");
    }

    context.drawImage(image, 0, 0);

    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        blob ? resolve(blob) : reject(new Error("Falha ao exportar imagem."));
      }, "image/png");
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}

function GeometricBrazilStrip() {
  const tiles = [
    "bg-[#ffca28]",
    "bg-[#f5b700]",
    "bg-[#0b7f55]",
    "bg-[#0f5f4d]",
    "bg-[#06264b]",
    "bg-[#f8e7a8]",
    "bg-[#ffd449]",
    "bg-[#168f5b]",
    "bg-[#073763]",
    "bg-[#f6c516]",
    "bg-[#0a7a61]",
    "bg-[#fff4cc]",
  ];

  return (
    <div className="absolute left-0 top-0 hidden h-full w-20 overflow-hidden rounded-l-[28px] lg:block">
      <div className="grid h-full grid-cols-2">
        {tiles.map((color, index) => {
          const clipPath =
            index % 3 === 0
              ? "polygon(0 0, 100% 0, 0 100%)"
              : index % 3 === 1
                ? "polygon(100% 0, 100% 100%, 0 100%)"
                : undefined;

          return (
            <div key={index} className={color} style={{ clipPath }} />
          );
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10" />
    </div>
  );
}

const platformQuickLinks = [
  {
    name: "AliExpress",
    href: "/imposto-aliexpress-brasil",
    description: "Imposto, frete e ICMS antes de comprar.",
  },
  {
    name: "Shein",
    href: "/imposto-shein-brasil",
    description: "Veja se roupas e acessórios ainda compensam.",
  },
  {
    name: "Shopee",
    href: "/imposto-shopee-brasil",
    description: "Compare produto nacional e internacional.",
  },
  {
    name: "Temu",
    href: "/imposto-temu-brasil",
    description: "Atenção ao carrinho perto de US$50.",
  },
  {
    name: "Amazon",
    href: "/imposto-amazon-internacional-brasil",
    description: "Confira importação, garantia e checkout.",
  },
];

export default function Home() {
  const [results, setResults] = useState<TaxResults | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSharingImage, setIsSharingImage] = useState(false);

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

  const currentFormData = (): CalculatorFormValues => ({
    productValue: watch("productValue"),
    currency: watch("currency"),
    shippingCost: watch("shippingCost"),
    exchangeRate: watch("exchangeRate"),
    state: watch("state"),
    isRemessaConforme: watch("isRemessaConforme"),
  });

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

    const text = buildShareSummary(results, currentFormData());

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

    const text = buildShareSummary(results, currentFormData());

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Estimativa de importação no Brasil",
          text,
          url: "https://www.taxadeimportacao.com/",
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

  async function handleShareImage() {
    if (!results || isSharingImage) return;

    setIsSharingImage(true);

    try {
      const blob = await buildShareImageBlob(results, currentFormData());
      const file = new File([blob], "estimativa-importacao-brasil.png", {
        type: "image/png",
      });

      if (navigator.canShare?.({ files: [file] }) && navigator.share) {
        await navigator.share({
          title: "Estimativa de importação no Brasil",
          text: "Veja meu cálculo de importação no Brasil.",
          files: [file],
        });
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "estimativa-importacao-brasil.png";
        link.click();
        URL.revokeObjectURL(url);
      }
    } catch {
      alert("Não foi possível gerar a imagem agora.");
    } finally {
      setIsSharingImage(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f9fb] font-sans pb-20 selection:bg-[#f5c400]/30">
      <main className="mx-auto w-full max-w-7xl min-w-0 px-2 pb-10 pt-2 sm:px-6 sm:pt-5 lg:px-8 lg:pt-10">
        <section className="relative w-full max-w-full overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70 sm:rounded-[28px]">
          <GeometricBrazilStrip />
          <div className="pointer-events-none absolute right-0 top-24 hidden h-80 w-80 opacity-60 lg:block">
            <div className="grid h-full grid-cols-4">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className={
                    index % 4 === 0
                      ? "bg-[#ffca28]/20"
                      : index % 4 === 1
                        ? "bg-[#0b7f55]/10"
                        : index % 4 === 2
                          ? "bg-[#06264b]/10"
                          : "bg-transparent"
                  }
                  style={{
                    clipPath:
                      index % 2 === 0
                        ? "polygon(0 0, 100% 0, 0 100%)"
                        : "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative min-w-0 px-3 py-3 sm:px-8 sm:py-8 lg:pl-28 lg:pr-8">
            <header className="mb-3 flex flex-col gap-3 sm:mb-8 sm:gap-8 lg:mb-12">
              <div className="flex min-w-0 items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#06264b] text-white shadow-lg shadow-[#06264b]/20 sm:h-12 sm:w-12 sm:rounded-2xl">
                    <span className="absolute left-0 top-0 h-5 w-5 bg-[#ffca28] sm:h-6 sm:w-6" />
                    <span className="absolute bottom-0 left-0 h-5 w-5 bg-[#0b7f55] sm:h-6 sm:w-6" />
                    <span className="absolute right-0 top-0 h-5 w-5 bg-[#f8e7a8] sm:h-6 sm:w-6" />
                    <Calculator className="relative h-4 w-4 text-white drop-shadow sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-semibold leading-tight text-[#06264b]">
                      Taxa de Importação
                    </p>
                    <p className="text-xs leading-tight text-slate-500">
                      Brasil 2026
                    </p>
                  </div>
                </div>
                <a
                  href="/calcular-taxas-importacao"
                  className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#06264b] shadow-sm transition-colors hover:border-[#008272] sm:flex"
                >
                  Ajuda
                  <HelpCircle className="h-4 w-4" />
                </a>
              </div>

              <div className="mx-auto max-w-3xl min-w-0 px-1 text-center">
                <h1 className="text-balance text-[1.55rem] font-extrabold leading-tight tracking-tight text-[#071933] min-[390px]:text-2xl sm:text-5xl lg:text-6xl">
                  <span className="sm:hidden">Calcule sua importação</span>
                  <span className="hidden sm:inline">
                    Calcule o custo final da importação
                  </span>
                </h1>
                <p className="mx-auto mt-1 max-w-[280px] text-pretty break-words text-sm leading-6 text-slate-600 min-[390px]:max-w-[320px] sm:mt-5 sm:max-w-2xl sm:text-lg sm:leading-8">
                  Imposto, ICMS, frete e Remessa Conforme antes de comprar.
                </p>
              </div>
            </header>

        <div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-5 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-8">
            <Card className="max-w-full overflow-hidden rounded-[18px] border-slate-200 bg-white shadow-xl shadow-slate-200/70 sm:rounded-[24px]">
              <CardHeader className="border-b border-slate-100 bg-white px-4 py-3 sm:p-6 sm:pb-4">
                <CardTitle className="flex min-w-0 items-center gap-2 text-[1.05rem] text-[#071933] min-[390px]:text-lg sm:text-xl">
                  <Calculator className="h-4 w-4 shrink-0 text-[#008272] sm:h-5 sm:w-5" />
                  Dados da importação
                </CardTitle>
                <CardDescription className="break-words text-xs sm:text-sm">
                  Produto, frete, câmbio, estado e tipo de compra.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-4 pb-4 pt-3 sm:p-6 sm:pt-5">
                <form
                  id="tax-form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-2.5 sm:space-y-4"
                >
                  <div className="grid grid-cols-[0.78fr_1.22fr] gap-2 sm:grid-cols-3 sm:gap-3">
                    <div className="min-w-0 space-y-1 sm:col-span-1 sm:space-y-2">
                      <Label htmlFor="currency" className="text-sm">Moeda</Label>
                      <div className="relative">
                        <select
                          {...register("currency")}
                          className="flex h-10 w-full appearance-none rounded-xl border-2 border-input bg-background px-3 py-2 pr-7 text-sm font-medium ring-offset-background focus-visible:border-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 sm:h-12 sm:px-4 sm:pr-8"
                        >
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                        </select>
                        <ChevronDown className="absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none sm:right-3" />
                      </div>
                    </div>

                    <div className="min-w-0 space-y-1 sm:col-span-2 sm:space-y-2">
                      <Label htmlFor="productValue" className="text-sm">
                        Produto
                      </Label>
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
                            ? "h-10 border-destructive focus-visible:ring-destructive/20 sm:h-12"
                            : "h-10 sm:h-12"
                        }
                      />
                      {errors.productValue && (
                        <p className="text-xs text-destructive font-medium">
                          {errors.productValue.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="min-w-0 space-y-1 sm:space-y-2">
                      <Label htmlFor="shippingCost" className="text-sm">
                        Frete ({selectedCurrency})
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
                        className="h-10 sm:h-12"
                      />
                    </div>

                    <div className="min-w-0 space-y-1 sm:space-y-2">
                      <div className="flex min-w-0 items-center justify-between gap-3">
                        <Label htmlFor="exchangeRate" className="text-sm">
                          Câmbio
                        </Label>
                        <span className="hidden rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground min-[390px]:inline">
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
                            ? "h-10 border-destructive focus-visible:ring-destructive/20 sm:h-12"
                            : "h-10 sm:h-12"
                        }
                      />
                      {errors.exchangeRate && (
                        <p className="text-xs text-destructive font-medium">
                          {errors.exchangeRate.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="state" className="text-sm">
                      Estado de Destino
                    </Label>
                    <div className="relative">
                      <select
                        {...register("state")}
                        className="flex h-10 w-full appearance-none rounded-xl border-2 border-input bg-background px-9 py-2 pr-8 text-sm ring-offset-background transition-all duration-200 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 sm:h-12 sm:px-10"
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

                  <div className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-secondary bg-secondary/50 p-3 sm:p-4">
                    <div className="min-w-0 space-y-0.5">
                      <Label className="flex cursor-pointer items-center gap-1.5 text-sm sm:text-base">
                        Remessa Conforme
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              Lojas certificadas que mostram os tributos no
                              checkout.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </Label>
                      <p className="break-words text-[11px] leading-snug text-muted-foreground sm:text-xs">
                        Ative quando os tributos aparecem antes do pagamento.
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
                    className="h-11 w-full max-w-full overflow-hidden whitespace-normal px-3 text-sm shadow-lg shadow-accent/20 min-[390px]:text-base sm:h-14 sm:px-4 sm:text-lg"
                  >
                    <span className="min-w-0 truncate">
                      Ver custo final estimado
                    </span>
                    <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <aside className="min-w-0 space-y-3 lg:col-span-4 lg:h-full">
            <div
              id="results-panel"
              className={
                results
                  ? "overflow-hidden rounded-2xl border border-[#06264b]/10 bg-[#06264b] text-white shadow-xl shadow-[#06264b]/20"
                  : "rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-5 text-center"
              }
            >
              {!results ? (
                <div className="flex min-h-[132px] flex-col items-center justify-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008272]/10 text-[#008272]">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-[#071933]">
                    Aguardando dados
                  </p>
                  <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                    Preencha o formulário para ver o custo final estimado aqui.
                  </p>
                </div>
              ) : (
                <div className="p-5">
                  {(() => {
                    const decision = getDecisionText(results);

                    return (
                      <div className="mb-4 rounded-xl bg-[#ffca28] px-3 py-2 text-[#06264b]">
                        <p className="text-sm font-extrabold">
                          {decision.label}
                        </p>
                        <p className="mt-0.5 text-xs font-medium leading-snug">
                          {decision.text}
                        </p>
                      </div>
                    );
                  })()}

                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Custo final estimado
                      </p>
                      <p className="mt-2 text-4xl font-extrabold leading-none text-[#ffca28]">
                        {formatBRL(results.total)}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#ffca28] px-2.5 py-1 text-xs font-bold text-[#06264b]">
                      2026
                    </span>
                  </div>

                  <div className="space-y-2 rounded-xl bg-white/10 p-3 text-sm">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/70">Tributos</span>
                      <span className="font-semibold text-white">
                        {formatBRL(
                          results.ii +
                            results.icms +
                            results.cofins +
                            results.fee,
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/70">ICMS ({watch("state")})</span>
                      <span className="font-semibold text-white">
                        {formatBRL(results.icms)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/70">Carga efetiva</span>
                      <span className="font-semibold text-white">
                        {results.effectiveRate.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      className="h-11 bg-white px-2 text-[#06264b] hover:bg-white/90"
                      onClick={handleCopyResult}
                    >
                      <Copy className="mr-1.5 h-4 w-4" />
                      {copied ? "Copiado" : "Copiar"}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      className="h-11 border border-white/20 bg-white/10 px-2 text-white hover:bg-white/20"
                      onClick={handleShareResult}
                    >
                      <Share2 className="mr-1.5 h-4 w-4" />
                      Enviar
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      className="h-11 border border-white/20 bg-white/10 px-2 text-white hover:bg-white/20"
                      onClick={handleShareImage}
                      disabled={isSharingImage}
                    >
                      <Share2 className="mr-1.5 h-4 w-4" />
                      {isSharingImage ? "..." : "Imagem"}
                    </Button>
                  </div>

                  <a
                    href="#results-detail-panel"
                    className="mt-4 flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Ver detalhamento
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            <div className="grid gap-3">
              <a
                href="/tabela-imposto-importacao-brasil"
                className="group flex min-w-0 flex-col justify-center rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-colors hover:border-[#008272]"
              >
                <BadgeCheck className="mb-3 h-7 w-7 text-[#008272]" />
                <p className="break-words font-semibold text-[#071933]">Regras 2026 atualizadas</p>
                <p className="mt-1 break-words text-sm text-slate-600">
                  Veja a tabela oficial usada como base da estimativa.
                </p>
              </a>
              <a
                href="/o-que-e-remessa-conforme"
                className="group flex min-w-0 flex-col justify-center rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-colors hover:border-[#008272]"
              >
                <ShoppingCart className="mb-3 h-7 w-7 text-[#008272]" />
                <p className="break-words font-semibold text-[#071933]">Remessa Conforme</p>
                <p className="mt-1 break-words text-sm text-slate-600">
                  Entenda quando os tributos aparecem no checkout.
                </p>
              </a>
              <a
                href="/icms-importacao-brasil"
                className="group flex min-w-0 flex-col justify-center rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-colors hover:border-[#008272]"
              >
                <Zap className="mb-3 h-7 w-7 text-[#008272]" />
                <p className="break-words font-semibold text-[#071933]">ICMS por estado</p>
                <p className="mt-1 break-words text-sm text-slate-600">
                  Compare como o estado de destino afeta o custo final.
                </p>
              </a>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-12">
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="mb-3 flex min-w-0 items-center justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-[#071933]">
                    Calcule por loja
                  </h2>
                  <p className="text-sm text-slate-600">
                    Guias rápidos para as compras mais comuns.
                  </p>
                </div>
                <ShoppingCart className="h-5 w-5 shrink-0 text-[#008272]" />
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {platformQuickLinks.map((platform) => (
                  <a
                    key={platform.href}
                    href={platform.href}
                    className="group relative min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition-colors hover:border-[#008272] hover:bg-white"
                  >
                    <span className="absolute right-0 top-0 h-10 w-10 bg-[#ffca28]/25 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
                    <span className="relative block text-sm font-extrabold text-[#071933] group-hover:text-[#008272]">
                      {platform.name}
                    </span>
                    <span className="relative mt-1 block text-xs leading-snug text-slate-600">
                      {platform.description}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div className="min-w-0 lg:col-span-12">
            <div className="text-center mb-7 mt-8">
              <h2 className="text-balance text-3xl font-bold text-foreground">
                Dúvidas Frequentes
              </h2>
              <p className="mt-2 text-pretty text-muted-foreground">
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
          </div>
        </div>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-3xl min-w-0 sm:mt-10" id="results-detail-panel">
            <AnimatePresence mode="wait">
              {!results ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="rounded-xl border border-dashed border-border bg-secondary/20 px-4 py-3 text-center sm:px-5"
                >
                  <p className="break-words text-sm text-muted-foreground">
                    Preencha os dados acima para ver produto, frete, imposto, ICMS e total estimado em reais.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                >
                  <Card className="overflow-hidden rounded-[24px] border-0 bg-[#06264b] text-white shadow-2xl shadow-[#06264b]/25">
                    <div className="relative overflow-hidden px-4 py-6 text-center text-white sm:px-6 sm:py-8">
                      <div
                        className="absolute top-0 left-0 w-full h-full opacity-10"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                          backgroundSize: "24px 24px",
                        }}
                      ></div>

                      <h2 className="relative z-10 mb-2 text-xs font-semibold uppercase tracking-wider text-white/70 sm:text-sm">
                        Resumo estimado
                      </h2>

                      <div className="relative z-10 text-5xl font-extrabold leading-none tracking-tight text-[#ffca28] sm:text-6xl">
                        {formatBRL(results.total)}
                      </div>

                      <div className="relative z-10 mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                        <Scale className="w-4 h-4" />
                        Carga tributária efetiva:{" "}
                        {results.effectiveRate.toFixed(1)}%
                      </div>

                      <div className="mt-5 flex flex-col gap-3 justify-center relative z-10">
                        <Button
                          type="button"
                          variant="secondary"
                          className="h-14 w-full bg-white text-[#06264b] hover:bg-white/90 text-lg"
                          onClick={handleCopyResult}
                        >
                          <Copy className="w-5 h-5 mr-2" />
                          {copied ? "Copiado" : "Copiar resultado"}
                        </Button>

                        <Button
                          type="button"
                          variant="secondary"
                          className="h-14 w-full border border-white/20 bg-white/10 text-white hover:bg-white/20 text-lg"
                          onClick={handleShareResult}
                        >
                          <Share2 className="w-5 h-5 mr-2" />
                          Compartilhar
                        </Button>

                        <Button
                          type="button"
                          variant="secondary"
                          className="h-14 w-full border border-white/20 bg-white/10 text-white hover:bg-white/20 text-lg"
                          onClick={handleShareImage}
                          disabled={isSharingImage}
                        >
                          <Share2 className="w-5 h-5 mr-2" />
                          {isSharingImage ? "Gerando imagem..." : "Compartilhar imagem"}
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-0 text-white">
                      <div className="divide-y divide-white/10">
                        <div className="bg-white/[0.03] p-5 sm:p-6">
                          <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ffca28]"></div>
                            Valores Base
                          </h4>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm sm:text-base gap-4">
                              <span className="font-medium text-white/80">
                                Produto ({watch("currency")})
                              </span>
                              <span className="text-right text-white">
                                {formatBRL(results.productBrl)}
                              </span>
                            </div>

                            <div className="flex justify-between items-center text-sm sm:text-base gap-4">
                              <span className="font-medium text-white/80">
                                Frete ({watch("currency")})
                              </span>
                              <span className="text-right text-white">
                                {formatBRL(results.shippingBrl)}
                              </span>
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-white/10 border-dashed font-semibold text-lg gap-4">
                              <span className="text-white">
                                Subtotal Base
                              </span>
                              <span className="text-right">
                                {formatBRL(results.subtotalBrl)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 sm:p-6">
                          <h4 className="text-sm font-bold text-[#ffca28] uppercase tracking-wider mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ffca28]"></div>
                            Impostos & Taxas
                          </h4>

                          <div className="mb-5 p-4 rounded-xl bg-white/10 border border-white/10">
                            <div className="flex justify-between items-center gap-4">
                              <span className="text-sm sm:text-base font-semibold text-white">
                                Total de Tributos
                              </span>
                              <span className="text-2xl sm:text-3xl font-extrabold text-[#ffca28] text-right">
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
                                <span className="text-sm sm:text-base font-semibold text-white/80 flex items-center gap-1.5">
                                  Imposto de Importação (II)
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Info className="w-3.5 h-3.5 text-white/50" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      Imposto federal de importação.
                                    </TooltipContent>
                                  </Tooltip>
                                </span>
                              </div>
                              <span className="font-medium text-[#ffca28] text-right whitespace-nowrap">
                                {formatBRL(results.ii)}
                              </span>
                            </div>

                            <div className="flex justify-between items-start gap-4">
                              <div>
                                <span className="text-sm sm:text-base font-semibold text-white/80 flex items-center gap-1.5">
                                  ICMS ({watch("state")})
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Info className="w-3.5 h-3.5 text-white/50" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      ICMS estadual estimado.
                                    </TooltipContent>
                                  </Tooltip>
                                </span>
                              </div>
                              <span className="font-medium text-[#ffca28] text-right whitespace-nowrap">
                                {formatBRL(results.icms)}
                              </span>
                            </div>

                            {results.cofins > 0 && (
                              <div className="flex justify-between items-start gap-4">
                                <span className="text-sm sm:text-base font-semibold text-white/80">
                                  PIS/COFINS
                                </span>
                                <span className="font-medium text-[#ffca28] text-right whitespace-nowrap">
                                  {formatBRL(results.cofins)}
                                </span>
                              </div>
                            )}

                            {results.fee > 0 && (
                              <div className="flex justify-between items-start gap-4">
                                <span className="text-sm sm:text-base font-semibold text-white/80">
                                  Despacho Postal
                                </span>
                                <span className="font-medium text-[#ffca28] text-right whitespace-nowrap">
                                  {formatBRL(results.fee)}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="bg-white/[0.03] p-5 sm:p-6">
                          <div className="mx-auto max-w-sm rounded-3xl border border-white/10 bg-white p-6 text-[#071933] shadow-sm">
                            <div className="mb-8 flex items-start justify-between gap-4">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                  Resumo para compartilhar
                                </p>
                                <h3 className="mt-2 text-2xl font-bold leading-tight text-foreground">
                                  Estimativa de importação
                                </h3>
                              </div>
                              <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                                2026
                              </div>
                            </div>

                            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
                              {(() => {
                                const decision = getDecisionText(results);

                                return (
                                  <div className="mb-5 rounded-xl bg-[#ffca28] px-4 py-3 text-[#06264b]">
                                    <p className="text-sm font-extrabold">
                                      {decision.label}
                                    </p>
                                    <p className="mt-1 text-xs font-medium leading-relaxed">
                                      {decision.text}
                                    </p>
                                  </div>
                                );
                              })()}
                              <p className="text-sm text-muted-foreground">
                                Custo final estimado
                              </p>
                              <p className="mt-2 text-5xl font-extrabold leading-none text-primary">
                                {formatBRL(results.total)}
                              </p>
                            </div>

                            <div className="mt-5 space-y-3 text-sm">
                              <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
                                <span className="text-muted-foreground">
                                  Subtotal
                                </span>
                                <span className="font-semibold text-foreground">
                                  {formatBRL(results.subtotalBrl)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
                                <span className="text-muted-foreground">
                                  Tributos
                                </span>
                                <span className="font-semibold text-foreground">
                                  {formatBRL(
                                    results.ii +
                                      results.icms +
                                      results.cofins +
                                      results.fee,
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
                                <span className="text-muted-foreground">
                                  ICMS
                                </span>
                                <span className="font-semibold text-foreground">
                                  {formatBRL(results.icms)}
                                </span>
                              </div>
                            </div>

                            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                              Ao copiar ou compartilhar, o resumo inclui produto
                              e frete, estado, Remessa Conforme, tributos e link
                              para a calculadora.
                            </p>
                            <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-primary">
                              taxadeimportacao.com
                            </div>
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
          </section>

        <section className="mx-auto mb-12 max-w-5xl min-w-0 rounded-2xl border border-primary/10 bg-primary/5 p-5 sm:p-6">
          <div className="grid min-w-0 gap-5 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="min-w-0">
              <h2 className="text-balance text-2xl font-bold text-foreground">
                Não sabe se a compra vai compensar?
              </h2>
              <p className="mt-2 break-words leading-relaxed text-muted-foreground">
                Use o resultado como ponto de comparação: se o custo final
                importado ficar perto do preço brasileiro, prazo, garantia e
                troca podem pesar mais que a economia.
              </p>
            </div>
            <div className="grid min-w-0 gap-2 text-sm">
              <a
                href="/calcular-taxas-importacao"
                className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-background px-4 py-3 font-medium text-foreground shadow-sm hover:text-primary"
              >
                <span className="min-w-0 break-words">Como calcular taxas de importação</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <a
                href="/tabela-imposto-importacao-brasil"
                className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-background px-4 py-3 font-medium text-foreground shadow-sm hover:text-primary"
              >
                <span className="min-w-0 break-words">Ver tabela de imposto 2026</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <a
                href="/taxa-correios-importacao"
                className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-background px-4 py-3 font-medium text-foreground shadow-sm hover:text-primary"
              >
                <span className="min-w-0 break-words">Entender taxa dos Correios</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-12 max-w-5xl min-w-0">
          <RelatedGuides
            currentPath="/"
            title="Guias de importação"
            intro="Aprofunde o cálculo antes de comprar em lojas internacionais."
          />
        </section>

        <section className="mx-auto mb-12 max-w-5xl min-w-0 rounded-2xl border border-border bg-background p-5 shadow-sm sm:p-6">
          <h2 className="text-2xl font-bold text-foreground">
            Centros de consulta
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Use os centros para navegar por regra, loja ou estado antes de
            simular o custo final.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <a
              href="/guias/regras-importacao"
              className="rounded-xl border border-border bg-muted/30 p-4 font-semibold text-foreground hover:border-primary hover:text-primary"
            >
              Regras de importação
            </a>
            <a
              href="/guias/lojas-internacionais"
              className="rounded-xl border border-border bg-muted/30 p-4 font-semibold text-foreground hover:border-primary hover:text-primary"
            >
              Lojas internacionais
            </a>
            <a
              href="/guias/icms-por-estado"
              className="rounded-xl border border-border bg-muted/30 p-4 font-semibold text-foreground hover:border-primary hover:text-primary"
            >
              ICMS por estado
            </a>
          </div>
        </section>

        <div className="mx-auto mb-12 max-w-3xl min-w-0 space-y-1 rounded-xl border border-border bg-muted/40 px-4 py-4 text-xs text-muted-foreground sm:px-5">
          <p><strong>Versão das regras:</strong> 2026-06</p>
          <p><strong>Última verificação:</strong> Receita Federal do Brasil e Portal Compras Internacionais</p>
          <p><strong>Fonte oficial:</strong> Receita Federal, Correios e normas públicas aplicáveis</p>
          <p><strong>Aviso legal:</strong> Esta calculadora fornece uma estimativa. O valor final é definido pelas autoridades competentes no Brasil.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
            <a className="underline-offset-2 hover:underline" href="/politica-de-privacidade">
              Política de Privacidade
            </a>
            <a className="underline-offset-2 hover:underline" href="/politica-de-cookies">
              Política de Cookies
            </a>
            <a className="underline-offset-2 hover:underline" href="/aviso-legal">
              Aviso Legal
            </a>
          </div>
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
    <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-colors hover:border-primary/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full min-w-0 items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:bg-secondary sm:px-6"
      >
        <span className="min-w-0 break-words pr-4 text-base font-semibold text-foreground sm:text-lg">
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
