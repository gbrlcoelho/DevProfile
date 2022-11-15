import {Control, FieldError, FieldErrorsImpl, Merge} from 'react-hook-form'
import {TextInputProps} from 'react-native'

export interface InputProps extends TextInputProps {
  control: Control
  name: string
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
