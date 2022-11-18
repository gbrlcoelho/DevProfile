import {FlatList, FlatListProps} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import {IUserResponse} from '../../services/api'

export const UserList = styled(FlatList as new (props: FlatListProps<IUserResponse>) => FlatList<IUserResponse>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false,
})``

export const UserListEmpty = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.gray500};
`

export const UserListHeader = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: ${RFValue(8)}px;
`
