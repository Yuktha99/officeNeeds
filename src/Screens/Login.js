import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import CustomButton from '../common/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder='Enter Email' style={styles.input}/>
      <TextInput placeholder='Enter Password' style={styles.input}/>
      <CustomButton bg={"#E27800"} title={'Login'} color={"#fff"} onClick={()=>{

      }}/>
      <Text style={styles.loginText} onPress={()=>{navigation.navigate('Signup')}}>Sign Up</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    color: '#000',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 50,
    marginBottom:50
  },
  input:{
    width:'90%',
    height:50,
    borderRadius:10,
    borderWidth:0.5,
    paddingLeft:20,
    alignSelf:'center',
    marginTop:10
  },
  loginText:{
    alignSelf:'center',
    marginTop:20,
    fontSize:18,
    textDecorationLine: 'underline'
  }
});
