import type { Plugin } from 'vite'
// import { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import viteCompression from 'vite-plugin-compression'
// import { autoImport } from './autoImport'
import { componentTS } from './componen'
// import { theme } from "./theme"
import { icons } from './icons'
import { html } from './html'
import { mock } from './mock'
import { restart } from './restart'
// import { themePreprocessorHmrPlugin } from "@zougt/vite-plugin-theme-preprocessor"
import { jsx } from './jsx'
import { setupName } from './setupName'
import { importImgs } from './importImgs'
export const createPlugin = (
  // eslint-disable-next-line no-undef
  viteEnv: ViteEnv,
  isBuild: boolean,
  command: string,
) => {
  let { VITE_APP_TITLE, VITE_APP_MOCK } = viteEnv as any
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    WindiCSS(),
    viteCompression(),
  ]
  // autoImport  unplugin-auto-import/vite
  // vitePlugins.push(autoImport())
  // componentTS  unplugin-vue-components/vite
  vitePlugins.push(componentTS())
  // theme  @zougt/vite-plugin-theme-preprocessor
  // vitePlugins.push(theme())
  // 主题热更新，不得已分开插件，因为需要vite插件顺序enforce
  // vitePlugins.push(themePreprocessorHmrPlugin())
  // icons  vite-plugin-svg-icons
  vitePlugins.push(icons())
  // title  vite-plugin-html
  vitePlugins.push(html(VITE_APP_TITLE) as unknown as Plugin)
  // vite-plugin-mock
  // eslint-disable-next-line no-unused-expressions
  VITE_APP_MOCK && vitePlugins.push(mock(isBuild, command))
  // restart vite-plugin-restart
  vitePlugins.push(restart())
  // jsx插件
  vitePlugins.push(jsx())
  // setup name
  vitePlugins.push(setupName())
  // import images
  vitePlugins.push(importImgs())
  return vitePlugins
}
