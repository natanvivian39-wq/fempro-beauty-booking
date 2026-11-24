import portrait from "@/assets/pro-portrait.jpg";
import { appointments, pro, services } from "@/lib/fem-data";
import type { Account } from "./types";

export const demoAccount: Account = {
  id: "demo",
  kind: "demo",
  profile: { ...pro, photo: portrait },
  services,
  appointments,
  stats: { clicks: 312, bookings: 48, views: 1246 },
};

export const emptyAccount: Account = {
  id: "empty",
  kind: "empty",
  profile: { name: "Sua conta", role: "Profissional da beleza", slug: "minha-pagina", city: "", bio: "", photo: null, rating: null, reviews: 0 },
  services: [],
  appointments: [],
  stats: { clicks: 0, bookings: 0, views: 0 },
};

export const accounts = { demo: demoAccount, empty: emptyAccount } as const;
export type AccountKind = keyof typeof accounts;
