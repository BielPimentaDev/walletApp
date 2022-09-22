import React from 'react'
import styled from 'styled-components/native'
import SmallText from '../../components/Text/SmallText'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import RegularlText from '../../components/Text/RegularText';
import { colors } from '../../components/colors';
import MainContainer from '../../components/container/MainContainer';
import BiggerText from '../../components/Text/BiggerText';
import { View, Dimensions } from 'react-native';

const widowWidht = Dimensions.get('window').width
const widowHeight = Dimensions.get('window').height


export const ActionsList = styled.ScrollView`
    background-color:'red';
    margin: 5px 0;
   
    

`

export const Action = styled.View`
  align-items: center;
  margin-right:37px
  
`

export const Icon = styled.View`
  padding: 10px;
  align-items: center;
  justify-content:center;
  padding:5px;
  border-radius:100px;
  width: 50px;
  height: 50px;
  box-shadow: 0px 4px 12px ;
  margin-bottom: 10px;

    
`
const iconSize = 35
const actionsGroup = [
 { name: 'Transfer',
  icon: <MaterialIcons name="attach-money" size={iconSize} color="black" />},
 { name: 'Payment',
  icon: <MaterialCommunityIcons name="cloud-upload-outline" size={iconSize} color="black" />},
 { name: 'Payout',
  icon: <MaterialIcons name="attach-money" size={iconSize} color="black" />},
 { name: 'Transfer',
  icon: <MaterialCommunityIcons name="transfer" size={iconSize} color="black" />},
 { name: 'Transfer',
  icon:<MaterialCommunityIcons name="bank-plus" size={iconSize} color="black" />},
]

export default function Settings() {
  return (
    <MainContainer>
    
        
          <BiggerText style={{color:colors.purple, marginRight: 'auto', marginLeft:20}}>Last transactions</BiggerText>
          <RegularlText style={{color:colors.purple, marginLeft: 'auto', marginRight: 20}}>View all</RegularlText>
    

        <ActionsList  horizontal={true} showsHorizontalScrollIndicator={false} >   
        
               
                   {
                     actionsGroup.map((action: any, index:number)=>{        
                       return(
            <Action key={index}>
            <Icon style={{
              backgroundColor: 'white',
              shadowOffset: { width: 10, height: 10 },
              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 5,
           
            }}>
             {action.icon}
                       </Icon>
                       <RegularlText style={{color: colors.purple}}>
              {action.name}
                       </RegularlText>
                   </Action>
            )
                       })
                     }

    </ActionsList>
          </MainContainer>
  )
}
