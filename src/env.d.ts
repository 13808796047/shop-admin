/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 环境变量类型
 // eslint-disable-next-line no-unused-vars
 interface ImportMetaEnv{
  VITE_API_BASEURL:string
}
