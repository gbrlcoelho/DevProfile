import React from 'react'
import {Container, Title} from './ButtonBase'
import {ButtonProps} from './ButtonProps'

export const Button = ({children, backgroundColor, titleColor, title, ...otherProps}: ButtonProps) => {
  return (
    <Container {...otherProps} backgroundColor={backgroundColor}>
      <Title titleColor={titleColor}>{title}</Title>
      {children}
    </Container>
  )
}
