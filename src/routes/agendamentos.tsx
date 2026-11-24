import { createFileRoute } from "@tanstack/react-router";
import { Clock, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/fem/AppShell";
import { StatusBadge } from "@/components/fem/StatusBadge";
import { brl } from "@/lib/fem-data";
import { useAccount } from "@/lib/account/useAccount";

export const Route = createFileRoute("/agendamentos")({
  head: () => ({ meta: [{ title: "Agendamentos — Fempro" }, { name: "description", content: "Veja e gerencie os horários marcados pelas suas clientes." }, { property: "og:title", content: "Agendamentos — Fempro" }, { property: "og:description", content: "Veja e gerencie os horários marcados pelas suas clientes." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: Agenda,
});

const tabs = ["Ontem", "Hoje", "Amanhã"] as const;
const days = Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() + i - 1); return d; });

function Agenda() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Hoje");
  const { appointments } = useAccount();
  const list = appointments.filter((a) => a.date === tab);
  return (
    <AppShell>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">Agenda</h1>
        <button className="btn-pink px-4 py-2.5 text-sm"><Plus className="h-4 w-4" /> Novo</button>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        {days.map((d, i) => {
          const t = tabs[i];
          const active = t === tab;
          return (
            <button key={i} onClick={() => t && setTab(t)} className={`flex min-w-[64px] flex-col items-center rounded-2xl border py-3 ${active ? "border-primary bg-primary text-primary-foreground shadow-pink" : "border-border bg-card"}`}>
              <span className="text-xs font-semibold capitalize opacity-80">{d.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "")}</span>
              <span className="font-display text-xl font-bold">{d.getDate()}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6 flex gap-1 rounded-full bg-muted p-1 text-sm font-bold">
        {tabs.map((t) => <button key={t} onClick={() => setTab(t)} className={`flex-1 rounded-full py-2 ${tab === t ? "bg-card shadow-soft" : "text-muted-foreground"}`}>{t}</button>)}
      </div>
      <div className="mt-6 space-y-3">
        {list.length === 0 && <p className="card-soft p-8 text-center text-muted-foreground">Nenhum horário marcado.</p>}
        {list.map((a) => (
          <div key={a.id} className="card-soft flex gap-4 p-4">
            <div className="w-1.5 rounded-full bg-primary" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2"><p className="font-bold">{a.client}</p><StatusBadge s={a.status} /></div>
              <p className="text-sm text-muted-foreground">{a.service}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1.5 font-semibold"><Clock className="h-4 w-4" /> {a.time}</span>
                <span className="font-bold">{brl(a.price)}</span>
              </div>
            </div>
            <button aria-label="WhatsApp" className="icon-bubble h-10 w-10 self-center"><MessageCircle className="h-4 w-4" /></button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
