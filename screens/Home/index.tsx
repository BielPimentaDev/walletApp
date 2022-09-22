import React from 'react'
import styled from 'styled-components/native'
import { colors } from '../../components/colors'
import MainContainer from '../../components/container/MainContainer'
import BiggerText from '../../components/Text/BiggerText'
import RegularlText from '../../components/Text/RegularText'
import SmallText from '../../components/Text/SmallText'
import Actions from './Actions'
import Avatar from './Avatar'
import Card from './Card'
import LastTransations from './LastTransations'
import { cardType } from './types'

const TopSide = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const TopSideText = styled.View`
    flex-direction: column;
    align-items: flex-start;

`

export default function Home() {
  return (
    <MainContainer >       
     
        <TopSide>
        <TopSideText>
        
        <BiggerText>
        Hello, Alex!
        </BiggerText>
        
        <RegularlText style={{color: colors.grayExtraLight}}>Active</RegularlText>
        
        </TopSideText>
        
        <Avatar url='teste'/>
        </TopSide>

      <Card balance='150' cardType={cardType.Nubank}/>

      <Actions/>

      <LastTransations/>

      

        
    </MainContainer>
  )
}
