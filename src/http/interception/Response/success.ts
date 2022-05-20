import { AxiosResponse } from 'axios'
import { removePending } from '../Request/removeRequest'

export const ResponseSuccess = (response: AxiosResponse) => {
  const config = response.config as any
  removePending(response.config)
  if (config.requestOptions.isReturnNativeResponse) {
    //是否需要对原生头处理
    return response
  }
  return response.data
}
