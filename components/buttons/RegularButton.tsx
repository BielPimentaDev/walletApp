import React from 'react'
import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components/native'
import { colors } from '../colors'

import {ButtonProps} from './types'
import RegularlText from '../Text/RegularText';



const StyledButton = styled.TouchableOpacity`
    width:60%;
    height:50px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding:0px 20px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    
 
`


export default function RegularButton(props:ButtonProps) {
  return (
    <StyledButton onPress={props.onPress} style={props.style}>
    <RegularlText style={props.textStyle}>
    {props.children}
    </RegularlText>
    </StyledButton>
   
  )
}
