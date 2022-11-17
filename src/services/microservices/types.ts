import {AxiosResponse} from 'axios'

export type ApiResponse<T> = Promise<AxiosResponse<T>>

export interface IPostUser {
  name: string
  email: string
  password: string
}

export interface IUserResponse {
  name: string
  email: string
  id: string
  created_at: string
  updated_at: string
  avatar_url: string
}

export interface IUserAuthenticationResponse {
  token: string
  user: IUserResponse
}

export interface IUserAuthentication {
  email: string
  password: string
}
