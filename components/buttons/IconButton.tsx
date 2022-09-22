import React from 'react'
import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components/native'
import { colors } from '../colors'

import {ButtonProps} from './types'
import RegularlText from '../Text/RegularText';



const StyledButton = styled.TouchableOpacity`
   flex-direction: row;
    height:50px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    
    
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    position:relative;
`
const LeftIcon= styled.View`
  margin-right: 10px

`


export default function IconButton(props:ButtonProps) {
  return (
    <StyledButton onPress={props.onPress} style={props.style}>
    <LeftIcon>{props.icon}</LeftIcon>
    <RegularlText style={props.textStyle}>
    {props.children}
    </RegularlText>
    </StyledButton>
   
  )
}
