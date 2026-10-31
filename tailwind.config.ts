import type { Config } from 'tailwindcss'

// Mirrors the iOS app's Palette.swift and Typography.swift.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EEEFF3', // Palette.paper
        ink: '#080708', // Palette.ink
        accent: '#3772FF', // Palette.accent
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
