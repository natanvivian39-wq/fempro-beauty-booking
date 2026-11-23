import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, BellRing, CalendarDays, ChevronRight, Gem, Link2, MessageCircle, Smartphone, Sparkles, Star, Wallet } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/fem/Logo";
import { PhoneMock } from "@/components/fem/PhoneMock";
import { Plans } from "@/components/fem/Plans";
import { niches } from "@/lib/fem-data";
import nails from "@/assets/nails-hero.jpg";
import portrait from "@/assets/pro-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fempro — Agendamento online para manicures, lash e designers" },
      { name: "description", content: "Crie sua página de agendamento, receba clientes 24h e envie lembretes automáticos. Grátis para começar, Premium por R$ 18,90/mês." },
      { property: "og:title", content: "Fempro — Sua agenda de beleza no automático" },
      { property: "og:description", content: "Página de agendamento para manicures, lash designers e designers de sobrancelha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: CalendarDays, t: "Agenda que se preenche sozinha", d: "Suas clientes escolhem serviço, dia e horário. Você só recebe a notificação." },
  { icon: Link2, t: "Seu link personalizado", d: "fempro.com.br/seu-nome na bio do Instagram e no status do WhatsApp." },
  { icon: BellRing, t: "Lembretes automáticos", d: "Mensagem no WhatsApp 24h antes. Adeus, cliente que esquece e não aparece." },
  { icon: BarChart3, t: "Acompanhe seu crescimento", d: "Faturamento do mês, serviços mais pedidos e clientes que voltam." },
  { icon: Wallet, t: "Serviços e preços claros", d: "Cadastre duração e valor de cada serviço. Sem ficar respondendo “quanto custa?”." },
  { icon: Smartphone, t: "Feito para o celular", d: "Tudo funciona na palma da mão, entre um atendimento e outro." },
];

const faqs = [
  ["Preciso pagar para começar?", "Não. O plano Grátis é para sempre e já inclui sua página com link e agenda online."],
  ["Como minhas clientes agendam?", "Pelo seu link. Elas escolhem o serviço, o horário livre e confirmam com nome e WhatsApp — sem baixar nada."],
  ["Posso cancelar o Premium?", "Pode, a qualquer momento, sem multa. Sua conta volta para o plano Grátis."],
  ["Funciona para lash e sobrancelha?", "Sim. A Fempro serve para manicures, nail designers, lash designers, designers de sobrancelha, depiladoras e outras profissionais da beleza."],
];

function Landing() {
  const [open, setOpen] = useState(0);
  return (
    <div className="overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo className="h-7 md:h-8" />
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#recursos" className="hover:text-foreground">Recursos</a>
            <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
            <Link to="/planos" className="hover:text-foreground">Planos</Link>
            <Link to="/a/$slug" params={{ slug: "ana-beatriz" }} className="hover:text-foreground">Ver exemplo</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/entrar" className="px-3 py-2 text-sm font-bold">Entrar</Link>
            <Link to="/cadastro" className="btn-pink hidden px-5 py-2.5 text-sm sm:inline-flex">Criar conta grátis</Link>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -right-40 top-10 h-[560px] w-[560px] rounded-full bg-accent blur-2xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.1fr_1fr] md:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-foreground">
              <Sparkles className="h-4 w-4" /> Sua beleza, mais agendamentos <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] md:text-6xl">
              Conecte-se com suas clientes de forma <span className="text-primary">simples e profissional.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Crie sua página personalizada, receba agendamentos 24h por dia e deixe os lembretes com a gente.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/cadastro" className="btn-pink px-8 py-4 text-base">Criar minha conta <ChevronRight className="h-5 w-5" /></Link>
              <Link to="/a/$slug" params={{ slug: "ana-beatriz" }} className="btn-ghost-soft px-7 py-4 text-base">Ver página de exemplo</Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[portrait, nails, portrait].map((s, i) => <img key={i} src={s} alt="" className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-background" />)}
              </div>
              <div className="text-sm">
                <p className="flex items-center gap-1 font-bold">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)} 4,9</p>
                <p className="text-muted-foreground">+12 mil profissionais da beleza</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[520px] w-full max-w-md">
            <div className="absolute inset-x-6 bottom-0 top-16 rounded-[3rem] bg-blush-glow" />
            <PhoneMock className="animate-float absolute left-1/2 top-0 -translate-x-1/2 [--r:4deg]" />
            <div className="card-soft absolute -left-1 top-28 flex items-center gap-3 p-3 pr-5">
              <span className="icon-bubble h-10 w-10 bg-primary text-primary-foreground"><CalendarDays className="h-5 w-5" /></span>
              <div className="text-xs"><p className="font-bold">Novo agendamento</p><p className="text-muted-foreground">Juliana · Gel · 14h</p></div>
            </div>
            <div className="card-soft absolute -right-1 bottom-24 flex items-center gap-3 p-3 pr-5">
              <span className="icon-bubble h-10 w-10 bg-success/15 text-success"><MessageCircle className="h-5 w-5" /></span>
              <div className="text-xs"><p className="font-bold">Lembrete enviado</p><p className="text-muted-foreground">Confirmado ✓</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-6">
        <div className="flex w-max gap-3 px-5 md:mx-auto md:w-auto md:max-w-6xl md:flex-wrap md:justify-center">
          {niches.map((n) => (
            <span key={n.name} className="whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm font-semibold">{n.emoji} {n.name}</span>
          ))}
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Recursos</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Tudo que seu atendimento precisa, num lugar só.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="card-soft p-6 transition-transform hover:-translate-y-1">
              <span className="icon-bubble h-12 w-12"><f.icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <img src={nails} alt="Unhas em gel nude" className="h-[440px] w-full rounded-[2rem] object-cover" />
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Como funciona</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Em 3 minutos sua agenda está no ar.</h2>
            <ol className="mt-10 space-y-7">
              {[["Crie sua conta", "Nome, especialidade e WhatsApp. Pronto."], ["Cadastre serviços e horários", "Defina preço, duração e os dias que você atende."], ["Compartilhe seu link", "Coloque na bio e receba agendamentos enquanto trabalha."]].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="font-display text-4xl font-extrabold text-primary">0{i + 1}</span>
                  <div><p className="text-lg font-bold">{t}</p><p className="mt-1 opacity-70">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="planos" className="px-5 py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Planos</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Comece grátis. Cresça no Premium.</h2>
        </div>
        <Plans />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[["Larissa M.", "Lash designer · Recife", "Parei de perder horário por falta de resposta no direct. A agenda enche sozinha."], ["Patrícia S.", "Manicure · BH", "Os lembretes acabaram com as faltas. Pago os R$ 18,90 feliz."], ["Débora R.", "Sobrancelha · Curitiba", "Minhas clientes elogiam a página. Passa muita confiança."]].map(([n, r, q]) => (
            <figure key={n} className="card-soft p-6">
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
              <blockquote className="mt-4 text-[15px] leading-relaxed">“{q}”</blockquote>
              <figcaption className="mt-5 text-sm"><p className="font-bold">{n}</p><p className="text-muted-foreground">{r}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24">
        <h2 className="text-center text-4xl font-extrabold">Dúvidas frequentes</h2>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <button key={q} onClick={() => setOpen(open === i ? -1 : i)} className="card-soft block w-full p-5 text-left">
              <div className="flex items-center justify-between gap-4 font-bold">{q}<ChevronRight className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-90" : ""}`} /></div>
              {open === i && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-[2rem] bg-blush-glow p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="flex items-center gap-5">
            <Gem className="h-12 w-12 shrink-0" strokeWidth={1.5} />
            <div><h2 className="text-3xl font-extrabold">Profissionalize seu atendimento</h2><p className="mt-1 text-muted-foreground">Com a Fempro, sua beleza merece ser ainda mais valorizada.</p></div>
          </div>
          <Link to="/cadastro" className="btn-pink px-8 py-4">Criar conta grátis <ChevronRight className="h-5 w-5" /></Link>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
          <Logo className="h-6" />
          <div className="flex gap-6 text-sm text-muted-foreground"><Link to="/planos">Planos</Link><Link to="/entrar">Entrar</Link><a href="#">Termos</a><a href="#">Privacidade</a></div>
          <p className="text-sm text-muted-foreground">© 2026 Fempro. Feito com carinho no Brasil.</p>
        </div>
      </footer>
    </div>
  );
}
