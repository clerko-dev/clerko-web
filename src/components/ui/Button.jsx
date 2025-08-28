import React, { forwardRef } from 'react'

const base =
  'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ' +
  'focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-white hover:opacity-90',
  secondary:
    'bg-white/10 text-white hover:bg-white/15 border border-white/15',
  ghost: 'text-white/80 hover:text-white hover:bg-white/5',
}

const Button = forwardRef(
  ({ as: Comp = 'button', variant = 'primary', className = '', ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
        {...props}
      />
    )
  }
)

export default Button
