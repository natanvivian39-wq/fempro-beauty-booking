import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/fem/Logo";
import { brl, pro, services } from "@/lib/fem-data";
import portrait from "@/assets/pro-portrait.jpg";

export const Route = createFileRoute("/a/$slug")({
  head: () => ({ meta: [{ title: "Ana Beatriz — Agende pela Fempro" }, { name: "description", content: "Escolha o serviço e o horário e agende online." }, { property: "og:title", content: "Ana Beatriz — Agende pela Fempro" }, { property: "og:description", content: "Agendamento online de manicure e beleza." }, { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary" }] }),
  component: Booking,
});

const times = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

function Booking() {
  const [svc, setSvc] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const s = services.find((x) => x.id === svc);
  if (done) return (
    <div className="grid min-h-screen place-items-center bg-blush-glow p-6 text-center">
      <div><span className="icon-bubble mx-auto h-16 w-16 bg-primary text-primary-foreground"><Check className="h-8 w-8" /></span>
        <h1 className="mt-5 text-3xl font-extrabold">Horário reservado!</h1>
        <p className="mt-2 text-muted-foreground">{s?.name} às {time}. Você receberá a confirmação no WhatsApp.</p>
        <Link to="/" className="btn-ghost-soft mt-6 px-6 py-3">Conhecer a Fempro</Link></div>
    </div>
  );
  return (
    <div className="min-h-screen pb-28">
      <div className="bg-blush-glow px-5 pb-8 pt-6 text-center">
        <Logo className="mx-auto h-5" />
        <img src={portrait} alt={pro.name} className="mx-auto mt-6 h-24 w-24 rounded-full object-cover object-top ring-4 ring-card" />
        <h1 className="mt-3 text-2xl font-extrabold">{pro.name}</h1>
        <p className="text-muted-foreground">{pro.role}</p>
        <p className="mt-2 flex justify-center gap-3 text-sm font-semibold"><span className="flex items-center gap-1"><Star className="h-4 w-4 fill-primary text-primary" />{pro.rating} ({pro.reviews})</span><span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{pro.city}</span></p>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">{pro.bio}</p>
      </div>
      <div className="mx-auto max-w-xl px-5">
        <h2 className="mt-8 text-lg font-bold">1. Escolha o serviço</h2>
        <div className="mt-3 space-y-2">
          {services.map((x) => (
            <button key={x.id} onClick={() => setSvc(x.id)} className={`flex w-full items-center justify-between rounded-2xl border-2 bg-card p-4 text-left ${svc === x.id ? "border-primary" : "border-border"}`}>
              <div><p className="font-semibold">{x.name}</p><p className="text-xs text-muted-foreground">{x.duration} min</p></div><p className="font-bold">{brl(x.price)}</p>
            </button>
          ))}
        </div>
        <h2 className="mt-8 text-lg font-bold">2. Escolha o horário (amanhã)</h2>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {times.map((t) => <button key={t} onClick={() => setTime(t)} className={`rounded-2xl border-2 py-3 font-bold ${time === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>{t}</button>)}
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 border-t border-border bg-card/95 p-4 backdrop-blur">
        <button disabled={!s || !time} onClick={() => setDone(true)} className="btn-pink mx-auto flex w-full max-w-xl py-4 disabled:opacity-40">
          {s && time ? `Agendar · ${brl(s.price)}` : "Selecione serviço e horário"}
        </button>
      </div>
    </div>
  );
}
