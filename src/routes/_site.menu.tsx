import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "@/pages/Menu";

export const Route = createFileRoute("/_site/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Marindo" },
      { name: "description", content: "The current seasonal menu at Marindo, written each morning." },
      { property: "og:title", content: "Menu — Marindo" },
      { property: "og:description", content: "Seasonal small plates, pasta, hearth mains, and desserts." },
    ],
  }),
  component: Menu,
});
