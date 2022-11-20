import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {KeyboardAvoidingView, ScrollView, View} from 'react-native'
import {useTheme} from 'styled-components'
import logo from '../../assets/logo.png'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {Container} from '../../global/styles/genericStyles'
import {useAuth} from '../../hooks/useAuth'
import {avoidingViewBehavior} from '../../utils/avoidingViewBehavior'
import signInSchema from '../../validations/SignInSchema'
import {Content, Icon, Logo, SignUpButton, SignUpTitle, Title} from './SignInBase'
import {IFormInput} from './SignInProps'

export const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({
    resolver: yupResolver(signInSchema),
  })
  const theme = useTheme()
  const {signIn} = useAuth()
  const {navigate} = useNavigation()

  const handleSignIn = (form: IFormInput) => {
    const data = {
      email: form.email,
      password: form.password,
    }
    signIn(data)
  }

  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={avoidingViewBehavior}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
        <Container>
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Faça seu login</Title>
            </View>
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
              secureTextEntry={true}
              error={errors.password && errors.password.message}
            />
            <Button title='Entrar' onPress={handleSubmit(handleSignIn)} />
            <Button
              title='Esqueci minha senha'
              backgroundColor={theme.colors.dark}
              titleColor={theme.colors.gray500}
              onPress={() => navigate('ForgotPassword')}
            />
          </Content>
        </Container>
      </ScrollView>
      <SignUpButton onPress={() => navigate('SignUp')}>
        <Icon name='log-in' />
        <SignUpTitle>Criar uma conta</SignUpTitle>
      </SignUpButton>
    </KeyboardAvoidingView>
  )
}
