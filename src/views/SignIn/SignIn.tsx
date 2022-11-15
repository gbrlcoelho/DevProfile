import React from 'react'
import {ScrollView} from 'react-native'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {Container, Content, Title} from './SignInBase'

export const SignIn = () => {
  return (
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
      <Container>
        <Content>
          <Title>Faça seu login</Title>
          <Input placeholder='Email' />
          <Input placeholder='Senha' />
          <Button title='Entrar' />
        </Content>
      </Container>
    </ScrollView>
  )
}
