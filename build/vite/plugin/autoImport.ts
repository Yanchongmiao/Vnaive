import AutoImport from 'unplugin-auto-import/vite'
export const autoImport = () => {
  return AutoImport({
    imports: [
      // 'vue',
      // 'vue-router',
      // 'vue-i18n',
      // '@vueuse/head',
      // '@vueuse/core',
      // 'pinia',
    ],
    dts: 'src/auto-import.d.ts',
  })
}
