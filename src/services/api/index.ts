import _axios from 'axios'
import AuthService from '../microservices/AuthService'

export const {isAxiosError} = _axios

export function formatAxiosError(error: unknown) {
  if (isAxiosError(error)) {
    return error?.response?.data || error.message
  }
  return `Unknown: ${error}`
}

export * from '../microservices/types'
export default AuthService
