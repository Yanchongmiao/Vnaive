import { axiosRequestMap, cancelSingle, mergeurlId } from '@/http/uiils'
import { RequestOptions } from '@/type/http'

export const removePending = (config: RequestOptions) => {
  if (axiosRequestMap.size > 0) {
    let url = ''
    if (!config.requestOptions!.ignoreRequest) {
      url = mergeurlId(config.url!, config.requestOptions!.id!)
    } else {
      url = config.url!
    }
    cancelSingle(url, config.method!)
  }
}
