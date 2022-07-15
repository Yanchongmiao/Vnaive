import { filterRequestUrl } from '@/config'
import { RequestCustom, RequestOptions } from '@/type/http'
import { uuid } from '@/utils/utils'
import { setCancel } from './addCancel'
import { setJoinTime } from './addTime'
import { addToken } from './addToken'
import { removePending } from './removeRequest'
export const requestSuccess = async (request: RequestOptions) => {
  const { joinTime, withToken, ignoreRequest }: RequestCustom =
    request.requestOptions! //读取自定义配置
  console.log('request', request)

  // if (!request.requestOptions!.id) {
  //   request.requestOptions!.id = uuid()
  // }

  // eslint-disable-next-line no-unused-expressions
  joinTime &&
    ['get', 'delete'].includes(request.method as string) &&
    (await setJoinTime(request)) //是否添加请求时间字段
  // eslint-disable-next-line no-unused-expressions
  withToken &&
    !filterRequestUrl.includes(request.url as string) &&
    (await addToken(request)) //添加token
  // eslint-disable-next-line no-unused-expressions
  ignoreRequest && removePending(request)
  setCancel(request, ignoreRequest!) //设置cancel
  // console.log(request)
  // console.log('idd=>>>>', request.requestOptions!.id)

  return request
}
