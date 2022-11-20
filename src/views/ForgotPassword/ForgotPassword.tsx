import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {Alert, KeyboardAvoidingView, ScrollView} from 'react-native'
import logo from '../../assets/logo.png'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {Container} from '../../global/styles/genericStyles'
import UserService from '../../services/microservices/UserService'
import {avoidingViewBehavior} from '../../utils/avoidingViewBehavior'
import forgotPasswordSchema from '../../validations/ForgotPasswordSchema'
import {SignUpForm} from '../SignUp/SignUpProps'
import {BackToSignInButton, Content, Icon, Logo, SignUpTitle, Title} from './ForgotPasswordBase'

export const ForgotPassword = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({
    resolver: yupResolver(forgotPasswordSchema),
  })
  const {goBack, navigate} = useNavigation()

  const handleForgotPassword = async (form: Partial<SignUpForm>) => {
    try {
      const data = {
        email: form.email,
      }
      await UserService.postForgotPassword(data)
      Alert.alert('Email enviado', 'Você receberá um email com as instruções para redefinição da senha.')
      navigate('ResetPassword')
    } catch (error) {
      Alert.alert('Erro no envio de email', 'Ocorreu um erro ao enviar o email, tente novamente.')
    }
  }

  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={avoidingViewBehavior}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Esqueci minha senha</Title>
            <Input
              name='email'
              placeholder='Email'
              control={control}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              error={errors.email && errors.email.message}
            />
            <Button title='Enviar email' onPress={handleSubmit(handleForgotPassword)} />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignInButton onPress={() => goBack()}>
        <Icon name='arrow-left' />
        <SignUpTitle>Voltar para login</SignUpTitle>
      </BackToSignInButton>
    </KeyboardAvoidingView>
  )
}
