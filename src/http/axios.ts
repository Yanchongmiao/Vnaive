import { axiosTimeName, axiosTokenName, RETRY_COUNTCODE } from '@/config'
import { RequestEnum } from '@/enum/axios'
import { ErrorInfo, RequestCustom, RequestOptions } from '@/type/http'
import { createErrorMsg } from '@/utils/message'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { TipMsg } from './Tips'
export class Vaxios {
  requestOptions: RequestOptions
  AxiosInstance: AxiosInstance
  constructor(requestOptions: RequestOptions) {
    this.requestOptions = requestOptions
    this.AxiosInstance = axios.create(requestOptions)
    this.interceptors() //this.AxiosInstance
  }
  //   拦截器axiosInstance: AxiosInstance
  interceptors() {
    this.initRequestInterceptors()
    this.initResponseInterceptors()
  }
  //   请求拦截器
  initRequestInterceptors() {
    this.AxiosInstance.interceptors.request.use(
      async (request: any) => {
        const { joinTime, withToken }: RequestCustom = request.requestOptions
        if (
          joinTime &&
          [RequestEnum.GET, RequestEnum.DELETE].includes(
            request.method as RequestEnum,
          )
        ) {
          try {
            Reflect.set(request.params, axiosTimeName, Number(new Date()))
          } catch {
            request.params = {}
            Reflect.set(request.params, axiosTimeName, Number(new Date()))
          }
        }
        if (withToken) {
          Reflect.set(request.headers, axiosTokenName, 'set token')
        }
        return request
      },
      async (error: AxiosError) => {
        createErrorMsg({ title: '请求异常', content: error.message })
        return Promise.reject(error)
      },
    )
  }
  //   响应拦截器
  initResponseInterceptors() {
    this.AxiosInstance.interceptors.response.use(
      async (response: AxiosResponse) => {
        const config: RequestOptions = response.config as any
        if (config.requestOptions?.isReturnNativeResponse) {
          //是否需要对原生头处理
          return response
        }
        return response.data
      },
      // eslint-disable-next-line complexity
      async (error: AxiosError) => {
        /**
         * 1.是否是cancel取消的
         * 2.判断重试
         * 3.超时
         * 4.兜底处理
         **/
        // 1、
        if (axios.isCancel(error)) {
          const err: ErrorInfo = {
            status: 4004,
            statusText: error.message,
            success: false,
          }
          return Promise.reject(err)
        }
        // 2、
        const config: RequestOptions = error.config as any
        const [RETRY_COUNT, RETRY_INTERVAL] = [
          config.requestOptions.count,
          config.requestOptions.interval,
        ]
        if (
          config &&
          RETRY_COUNT &&
          config.requestOptions.openRetry &&
          error.response &&
          RETRY_COUNTCODE.includes(error.response.status)
        ) {
          config.requestOptions.retryCount =
            config.requestOptions.retryCount || 0
          if (config.requestOptions.retryCount >= RETRY_COUNT) {
            return Promise.reject(error.response || { message: error.message })
          }
          config.requestOptions.retryCount++
          const backSend = new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve()
            }, RETRY_INTERVAL || 1)
          })
          return backSend.then(() => {
            return this.AxiosInstance(config)
          })
        }
        // 3、
        if (
          error.code === 'ECONNABORTED' &&
          error.message.indexOf('timeout') !== -1
        ) {
          //is overtime
          const ignore: ErrorInfo = {
            status: 4004,
            statusText: '请求超时',
            success: false,
          }
          createErrorMsg({ title: '系统异常', content: '请求超时' })
          return Promise.reject(ignore)
        } else if (error.config) {
          TipMsg(error)
          const requestOptions: any = error.config
          const result: ErrorInfo = {
            status: error.response!.status,
            statusText: error.response!.statusText,
            success: false,
            response: requestOptions.requestOptions.isReturnNativeResponse
              ? error.response
              : {},
          }
          //   removePending(error.config)
          return Promise.reject(result)
        }
        return Promise.reject(error)
      },
    )
  }
  options() {
    this.AxiosInstance.request({
      url: '/a1pi/1back/users/permissions',
      method: 'GET',
    })
    this.AxiosInstance.request({
      url: '/a1pi1/back/users/permissions',
      method: 'post',
      data: { a: 1 },
    })
  }
}
