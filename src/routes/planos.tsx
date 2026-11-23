import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/fem/Logo";
import { Plans } from "@/components/fem/Plans";

export const Route = createFileRoute("/planos")({
  head: () => ({ meta: [{ title: "Planos — Fempro" }, { name: "description", content: "Plano Grátis para começar e Premium por R$ 18,90/mês com agendamentos ilimitados e lembretes automáticos." }, { property: "og:title", content: "Planos — Fempro" }, { property: "og:description", content: "Plano Grátis para começar e Premium por R$ 18,90/mês com agendamentos ilimitados e lembretes automáticos." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: () => (
    <div className="min-h-screen bg-blush-glow px-5 py-8">
      <div className="mx-auto max-w-4xl"><Logo className="h-7" /></div>
      <div className="mx-auto my-12 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">Escolha seu plano</h1>
        <p className="mt-3 text-muted-foreground">Sem fidelidade. Troque ou cancele quando quiser.</p>
      </div>
      <Plans />
    </div>
  ),
});
