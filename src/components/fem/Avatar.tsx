export function Avatar({ name, photo, className = "h-16 w-16" }: { name: string; photo: string | null; className?: string }) {
  if (photo) return <img src={photo} alt="" className={`${className} rounded-full object-cover object-top`} />;
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
  return <span className={`${className} grid place-items-center rounded-full bg-accent font-display text-xl font-bold text-accent-foreground`}>{initials}</span>;
}
