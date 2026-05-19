import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import chef from "@/assets/chef.jpg";

export function Home() {
  return (
    <>
      {/* Hero - magazine masthead */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-foreground/70">
            <span>Vol. XII · Autumn Edition</span>
            <span className="hidden sm:inline">Hudson, New York</span>
            <span>Est. 2014</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[14vw] leading-[0.88] tracking-tight text-foreground sm:text-[10vw] lg:text-[8.5rem]">
              A quiet<br />
              <span className="italic text-accent">table</span>,<br />
              well&nbsp;set.
            </h1>
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-foreground/80">
              Marindo is a thirty-six seat restaurant on a side street in Hudson.
              We cook over wood, write the menu each morning, and pour a short list of
              wines from growers we know by name.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/reservations" className="btn-primary">Reserve a table</Link>
              <Link to="/menu" className="btn-ghost">View the menu</Link>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <img
            src={hero}
            alt="Candlelit dining room with warm wooden tables"
            width={1600}
            height={1200}
            className="h-[60vh] w-full object-cover lg:h-[80vh]"
          />
        </div>
      </section>

      {/* Feature article */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <div className="eyebrow">Feature · No. 01</div>
            <h2 className="mt-6 font-display text-5xl leading-tight text-foreground lg:text-6xl">
              From the&nbsp;hearth, to&nbsp;the table.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-16">
            <p className="text-base leading-relaxed text-foreground/80">
              Every plate begins at the fire — embers banked low, cast iron warming
              through the afternoon. We work with three farms within an hour's drive,
              and the menu changes the day a crate arrives.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              The result is unhurried, honest food. Pasta rolled at noon. Bread
              pulled at four. A short, considered list of dishes that taste like
              the week you eat them.
            </p>
            <Link to="/about" className="mt-8 inline-block text-sm uppercase tracking-[0.22em] text-foreground underline underline-offset-8">
              Read more →
            </Link>
          </div>
          <div className="lg:col-span-4">
            <img
              src={dish1}
              alt="Handmade pasta with seasonal vegetables"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Bucatini, summer pepper, anchovy butter
            </p>
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <img
            src={chef}
            alt="Chef plating a dish"
            width={1200}
            height={1500}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="flex flex-col justify-center">
            <div className="eyebrow">The Kitchen</div>
            <h2 className="mt-6 font-display text-5xl leading-tight text-foreground lg:text-6xl">
              "Cook only what you'd serve a friend."
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80">
              Chef Elena Marindo opened the restaurant in 2014 after a decade
              cooking in Piedmont and the Catskills. Her cooking is precise, warm,
              and quietly seasonal.
            </p>
            <Link to="/about" className="mt-8 btn-ghost self-start">About the kitchen</Link>
          </div>
        </div>
      </section>

      {/* Tasting highlights — magazine grid */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex items-end justify-between border-b border-border pb-8">
            <div>
              <div className="eyebrow">This Week</div>
              <h2 className="mt-3 font-display text-5xl text-foreground lg:text-6xl">From the menu</h2>
            </div>
            <Link to="/menu" className="hidden text-sm uppercase tracking-[0.22em] text-foreground underline underline-offset-8 sm:inline-block">
              Full menu →
            </Link>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {[
              { name: "Cured trout, fennel, brown butter", note: "Catskill farm trout cured in salt and citrus, plated with shaved fennel.", price: "18" },
              { name: "Bucatini, pepper, anchovy", note: "Roasted summer peppers folded into anchovy-laced butter and aged parmesan.", price: "24" },
              { name: "Hearth chicken, jus, greens", note: "Half a bird cooked slowly over apple wood, served with bitter greens.", price: "32" },
            ].map((d, i) => (
              <article key={d.name} className="flex flex-col">
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  No. 0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-3xl leading-tight text-foreground">
                  {d.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75">{d.note}</p>
                <div className="mt-6 flex items-center text-xs uppercase tracking-[0.22em] text-foreground">
                  <span className="rule" />
                  <span>${d.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / pull */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <div className="eyebrow">Press</div>
          <blockquote className="mt-8 font-display text-4xl leading-snug text-foreground lg:text-5xl">
            "One of the most quietly confident kitchens in the Hudson Valley — every plate is restrained, every flavor exact."
          </blockquote>
          <div className="mt-8 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            — The New York Times
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div className="flex flex-col justify-center">
            <div className="eyebrow">Reservations</div>
            <h2 className="mt-6 font-display text-5xl leading-tight text-foreground lg:text-6xl">
              A small dining room.<br />A short waiting list.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
              We open reservations thirty days in advance. Walk-ins welcome at the
              bar from 5:30, where you'll find the full menu and an espresso at the close.
            </p>
            <div className="mt-8">
              <Link to="/reservations" className="btn-primary">Book a table</Link>
            </div>
          </div>
          <img
            src={dish2}
            alt="Berry dessert on ceramic plate"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
