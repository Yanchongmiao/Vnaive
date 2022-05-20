import { axiosTokenName } from '@/config'
export const addToken = (request: any) => {
  return Promise.resolve((request.headers[axiosTokenName] = 'set token'))
}
