import { Instagram, MapPin, MessageCircle, Star } from "lucide-react";
import logo from "@/assets/fempro-logo.png";
import nails from "@/assets/nails-hero.jpg";
import portrait from "@/assets/pro-portrait.jpg";

export function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[270px] rounded-[2.6rem] bg-secondary p-2.5 shadow-soft ${className}`}>
      <div className="relative overflow-hidden rounded-[2.1rem] bg-background">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-secondary" />
        <div className="bg-blush-glow px-5 pb-5 pt-10 text-center">
          <img src={logo} alt="" className="mx-auto h-4" />
          <img src={portrait} alt="Ana Beatriz" className="mx-auto mt-4 h-20 w-20 rounded-full object-cover object-top ring-4 ring-card" />
          <p className="mt-3 font-display text-lg font-bold">Ana Beatriz</p>
          <p className="text-xs text-muted-foreground">Manicure & Designer</p>
          <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold"><Star className="h-3 w-3 fill-primary text-primary" /> 4,9 · 128 avaliações</p>
          <div className="btn-pink mt-4 w-full py-2.5 text-sm">Agendar horário</div>
          <div className="mt-4 flex justify-center gap-3">
            {[MessageCircle, Instagram, MapPin].map((I, i) => (
              <span key={i} className="icon-bubble h-9 w-9 bg-card shadow-soft"><I className="h-4 w-4" /></span>
            ))}
          </div>
        </div>
        <img src={nails} alt="" className="h-36 w-full object-cover" />
      </div>
    </div>
  );
}
