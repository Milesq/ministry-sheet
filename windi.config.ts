import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['./src/**/*.html', './src/**/*.vue'],
  },
  attributify: true,
})
