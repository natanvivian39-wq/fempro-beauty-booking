import type { InputHTMLAttributes, ReactNode } from "react";
import { Logo } from "./Logo";
import nails from "@/assets/nails-hero.jpg";

export function AuthLayout({ title, sub, children }: { title: string; sub: string; children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Logo className="h-7" />
        <div className="mx-auto my-auto w-full max-w-sm py-10">
          <h1 className="text-3xl font-extrabold">{title}</h1>
          <p className="mb-8 mt-2 text-muted-foreground">{sub}</p>
          {children}
        </div>
      </div>
      <div className="relative hidden lg:block">
        <img src={nails} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-x-10 bottom-10 rounded-3xl bg-card/90 p-6 backdrop-blur">
          <p className="font-display text-xl font-bold">“Minha agenda ficou cheia em duas semanas.”</p>
          <p className="mt-2 text-sm text-muted-foreground">Camila, nail designer em São Paulo</p>
        </div>
      </div>
    </div>
  );
}

export function Field({ label, ...p }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      <input required {...p} className="w-full rounded-2xl border border-input bg-card px-4 py-3.5 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" />
    </label>
  );
}
