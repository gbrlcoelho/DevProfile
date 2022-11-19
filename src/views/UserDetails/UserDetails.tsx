import {useNavigation, useRoute} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {Alert} from 'react-native'
import avatarDefault from '../../assets/avatar01.jpeg'
import {useAuth} from '../../hooks/useAuth'
import {IUserResponse} from '../../services/api'
import UserService from '../../services/microservices/UserService'
import {
  Container,
  Content,
  ContentTitle,
  DataText,
  GoBackButton,
  Header,
  HeaderTitle,
  Icon,
  Title,
  UserAvatar,
  UserDetail,
  UserDetailAvatar,
} from './UserDetailsBase'
import {ScreenRouteProp} from './UserDetailsProps'

export const UserDetails = () => {
  const route = useRoute<ScreenRouteProp>()
  const {authData} = useAuth()
  const {goBack} = useNavigation()
  const [userDetails, setUserDetails] = useState<IUserResponse>({} as IUserResponse)
  const userId = route.params.id
  const userAvatar = authData?.user.avatar_url ? {uri: authData.user.avatar_url} : avatarDefault
  const userDetailAvatar = userDetails.avatar_url ? {uri: userDetails.avatar_url} : avatarDefault

  const findUserDetails = async () => {
    try {
      const response = await UserService.getUserDetails(userId)
      setUserDetails(response.data)
    } catch (error) {
      Alert.alert('Error ao buscar', 'Não foi possível buscar os detalhes do usuário')
    }
  }

  useEffect(() => {
    findUserDetails()
  }, [userId])

  return (
    <Container>
      <Header>
        <GoBackButton onPress={goBack}>
          <Icon name='chevron-left' />
        </GoBackButton>
        <HeaderTitle>Usuários</HeaderTitle>
        <UserAvatar source={userAvatar} />
      </Header>
      <Content>
        <ContentTitle>Detalhes do Usuário</ContentTitle>
        <UserDetailAvatar source={userDetailAvatar} />
        <UserDetail>
          <Title>NAME</Title>
          <DataText>{userDetails.name}</DataText>
        </UserDetail>
        <UserDetail>
          <Title>EMAIL</Title>
          <DataText>{userDetails.email}</DataText>
        </UserDetail>
      </Content>
    </Container>
  )
}
