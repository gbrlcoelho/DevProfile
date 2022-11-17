import {AxiosResponse} from 'axios'

export type ApiResponse<T> = Promise<AxiosResponse<T>>

export interface IPostUser {
  name: string
  email: string
  password: string
}
