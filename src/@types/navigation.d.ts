import {IUserResponse} from '../services/api'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined
      SignUp: undefined
      ForgotPassword: undefined
      ResetPassword: undefined
      UserDetails: Partial<IUserResponse> | undefined
      UserProfile: Partial<IUserResponse> | undefined
      UserProfileEdit: undefined
      UserProfilePassword: undefined
    }
  }
}
