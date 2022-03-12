import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { FontAwesome5, } from "@expo/vector-icons"
import { auth, authentication } from '../App'
import { FontAwesome } from "@expo/vector-icons"
import { doc, collection, onSnapshot, user } from "@firebase/firestore"
import { db, } from "../firebase"
import SwipesScreen from './SwipesScreen';


const HomeScreen = ({ navigation }) => {
   const authUser = authentication.currentUser?.email

  useLayoutEffect(() => {
     onSnapshot(doc(db, "users", authUser ), (snapshot) => {
      if (!snapshot.exists()) {
        navigation.navigate("Modal")
      }
     })
    
    
  }, [])



  const handleSignOut = () => {
  authentication
    .signOut()
    .then(() => {
    navigation.replace("Front")
    })
  .catch(error => alert(error.message))
}
  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSignOut}>
      <FontAwesome5 name="user" size={30} color="#ff4500" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Modal")}>
       <FontAwesome5 name="fire" size={40} color="#ff5864" />
       </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
      <FontAwesome5 name="comments" size={30} color="#ff4500" />
      </TouchableOpacity>
      
      </View>
      <SwipesScreen/>
      
      
      
    </View>
    
    
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop:35,
  },

  
  
});
