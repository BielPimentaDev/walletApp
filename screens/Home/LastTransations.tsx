import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../components/colors'
import BiggerText from '../../components/Text/BiggerText'
import RegularlText from '../../components/Text/RegularText'
import SmallText from '../../components/Text/SmallText'

const transactionsList = [
    {name: 'Netflix', image: '../../assets/imgs/netflix.png', description: 'month', price: '15'},
    {name: 'Paypal', image: '../../assets/imgs/paypal.png', description: 'month', price: '15'},
    {name: 'Last One', image: '../../assets/imgs/wallet.png', description: 'month', price: '15'},
    {name: 'Try', image: '../../assets/imgs/netflix.png', description: 'month', price: '15'},
    {name: 'Netflix', image: '../../assets/imgs/paypal.png', description: 'month', price: '15'},
]

const TopSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
`

const TransactionsSection = styled.ScrollView`
width:100%;
height: 70px;

`
const TransactionsView = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
   align-items: center;
    width:100%;
    padding:5px;

`

const Icon = styled.View`
    background-color: black;
    border-radius: 100px;
    padding: 10px;
    margin-right:20px;

`


export default function LastTransations() {
  return (
    <>
    <TopSection>
        <BiggerText>
            Last transations
        </BiggerText>
        <RegularlText style={{color:colors.purple}}>
            View All
        </RegularlText>
    </TopSection>
    <TransactionsSection showsVerticalScrollIndicator={false}>
        {transactionsList.map((transaction: any, index:number)=>{
            
            return(
                <TransactionsView key={index}>                
                <Icon>
                <Image source={(require('../../assets/imgs/netflix.png'))}/>
                </Icon>
                <RegularlText style={{color: 'black'}}>{transaction.name}</RegularlText>
                
                <RegularlText style={{color: 'black', marginLeft:'auto'}}>${transaction.price}.00</RegularlText>
                    </TransactionsView>
            )
        })}
    </TransactionsSection>
    </>
  )
}
