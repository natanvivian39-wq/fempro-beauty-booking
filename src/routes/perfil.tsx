import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Check, ChevronRight, Copy, ExternalLink, Gem, Image, Palette, Pencil, Settings } from "lucide-react";
import { AppShell } from "@/components/fem/AppShell";
import { PhoneMock } from "@/components/fem/PhoneMock";
import { brl } from "@/lib/fem-data";
import { useAccount } from "@/lib/account/useAccount";
import { Avatar } from "@/components/fem/Avatar";

export const Route = createFileRoute("/perfil")({
  head: () => ({ meta: [{ title: "Perfil — Fempro" }, { name: "description", content: "Personalize sua página de agendamento, serviços e preços." }, { property: "og:title", content: "Perfil — Fempro" }, { property: "og:description", content: "Personalize sua página de agendamento, serviços e preços." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: Perfil,
});

const items = [
  { icon: Image, t: "Fotos e apresentação", d: "Adicione fotos, uma descrição e destaque seu trabalho." },
  { icon: Gem, t: "Serviços e preços", d: "Configure seus serviços e valores." },
  { icon: CalendarDays, t: "Link de agendamento", d: "Personalize seu link e o texto da sua página." },
  { icon: Palette, t: "Estilo da página", d: "Escolha as cores e o visual da sua página." },
];

function Perfil() {
  const { profile: pro, services } = useAccount();
  return (
    <AppShell>
      <div className="flex items-center gap-5">
        <div className="relative"><Avatar name={pro.name} photo={pro.photo} className="h-24 w-24" /><span className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full border border-border bg-card"><Pencil className="h-3.5 w-3.5" /></span></div>
        <div><p className="font-display text-2xl font-bold">{pro.name}</p><p className="text-muted-foreground">{pro.role}</p>
          <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-sm font-semibold">fempro.com.br/{pro.slug} <Copy className="h-3.5 w-3.5" /></span></div>
      </div>
      <div className="relative mt-6 overflow-hidden rounded-[1.6rem] border border-border bg-blush-glow p-6">
        <div className="flex max-w-[62%] gap-4">
          <span className="icon-bubble h-11 w-11 shrink-0 bg-primary text-primary-foreground"><Check className="h-5 w-5" /></span>
          <div><h2 className="text-xl font-bold">Sua página está no ar!</h2><p className="mt-1 text-sm text-muted-foreground">Compartilhe seu link e conquiste mais clientes.</p>
            <Link to="/a/$slug" params={{ slug: pro.slug }} className="btn-ghost-soft mt-4 px-4 py-2.5 text-sm"><ExternalLink className="h-4 w-4" /> Ver minha página</Link></div>
        </div>
        <PhoneMock className="absolute -right-20 -top-10 scale-[0.55] rotate-12" />
      </div>
      <h2 className="mt-9 text-xl font-bold">Personalize sua página</h2>
      <p className="text-sm text-muted-foreground">Deixe seu perfil ainda mais profissional.</p>
      <div className="mt-4 space-y-3">
        {items.map((i) => (
          <button key={i.t} className="card-soft flex w-full items-center gap-4 p-4 text-left">
            <span className="icon-bubble h-12 w-12 shrink-0"><i.icon className="h-5 w-5" /></span>
            <div className="flex-1"><p className="font-bold">{i.t}</p><p className="text-sm text-muted-foreground">{i.d}</p></div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        ))}
        <Link to="/configuracoes" className="card-soft mt-5 flex items-center gap-4 p-4"><span className="icon-bubble h-12 w-12"><Settings className="h-5 w-5" /></span><div className="flex-1"><p className="font-bold">Configurações da conta</p><p className="text-sm text-muted-foreground">Notificações, privacidade e mais.</p></div><ChevronRight className="h-5 w-5 text-muted-foreground" /></Link>
      </div>
      <h2 className="mt-9 text-xl font-bold">Seus serviços</h2>
      <div className="mt-4 divide-y divide-border rounded-[1.4rem] border border-border bg-card">
        {services.length === 0 && <p className="p-8 text-center text-sm text-muted-foreground">Você ainda não cadastrou serviços.</p>}
        {services.map((s) => <div key={s.id} className="flex items-center justify-between p-4"><div><p className="font-semibold">{s.name}</p><p className="text-xs text-muted-foreground">{s.duration} min · {s.category}</p></div><p className="font-bold">{brl(s.price)}</p></div>)}
      </div>
    </AppShell>
  );
}
