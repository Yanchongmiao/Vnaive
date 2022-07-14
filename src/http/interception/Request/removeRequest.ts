import { axiosRequestMap, getMapName, removeSingle } from '@/http/uiils'
import { RequestOptions } from '@/type/http'

export const removePending = (config: RequestOptions) => {
  if (axiosRequestMap.size > 0) {
    const current = axiosRequestMap.get(getMapName(config))
    if (
      current &&
      current.method === config.method &&
      current.url === config.url
    ) {
      current.cancel(current.ignoreMsg)
      removeSingle(config.url, config.method)
    }
  }
}
