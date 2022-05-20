import { axiosRequestStore } from '@/pinia/axiosRequest'
import { PendingType, RequestOptions } from '@/type/http'

export const removePending = (config: RequestOptions) => {
  const useStore = axiosRequestStore()
  const pendingList: Array<PendingType> = useStore.getAllPending
  if (pendingList.length > 0) {
    for (const key in pendingList) {
      const item = Number(key)
      const list: PendingType = pendingList[key]
      // 当前请求在数组中存在时执行函数体
      if (
        list.url === config.url &&
        list.method === config.method &&
        JSON.stringify(list.params) === JSON.stringify(config.params) &&
        JSON.stringify(list.data) === JSON.stringify(config.data)
      ) {
        // 执行取消操作
        // eslint-disable-next-line no-unused-expressions
        list.cancel && list.cancel(list.ignoreMsg)
        useStore.removePending(item)
      }
    }
  }
}
