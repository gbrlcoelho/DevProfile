import {IUserResponse} from '../../services/microservices/types'

export interface ChildrenProps {
  children: React.ReactNode
}
export interface AuthData {
  token: string
  user: IUserResponse
}

export interface AuthContextData {
  authData?: AuthData
  loading: boolean
  signIn: ({email, password}: ICredentials) => Promise<void>
  signOut: () => void
}

export interface ICredentials {
  email: string
  password: string
}
