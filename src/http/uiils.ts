// import { PendingType } from '@/type/http'
import { PendingType, RequestOptions } from '@type/http'
import { createErrorMsg } from '@utils/message'

export const axiosRequestMap: Map<string | number, PendingType> = new Map()
export const cancelRequestMap: Map<string | number, () => void> = new Map()
export const getMapName = (config: RequestOptions) =>
  `${config.url}_${config.method}`
export const mergeurlId = (url: string, id: string) => `${url}_${id}`
//添加一条
export const setPending = function setPending(
  url: string,
  method: string,
  obj: PendingType,
  request: RequestOptions,
) {
  axiosRequestMap.set(`${url}_${method}`, obj)
  cancelRequestMap.set(request.requestOptions!.id!, () => {})
}
// 删除单条记录
export const removeSingle = function removePending(
  url: string,
  method: string,
  id: string,
) {
  // console.log(cancelRequestMap.get(config.requestOptions!.id!))
  axiosRequestMap.delete(`${url}_${method}`)
  cancelRequestMap.delete(id)
}
// 匹配单条取消
export const cancelSingle = function cancelSingle(url: string, method: string) {
  if (axiosRequestMap.has(`${url}_${method}`)) {
    let item = axiosRequestMap.get(`${url}_${method}`)!
    item.cancel(item.ignoreMsg)
    removeSingle(url, method, item.id)
  } else {
    createErrorMsg({
      title: '取消异常',
      content: '未匹配到取消请求',
    })
  }
}
