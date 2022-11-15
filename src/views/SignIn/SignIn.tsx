import React from 'react'
import {ScrollView} from 'react-native'
import logo from '../../assets/logo.png'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {Container, Content, Logo, Title} from './SignInBase'

export const SignIn = () => {
  return (
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
      <Container>
        <Content>
          <Logo source={logo} />
          <Title>Faça seu login</Title>
          <Input placeholder='Email' />
          <Input placeholder='Senha' />
          <Button title='Entrar' />
        </Content>
      </Container>
    </ScrollView>
  )
}
