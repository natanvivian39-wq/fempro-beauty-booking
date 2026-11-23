import { Link } from "@tanstack/react-router";
import { Check, Crown, X } from "lucide-react";

const free = ["Página de agendamento com seu link", "Até 30 agendamentos por mês", "Até 5 serviços cadastrados", "Agenda online 24h"];
const freeNo = ["Lembretes automáticos no WhatsApp", "Relatórios de faturamento"];
const premium = ["Agendamentos ilimitados", "Serviços ilimitados", "Lembretes automáticos no WhatsApp", "Confirmação automática das clientes", "Relatórios de faturamento e clientes", "Personalização total da página", "Sem a marca Fempro na sua página", "Suporte prioritário"];

export function Plans() {
  return (
    <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
      <div className="card-soft flex flex-col p-7">
        <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Grátis</p>
        <p className="mt-3 font-display text-5xl font-extrabold">R$ 0</p>
        <p className="mt-1 text-sm text-muted-foreground">Para começar a receber agendamentos hoje.</p>
        <ul className="mt-6 space-y-3 text-sm">
          {free.map((f) => <li key={f} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" />{f}</li>)}
          {freeNo.map((f) => <li key={f} className="flex gap-3 text-muted-foreground line-through decoration-border"><X className="h-5 w-5 shrink-0" />{f}</li>)}
        </ul>
        <Link to="/cadastro" className="btn-ghost-soft mt-8 py-3.5">Começar grátis</Link>
      </div>
      <div className="relative flex flex-col overflow-hidden rounded-[calc(var(--radius)+4px)] bg-secondary p-7 text-secondary-foreground shadow-pink">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary"><Crown className="h-4 w-4" /> Premium</p>
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Mais escolhido</span>
        </div>
        <p className="mt-3 font-display text-5xl font-extrabold">R$ 18,90<span className="text-lg font-semibold opacity-60">/mês</span></p>
        <p className="mt-1 text-sm opacity-70">Menos que uma esmaltação. Cancele quando quiser.</p>
        <ul className="mt-6 space-y-3 text-sm">
          {premium.map((f) => <li key={f} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" />{f}</li>)}
        </ul>
        <Link to="/cadastro" className="btn-pink mt-8 py-3.5">Assinar Premium</Link>
        <p className="mt-3 text-center text-xs opacity-60">7 dias grátis para testar</p>
      </div>
    </div>
  );
}
