import {useContext} from 'react'
import {AuthContext} from '../context/Auth/Auth'
import {AuthContextData} from '../context/Auth/types'

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
