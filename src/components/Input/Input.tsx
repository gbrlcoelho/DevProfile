import React from 'react'
import {Controller} from 'react-hook-form'
import {useTheme} from 'styled-components'
import {Container, InputControl} from './InputBase'
import {InputProps} from './InputProps'

export const Input = ({name, control, ...inputProps}: InputProps) => {
  const theme = useTheme()
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <InputControl
            placeholderTextColor={theme.colors.gray500}
            onChangeText={onChange}
            value={value}
            {...inputProps}
          />
        )}
        name={name}
      />
    </Container>
  )
}
