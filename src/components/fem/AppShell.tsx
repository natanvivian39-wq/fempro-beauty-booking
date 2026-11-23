import { Link } from "@tanstack/react-router";
import { Bell, CalendarDays, Crown, Home, Settings, User } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/painel", label: "Início", icon: Home },
  { to: "/agendamentos", label: "Agendamentos", icon: CalendarDays },
  { to: "/perfil", label: "Perfil", icon: User },
  { to: "/configuracoes", label: "Configurações", icon: Settings },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background lg:flex">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-card px-5 py-7 lg:flex">
        <Logo className="h-7" />
        <nav className="mt-10 flex flex-col gap-1">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted" activeProps={{ className: "bg-accent !text-accent-foreground" }}>
              <n.icon className="h-5 w-5" /> {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/planos" className="mt-auto rounded-2xl bg-secondary p-4 text-secondary-foreground">
          <Crown className="h-5 w-5 text-primary" />
          <p className="mt-2 text-sm font-bold">Seja Premium</p>
          <p className="mt-1 text-xs opacity-70">Lembretes automáticos e agenda ilimitada por R$ 18,90/mês.</p>
        </Link>
      </aside>
      <div className="flex-1 pb-24 lg:pb-10">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/85 px-5 py-4 backdrop-blur lg:px-10">
          <div className="lg:hidden"><Logo className="h-6" /></div>
          <p className="hidden text-sm text-muted-foreground lg:block">Olá, <span className="font-bold text-foreground">Ana</span> 👋</p>
          <button aria-label="Notificações" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-muted">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-background" />
          </button>
        </header>
        <main className="mx-auto max-w-5xl px-5 py-6 lg:px-10">{children}</main>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="flex flex-col items-center gap-1 border-t-2 border-transparent py-2.5 text-[11px] font-semibold text-muted-foreground" activeProps={{ className: "!border-primary !text-primary" }}>
            <n.icon className="h-5 w-5" /> {n.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
