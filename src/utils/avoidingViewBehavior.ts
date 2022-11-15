import {Platform} from 'react-native'

export const avoidingViewBehavior = Platform.OS === 'ios' ? 'padding' : undefined
