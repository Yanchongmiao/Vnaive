import { axiosRequestStore } from '@/pinia/axiosRequest'
import { PendingType, RequestOptions } from '@/type/http'
import axios from 'axios'

export const setCancel = (request: RequestOptions, ignoreRequest: Number) => {
  const cancelToken = axios.CancelToken
  let pendingObj: PendingType | null
  const useStore = axiosRequestStore()
  request.cancelToken = new cancelToken((c: Function) => {
    pendingObj = {
      url: request.url as string,
      method: request.method!,
      params: request.params,
      data: request.data,
      cancel: c,
      ignoreRequest: ignoreRequest,
      ignoreMsg: request.requestOptions?.ignoreMsg,
      id: request.requestOptions?.id,
    }
  })
  useStore.setPending(pendingObj!)
}
