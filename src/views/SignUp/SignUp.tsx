import React from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native'
import logo from '../../assets/logo.png'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {avoidingViewBehavior} from '../../utils/avoidingViewBehavior'
import {Logo} from '../SignIn/SignInBase'
import {Container, Content, Title} from './SignUpBase'

export const SignUp = () => {
  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={avoidingViewBehavior}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
        <Logo />
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Crie sua conta</Title>
            <Input placeholder='Nome completo' />
            <Input placeholder='Email' />
            <Input placeholder='Senha' />
            <Button title='Criar conta' />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
