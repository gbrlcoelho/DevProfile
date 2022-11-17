import {axios} from '../Services'
import {ApiResponse} from './types'

class AuthService {
  private auth: string

  constructor() {
    this.auth = '/sessions'
  }

  login = async (data: any): ApiResponse<any> => {
    return await axios.post(`${this.auth}`, data)
  }

  setAccessToken = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  removeAccessToken = () => {
    axios.defaults.headers.common.Authorization = ''
  }
}

export default new AuthService()
