/**
 * 公共基础接口封装
 */
import { IAuthorizationResponse } from './types/common'
import request from '@/utils/request'
export const login = (data:{
    account:string
    pwd :string
    imgcode:string
  }) => {
//   request({
//     method: 'GET',
//     url: '/login/info'
//   })
  return request<IAuthorizationResponse>({
    method: 'POST',
    url: '/authorizations'
  })
}
// export function userLogin (data: {account: string, pwd: string, imgcode: string}) {
//   return request<ILoginInfo>({
//     method: 'POST',
//     url: '/api/admin/login',
//     data
//   })
// }

// 基本信息

// export function getBasic () {
//   return request<IGetBasic>({
//     method: 'GET',
//     url: '/api/admin/logo'
//   })
// }

// 获取验证码
export function getCaptcha () {
  return request<Blob>({
    method: 'GET',
    url: '/api/admin/captcha_pro',
    params: { stamp: Date.now() },
    responseType: 'blob' // 请求获取图片数据
  })
}

// 推出
export function logout () {
  return request({
    method: 'GET',
    url: '/api/admin/setting/admin/logout'
  })
}
