import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Home} from '../views/Home/Home'
import {UserDetails} from '../views/UserDetails/UserDetails'

const {Navigator, Screen} = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='Home' component={Home} />
      <Screen name='UserDetails' component={UserDetails} />
    </Navigator>
  )
}
