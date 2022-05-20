import { createErrorMsg } from '@/utils/message'
export const RequestError = (error: Error) => {
  createErrorMsg({ title: '请求异常', content: error.message })
  return Promise.reject(error)
}
