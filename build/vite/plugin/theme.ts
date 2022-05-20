import themePreprocessorPlugin from '@zougt/vite-plugin-theme-preprocessor'
import path from 'path'
export const theme = () => {
  return themePreprocessorPlugin({
    less: {
      // 启用任意主题色模式
      arbitraryMode: true,
      // 默认的主题色，用于对其他颜色值形成对比值，通常与 src/theme/theme-vars.less 中的一个主题色相同，也可以不相同，就看是不是你想要的效果
      defaultPrimaryColor: '#FF005A',
      // 只需提供一组变量文件
      multipleScopeVars: [
        {
          // 必需
          scopeName: 'theme-default',
          // path 和 varsContent 必选一个
          path: path.resolve('src/assets/theme/theme-vars.less'),
          // varsContent参数等效于 path文件的内容 ，可以让 defaultPrimaryColor 与 "@primary-color"值只写一遍， varsContent 与 path 选一个使用
          // varsContent:`@primary-color:${defaultPrimaryColor};`
        },
      ],
      // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
      includeStyleWithColors: [
        {
          color: '#ffffff',
          // 排除属性
          // excludeCssProps:["background","background-color"]
          // 排除选择器
          // excludeSelectors: [
          //   ".ant-btn-link:hover, .ant-btn-link:focus, .ant-btn-link:active",
          // ],
        },
        {
          color: ['transparent', 'none'],
        },
      ],
    },
  })
}
