import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'


const Loading = (props) => {
   
  return (
    <View style={styles.container}>
        <Pressable 
        onPress={()=>props.changeIsLoading()}
        style={[{},styles.closeButtonContainer]}>
        <Text style={styles.closeButton}>X</Text>
        </Pressable>
        <ActivityIndicator size={'large'} color={'green'}/>
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'tomato',
        alignItems:'center',
        justifyContent:'center',
    },
    loginText:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        marginTop:20,
        marginLeft:10
    },
    closeButtonContainer:{
        width:50,
        height:50,
        backgroundColor:'black',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:50,
        right:15
    },
    closeButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    },
    
})