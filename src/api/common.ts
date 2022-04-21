/**
 * 公共基础接口封装
 */
import { IAuthorization } from './types/common'
import request from '@/utils/request'
export const login = () => {
//   request({
//     method: 'GET',
//     url: '/login/info'
//   })
  return request<IAuthorization>({
    method: 'POST',
    url: '/authorizations'
  })
}
