import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout, Field } from "@/components/fem/AuthLayout";

export const Route = createFileRoute("/entrar")({
  head: () => ({ meta: [{ title: "Entrar — Fempro" }, { name: "description", content: "Acesse sua agenda Fempro." }, { property: "og:title", content: "Entrar — Fempro" }, { property: "og:description", content: "Acesse sua agenda Fempro." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: Entrar,
});

function Entrar() {
  const nav = useNavigate();
  return (
    <AuthLayout title="Bem-vinda de volta" sub="Entre para ver sua agenda de hoje.">
      <form onSubmit={(e) => { e.preventDefault(); nav({ to: "/painel" }); }} className="space-y-4">
        <Field label="E-mail" type="email" placeholder="voce@email.com" />
        <Field label="Senha" type="password" placeholder="••••••••" />
        <button className="btn-pink w-full py-3.5">Entrar</button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">Ainda não tem conta? <Link to="/cadastro" className="font-bold text-primary">Criar grátis</Link></p>
    </AuthLayout>
  );
}
