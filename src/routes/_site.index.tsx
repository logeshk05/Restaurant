import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Marindo — A seasonal kitchen in Hudson, NY" },
      {
        name: "description",
        content:
          "Marindo is a candlelit, ingredient-driven restaurant in Hudson, NY serving a seasonal menu of slow-cooked dishes.",
      },
      { property: "og:title", content: "Marindo — A seasonal kitchen" },
      { property: "og:description", content: "Candlelit, ingredient-driven dining in Hudson, NY." },
    ],
  }),
  component: Home,
});
