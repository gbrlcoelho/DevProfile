import React from 'react'
import {useTheme} from 'styled-components'
import {Container} from './InputBase'
import {InputProps} from './InputProps'

export const Input = (inputProps: InputProps) => {
  const theme = useTheme()
  return <Container placeholderTextColor={theme.colors.gray500} {...inputProps} />
}
