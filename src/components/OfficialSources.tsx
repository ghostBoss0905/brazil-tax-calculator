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
    </section>
  );
}
