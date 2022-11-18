import {RFValue} from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.dark};
`
export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.light};
  margin-bottom: 24px;
`
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.primaryLight};
  bottom: 10px;
`
export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.colors.gray800};
  border-top-width: 1px;
  border-color: ${({theme}) => theme.colors.black};
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const SignUpTitle = styled(Title)`
  color: ${({theme}) => theme.colors.primaryLight};
  margin-left: 16px;
`
export const Logo = styled.Image`
  width: ${RFValue(166)}px;
  height: ${RFValue(166)}px;
  margin-bottom: ${RFValue(64)}px;
`
