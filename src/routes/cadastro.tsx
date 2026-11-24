import { setAccount } from "@/lib/account/useAccount";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout, Field } from "@/components/fem/AuthLayout";
import { niches } from "@/lib/fem-data";

export const Route = createFileRoute("/cadastro")({
  head: () => ({ meta: [{ title: "Criar conta — Fempro" }, { name: "description", content: "Crie sua página de agendamento grátis em 3 minutos." }, { property: "og:title", content: "Criar conta — Fempro" }, { property: "og:description", content: "Crie sua página de agendamento grátis em 3 minutos." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: Cadastro,
});

function Cadastro() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [niche, setNiche] = useState(niches[0]!.name);
  return (
    <AuthLayout title={step === 0 ? "Crie sua conta grátis" : "Qual é a sua especialidade?"} sub={step === 0 ? "É rápido, gratuito e fácil de usar." : "Vamos sugerir serviços para você começar."}>
      <div className="mb-6 flex gap-2">{[0, 1].map((i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />)}</div>
      {step === 0 ? (
        <form onSubmit={(e) => { e.preventDefault(); setStep(1); }} className="space-y-4">
          <Field label="Seu nome" placeholder="Ana Beatriz" />
          <Field label="WhatsApp" type="tel" placeholder="(11) 99999-9999" />
          <Field label="E-mail" type="email" placeholder="voce@email.com" />
          <Field label="Senha" type="password" placeholder="Mínimo 8 caracteres" />
          <button className="btn-pink w-full py-3.5">Continuar</button>
        </form>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-2.5">
            {niches.map((n) => (
              <button key={n.name} type="button" onClick={() => setNiche(n.name)} className={`rounded-2xl border-2 p-3.5 text-left text-sm font-semibold transition-colors ${niche === n.name ? "border-primary bg-accent" : "border-border bg-card"}`}>
                <span className="text-xl">{n.emoji}</span><br />{n.name}
              </button>
            ))}
          </div>
          <button onClick={() => { setAccount("empty"); nav({ to: "/painel" }); }} className="btn-pink mt-6 w-full py-3.5">Criar minha página</button>
        </div>
      )}
      <p className="mt-6 text-center text-sm text-muted-foreground">Já tem conta? <Link to="/entrar" className="font-bold text-primary">Entrar</Link></p>
    </AuthLayout>
  );
}
