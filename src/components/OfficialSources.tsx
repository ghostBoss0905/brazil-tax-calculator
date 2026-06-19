type Source = {
  label: string;
  href: string;
};

type OfficialSourcesProps = {
  sources: Source[];
};

export default function OfficialSources({ sources }: OfficialSourcesProps) {
  return (
    <section className="mt-10 rounded-lg border border-slate-200 bg-white p-5">
      <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-slate-700">
        <p className="font-semibold text-slate-900">Nota de transparência</p>
        <p className="mt-1">
          Esta página oferece uma estimativa educacional para compras
          internacionais. Ela não substitui orientação fiscal ou jurídica. O
          valor oficial pode variar conforme Receita Federal, plataforma,
          transportadora, Correios, câmbio, declaração e estado de destino.
        </p>
      </div>

      <h2 className="mb-3 text-2xl font-semibold">Fontes oficiais</h2>
      <ul className="list-disc space-y-2 pl-6">
        {sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-slate-500">
        Última revisão editorial: Junho de 2026.
      </p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <a className="text-[#008272] underline" href="/metodologia">
          Metodologia da calculadora
        </a>
        <a className="text-[#008272] underline" href="/fontes-oficiais">
          Fontes oficiais e referências
        </a>
        <a className="text-[#008272] underline" href="/aviso-legal">
          Limites da estimativa
        </a>
      </div>
    </section>
  );
}
