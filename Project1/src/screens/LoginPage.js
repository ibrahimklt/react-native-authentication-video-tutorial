import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { Loading, CustomTextInput,CustomButton } from '../components'
import { useSelector, useDispatch } from 'react-redux';
import { setEmail,setPassword,setIsloading,setLogin } from '../../redux/userSlice';

const LoginPage = ({navigation}) => {

  
  //user slice içerisindeki verilerin okunması
  const {email,password,isLoading} = useSelector((state)=>state.user)

  //useSlice içerisindeki reducur yapılarını kullanma veya veri gönderme
  const dispatch =useDispatch()


  return (
   <View style={styles.container}>

     <Text style={styles.welcomestyle}>Welcome </Text>

    <Image 
    source={require('../../assets/images/padlock.png')}
    style={styles.image}/>

    <CustomTextInput
        title='Email'
        isSecureText={false}
        handleonChangeText={(text)=>dispatch(setEmail(text))}
        handleValue={email}
        handlePlaceholder='Enter Your Email'
      />

    <CustomTextInput
        title='Password'
        isSecureText={true}
        handleonChangeText={(password)=>dispatch(setPassword(password))}
        handleValue={password}
        handlePlaceholder='Enter Your Password'
      />

    <CustomButton
    buttonText="Login"
    setWidth='80%'
    handleOnPress={()=>dispatch(setLogin())}
    buttonColor='blue'
    pressedButtonColor='gray'
    />
    <CustomButton
    buttonText="Sign Up"
    setWidth='30%'
    handleOnPress={()=> navigation.navigate('Signup')}
    buttonColor='gray'
    pressedButtonColor='lightgray'
    />

    {isLoading? <Loading  changeIsLoading={()=>dispatch(setIsloading(false))}/>:null}

   </View>
  );
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    width:'100%',
    height:'100%',
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width:'80%',
  }
  ,
  image:{
    width:200,
    height:200,
    marginBottom:-5,
  },
  welcomestyle:{
    fontWeight:'bold',
    fontSize:35,
    marginBottom:1,
    color:'white'
  },
  signupButton:{
    width:'20%',
    height:'5%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    margin:5,
    marginTop:30
  },
});