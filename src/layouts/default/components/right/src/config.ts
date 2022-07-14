import { Locale } from '@/enum/locale'
import { DropdownOption } from 'naive-ui'
import { SelectMixedOption } from 'naive-ui/lib/select/src/interface'

export const LangOptions = [
  {
    label: '简体中文',
    key: Locale.ZH_CN,
  },
  {
    label: '台湾',
    key: Locale.ZH_TW,
  },
  // {
  //   label: '香港',
  //   key: Locale.ZH_HK,
  // },
  {
    label: 'English',
    key: Locale.EN,
  },
  {
    label: '俄罗斯语',
    key: Locale.RU,
  },
]
export const UserOptions = [
  {
    label: '切换租户',
    key: '切换租户',
    children: [
      {
        label: '租户A',
        key: '租户A',
        onclick: () => {
          console.log(1)
        },
      },
      {
        label: '租户B',
        key: '租户B',
      },
    ],
  },
  {
    label: '修改密码',
    key: '修改密码',
    fn: () => {
      console.log(1212)
    },
  },
  {
    label: '个人中心',
    key: '个人中心',
  },
  {
    label: '退出登录',
    key: '退出登录',
    fn: (key: string | number, option: DropdownOption) => {
      console.log(key, option)
    },
  },
]
export const ColorData = {
  siderColar: [
    '#ffffff',
    '#151515',
    '#009688',
    '#5172DC',
    '#018ffb',
    '#409eff',
    '#e74c3c',
    '#24292e',
    '#394664',
    '#001529',
    '#383f45',
  ],
  header: [
    '#001530',
    '#212121',
    '#273352',
    '#ffffff',
    '#191b24',
    '#191a23',
    '#304156',
    '#28333E',
    '#344058',
    '#383f45',
  ],
  theme: [
    '#ffffff',
    '#151515',
    '#009688',
    '#5172DC',
    '#018ffb',
    '#409eff',
    '#e74c3c',
    '#24292e',
    '#394664',
    '#001529',
    '#383f45',
  ],
}
export const MenuFold: Array<SelectMixedOption> = [
  {
    label: '不显示',
    value: 'none',
  },
  {
    label: '顶部',
    value: 'top',
  },
  {
    label: '底部',
    value: 'bottom',
  },
]
export const AnimationType = [
  {
    label: '动画1',
    value: '动画1',
  },
  {
    label: '动画2',
    value: '动画2',
  },
  {
    label: '动画3',
    value: '动画3',
  },
]
