import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../colors'

import {TextProps} from './types'
const {purple} = colors


const StyledText = styled.Text`
    font-size: 11px;
    color:  ${colors.grayExtraLight};
    font-family: 'inter-semiBold';
`


export default function SmallText(props:TextProps) {
  return (
    <StyledText style={props.style}>{props.children}</StyledText>
  )
}
