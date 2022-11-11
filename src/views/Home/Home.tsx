import React from 'react'
import avatarDefault from '../../assets/avatar01.jpeg'
import {
  Container,
  Header,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './HomeBase'

export const Home = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={avatarDefault} />
              <UserInfoDetail>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Gabriel</UserName>
              </UserInfoDetail>
            </UserAvatarButton>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  )
}
