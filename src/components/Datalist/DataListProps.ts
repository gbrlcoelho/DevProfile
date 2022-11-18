import {IUserResponse} from '../../services/api'

export interface DataListProps {
  data: IUserResponse[]
  navigateToUserDetails: (id: string) => void
}
