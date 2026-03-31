/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cabinet Grotesk', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        border: '#1E1E1E',
        accent: '#C8FF00',
        'accent-muted': '#9FCC00',
        text: '#F0F0F0',
        muted: '#888888',
      },
    },
  },
  plugins: [],
}
