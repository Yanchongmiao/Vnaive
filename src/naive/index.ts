import 'virtual:svg-icons-register'
import 'virtual:windi.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import 'virtual:windi-devtools'
import './src/layout.less'
import { GlobalThemeOverrides } from 'naive-ui'
import '@/assets/icons/iconfont.js'
import '@/assets/icons/iconfont.css'
export const themeOverrides: GlobalThemeOverrides = {
  common: {
    // primaryColor: '#FF0000',
  },
  Layout: {
    siderColor: '#273352',
    headerColor: '#394664',
    color: '#eff2f5',
  },
  Menu: {
    // borderRadius: '0px',
    // 一级菜单
    /*正常状态*/
    itemTextColor: '#ffffffb3', //一级菜单字体颜色
    itemIconColor: '#ffffffb3', //一级菜单图标颜色
    arrowColor: '#ffffffb3', //箭头颜色
    /*移入一级菜单*/
    itemColorHover: 'rgba(0,0,0,0)', //背景颜色
    itemTextColorHover: '#fff', //字体颜色
    itemIconColorHover: '#fff', //图标颜色
    arrowColorHover: '#fff', //如果移入的是二级菜单后边箭头颜色
    /*激活移入*/
    itemColorActiveHover: '#0960bd', //字体颜色
    itemIconColorActiveHover: '#fff', //icon颜色
    arrowColorActiveHover: '#fff', //箭头颜色
    itemTextColorActiveHover: '#fff', //文本颜色
    itemColorActive: '#0960bd', //背景颜色
    /*通用 激活状态 不区分一二级*/
    itemTextColorActive: '#fff', //激活字体颜色
    itemIconColorActive: '#fff', //激活图标颜色
    arrowColorActive: '#fff', //激活箭头字体颜色
    // 激活菜单为多级时 父节点配置
    itemIconColorChildActive: '#fff', //父节点icon颜色
    itemTextColorChildActive: '#fff', //父节点文本颜色
    arrowColorChildActive: '#fff', //父节点箭头颜色
    // 折叠状态
    itemIconColorCollapsed: '#ffffffb3', //背景颜色
    arrowColorChildActiveInverted: 'red',
    // itemColorActiveCollapsed: 'red', //kais
    // itemColorActiveCollapsedInverted: 'red',
    // itemIconColorCollapsedInverted: 'red',
    // itemColorActiveInverted: 'red',
    // itemIconColorChildActiveHorizontal: 'red',
    // itemColorActiveHoverInverted: 'red',
    // arrowColorActiveHoverInverted: 'red',
    // arrowColorActiveInverted: 'red',
    // itemIconColorActiveHorizontal: 'red',
    // itemIconColorActiveHorizontalInverted: 'red',
    // itemIconColorActiveHoverHorizontal: 'red',
    // itemIconColorActiveHoverHorizontalInverted: 'red',
    // itemIconColorActiveHoverInverted: 'red',
    // itemIconColorActiveInverted: 'red',
    // itemTextColorActiveHorizontal: 'red',
    // itemTextColorActiveHorizontalInverted: 'red',
    // itemTextColorActiveHoverHorizontal: 'red',
    // itemTextColorActiveHoverHorizontalInverted: 'red',
    // itemTextColorActiveHoverInverted: 'red',
    // itemTextColorActiveInverted: 'red',
    // itemIconColorChildActiveHorizontalInverted: 'red',
    // itemIconColorChildActiveInverted: 'red',
    // itemTextColorChildActiveHorizontal: 'red',
    // itemTextColorChildActiveHorizontalInverted: 'red',
    // itemTextColorChildActiveInverted: 'red',
    // itemIconColorInverted: '', //图标颜色
    // itemTextColorInverted: '', //字体颜色
    peers: {
      Dropdown: {
        color: '#0c2135',
        optionTextColor: '#ffffffb3',
        prefixColor: '#ffffffb3',
        padding: '0',
        optionColorHover: '#0c2135',
        optionTextColorHover: '#fff',
        optionColorActive: '#0960bd',
        optionTextColorActive: '#fff',
        // optionTextColorChildActive: 'red',
        // optionTextColorChildActiveInverted: 'red',
        // optionColorActiveInverted: 'red',
        // optionTextColorActiveInverted: 'red',
      },
    },
  },
  Button: {
    // textColor: '#FF0000',
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#FF0000',
      },
    },
  },
  // ...
}
