import { RETRY_COUNTCODE } from '@/config'
import { ErrorInfo } from '@/type/http'
import { createErrorMsg } from '@/utils/message'
import axios, { AxiosError, AxiosInstance } from 'axios'
import { removePending } from '../Request/removeRequest'
import { TipMsg } from './TipMsg'

// eslint-disable-next-line complexity
export const ResponseError = (
  error: AxiosError,
  // eslint-disable-next-line no-shadow
  AxiosInstance: AxiosInstance,
) => {
  // is Repeat cancel
  if (axios.isCancel(error)) {
    const err: ErrorInfo = {
      status: 4004,
      statusText: error.message,
      success: false,
    }
    return Promise.reject(err)
  }
  const config = error.config as any
  const [RETRY_COUNT, RETRY_INTERVAL] = [
    config.requestOptions.count,
    config.requestOptions.interval,
  ]
  if (
    (config && RETRY_COUNT && config.requestOptions.isInterval) ||
    (error.response && RETRY_COUNTCODE.includes(error.response.status))
  ) {
    // eslint-disable-next-line camelcase
    config.retry_count = config.retry_count || 0
    if (config.retry_count >= RETRY_COUNT) {
      return Promise.reject(error.response || { message: error.message })
    }
    config.retry_count++
    const backSend = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, RETRY_INTERVAL || 1)
    })
    return backSend.then(() => {
      return AxiosInstance(config)
    })
  }
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
    // axios url error
    TipMsg(error)
    const requestOptions: any = error.config
    const result: ErrorInfo = {
      status: error.response?.status || 0,
      statusText: error.response?.statusText || '',
      success: false,
      response: requestOptions.requestOptions.isReturnNativeResponse
        ? error.response
        : {},
    }
    removePending(error.config)
    return Promise.reject(result)
  }
  return Promise.reject(error)
}
