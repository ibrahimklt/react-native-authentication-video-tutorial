import React ,{useState} from 'react'
import {CustomTextInput, CustomButton,} from '../components'
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'

const SignupPage = ({navigation}) => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.title}>
        <Image 
        style={styles.image}
        source={require('../../assets/images/add-user.png')}/>
        <Text style={styles.signUp}>Sign Up </Text>
      </View>

      <View style={styles.textInputContaniner}>
        <CustomTextInput
          title='Name'
          isSecureText={false} 
          handleonChangeText={setName}
          handleValue={name}
          handlePlaceholder='Enter your Name'
          />

        <CustomTextInput
          title='Email'
          isSecureText={false} 
          handleonChangeText={setEmail}
          handleValue={email}
          handlePlaceholder='Enter your Email'
          />

        <CustomTextInput
          title='Password'
          isSecureText={true} 
          handleonChangeText={setPassword}
          handleValue={password}
          handlePlaceholder='Enter your Password'
          />
      </View>

      <View style={styles.signUpOptions}>
        <CustomButton 
        buttonText='Sign Up'
        setWidth='80%'
        buttonColor='blue'
        pressedButtonColor='lightgray'
        handleOnPress={()=>console.log(name , " ",email, " ",password)}
        />
        <Pressable onPress={()=>navigation.navigate("Login")}>
          <Text style={{fontWeight:'bold', padding:15}}>
            Already have an account? <Text style={{fontSize:17}}>Login</Text>
          </Text>
        </Pressable>
      </View>
    
    </SafeAreaView>
  )
}

export default SignupPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'tomato'
    },
    signUp:{
        fontWeight:'bold',
        fontSize:35,
        marginBottom:1,
        color:'white'
    },
    title:{
      //borderWidth:1,
      flex:2,
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      paddingTop:40,
      
    },
    textInputContaniner:{
      flex:3,
      width:'100%',
      //borderWidth:1,
      alignItems:'center',
      justifyContent:'space-evenly'
    },
    signUpOptions:{
      flex:2,
     // borderWidth:1,
      width:'100%',
      alignItems:'center',
      justifyContent:'space-between'
    },
    image:{
      width:120,
      height:120,
    }
    
})