// src/components/ui/LogoPill.jsx
import React from 'react';

/** Mała pigułka z nazwą logo/marki */
export default function LogoPill({ name, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-white/80 ${className}`}
      title={name}
    >
      {name}
    </span>
  );
}
