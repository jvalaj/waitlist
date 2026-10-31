import * as React from 'react'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { filled?: boolean }

/** Mirrors the app's PillButton: ink capsule, soft shadow, hairline border when outlined. */
export function PillLink({ filled = true, className = '', children, ...rest }: Props) {
  return (
    <a
      {...rest}
      className={
        'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-bold transition-transform duration-200 active:scale-[0.97] ' +
        (filled
          ? 'bg-ink text-white shadow-[0_4px_8px_rgba(20,20,26,0.12)] hover:opacity-90 '
          : 'bg-white text-ink border border-line shadow-[0_4px_8px_rgba(0,0,0,0.04)] hover:bg-[#F7F8FA] ') +
        className
      }
    >
      {children}
    </a>
  )
}
