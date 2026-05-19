import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/pages/About";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — Marindo" },
      { name: "description", content: "The story behind Marindo: a candlelit, seasonal kitchen in Hudson, NY." },
      { property: "og:title", content: "About — Marindo" },
      { property: "og:description", content: "Chef Elena Marindo on slow cooking, regional farms, and quiet hospitality." },
    ],
  }),
  component: About,
});
