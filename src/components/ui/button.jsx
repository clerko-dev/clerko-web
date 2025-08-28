import React from "react";

/**
 * Uniwersalny przycisk do całej strony.
 * Użycie (jak masz w kodzie):
 *   import { Button } from "@/components/ui/button";
 *   <Button variant="primary">Buy now</Button>
 */
export function Button({
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition shadow-sm " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-white text-[#0A0B14] hover:opacity-90 ring-offset-[#0A0B14]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 border border-white/15 ring-offset-[#0A0B14]",
    ghost:
      "bg-transparent text-white hover:bg-white/10 ring-offset-transparent",
    gradient:
      "bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-white hover:brightness-110 ring-offset-[#0A0B14]"
  };

  const classes = [base, variants[variant] ?? variants.primary, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

// opcjonalnie: domyślny eksport dla wygody innych miejsc
export default Button;
