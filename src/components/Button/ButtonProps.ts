import {TouchableOpacityProps} from 'react-native'

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  backgroundColor?: string
  titleColor?: string
  children?: React.ReactNode
}

export interface StyledButtonProps {
  backgroundColor?: string
}

export interface StyledTitleProps {
  titleColor?: string
}
