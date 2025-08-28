// src/components/ui/Button.jsx
import React from 'react';

export default function Button({ className = '', variant = 'primary', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition';
  const variants = {
    primary: 'bg-indigo-500 hover:bg-indigo-400 text-white shadow',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    ghost: 'bg-transparent hover:bg-white/10 text-white',
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
