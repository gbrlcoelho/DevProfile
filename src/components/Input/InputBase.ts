import {TextInput} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const InputControl = styled(TextInput)`
  width: 100%;
  padding: 18px 16px;
  background-color: ${({theme}) => theme.colors.gray800};
  color: ${({theme}) => theme.colors.light};
  border-radius: 5px;
  margin-bottom: 16px;
  font-size: ${RFValue(14)}px;
`

export const ErrorText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.danger};
  margin-bottom: 16px;
`
