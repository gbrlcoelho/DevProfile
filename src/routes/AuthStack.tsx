import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {ForgotPassword} from '../views/ForgotPassword/ForgotPassword'
import {SignIn} from '../views/SignIn/SignIn'
import {SignUp} from '../views/SignUp/SignUp'

const {Navigator, Screen} = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='SignIn' component={SignIn} />
      <Screen name='SignUp' component={SignUp} />
      <Screen name='ForgotPassword' component={ForgotPassword} />
    </Navigator>
  )
}
