import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {AppStack} from './AppStack'
import {AuthStack} from './AuthStack'

export const Router = () => {
  const authData = true
  return <NavigationContainer>{authData ? <AppStack /> : <AuthStack />}</NavigationContainer>
}
