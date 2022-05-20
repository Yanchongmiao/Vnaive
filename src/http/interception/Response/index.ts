import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { ResponseError } from './error'
import { ResponseSuccess } from './success'
export class ResponseInterceptors {
  AxiosInstance: AxiosInstance
  // eslint-disable-next-line no-shadow
  constructor(AxiosInstance: AxiosInstance) {
    this.AxiosInstance = AxiosInstance
  }
  // 响应拦截器
  createResponseInterceptors() {
    this.AxiosInstance.interceptors.response.use(
      async (response: AxiosResponse) => ResponseSuccess(response),
      (error: AxiosError) => ResponseError(error, this.AxiosInstance),
    )
  }
}
