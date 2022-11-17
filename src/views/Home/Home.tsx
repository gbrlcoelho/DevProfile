import React from 'react'
import {Alert} from 'react-native'
import avatarDefault from '../../assets/avatar01.jpeg'
import {useAuth} from '../../hooks/useAuth'
import {
  Container,
  Header,
  Icon,
  LogoutButton,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './HomeBase'

export const Home = () => {
  const {authData, signOut} = useAuth()
  const userAvatar = authData?.user.avatar_url ? {uri: authData.user.avatar_url} : avatarDefault

  const handleSignOut = () => {
    Alert.alert('Tem certeza?', 'Deseja sair do DevProfile?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      },
    ])
  }

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={userAvatar} />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{authData?.user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <LogoutButton onPress={handleSignOut}>
            <Icon name='power' />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  )
}
