/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosInstance } from 'axios'
import { RequestOptions, resultType } from '@/type/http'
import { Interceptors } from './interception'
import { Expand } from '@/type'
type Type<T> = Expand<resultType<T>>
export class Vaxios {
  AxiosInstance: AxiosInstance
  constructor(options: RequestOptions) {
    this.AxiosInstance = axios.create(options) //创建axios实例
    new Interceptors(this.AxiosInstance)
  }
  /**
   * @description 请求主体
   **/
  require<T = any>(config: RequestOptions): Promise<T> {
    return this.AxiosInstance.request({
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  post<T = any>(
    url: string,
    data?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<Type<T>> {
    return this.require({
      url,
      method: 'post',
      data,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  put<T = any>(
    url: string,
    data?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<Type<T>> {
    return this.require({
      url,
      method: 'put',
      data,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  patch<T = any>(
    url: string,
    data?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<Type<T>> {
    return this.require({
      url,
      method: 'patch',
      data,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  get<T = any>(
    url: string,
    params?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<Type<T>> {
    return this.require({
      url,
      method: 'get',
      params,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  head<T = any>(
    url: string,
    params?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<Type<T>> {
    return this.require({
      url,
      method: 'head',
      params,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  options<T = any>(
    url: string,
    params?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<Type<T>> {
    return this.require({
      url,
      method: 'options',
      params,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  delete<T = any>(
    url: string,
    params?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<Type<T>> {
    return this.require({
      url,
      method: 'delete',
      params,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  uploadFile<T = FormData>(
    url: string,
    data?: FormData,
    config?: RequestOptions,
  ): Promise<Type<T>> {
    return this.require({
      url,
      method: 'post',
      data,
      ...config,
    })
  }
}
