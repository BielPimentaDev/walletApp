import React from 'react'
import styled from 'styled-components/native'
import { colors } from '../../components/colors'
import MainContainer from '../../components/container/MainContainer'
import BiggerText from '../../components/Text/BiggerText'
import RegularlText from '../../components/Text/RegularText'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { icons } from 'react-icons'

const SettingsList = styled.View`
    width:100%;
   
    margin-top: 40px;
`

const SettingsItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom:25px;
`

const SettingsView = styled.View`
    flex-direction: row;
    align-items: center;

`

const Icon = styled.View`
 box-shadow: 10px 5px 5px black;
 background-color: white;

`
const settingsGroup = [
    {name: 'Profile', icon: <MaterialIcons name="person-outline" size={30} color="black" />},
    {name: 'Notifications', icon: <Ionicons name="md-notifications-outline" size={30} color="black" />},
    {name: 'Your Wallet', icon: <Ionicons name="md-wallet-outline" size={30} color="black" />},
    {name: 'Login Settings', icon: <Ionicons name="key-outline" size={30} color="black" />},
    {name: 'Service Center', icon: <Feather name="phone-call" size={30} color="black" />},
]


export default function Settings() {
    
  return (
    <MainContainer>
        <BiggerText>Settings</BiggerText>

        <SettingsList>
            {
                settingsGroup.map((item, index) => {
                    return(
                        <SettingsItem key={index}>

                <SettingsView>

                    <Icon
                    style={{
                        shadowOffset:{  width: 10,  height: 10,  },
                        shadowColor: 'black',
                        shadowOpacity: 1.0,
                        elevation:5,
                        borderRadius: 50,
                        padding:5,
                        marginRight: 25
                    }}
                    
                    >
                        
                            {item.icon}
                        
                    </Icon>

                    <RegularlText  style={{color:colors.black}}>Profil</RegularlText>
                </SettingsView>
                
                
                <FontAwesome name="caret-right" size={24} color="black" />
            </SettingsItem>

                    )
                })
            }
            

        </SettingsList>

        <View style={{marginTop:55}}>
            <AntDesign name="logout" size={50} color={colors.purple} />
            <RegularlText style={{color: colors.purple, marginTop:25}}>Log Out</RegularlText>
        </View>

    </MainContainer>
    
  )
}
