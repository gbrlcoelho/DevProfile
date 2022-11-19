import {RouteProp} from '@react-navigation/native'

type ParamList = {
  UserDetails: {id: string}
}

export type ScreenRouteProp = RouteProp<ParamList, 'UserDetails'>
