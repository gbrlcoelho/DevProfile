import React from 'react'
import {KeyboardAvoidingView, ScrollView, View} from 'react-native'
import {useTheme} from 'styled-components'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {avoidingViewBehavior} from '../../utils/avoidingViewBehavior'
import {Container, Content, Icon, SignUpButton, SignUpTitle, Title} from './SignInBase'

export const SignIn = () => {
  const theme = useTheme()

  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={avoidingViewBehavior}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
        <Container>
          <Content>
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Input placeholder='Email' />
            <Input placeholder='Senha' />
            <Button title='Entrar' />
            <Button title='Esqueci minha senha' backgroundColor={theme.colors.dark} titleColor={theme.colors.gray500} />
          </Content>
        </Container>
      </ScrollView>
      <SignUpButton>
        <Icon name='log-in' />
        <SignUpTitle>Criar uma conta</SignUpTitle>
      </SignUpButton>
    </KeyboardAvoidingView>
  )
}
