import { mergeurlId, setPending } from '@/http/uiils'
import { PendingType, RequestOptions } from '@/type/http'
import axios from 'axios'

export const setCancel = (request: RequestOptions, ignoreRequest: boolean) => {
  const cancelToken = axios.CancelToken
  let pendingObj: PendingType | null
  request.cancelToken = new cancelToken((c) => {
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
  let url = ''
  if (!pendingObj!.ignoreRequest) {
    url = mergeurlId(request.url!, request.requestOptions?.id || '')
  } else {
    url = request.url!
  }
  setPending(url, pendingObj!.method, pendingObj!)
}
