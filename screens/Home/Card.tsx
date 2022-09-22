import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../components/colors'
import BiggerText from '../../components/Text/BiggerText'
import RegularlText from '../../components/Text/RegularText'
import { AvatarProps, CurrentCard } from './types'

const CardSyled = styled.View`
   background-color: ${colors.darkPurple};
   width: 100%;
   height:140px;
   border-radius:50px;
   justify-content:center;
   align-items: center;
   flex-direction: row;
   margin: 20px 0;
   position: relative;
   overflow: hidden;
   
   
   
`
const SmallCircle = styled.View`
    width: 80px;
    height: 80px;
    background-color: #6E34B8;
    z-index: 1;
    position: absolute;
    border-radius: 100;
    left:10;
    top: -40

`

const BiggerCircle = styled.View`
width: 150px;
    height: 150px;
    border: 5px solid #9e69e4;
   
    position: absolute;
    border-radius: 100;
    right:-50;
    bottom: -50;

`



export default function Card(props:CurrentCard) {
   
  return (
    <CardSyled >
     <SmallCircle/>
    <View style={{alignItems: 'center'}}>
    <RegularlText>Balance:</RegularlText>
    <BiggerText style={{color: colors.white}}>${props.balance}.00</BiggerText>
    </View>

    <View style={{alignItems: 'center', marginLeft: 15, zIndex: 1}}>
    <RegularlText>Card:</RegularlText>
    <BiggerText style={{color: colors.white}}>{props.cardType}</BiggerText>
    </View>

    <BiggerCircle/>
     
      
    </CardSyled>
  )
}
