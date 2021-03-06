import { RoleEnum } from '@/enum/route'
// 接口默认携带请求时间time字段
export const axiosTimeName = 'SendTime'
// 自定义token字段
export const axiosTokenName = 'X-Access-Token'
// tabs显示
export const isTabs = true
// footer显示
export const isFooter = true
// 是否启用多语言
export const isI18n = false
// basic home path
export const baseHome = '/home'
// 如果默认首页地址是多级菜单的 需要额外的配置
export const baseHomeOpenMenu = ['/home']
// 是否每次刷新页面都请求权限接口
export const onLoadGetPermission = true
// 路由模式
export let permissionMode = RoleEnum.BACK
// 不添加到tabs中
export const noAddTabs = ['redirectPath', 'redirect', '404']
/**
 * @retryErrorCode:  请求异常时，哪些状态码可以直接重试不需要在配置是否重试重试次数等
 * @ params [401, 404,500]
 */
export const RETRY_COUNTCODE: Array<Number> = [401]
/**
 * @retryErrorCode:  请求异常时，重试次数
 */
export const RETRY_COUNT = 3
/**
 * @retryErrorCode:  请求异常时，重试间隔时间
 */
export const RETRY_INTERVAL = 1500
/**
* @name 路由使用方式
  1. 正常路由信息，返回path、和组件名称,不返回组件地址 BACK
  2. 角色控制,根据角色判断能否进入,需要在路由中配置好,可以数组形式存在 ROLE
  3. 动态路由,返回信息拿到渲染 move
**/
/**
 *  过滤掉哪些url不需要 token
 * **/
export const filterRequestUrl: Array<string> = ['/login', '/1']
