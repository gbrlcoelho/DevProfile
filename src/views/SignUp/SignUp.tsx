import React from 'react'
import {ScrollView} from 'react-native'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {Container, Content, Title} from './SignUpBase'

export const SignUp = () => {
  return (
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
      <Container>
        <Content>
          <Title>Crie sua conta</Title>
          <Input placeholder='Nome completo' />
          <Input placeholder='Email' />
          <Input placeholder='Senha' />
          <Button title='Criar conta' />
        </Content>
      </Container>
    </ScrollView>
  )
}
