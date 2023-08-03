import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Modal, Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import {auth,db}  from '../firebase';
import { userValidate } from '../helpers/userValidate'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value:"", error: '' })
  const [password, setPassword] = useState({ value:"", error: '' })
  const [user,setUser] = useState(null);

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    //const ERROR = userValidate(email.value)
    const passwordError = passwordValidator(password.value)
    if ( passwordError || emailError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    else{
      await signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
        navigation.replace('Dashboard')
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
         
        }
        
    //LOGIN();
  }


  //   const LOGIN = () => {
      
  //     console.log("working");
  //     try{
  //   firebase.auth()
  //   .signInWithEmailAndPassword(email.value,password.value)
  //   .then(userCredentials =>{
  //      setUser(userCredentials.user);
  //   }).catch(error => alert(error.message))
  // } catch(error){
  //   alert(error);
  // }
  

  //     if(user){
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: 'Dashboard' }],
  //     })
  //   }
  //   }

  // const [isSelected, setSelection] = useState(false);
  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      { <Header>Welcome back</Header> }
      <View style={styles.checkboxContainer}>
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
        {/* <Text style={styles.label}>ARE YOU ADMIN?</Text> */}
      </View>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="default"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
})