import { createFileRoute, Link } from "@tanstack/react-router";
import { Crown } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/fem/AppShell";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({ meta: [{ title: "Configurações — Fempro" }, { name: "description", content: "Horários de atendimento, notificações e assinatura." }, { property: "og:title", content: "Configurações — Fempro" }, { property: "og:description", content: "Horários de atendimento, notificações e assinatura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: Config,
});

const week = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

function Toggle({ on, set }: { on: boolean; set: (v: boolean) => void }) {
  return <button role="switch" aria-checked={on} onClick={() => set(!on)} className={`relative h-7 w-12 rounded-full transition-colors ${on ? "bg-primary" : "bg-muted"}`}><span className={`absolute top-1 h-5 w-5 rounded-full bg-card shadow transition-all ${on ? "left-6" : "left-1"}`} /></button>;
}

function Config() {
  const [days, setDays] = useState(week.map((_, i) => i < 6));
  const [notif, setNotif] = useState({ wpp: true, email: false, auto: true });
  return (
    <AppShell>
      <h1 className="text-3xl font-extrabold">Configurações</h1>
      <div className="mt-6 flex items-center gap-4 rounded-[1.6rem] bg-secondary p-5 text-secondary-foreground">
        <Crown className="h-8 w-8 shrink-0 text-primary" />
        <div className="flex-1"><p className="font-bold">Você está no plano Grátis</p><p className="text-sm opacity-70">21 de 30 agendamentos usados este mês</p></div>
        <Link to="/planos" className="btn-pink px-4 py-2.5 text-sm">Upgrade</Link>
      </div>
      <h2 className="mt-9 text-xl font-bold">Horários de atendimento</h2>
      <div className="mt-4 divide-y divide-border rounded-[1.4rem] border border-border bg-card">
        {week.map((d, i) => (
          <div key={d} className="flex items-center justify-between p-4">
            <div><p className="font-semibold">{d}</p><p className="text-sm text-muted-foreground">{days[i] ? "09:00 – 19:00" : "Fechado"}</p></div>
            <Toggle on={!!days[i]} set={(v) => setDays(days.map((x, j) => (j === i ? v : x)))} />
          </div>
        ))}
      </div>
      <h2 className="mt-9 text-xl font-bold">Notificações</h2>
      <div className="mt-4 divide-y divide-border rounded-[1.4rem] border border-border bg-card">
        {([["wpp", "Avisar novos agendamentos no WhatsApp"], ["email", "Resumo diário por e-mail"], ["auto", "Confirmar agendamentos automaticamente"]] as const).map(([k, l]) => (
          <div key={k} className="flex items-center justify-between gap-4 p-4"><p className="font-semibold">{l}</p><Toggle on={notif[k]} set={(v) => setNotif({ ...notif, [k]: v })} /></div>
        ))}
      </div>
      <Link to="/" className="mt-8 block text-center text-sm font-bold text-destructive">Sair da conta</Link>
    </AppShell>
  );
}
