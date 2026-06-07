import type { Config } from 'tailwindcss';

export default {
  content: ['./src/renderer/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        panel: '#111827',
        ink: '#e5eef8',
        signal: '#38bdf8',
        aurora: '#34d399'
      }
    }
  },
  plugins: []
} satisfies Config;
