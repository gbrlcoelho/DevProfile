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
import resetPasswordSchema from '../../validations/ResetPasswordSchema'
import {Icon, Logo, SignUpButton, SignUpTitle} from '../SignIn/SignInBase'
import {SignUpForm} from '../SignUp/SignUpProps'
import {Content, Title} from './ResetPasswordBase'

export const ResetPassword = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({
    resolver: yupResolver(resetPasswordSchema),
  })
  const {goBack, navigate} = useNavigation()

  const handleResetPassword = async (form: SignUpForm) => {
    try {
      const data = {
        token: form.token,
        password: form.password,
        passwordConfirmation: form.passwordConfirmation,
      }
      await UserService.postResetPassword(data)
      Alert.alert('Senha redefinida', 'A senha foi redefinida com sucesso. Efetue login para acessar')
      navigate('SignIn')
    } catch (error) {
      Alert.alert('Erro ao redefinir senha', 'Tente novamente')
    }
  }

  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={avoidingViewBehavior}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Redefinir a senha</Title>

            <Input
              name='token'
              placeholder='Código'
              control={control}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              error={errors.token && errors.token.message}
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
            <Input
              name='passwordConfirmation'
              placeholder='Confirmar senha'
              control={control}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              error={errors.passwordConfirmation && errors.passwordConfirmation.message}
            />
            <Button title='Redefinir senha' onPress={handleSubmit(handleResetPassword)} />
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
