import {useNavigation} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {Alert} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import avatarDefault from '../../assets/avatar01.jpeg'
import {DataList} from '../../components/Datalist/DataList'
import {useAuth} from '../../hooks/useAuth'
import {IUserResponse} from '../../services/api'
import UserService from '../../services/microservices/UserService'
import {
  Container,
  Header,
  Icon,
  UserAvatar,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './HomeBase'

export const Home = () => {
  const {navigate} = useNavigation()
  const {authData, signOut} = useAuth()
  const userAvatar = authData?.user.avatar_url ? {uri: authData.user.avatar_url} : avatarDefault
  const [users, setUsers] = useState<IUserResponse[]>([])

  const handleSignOut = () => {
    Alert.alert('Tem certeza?', 'Deseja sair do DevProfile?', [
      {text: 'Cancelar', onPress: () => {}},
      {text: 'Sair', onPress: () => signOut()},
    ])
  }

  const loadUsers = async () => {
    try {
      const response = await UserService.getUsers()
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const navigateToUserDetails = (userId: string) => {
    navigate('UserDetails', {id: userId})
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <TouchableOpacity onPress={() => {}}>
              <UserAvatar source={userAvatar} />
            </TouchableOpacity>
            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{authData?.user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <TouchableOpacity onPress={handleSignOut}>
            <Icon name='power' />
          </TouchableOpacity>
        </UserWrapper>
      </Header>
      <DataList data={users} navigateToUserDetails={(id) => navigateToUserDetails(id)} />
    </Container>
  )
}
