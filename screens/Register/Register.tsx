import React from 'react'
import { View } from 'react-native'

import RegularButton from '../../components/buttons/RegularButton'
import { colors } from '../../components/colors'
import MainContainer from '../../components/container/MainContainer'
import StyledInput from '../../components/inputs/StyledInput'

import BiggerText from '../../components/Text/BiggerText'
import SmallText from '../../components/Text/SmallText'
import { FacebookButton, GoogleButton } from '../Login/socialMedias'

type Input = {
  placeholder: string,
  icon: any,
  index: number

}

const inputs = [
  {placeholder: 'Username', icon: 'account-outline', index: 1},
  {placeholder: 'Email', icon: 'email-outline', index: 2},
  {placeholder: 'Password', icon: 'key-outline', index: 3},
]

export default function Register() {
  return (
   <MainContainer>
    
    <BiggerText style={{color:colors.purple, textAlign:'center', fontSize: 20}}>Immediately feel the 
    ease of transacting just by registering
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
  You have account? <SmallText style={{color:'#81C2FF'}}>Login</SmallText>
    </SmallText>
 
   </MainContainer>
  )
}
