import type { Appt } from "@/lib/fem-data";
const map: Record<Appt["status"], string> = {
  confirmado: "bg-success/12 text-success",
  pendente: "bg-accent text-accent-foreground",
  concluido: "bg-muted text-muted-foreground",
  cancelado: "bg-destructive/10 text-destructive",
};
const label: Record<Appt["status"], string> = { confirmado: "Confirmado", pendente: "Pendente", concluido: "Concluído", cancelado: "Cancelado" };
export function StatusBadge({ s }: { s: Appt["status"] }) {
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${map[s]}`}>{label[s]}</span>;
}
