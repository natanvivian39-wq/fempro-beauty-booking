import type { Appt, Service } from "@/lib/fem-data";

/** Shape the backend should return for the logged-in professional. */
export type Account = {
  id: string;
  kind: "demo" | "empty";
  profile: { name: string; role: string; slug: string; city: string; bio: string; photo: string | null; rating: number | null; reviews: number };
  services: Service[];
  appointments: Appt[];
  stats: { clicks: number; bookings: number; views: number };
};
