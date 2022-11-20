import {useNavigation} from '@react-navigation/native'
import React from 'react'
import avatarDefault from '../../assets/avatar01.jpeg'
import {Button} from '../../components/Button/Button'
import {Container} from '../../global/styles/genericStyles'
import {useAuth} from '../../hooks/useAuth'
import {
  Content,
  DataText,
  GoBackButton,
  Header,
  HeaderTitle,
  HeaderTop,
  Icon,
  PhotoButton,
  PhotoContainer,
  Title,
  UserAvatar,
  UserDetail,
} from './UserProfileBase'

export const UserProfile = () => {
  const {authData} = useAuth()
  const {goBack, navigate} = useNavigation()
  const userAvatar = authData?.user.avatar_url ? {uri: authData.user.avatar_url} : avatarDefault

  return (
    <Container>
      <Header>
        <HeaderTop>
          <GoBackButton onPress={goBack}>
            <Icon name='chevron-left' />
          </GoBackButton>
          <HeaderTitle>Seu Perfil</HeaderTitle>
        </HeaderTop>
        <PhotoContainer>
          <UserAvatar source={userAvatar} />
          <PhotoButton>
            <Icon name='camera' />
          </PhotoButton>
        </PhotoContainer>
      </Header>

      <Content>
        <UserDetail>
          <Title>NAME</Title>
          <DataText>{authData!.user.name}</DataText>
        </UserDetail>
        <UserDetail>
          <Title>EMAIL</Title>
          <DataText>{authData!.user.email}</DataText>
        </UserDetail>
        <Button title='Editar Dados' onPress={() => navigate('UserProfileEdit')} />
        <Button title='Trocar Senha' onPress={() => navigate('UserProfilePassword')} />
      </Content>
    </Container>
  )
}
