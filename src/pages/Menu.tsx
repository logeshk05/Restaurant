const sections = [
  {
    name: "To Begin",
    items: [
      { n: "Marinated olives, citrus peel", p: "8" },
      { n: "Country bread, cultured butter", p: "6" },
      { n: "Cured trout, fennel, brown butter", p: "18" },
      { n: "Burrata, late tomatoes, basil oil", p: "19" },
      { n: "Roasted beets, walnut, cara cara", p: "16" },
    ],
  },
  {
    name: "Pasta",
    items: [
      { n: "Bucatini, pepper, anchovy butter", p: "24" },
      { n: "Agnolotti, brown butter, sage", p: "26" },
      { n: "Tagliatelle, slow lamb ragù", p: "28" },
      { n: "Risotto, autumn squash, parmesan", p: "25" },
    ],
  },
  {
    name: "From the Hearth",
    items: [
      { n: "Hearth chicken, jus, bitter greens", p: "32" },
      { n: "Whole fish, lemon, herbs (for two)", p: "62" },
      { n: "Wood-grilled ribeye, marrow butter", p: "48" },
      { n: "Roasted celeriac, hazelnut, sage", p: "26" },
    ],
  },
  {
    name: "To Finish",
    items: [
      { n: "Olive oil cake, crème fraîche, berries", p: "12" },
      { n: "Hazelnut semifreddo, espresso", p: "13" },
      { n: "Selection of cheese, honey, walnut", p: "16" },
    ],
  },
];

export function Menu() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="text-center">
          <div className="eyebrow">The Menu</div>
          <h1 className="mt-6 font-display text-6xl text-foreground lg:text-8xl">
            Written this <span className="italic text-accent">morning</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
            Our menu changes with the week — sometimes the day. Below is what we
            are serving now. Dietary requests are warmly accommodated.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {sections.map((s) => (
            <div key={s.name}>
              <div className="flex items-baseline gap-4 border-b border-border pb-4">
                <h2 className="font-display text-4xl text-foreground">{s.name}</h2>
                <span className="ml-auto text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Course
                </span>
              </div>
              <ul className="mt-8 space-y-6">
                {s.items.map((it) => (
                  <li key={it.n} className="flex items-baseline gap-4">
                    <span className="text-lg text-foreground">{it.n}</span>
                    <span className="flex-1 border-b border-dotted border-border/80 translate-y-[-4px]" />
                    <span className="text-sm tracking-[0.18em] text-foreground">${it.p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-24 text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">
          A 20% service charge is included on parties of six or more.
        </p>
      </div>
    </section>
  );
}
