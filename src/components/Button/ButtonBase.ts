import {TouchableOpacity} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import {StyledButtonProps, StyledTitleProps} from './ButtonProps'

export const Container = styled(TouchableOpacity)<StyledButtonProps>`
  width: 100%;
  align-items: center;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : props.theme.colors.primary)};
  border-radius: 5px;
  padding: 18px;
  margin-top: ${RFValue(16)}px;
`

export const Title = styled.Text<StyledTitleProps>`
  font-size: ${RFValue(14)}px;
  color: ${(props) => (props.titleColor ? props.titleColor : props.theme.colors.dark)};
`
