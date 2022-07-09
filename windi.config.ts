import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['./src/**/*.html', './src/**/*.vue'],
  },
  attributify: true,
  theme: {
    extend: {
      colors: {
        primary: '#69ddb7',
      },
    },
  },
  shortcuts: {
    center: 'flex justify-center items-center',
  },
})
