import { axiosTimeName } from '@/config'
import { RequestEnum } from '@/enum/axios'
import { RequestOptions } from '@/type/http'
export const setJoinTime = (request: RequestOptions) => {
  const method = request.method as RequestEnum
  return new Promise((r) => {
    if ([RequestEnum.GET, RequestEnum.DELETE].includes(method)) {
      r(
        request.params
          ? (request.params[axiosTimeName] = Number(new Date()))
          : (request.params = { [axiosTimeName]: Number(new Date()) }),
      )
    } else if (
      [RequestEnum.POST, RequestEnum.PUT, RequestEnum.PATCH].includes(method)
    ) {
      r(
        request.data
          ? (request.data[axiosTimeName] = Number(new Date()))
          : (request.data = { [axiosTimeName]: Number(new Date()) }),
      )
    }
  })
}
