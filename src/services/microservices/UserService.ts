import {axios} from '../Services'
import {ApiResponse, IPostUser, IResetPassword, IUserResponse} from './types'

class UserService {
  private postUser: string
  private forgotPassword: string
  private resetPassword: string
  constructor() {
    this.postUser = '/users'
    this.forgotPassword = '/password/forgot'
    this.resetPassword = '/password/reset'
  }

  postNewUser = async (data: IPostUser): ApiResponse<IUserResponse> => {
    return await axios.post(`${this.postUser}`, data)
  }

  postForgotPassword = async ({email}: Partial<IPostUser>) => {
    return await axios.post(`${this.forgotPassword}`, email)
  }

  postResetPassword = async (data: IResetPassword) => {
    return await axios.post(`${this.resetPassword}`, data)
  }
}
export default new UserService()
