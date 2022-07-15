import { PendingType, RequestOptions } from '@/type/http'
/**
  @name axiosRequestMap
  @Fun 所有请求暂存
**/
export const axiosRequestMap: Map<string, PendingType> = new Map()
/**
  @name cancelRequestMap
  @Fun 所有请求的取消方法暂存
**/
export const cancelRequestMap: Map<string, PendingType> = new Map()
/**
  @name handleName
  @Fun 处理暂存到 axiosRequestMap 方法中时对应的KEY
**/
export const handleName = (config: RequestOptions) =>
  config.url + '_' + config.method
/**
  @name addPending
  @Fun 添加一条到 axiosRequestMap
**/
export const addPending = (obj: PendingType, request: RequestOptions) => {
  axiosRequestMap.set(handleName(request), obj)
}
/**
  @name deletePending
  @Fun 暂存对象中删除一条
**/
export const deletePending = (request: RequestOptions) => {
  axiosRequestMap.delete(handleName(request))
}
/**
  @name cancelPending
  @Fun 调用取消方法取消请求，并从暂存对象中删除
**/
export const cancelPending = () => {}
