import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const capitalizeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.capitalize:first-letter': {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.25em',
      color: 'green'
    }
  }
  addUtilities(newUtilities)
})

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [capitalizeFirst]
} satisfies Config