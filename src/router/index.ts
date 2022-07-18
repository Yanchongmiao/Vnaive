import { noAddTabs, onLoadGetPermission, permissionMode } from '@/config'
import { RoleEnum } from '@/enum/route'
import { themeStore } from '@/pinia/theme'
import { useProfileStore } from '@/pinia/user'
import { NProgressDone, NProgressStart } from '@/utils/NProgress'
import { useTitle } from '@vueuse/core'
import { App, nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { backStaticRoutes, getBackRoutes } from './backRoutes'
import { getMoveRoutes } from './moveRoutes'
import { roleStaticRoutes } from './roleRoutes'
import { staticRoutes } from './routes/basic'
import { addTabs } from './utils'
import { createRoutes } from './utils/createRoutes'
export const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  strict: true,
})
export async function setRoute(app: App<Element>) {
  if (permissionMode === RoleEnum.ROLE) {
    roleStaticRoutes()
  } else if (permissionMode === RoleEnum.BACK) {
    backStaticRoutes()
  }
  createRoutes()
  app.use(router)
  if (onLoadGetPermission && permissionMode === RoleEnum.MOVE) {
    await getMoveRoutes()
  } else if (permissionMode === RoleEnum.BACK) {
    await backStaticRoutes()
    getBackRoutes()
  }
}
router.beforeEach(async (to, from, next) => {
  const useStore = useProfileStore()
  // if (to.fullPath !== '/login' && !useStore.token) {
  //   next({ name: 'login' })
  // }
  if (!noAddTabs.includes(to.name as string) && !to.meta.hideTab) {
    addTabs(to)
  }
  nextTick(() => {
    const title = useTitle()
    title.value =
      (to.meta.title || 'App') + ' - ' + import.meta.env.VITE_APP_TITLE
  })
  const store = themeStore()
  if (store.progressBar) {
    NProgressStart()
  }
  next()
})
// 切换完成
router.afterEach(() => {
  NProgressDone()
})
