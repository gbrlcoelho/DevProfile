import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Home} from '../views/Home/Home'

const {Navigator, Screen} = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Navigator>
      <Screen name='Login' component={Home} options={{headerShown: false}} />
    </Navigator>
  )
}
