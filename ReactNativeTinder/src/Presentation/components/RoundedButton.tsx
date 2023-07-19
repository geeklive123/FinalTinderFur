import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'
import { MyColors } from '../theme/AppTheme'


interface Props{
    text:String,
    onPress:()=>void
}
export const RoundedButton = ({text,onPress}:Props) => {
  return (
   <TouchableOpacity
   style={styles.roundedButton}
   onPress={()=>onPress()}
   >
    <Text style={styles.textButton}>{text}</Text>
   </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    roundedButton:{
        width:'100%',
        height:50,
        backgroundColor:MyColors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    textButton:{
        color:'white'
    }


})