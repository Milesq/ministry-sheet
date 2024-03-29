/// <reference types="vite/client" />
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

declare global {
  namespace jest {
    type Matchers<R = void, T = {}> = TestingLibraryMatchers<
      typeof expect.stringContaining,
      R
    >
  }
}

declare module 'aws-exports.d.ts' {
  declare const awsmobile: {}
  export default awsmobile
}

interface ImportMetaEnv {
  readonly VITE_APP_LANG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
