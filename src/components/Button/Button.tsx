import React from 'react'
import {Container, Title} from './ButtonBase'
import {ButtonProps} from './ButtonProps'

export const Button = ({title, ...otherProps}: ButtonProps) => {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  )
}
