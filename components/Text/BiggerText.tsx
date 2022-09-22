import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../colors'

import {TextProps} from './types'
const {black, purple} = colors


const StyledText = styled.Text`
    font-size: 18px;
    color: ${black};
    font-family: 'inter-bold';    
`


export default function BiggerText(props:TextProps) {
  return (
    <StyledText style={props.style}>{props.children}</StyledText>
  )
}
