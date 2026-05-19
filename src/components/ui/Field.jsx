import React from "react";

export function Field({ label, ...rest }) {
  return (
    <label className="block">
      <span className="eyebrow mb-3 block">{label}</span>
      <input
        {...rest}
        className="w-full border border-border bg-background px-4 py-3 text-base text-foreground focus:border-foreground focus:outline-none"
      />
    </label>
  );
}
