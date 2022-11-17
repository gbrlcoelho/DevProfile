import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {useAuth} from '../hooks/useAuth'
import {AppStack} from './AppStack'
import {AuthStack} from './AuthStack'

export const Router = () => {
  const {authData} = useAuth()
  return <NavigationContainer>{authData ? <AppStack /> : <AuthStack />}</NavigationContainer>
}
