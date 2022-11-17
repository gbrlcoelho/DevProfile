import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {Alert, KeyboardAvoidingView, ScrollView} from 'react-native'
import logo from '../../assets/logo.png'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import UserService from '../../services/microservices/UserService'
import {avoidingViewBehavior} from '../../utils/avoidingViewBehavior'
import signUpSchema from '../../validations/SignUpSchema'
import {Icon, Logo, SignUpButton, SignUpTitle} from '../SignIn/SignInBase'
import {Container, Content, Title} from './SignUpBase'
import {SignUpForm} from './SignUpProps'

export const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({
    resolver: yupResolver(signUpSchema),
  })
  const {goBack, navigate} = useNavigation()

  const handleSignUp = async (form: SignUpForm) => {
    try {
      const data = {
        name: form.name,
        email: form.email,
        password: form.password,
      }
      Alert.alert('Cadastro realizado', 'Você já pode fazer login na aplicação', [
        {text: 'OK', onPress: () => navigate('SignIn')},
      ])

      await UserService.postNewUser(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao cadastrar', 'Verifique os dados e tente novamente')
    }
  }

  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={avoidingViewBehavior}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Crie sua conta</Title>
            <Input
              placeholder='Nome completo'
              name='name'
              control={control}
              autoCorrect={false}
              error={errors.fullName && errors.fullName.message}
            />
            <Input
              name='email'
              placeholder='Email'
              control={control}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              error={errors.email && errors.email.message}
            />
            <Input
              name='password'
              placeholder='Senha'
              control={control}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message}
            />
            <Button title='Criar conta' onPress={handleSubmit(handleSignUp)} />
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
