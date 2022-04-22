export interface IAuthorizationResponse{
    token:string
}

export interface loginUserInfo {
  account: string
  head_pic: string
  id: number
}

export interface ILoginInfo {
  token: string
  expires_time: number
  menu: object[]
  logo: string
  logo_square: string
  newOrderAudioLink: string
  unique_auth: string[]
  user_info: loginUserInfo
  version: string
}

export interface IGetBasic {
  status: string
  msg: string
  data: {
    logo: string
    logo_square: string
  }
  site_name: string
}
