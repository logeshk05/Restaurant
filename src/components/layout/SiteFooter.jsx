import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="font-display text-3xl text-foreground">Marindo</div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A seasonal kitchen rooted in slow cooking, sourced from regional farms and a few trusted
            hands.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Visit</div>
          <p className="text-sm text-muted-foreground">
            148 Linden Avenue
            <br />
            Hudson, NY 12534
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Hours</div>
          <p className="text-sm text-muted-foreground">
            Wed – Sun · 5:30 – 10pm
            <br />
            Sunday Lunch · 12 – 3pm
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Contact</div>
          <p className="text-sm text-muted-foreground">
            hello@marindo.kitchen
            <br />
            (518) 555 0142
          </p>
          <div className="mt-6 flex gap-5 text-xs uppercase tracking-[0.22em] text-foreground">
            <Link to="/menu">Menu</Link>
            <Link to="/reservations">Book</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-muted-foreground lg:px-10">
          <span>© {new Date().getFullYear()} Marindo Kitchen</span>
          <span className="uppercase tracking-[0.22em]">Hudson Valley · NY</span>
        </div>
      </div>
    </footer>
  );
}
