import {Control} from 'react-hook-form'
import {TextInputProps} from 'react-native'

export interface InputProps extends TextInputProps {
  control: Control
  name: string
}
