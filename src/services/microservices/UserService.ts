import {axios} from '../Services'
import {ApiResponse} from './types'

class UserService {
  private postUser: string

  constructor() {
    this.postUser = '/users'
  }

  postNewUser = async (data: any): ApiResponse<any> => {
    return await axios.post(`${this.postUser}`, data)
  }
}
export default new UserService()
