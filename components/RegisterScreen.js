import { StyleSheet, Button,TextInput, View,Keyboard, KeyboardAvoidingView,Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, authentication } from '../App'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { FontAwesome5, } from "@expo/vector-icons"

const RegisterScreen = ({ navigation }) => {
  
  
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home")
      }
    })
    return unsubscribe
  }, [])

 
  const loginUser = () => {
     signInWithEmailAndPassword(authentication, email,Password)
        .then((re) => {
       setIsSignedIn(true)
     }) 
    .catch(error =>alert(error.message))
  }

  
  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <KeyboardAvoidingView
      style={styles.container}
      
    >
      
      
        
         <FontAwesome5 name="fire" size={150} color="#ff5864" />
      
       
       
      <View style={styles.inputContainer}>
        
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
        </View>
       
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={loginUser}
          style={styles.button}
          
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',alignItems:'center',justifyContent:'center', marginTop:40}}>
          <Text> Dont have an account?</Text>
          <TouchableOpacity  onPress={()=>navigation.navigate("Account")}>
            <Text style={{color: "blue",fontWeight: "700",fontSize:16,paddingLeft:5}}>sign up</Text>
          </TouchableOpacity>
       </View>
        
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
    alignItems:"center",
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