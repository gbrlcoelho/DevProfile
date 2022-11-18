import {axios} from '../Services'
import {ApiResponse, IPostUser, IUserResponse} from './types'

class UserService {
  private postUser: string
  private forgotPassword: string

  constructor() {
    this.postUser = '/users'
    this.forgotPassword = '/password/forgot'
  }

  postNewUser = async (data: IPostUser): ApiResponse<IUserResponse> => {
    return await axios.post(`${this.postUser}`, data)
  }

  postForgotPassword = async ({email}: Partial<IPostUser>): ApiResponse<IUserResponse> => {
    return await axios.post(`${this.forgotPassword}`, email)
  }
}
export default new UserService()
