import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import WindiCSS from 'vite-plugin-windicss'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { resolve, dirname } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    vue(),
    VueI18n({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**'
      ),
    }),
    Icons({ compiler: 'vue3' }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  test: {
    globals: true,
    setupFiles: ['setupTests.ts'],
    environment: 'jsdom',
    passWithNoTests: true,
  },
})
