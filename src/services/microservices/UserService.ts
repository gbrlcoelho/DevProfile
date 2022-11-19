import {axios} from '../Services'
import {ApiResponse, IPostUser, IResetPassword, IUserResponse} from './types'

class UserService {
  private users: string
  private forgotPassword: string
  private resetPassword: string

  constructor() {
    this.users = '/users'
    this.forgotPassword = '/password/forgot'
    this.resetPassword = '/password/reset'
  }

  postNewUser = async (data: IPostUser): ApiResponse<IUserResponse> => {
    return await axios.post(`${this.users}`, data)
  }

  postForgotPassword = async (email: Partial<IPostUser>) => {
    return await axios.post(`${this.forgotPassword}`, email)
  }

  postResetPassword = async (data: IResetPassword) => {
    return await axios.post(`${this.resetPassword}`, data)
  }

  getUsers = async (): ApiResponse<IUserResponse[]> => {
    return await axios.get(this.users)
  }

  getUserDetails = async (id: string): ApiResponse<IUserResponse> => {
    return await axios.get(`${this.users}/${id}`)
  }
}
export default new UserService()
