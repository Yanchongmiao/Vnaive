import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
export const componentTS = () => {
  return Components({
    // resolvers: [AntDesignVueResolver()],
    resolvers: [],
    directoryAsNamespace: true,
    extensions: ['vue'],
    // dts: 'src/components.d.ts',
    dts: false,
    dirs: ['src/components'],
    deep: true,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  })
}
