import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {SignIn} from '../views/SignIn/SignIn'
import {SignUp} from '../views/SignUp/SignUp'

const {Navigator, Screen} = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
      <Screen name='SignIn' component={SignIn} />
      <Screen name='SignUp' component={SignUp} />
    </Navigator>
  )
}
