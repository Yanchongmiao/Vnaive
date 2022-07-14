// import { PendingType } from '@/type/http'
import { PendingType, RequestOptions } from '@type/http'
import { createErrorMsg } from '@utils/message'

export const axiosRequestMap: Map<string | number, PendingType> = new Map()
export const getMapName = (config: RequestOptions) =>
  `${config.url}_${config.method}`
export const mergeurlId = (url: string, id: string) => `${url}_${id}`
//添加一条
export const setPending = function setPending(
  url: string,
  method: string,
  obj: PendingType,
) {
  axiosRequestMap.set(`${url}_${method}`, obj)
  console.log(axiosRequestMap)
}
// 移除单条记录
export const removeSingle = function removePending(
  url: string,
  method: string,
) {
  axiosRequestMap.delete(`${url}_${method}`)
}
// 匹配单条取消
export const cancelSingle = function cancelSingle(url: string, method: string) {
  if (axiosRequestMap.has(`${url}_${method}`)) {
    axiosRequestMap.get(`${url}_${method}`)!.cancel()
    removeSingle(url, method)
  } else {
    createErrorMsg({
      title: '取消异常',
      content: '未匹配到取消请求',
    })
  }
}
