import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {Alert, KeyboardAvoidingView, ScrollView} from 'react-native'
import avatarDefault from '../../assets/avatar01.jpeg'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {Container} from '../../global/styles/genericStyles'
import {useAuth} from '../../hooks/useAuth'
import UserService from '../../services/microservices/UserService'
import {avoidingViewBehavior} from '../../utils/avoidingViewBehavior'
import userProfilePasswordSchema from '../../validations/UserProfilePasswordSchema'
import {IFormInput} from '../SignIn/SignInProps'
import {GoBackButton, Header, HeaderTitle, Icon, UserAvatar} from '../UserDetails/UserDetailsBase'
import {Content, Title} from './UserProfilePasswordBase'

export const UserProfilePassword = () => {
  const {authData, updateUser} = useAuth()
  const {goBack} = useNavigation()
  const userAvatar = authData?.user.avatar_url ? {uri: authData.user.avatar_url} : avatarDefault
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({
    resolver: yupResolver(userProfilePasswordSchema),
  })

  const handleUpdatePassword = async (form: IFormInput) => {
    const data = {
      name: authData!.user.name,
      email: authData!.user.email,
      oldPassword: form.oldPassword,
      password: form.password,
      passwordConfirmation: form.passwordConfirmation,
    }
    try {
      const response = await UserService.putResetPassword(data)
      updateUser(response.data)
      Alert.alert('Senha atualiza', 'Sua senha foi atualizada.')
      goBack()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao atualizar senha', 'Ocorreu um erro ao atualizar sua senha. Tente novamente.')
    }
  }

  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={avoidingViewBehavior}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}}>
        <Container>
          <Header>
            <GoBackButton onPress={goBack}>
              <Icon name='chevron-left' />
            </GoBackButton>
            <HeaderTitle>Seu perfil</HeaderTitle>
            <UserAvatar source={userAvatar} />
          </Header>
          <Content>
            <Title>Alterar senha</Title>
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              control={control}
              name='oldPassword'
              placeholder='Senha atual'
              error={errors.oldPassword && errors.oldPassword.message}
              secureTextEntry
            />
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              control={control}
              name='password'
              placeholder='Nova senha'
              error={errors.password && errors.password.message}
              secureTextEntry
            />
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              control={control}
              name='passwordConfirmation'
              placeholder='Confirmação de senha'
              error={errors.passwordConfirmation && errors.passwordConfirmation.message}
              secureTextEntry
            />

            <Button
              title='Salvar alterações'
              onPress={handleSubmit(handleUpdatePassword)}
              disabled={!!errors.passwordConfirmation || !!errors.password || !!errors.oldPassword}
            />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
