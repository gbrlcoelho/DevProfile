import {IUserResponse} from '../../../../services/api'

export interface UserListProps {
  data: IUserResponse
  onPress: () => void
}
