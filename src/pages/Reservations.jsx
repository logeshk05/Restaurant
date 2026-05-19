import { useState } from "react";
import { Field } from "@/components/ui/Field";

export function Reservations() {
  const [sent, setSent] = useState(false);

  return (
    <section>
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="eyebrow">Reservations</div>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] text-foreground lg:text-7xl">
            Reserve a <span className="italic text-accent">table</span>.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80">
            We accept bookings up to thirty days in advance for dinner service Wednesday through
            Sunday. The bar holds a handful of walk-in seats each evening from 5:30.
          </p>
          <div className="mt-12 space-y-6 border-t border-border pt-8 text-sm text-foreground/80">
            <div>
              <div className="eyebrow mb-2">Hours</div>
              Wed – Sun · 5:30 – 10pm
              <br />
              Sunday Lunch · 12 – 3pm
            </div>
            <div>
              <div className="eyebrow mb-2">Address</div>
              148 Linden Avenue
              <br />
              Hudson, NY 12534
            </div>
            <div>
              <div className="eyebrow mb-2">Private Events</div>
              events@marindo.kitchen
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="border border-border bg-secondary/40 p-8 lg:p-12"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="eyebrow">Thank you</div>
                <h3 className="mt-4 font-display text-4xl text-foreground">
                  Your request has been received.
                </h3>
                <p className="mx-auto mt-6 max-w-sm text-base text-foreground/80">
                  We'll confirm your booking by email within a few hours. We look forward to having
                  you at the table.
                </p>
              </div>
            ) : (
              <>
                <div className="eyebrow">Booking request</div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" type="text" required />
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" />
                  <Field label="Guests" type="number" min={1} max={12} defaultValue={2} required />
                  <Field label="Date" type="date" required />
                  <Field label="Time" type="time" required />
                </div>
                <div className="mt-6">
                  <label className="eyebrow mb-3 block">Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Allergies, occasion, seating preference…"
                    className="w-full border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
                <button type="submit" className="btn-primary mt-10 w-full sm:w-auto">
                  Request reservation
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
