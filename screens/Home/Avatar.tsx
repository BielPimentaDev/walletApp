import React from 'react'
import styled from 'styled-components/native'
import { colors } from '../../components/colors'
import { AvatarProps } from './types'

const AvatarStyle = styled.Image`
    z-index:1;
    border-radius:100px;
    width: 60px;
    height: 60px;
    background-color: ${colors.black};

`

export default function Avatar({url}:AvatarProps) {
  return (
    <AvatarStyle >

    </AvatarStyle>
  )
}
