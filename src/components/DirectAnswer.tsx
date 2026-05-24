import type { ReactNode } from "react";

type DirectAnswerProps = {
  children: ReactNode;
};

export default function DirectAnswer({ children }: DirectAnswerProps) {
  return (
    <section className="mb-8 rounded-2xl border border-[#008272]/20 bg-gradient-to-br from-[#008272]/10 via-white to-[#ffca28]/20 p-5 shadow-sm">
      <p className="mb-2 text-sm font-semibold uppercase text-[#008272]">
        Resposta rápida
      </p>
      <div className="text-lg leading-8 text-slate-900">{children}</div>
    </section>
  );
}
