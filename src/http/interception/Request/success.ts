import { filterRequestUrl } from '@/config'
import { RequestOptions } from '@/type/http'
import { setCancel } from './addCancel'
import { setJoinTime } from './addTime'
import { addToken } from './addToken'
import { removePending } from './removeRequest'
export const requestSuccess = async (request: RequestOptions) => {
  const { joinTime, withToken, ignoreRequest }: any = request.requestOptions //读取自定义配置
  // eslint-disable-next-line no-unused-expressions
  // eslint-disable-next-line no-unused-expressions
  joinTime &&
    ['get', 'delete'].includes(request.method as string) &&
    (await setJoinTime(request)) //是否添加请求时间字段
  // request.method ==
  // eslint-disable-next-line no-unused-expressions
  withToken &&
    !filterRequestUrl.includes(request.url as string) &&
    (await addToken(request)) //添加token
  // eslint-disable-next-line no-unused-expressions
  ignoreRequest && removePending(request)
  setCancel(request, ignoreRequest) //设置cancel
  return request
}
