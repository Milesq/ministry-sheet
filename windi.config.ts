import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['./src/**/*.html', './src/**/*.vue'],
  },
  attributify: true,
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
    },
  },
  shortcuts: {
    center: 'flex justify-center items-center',
  },
})
