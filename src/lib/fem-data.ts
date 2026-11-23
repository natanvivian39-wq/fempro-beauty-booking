export type Service = { id: string; name: string; duration: number; price: number; category: string };

export const pro = {
  name: "Ana Beatriz",
  role: "Manicure & Designer",
  slug: "ana-beatriz",
  city: "Moema, São Paulo",
  rating: 4.9,
  reviews: 128,
  bio: "Especialista em alongamento em gel e esmaltação em gel. Atendo com hora marcada, ambiente climatizado e materiais esterilizados.",
};

export const services: Service[] = [
  { id: "s1", name: "Manicure tradicional", duration: 45, price: 35, category: "Unhas" },
  { id: "s2", name: "Esmaltação em gel", duration: 60, price: 70, category: "Unhas" },
  { id: "s3", name: "Alongamento em gel", duration: 120, price: 160, category: "Unhas" },
  { id: "s4", name: "Manutenção de alongamento", duration: 90, price: 110, category: "Unhas" },
  { id: "s5", name: "Pé e mão", duration: 80, price: 60, category: "Unhas" },
  { id: "s6", name: "Design de sobrancelha", duration: 30, price: 45, category: "Sobrancelha" },
  { id: "s7", name: "Extensão de cílios fio a fio", duration: 120, price: 180, category: "Cílios" },
];

export type Appt = { id: string; client: string; service: string; date: string; time: string; price: number; status: "confirmado" | "pendente" | "concluido" | "cancelado" };

export const appointments: Appt[] = [
  { id: "a1", client: "Juliana Martins", service: "Esmaltação em gel", date: "Hoje", time: "09:00", price: 70, status: "confirmado" },
  { id: "a2", client: "Camila Rocha", service: "Alongamento em gel", date: "Hoje", time: "10:30", price: 160, status: "confirmado" },
  { id: "a3", client: "Fernanda Lima", service: "Pé e mão", date: "Hoje", time: "14:00", price: 60, status: "pendente" },
  { id: "a4", client: "Larissa Souza", service: "Design de sobrancelha", date: "Hoje", time: "16:30", price: 45, status: "confirmado" },
  { id: "a5", client: "Beatriz Alves", service: "Manutenção de alongamento", date: "Amanhã", time: "09:30", price: 110, status: "pendente" },
  { id: "a6", client: "Mariana Costa", service: "Manicure tradicional", date: "Amanhã", time: "13:00", price: 35, status: "confirmado" },
  { id: "a7", client: "Paula Mendes", service: "Esmaltação em gel", date: "Ontem", time: "15:00", price: 70, status: "concluido" },
  { id: "a8", client: "Renata Dias", service: "Pé e mão", date: "Ontem", time: "11:00", price: 60, status: "cancelado" },
];

export const niches = [
  { name: "Manicure & Pedicure", emoji: "💅" },
  { name: "Lash Designer", emoji: "👁️" },
  { name: "Designer de Sobrancelha", emoji: "✨" },
  { name: "Nail Designer", emoji: "💎" },
  { name: "Depilação", emoji: "🌸" },
  { name: "Maquiagem", emoji: "💄" },
  { name: "Cabeleireira", emoji: "💇‍♀️" },
  { name: "Estética Facial", emoji: "🧖‍♀️" },
];

export const PREMIUM_PRICE = 18.9;

export const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
