import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/core';
import {loggedInprofile, userSwiped, foto1, foto2} from './HomeScreen';

const MatchScreen = ({ navigation }) => {
  
  return (
    <View style={{ flex: 1, backgroundColor: "#f08080", opacity: 0.89 }}>
      <View style={{ justifyContent: "center", padding: 10, paddingTop: 70, }}>
        <Image style={{height:70, borderRadius:100}} source={{uri:"https://links.papareact.com/mg9"}}/>
      </View>
      <Text style={{ alignItems:"center", alignContent: "center", margin:10,paddingTop:150,fontSize:43}}>
        You have a match!!
      </Text>
      
      <TouchableOpacity style={{ alignItems:"center", backgroundColor: "white", margin: 5, padding: 10, borderRadius: 100, marginTop: 20 }}
        onPress={() => {
          navigation.goBack();
          navigation.navigate("Chat");
       }}
      >
       
        <Text style={{alignItems:"center"}}>send a message</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MatchScreen

const styles = StyleSheet.create({})