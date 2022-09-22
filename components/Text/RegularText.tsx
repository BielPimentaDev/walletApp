import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../colors'

import {TextProps} from './types'
const {grayLight, black} = colors


const StyledText = styled.Text`
    font-size: 14px;
    font-family: 'inter-semiBold';
    color: ${colors.white}
    
`


export default function RegularlText(props:TextProps) {
  return (
    <StyledText style={props.style}>{props.children}</StyledText>
  )
}
