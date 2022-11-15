import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native'
import logo from '../../assets/logo.png'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {avoidingViewBehavior} from '../../utils/avoidingViewBehavior'
import {Icon, Logo, SignUpButton, SignUpTitle} from '../SignIn/SignInBase'
import {Container, Content, Title} from './SignUpBase'

export const SignUp = () => {
  const {goBack} = useNavigation()

  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={avoidingViewBehavior}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
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
      <SignUpButton onPress={() => goBack()}>
        <Icon name='arrow-left' />
        <SignUpTitle>Voltar para login</SignUpTitle>
      </SignUpButton>
    </KeyboardAvoidingView>
  )
}
