import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/reservations", label: "Reservations" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="font-display text-2xl tracking-tight text-foreground">
          Marindo
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-foreground/70"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/reservations" className="btn-primary hidden md:inline-flex">
          Reserve
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          <div className="h-px w-6 bg-foreground mb-1.5" />
          <div className="h-px w-6 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-[0.72rem] uppercase tracking-[0.22em] text-foreground/70"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
