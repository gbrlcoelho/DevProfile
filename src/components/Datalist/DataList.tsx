import React from 'react'
import {User} from './components/User/UserList'
import {UserList, UserListEmpty, UserListHeader} from './DataListBase'
import {DataListProps} from './DataListProps'

export const DataList = ({data, navigateToUserDetails}: DataListProps) => {
  return (
    <UserList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <User data={item} onPress={navigateToUserDetails} />}
      ListHeaderComponent={<UserListHeader>Usuários</UserListHeader>}
      ListEmptyComponent={<UserListEmpty>Ops! Ainda não há registros.</UserListEmpty>}
    />
  )
}
