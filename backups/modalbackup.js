import {setDoc} from "@firebase/firestore"
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { authentication } from '../App'

import { doc,  } from "@firebase/firestore"
import { initializeApp } from "firebase/app";
import {collection, getFirestore, user} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAsLbSTddODVL1cxNoSoLBAkBs1VVgo3kg",
  authDomain: "instagram-pro-7a15a.firebaseapp.com",
  projectId: "instagram-pro-7a15a",
  storageBucket: "instagram-pro-7a15a.appspot.com",
  messagingSenderId: "386425951219",
  appId: "1:386425951219:web:819b88b0e7323aa794f886"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const colRef = collection(db, "users",)



const ModalScreen = (navigation) => {
const authUser=authentication.currentUser?.email
  const [image, setImage] = useState(null)
  const [job, setJob] = useState(null)
  const [age, setAge] = useState(null)
  
  const incompleteFom = !image || !job || !age
  
  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid ), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp()
      
    }).then(() => {
      navigation.navigate("Home")
    }).catch((error) => {
      alert(error.message)
    })
  }
  
  
  return (
    <View style={{flex:1, alignItems:"center",paddingTop:25, backgroundColor:"rgba(90, 90, 90, 0.95)"}}>
      <Image
        style={{paddingTop:70,width:"50%",borderRadius:100, }}
        resizeMode='cover'
        
        source={{ uri: "https://links.papareact.com/2pf" }}
        

      />
      <View  style={{paddingTop:25,borderRadius:100, }}>
        <Text style={{fontSize:17, }}>Email: {authUser}</Text>
      </View>
      
      <Text style={{ paddingTop:30, color: "#ff6347", fontStyle:"italic" }}>
        step 1: The profile pic
      </Text>
      <TextInput
        value={image}
        onChangeText={setImage}
        style={{ alignContent: "center", fontSize: 18, paddingBottom: 2, paddingTop: 15 }}
        placeholder='Enter a profile pic URL' />
      <Text style={{ paddingTop:25, color: "#ff6347", fontStyle:"italic" }}>
        step 2: The job
      </Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        style={{ alignContent: "center", fontSize: 18, paddingBottom: 2, paddingTop: 15 }}
        placeholder='Enter your occupation' />
      <Text style={{ paddingTop:25, color: "#ff6347", fontStyle:"italic" }}>
        step 3: The age
      </Text>
      <TextInput
      value={age}
        onChangeText={setAge}
        maxLength={2}
        keyboardType={"numeric"}
        style={{ alignContent: "center", fontSize: 18, paddingBottom: 2, paddingTop: 15 }}
        placeholder='Enter your age' />
      <View style={{ width: "60%",justifyContent: "center",marginTop: 40,height:150, }}>
        <TouchableOpacity
          disabled={incompleteFom}
          style={{ backgroundColor: "#ff5864", width: "100%", padding: 15, borderRadius: 10, alignItems: "center", }}
        onPress={updateUserProfile}
        >
        <Text style={{color: "white",fontWeight: "700",fontSize:20,}}>Update profile</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default ModalScreen

const styles = StyleSheet.create({})