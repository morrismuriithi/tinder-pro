import { StyleSheet, Button,TextInput, View, KeyboardAvoidingView,Text, TouchableOpacity,TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { auth, authentication } from '../App'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { FontAwesome5, } from "@expo/vector-icons"

const RegisterScreen = ({ navigation }) => {
  
   const authUser = authentication.currentUser?.email
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Password2, setPassword2] = useState("")
  const [name, setName] = useState("")

  

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home")
      }
    })
    return unsubscribe
  }, [])

  const RegisterUser = () => {

    if (Password == Password2) {
      auth
      createUserWithEmailAndPassword(authentication, email,Password)
        .then((authUser) => {
         
       setIsSignedIn(true)
     }) 
        .catch(error =>alert(error.message))
    } else {
      alert(" your passwords dont match, please try again")
    }
  }
  
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    
    <KeyboardAvoidingView
      style={styles.container}
      
    >
      
        <FontAwesome5 name="fire" size={150} color="#ff5864" />
      
      <View style={styles.inputContainer}>
          <TextInput
            autofocus
          placeholder='Full Name [optional]'
          value={ name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
         
        <TextInput
          placeholder='Email'
          value={ email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
         <TextInput
          placeholder='Password'
          value={Password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
         <TextInput
          placeholder='ConfirmPassword'
          value={Password2}
          onChangeText={text => setPassword2(text)}
          style={{
            backgroundColor: "white", paddingHorizontal: 15,
            paddingVertical: 10, borderRadius: 10, marginTop: 30,
          }}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity
          onPress={RegisterUser}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        
        </View>
          

     
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#f08080"
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop:10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    marginTop: 40,

  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom:60,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth:2.5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize:16,
  },
  buttonOutlineText: {
     color: "#0782F9",
    fontWeight: "700",
    fontSize:16,
  },

})