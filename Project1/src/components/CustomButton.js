import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <Pressable 
    onPress={()=>props.handleOnPress()}
    style={({pressed}) => [{
      backgroundColor:pressed ? props.pressedButtonColor : props.buttonColor,
      width:props.setWidth
    },styles.button]  }>
    
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        height: 39,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginTop:10,
        //backgroundColor:'lightblue'
      },
      buttonText:{
        fontWeight:'bold',
        color:'white'
      },
})