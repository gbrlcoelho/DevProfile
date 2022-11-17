import React from 'react'
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
          <LogoutButton onPress={signOut}>
            <Icon name='power' />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  )
}
