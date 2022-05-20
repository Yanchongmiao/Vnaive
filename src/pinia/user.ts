import { defineStore } from 'pinia'
export const useProfileStore = defineStore({
  id: 'useProfileStore', //唯一
  state: () => ({
    keepAliveList: <Array<string>>[], //页面缓存
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: [
          'routerList',
          'auth',
          'keepAliveList',
          'selectMenu',
          'tabs',
          'openMenu',
        ],
      },
    ],
  },
})
