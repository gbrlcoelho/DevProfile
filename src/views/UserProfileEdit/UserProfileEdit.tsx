import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {Alert, KeyboardAvoidingView, ScrollView} from 'react-native'
import avatarDefault from '../../assets/avatar01.jpeg'
import {Button} from '../../components/Button/Button'
import {Input} from '../../components/Input/Input'
import {useAuth} from '../../hooks/useAuth'
import UserService from '../../services/microservices/UserService'
import {avoidingViewBehavior} from '../../utils/avoidingViewBehavior'
import userProfileEditSchema from '../../validations/UserProfileEditSchema'
import {IFormInput} from '../SignIn/SignInProps'
import {GoBackButton, Header, HeaderTitle, Icon, UserAvatar} from '../UserDetails/UserDetailsBase'
import {Container, Content, Title} from './UserProfileEditBase'

export const UserProfileEdit = () => {
  const {authData, updateUser} = useAuth()
  const {goBack} = useNavigation()
  const userAvatar = authData?.user.avatar_url ? {uri: authData.user.avatar_url} : avatarDefault
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({
    resolver: yupResolver(userProfileEditSchema),
    defaultValues: {
      name: authData!.user.name,
      email: authData!.user.email,
    },
  })

  const handleProfileEdit = async (form: IFormInput) => {
    const data = {
      name: form.name,
      email: form.email,
    }
    try {
      const response = await UserService.putUserProfile(data)
      updateUser(response.data)
      Alert.alert('Perfil atualizado', 'Os dados do seu perfil foram atualizados.')
      goBack()
    } catch (error) {
      Alert.alert('Erro ao atualizar', 'Ocorreu um erro ao atualizar o perfil. Tente novamente.')
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
            <Title>Editar dados do perfil</Title>
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              control={control}
              name='name'
              placeholder='Nome completo'
              error={errors.name && errors.name.message}
            />
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              control={control}
              name='email'
              placeholder='Email'
              keyboardType='email-address'
              error={errors.email && errors.email.message}
            />

            <Button
              title='Salvar alterações'
              onPress={handleSubmit(handleProfileEdit)}
              disabled={!!errors.name || !!errors.email}
            />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
