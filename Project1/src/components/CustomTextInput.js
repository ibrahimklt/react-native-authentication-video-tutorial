import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{props.title}</Text>
       <TextInput
          secureTextEntry={props.isSecureText}
          placeholder={props.handlePlaceholder}
          style={styles.textInputStyle}
          onChangeText={props.handleonChangeText}
          value={props.handleValue}
        />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer:{
        width:'80%',
        //borderWidth:2
      },
      inputBoxText:{
        color:'white',
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:17,
        marginBottom:-3
      },
      textInputStyle: {
        borderBottomWidth:0.5,
        borderColor:'white',
        width:'100%',
        height:50,
        borderRadius:10,
        marginVertical:5,
        textAlign:'center',
        fontWeight:'bold',
        color:'white'
      },
})