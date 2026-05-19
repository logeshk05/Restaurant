import { createFileRoute } from "@tanstack/react-router";
import { Reservations } from "@/pages/Reservations";

export const Route = createFileRoute("/_site/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Marindo" },
      { name: "description", content: "Book a table at Marindo. Reservations open thirty days in advance." },
      { property: "og:title", content: "Reservations — Marindo" },
      { property: "og:description", content: "Book a table at Marindo in Hudson, NY." },
    ],
  }),
  component: Reservations,
});
