import { Link } from "@tanstack/react-router";
import logo from "@/assets/fempro-logo.png";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Fempro — início" className="inline-flex shrink-0">
      <img src={logo} alt="Fempro" className={`${className} w-auto`} />
    </Link>
  );
}
