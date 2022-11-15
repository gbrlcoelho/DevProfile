import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Home} from '../views/Home/Home'

const {Navigator, Screen} = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}
