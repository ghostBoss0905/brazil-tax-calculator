import type { ReactNode } from "react";

type DirectAnswerProps = {
  children: ReactNode;
};

export default function DirectAnswer({ children }: DirectAnswerProps) {
  return (
    <section className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="mb-2 text-sm font-semibold uppercase text-slate-600">
        Resposta rápida
      </p>
      <div className="text-lg leading-8 text-slate-900">{children}</div>
    </section>
  );
}
