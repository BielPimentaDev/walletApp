import React from 'react'
import { Image } from 'react-native'
import IconButton from '../../components/buttons/IconButton'
import { colors } from '../../components/colors'
import RegularButton from '../../components/buttons/RegularButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export  function GoogleButton() {
  return (
    <IconButton
      textStyle={{color:colors.black, fontFamily: 'inter-semiBold'}}
      icon={<MaterialCommunityIcons name="google-plus" size={24} color="red" />}
      
       style={{
        backgroundColor:colors.white,
        width:140,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        marginRight: 15
    
    }}
      
       onPress={()=> 'register'}>
       Google
       </IconButton>
  )
}
export  function FacebookButton() {
  return (
    <IconButton
    icon={<MaterialCommunityIcons name="facebook" size={24} color="white" />}
    textStyle={{
        color:colors.white,
        fontFamily: 'inter-semiBold',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
    
    }}
     style={{backgroundColor:'#4368C7', width:150}}
     onPress={()=> 'register'}>
     Facebook
     </IconButton>
  )
}
