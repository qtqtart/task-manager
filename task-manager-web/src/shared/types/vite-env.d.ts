/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="redux-persist" />

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly BASE_URL: string
}
