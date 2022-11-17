import {useContext} from 'react'
import {AuthContext} from '../context/Auth/Auth'

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}
