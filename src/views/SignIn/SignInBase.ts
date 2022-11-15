import {RFValue} from 'react-native-responsive-fontsize'
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
export const Logo = styled.Image`
  width: ${RFValue(166)}px;
  height: ${RFValue(166)}px;
  margin-bottom: ${RFValue(64)}px;
`
