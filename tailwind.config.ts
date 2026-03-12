import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        display: ['var(--font-editorial)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'DM Mono', 'monospace'],
      },
      colors: {
        cream: '#F5F2ED',
        charcoal: '#111110',
        accent: '#C8FF00',
        muted: '#9B9B8E',
        warm: '#E8E4DC',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
export default config
