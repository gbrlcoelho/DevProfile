import {AxiosResponse} from 'axios'

export type ApiResponse<T> = Promise<AxiosResponse<T>>

export interface IPostUser {
  name: string
  email: string
  password: string
}

export interface IUserResponse {
  id: string
  name: string
  email: string
  avatar_url?: string
}

export interface IUserAuthenticationResponse {
  token: string
  user: IUserResponse
}

export interface IUserAuthentication {
  email: string
  password: string
}

export interface IResetPassword {
  token: string
  password: string
  passwordConfirmation: string
}
