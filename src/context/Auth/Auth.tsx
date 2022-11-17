import AsyncStorage from '@react-native-async-storage/async-storage'
import {createContext, useEffect, useState} from 'react'
import {Alert} from 'react-native'
import {isAxiosError} from '../../services/api'
import AuthService from '../../services/microservices/AuthService'
import {axios} from '../../services/Services'
import {tokenData, userData} from '../../utils/asyncStorageKeys'
import {AuthContextData, AuthData, ChildrenProps, ICredentials} from './types'

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<ChildrenProps> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>({} as AuthData)
  const [loading, setLoading] = useState(false)

  const signIn = async ({email, password}: ICredentials) => {
    try {
      setLoading(true)
      const {data} = await AuthService.login({email, password})
      AuthService.setAccessToken(data.token)
      setAuthData({token: data.token, user: data.user})
      await AsyncStorage.setItem(tokenData, data.token)
      await AsyncStorage.setItem(userData, JSON.stringify(data.user))
    } catch (err) {
      Alert.alert('Erro na autenticação', 'Não foi possível realizar o login')
      if (isAxiosError(err)) {
        console.log(err.response?.data)
      }
    }
  }

  const signOut = async () => {
    setAuthData({} as AuthData)
    AuthService.removeAccessToken()
    await AsyncStorage.removeItem(tokenData)
    await AsyncStorage.removeItem(userData)
  }

  const loadAuthData = async () => {
    const token = await AsyncStorage.getItem(tokenData)
    const user = await AsyncStorage.getItem(userData)
    if (token && user) {
      setAuthData({token, user: JSON.parse(user)})
    }
  }

  useEffect(() => {
    loadAuthData()
  }, [])

  useEffect(() => {
    const id = axios.interceptors.response.use(undefined, (error) => {
      if (isAxiosError(error)) {
        if (error?.response?.status === 401) {
          signOut()
        }
      }
      throw error
    })
    return () => axios.interceptors.response.eject(id)
  }, [])

  return <AuthContext.Provider value={{authData, signIn, signOut, loading}}>{children}</AuthContext.Provider>
}
