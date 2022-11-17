import {axios} from '../Services'
import {ApiResponse, IPostUser, IUserResponse} from './types'

class UserService {
  private postUser: string

  constructor() {
    this.postUser = '/users'
  }

  postNewUser = async (data: IPostUser): ApiResponse<IUserResponse> => {
    return await axios.post(`${this.postUser}`, data)
  }
}
export default new UserService()
