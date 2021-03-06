import { Locale } from '@/enum/locale'
import { defineStore } from 'pinia'
export const themeStore = defineStore({
  id: 'themeStore',
  state: () => ({
    prefix: import.meta.env.VITE_APP_PREFIXCLS, //前缀
    theme: false, //主题 darkTheme | light
    themeColor: '#409eff', //主题颜色
    headerColor: '#273352', //顶部颜色
    siderColor: '#151515', //左侧菜单颜色
    foldBtnPosition: 'none', //折叠菜单按钮位置
    layout: 1, //页面布局模式
    siderWidth: 210, //正常宽度
    headerHeight: 48, //顶部高度
    footerHeight: 48, //底部高度
    siderFold: false, //是否折叠
    collapsedWidth: 48, //左侧菜单折叠宽度
    isFullScreen: false, //是否全屏
    isFullScreenBtn: false, //是否显示全屏按钮
    language: Locale.ZH_CN,
    isAccordion: true, //手风琴模式
    showSider: true, //显示左侧菜单
    showLogo: true, //显示logo
    showFooter: true, //显示footer
    showLanGuaGe: true, //多语言切换
    showTopSet: true, //顶部设置按钮
    progressBar: true, //进度条
    switchLoading: true, //切换显示loading
    toggleAnimation: true, //切换页面显示动画
    animationType: '动画1', //动画类型
  }), //存放数据
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
})
