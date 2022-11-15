import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {SignIn} from '../views/SignIn/SignIn'
import {SignUp} from '../views/SignUp/SignUp'

const {Navigator, Screen} = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen name='Login' component={SignIn} options={{headerShown: false}} />
      <Screen name='Login' component={SignUp} options={{headerShown: false}} />
    </Navigator>
  )
}
