import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import styled from 'styled-components/native'
import { colors } from '../colors'

import {InputProps} from './types'
import SmallText from '../Text/SmallText'
const {black, purple} = colors


const InputWrapper = styled.View`
  width: 100%;
  margin-bottom:15px;
  position: relative;
  
`

const LeftIcon = styled.View`
  position:absolute;
  z-index:1;
  top: 25%;
  left: 15px;
`

const InputField = styled.TextInput`
  padding:15px 8px;
  border-radius:15px;
  background-color: ${colors.grayLight};
  font-size: 15px;
  font-family: 'inter-semiBold';
  padding-left:60px;
  width:100%;

`



export default function StyledInput({icon, placeholder, ...props}:InputProps) {
  return (
    <InputWrapper >
    <LeftIcon>
    <MaterialCommunityIcons name={icon} color={colors.gray} size={25}/>
    </LeftIcon>
    <InputField placeholder={placeholder}/>

    

    </InputWrapper>
  )
}
