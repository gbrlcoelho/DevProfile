import React from 'react'
import avatarDefault from '../../../../assets/avatar01.jpeg'
import {Container, TextData, Title, UserAvatar, UserDetail, UserNameDetail} from './UserBase'
import {UserListProps} from './UserProps'

export const User = ({data, onPress}: UserListProps) => {
  const userAvatar = data.avatar_url ? {uri: data.avatar_url} : avatarDefault

  return (
    <Container onPress={onPress}>
      <UserDetail>
        <UserNameDetail>
          <Title>NAME</Title>
          <TextData>{data.name}</TextData>
        </UserNameDetail>
        <UserNameDetail>
          <Title>EMAIL</Title>
          <TextData>{data.email}</TextData>
        </UserNameDetail>
      </UserDetail>
      <UserAvatar source={userAvatar} />
    </Container>
  )
}
