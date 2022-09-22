import React from 'react'
import { View } from 'react-native'

import RegularButton from '../../components/buttons/RegularButton'
import { colors } from '../../components/colors'
import MainContainer from '../../components/container/MainContainer'
import StyledInput from '../../components/inputs/StyledInput'

import BiggerText from '../../components/Text/BiggerText'
import SmallText from '../../components/Text/SmallText'
import { FacebookButton, GoogleButton } from './socialMedias'

type Input = {
  placeholder: string,
  icon: any,
  index: number

}

const inputs = [
  {placeholder: 'Username', icon: 'account-outline', index: 1},
  
  {placeholder: 'Password', icon: 'key-outline', index: 2},
]

export default function LogIn() {
  return (
   <MainContainer>
    
    <BiggerText style={{color:colors.purple, textAlign:'center', width:'70%', fontSize: 22}}>
    Welcome back 
  to Mabank Wallet
    </BiggerText>
    <SmallText style={{color:colors.grayExtraLight, marginVertical: 20, marginTop: 50}}>Sign up with</SmallText>
    <View style={{flexDirection:'row', marginBottom: 30}}>
     <GoogleButton/>
     <FacebookButton/>
    </View>

    <View style={{width:'100%'}}>
    {
      inputs.map((input: Input)=> <StyledInput key={input.index} placeholder={input.placeholder} icon={input.icon} />)
    }
    </View>

    <RegularButton style={{ backgroundColor:colors.purple, marginVertical: 15}} textStyle={{color:colors.white, fontFamily:'inter-semiBold'}} onPress={()=> console.log('pressed')}>
        Register
    </RegularButton>

    <SmallText >
    Don't have an account yet? <SmallText style={{color:'#81C2FF'}}>Login</SmallText>
    </SmallText>
 
   </MainContainer>
  )
}
