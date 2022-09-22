import React from 'react'
import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components/native'
import { colors } from '../colors'

import {ContainerProps} from './types'



const StyledContainer = styled.View`
    flex:1;
    padding:25px;
    padding-top:30px;
    align-items: center;
    justify-content: center;
    background-color:${colors.white};
`


export default function MainContainer(props:ContainerProps) {
  return (
    <StyledContainer style={props.style}>
    <StatusBar style='auto'/>
    
    {props.children}
    
    </StyledContainer>
  )
}
