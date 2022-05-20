import { RequestOptions } from '@/type/http'
import { AxiosInstance } from 'axios'
import { ResponseInterceptors } from '../Response'
import { RequestError } from './error'
import { requestSuccess } from './success'
export class RequestInterceptors extends ResponseInterceptors {
  AxiosInstance: AxiosInstance
  constructor(AxiosInstance: AxiosInstance) {
    super(AxiosInstance)
    this.AxiosInstance = AxiosInstance
  }
  /**
   * @description 请求拦截
   **/
  createRequestInterceptors() {
    this.AxiosInstance.interceptors.request.use(
      async (request: RequestOptions) => requestSuccess(request),
      (error) => RequestError(error),
    )
  }
}
