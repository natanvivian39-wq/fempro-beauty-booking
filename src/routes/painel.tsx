import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUp, CalendarCheck, CalendarDays, Check, ChevronRight, Copy, ExternalLink, Sparkles, Star, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/fem/AppShell";
import { PhoneMock } from "@/components/fem/PhoneMock";
import { StatusBadge } from "@/components/fem/StatusBadge";
import { appointments, brl, pro } from "@/lib/fem-data";
import portrait from "@/assets/pro-portrait.jpg";

export const Route = createFileRoute("/painel")({
  head: () => ({ meta: [{ title: "Painel — Fempro" }, { name: "description", content: "Resumo da sua agenda, link e crescimento do seu negócio." }, { property: "og:title", content: "Painel — Fempro" }, { property: "og:description", content: "Resumo da sua agenda, link e crescimento do seu negócio." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: Painel,
});

function Painel() {
  const [copied, setCopied] = useState(false);
  const today = appointments.filter((a) => a.date === "Hoje");
  const stats = [
    { icon: CalendarDays, v: "312", l: "Cliques no link", d: "12%" },
    { icon: CalendarCheck, v: "48", l: "Agendamentos no mês", d: "33%" },
    { icon: Users, v: "1.246", l: "Visualizações", d: "18%" },
    { icon: Star, v: "4,9", l: "Avaliação média" },
  ];
  return (
    <AppShell>
      <Link to="/perfil" className="flex items-center gap-4">
        <img src={portrait} alt="" className="h-16 w-16 rounded-full object-cover object-top" />
        <div className="flex-1"><p className="font-display text-2xl font-bold">{pro.name}</p><p className="text-muted-foreground">{pro.role}</p></div>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </Link>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-blush-glow p-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-3 py-1.5 text-xs font-semibold"><Sparkles className="h-3.5 w-3.5" /> Seu link está ativo <span className="h-2 w-2 rounded-full bg-success" /></span>
          <h2 className="mt-4 text-2xl font-bold">Seu link personalizado</h2>
          <button onClick={() => { navigator.clipboard?.writeText("fempro.com.br/" + pro.slug); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="mt-4 flex w-full max-w-sm items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold">
            fempro.com.br/{pro.slug} {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
          </button>
          <Link to="/a/$slug" params={{ slug: pro.slug }} className="btn-ink mt-3 w-full max-w-sm py-3.5 text-sm"><ExternalLink className="h-4 w-4" /> Ver minha página <ChevronRight className="h-4 w-4" /></Link>
        </div>
        <div className="card-soft p-6">
          <p className="text-sm font-semibold text-muted-foreground">Faturamento previsto hoje</p>
          <p className="mt-2 font-display text-4xl font-extrabold">{brl(today.reduce((s, a) => s + a.price, 0))}</p>
          <p className="mt-1 text-sm text-muted-foreground">{today.length} atendimentos agendados</p>
          <div className="mt-6 flex h-20 items-end gap-2">
            {[40, 65, 50, 80, 70, 95, 60].map((v, i) => <div key={i} className={`flex-1 rounded-lg ${i === 5 ? "bg-primary" : "bg-accent"}`} style={{ height: v + "%" }} />)}
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">{["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => <span key={i} className="flex-1 text-center">{d}</span>)}</div>
        </div>
      </div>

      <div className="mt-9 flex items-start gap-3">
        <TrendingUp className="mt-1 h-6 w-6 text-primary" />
        <div><h2 className="text-xl font-bold">Seu negócio em destaque</h2><p className="text-sm text-muted-foreground">Últimos 30 dias</p></div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="card-soft p-4">
            <div className="flex items-center justify-between"><s.icon className="h-5 w-5" />{s.d && <span className="flex items-center text-xs font-bold text-success"><ArrowUp className="h-3 w-3" />{s.d}</span>}</div>
            <p className="mt-3 font-display text-2xl font-extrabold">{s.v}</p>
            <p className="text-xs text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-9 flex items-center justify-between"><h2 className="text-xl font-bold">Próximos de hoje</h2><Link to="/agendamentos" className="text-sm font-bold text-primary">Ver agenda</Link></div>
      <div className="mt-4 divide-y divide-border overflow-hidden rounded-[1.4rem] border border-border bg-card">
        {today.map((a) => (
          <div key={a.id} className="flex items-center gap-4 p-4">
            <div className="w-14 text-center"><p className="font-display text-lg font-bold">{a.time}</p></div>
            <div className="flex-1 min-w-0"><p className="truncate font-bold">{a.client}</p><p className="truncate text-sm text-muted-foreground">{a.service}</p></div>
            <StatusBadge s={a.status} />
          </div>
        ))}
      </div>

      <div className="relative mt-9 overflow-hidden rounded-[1.6rem] border border-border bg-blush-glow p-6 md:p-8">
        <div className="max-w-[60%] md:max-w-md">
          <h2 className="text-2xl font-bold">Transforme cliques em <span className="text-primary">clientes</span></h2>
          <p className="mt-2 text-sm text-muted-foreground">Personalize sua página, destaque seus serviços e receba agendamentos com facilidade.</p>
          <Link to="/perfil" className="btn-ghost-soft mt-5 px-5 py-3 text-sm">Personalizar agora <ChevronRight className="h-4 w-4" /></Link>
        </div>
        <PhoneMock className="absolute -bottom-40 -right-16 scale-[0.6] rotate-6 md:-bottom-24 md:right-6 md:scale-75" />
      </div>
    </AppShell>
  );
}
