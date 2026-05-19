import chef from "@/assets/chef.jpg";
import hero from "@/assets/hero.jpg";

export function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <div className="eyebrow">About</div>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-foreground lg:text-8xl">
              A kitchen built
              <br />
              on <span className="italic text-accent">patience</span>.
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="text-base leading-relaxed text-foreground/80">
              Marindo opened in the spring of 2014 in a narrow brick storefront on Linden Avenue.
              The room seats thirty-six, the kitchen seats seven, and the menu fits on a single page
              that we re-set each morning.
            </p>
          </div>
        </div>
        <img
          src={hero}
          alt="The Marindo dining room"
          width={1600}
          height={1200}
          loading="lazy"
          className="h-[60vh] w-full object-cover"
        />
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <img
            src={chef}
            alt="Chef Elena Marindo"
            width={1200}
            height={1500}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="flex flex-col justify-center">
            <div className="eyebrow">The Chef</div>
            <h2 className="mt-6 font-display text-5xl leading-tight text-foreground lg:text-6xl">
              Elena Marindo
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                Elena trained in Piedmont and cooked through the Catskills before opening her own
                room. Her cooking is honest, regional, and a little old-fashioned — pasta rolled by
                hand, stocks reduced for hours, bread pulled from the oven each afternoon.
              </p>
              <p>
                "I want people to leave the table the way you leave a good conversation," she says.
                "A little slower than when you arrived."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                t: "Sourcing",
                b: "Three farms inside an hour's drive. The menu changes the day a crate arrives.",
              },
              {
                t: "The Room",
                b: "Thirty-six seats, candlelight, soft music, and one long communal bar at the back.",
              },
              {
                t: "The Wine",
                b: "A short list — twenty bottles — from small growers we visit each year.",
              },
            ].map((c, i) => (
              <div key={c.t}>
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Chapter 0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-4xl text-foreground">{c.t}</h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/80">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
