import { AxiosInstance } from 'axios'
import { RequestInterceptors } from './Request'
export class Interceptors extends RequestInterceptors {
  // eslint-disable-next-line no-shadow
  constructor(AxiosInstance: AxiosInstance) {
    super(AxiosInstance)
    this.initInterceptors()
  }
  // 初始化拦截器
  initInterceptors() {
    this.createRequestInterceptors()
    this.createResponseInterceptors()
  }
}
