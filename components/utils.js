import { ImageBackground,  StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "tailwind-rn"
import { NavigationContainer } from '@react-navigation/native'

const FrontScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      
      <ImageBackground
        resizeMode='cover'
        
        style={{flex:1}}
        source ={{uri: "https://tinder.com/static/tinder.png"}}
      >
        <View style={{flex:1, paddingTop:60, alignItems:"center",}}>
        <Text style={{fontSize:35,fontStyle:"italic", color: "white",
    fontWeight: "800", }}>WELCOME TO TINDER </Text>
      </View>
        <View style={{flex:1,paddingTop: 40}}/>
        <View style={{ flex: 1, padding:10, alignItems:"center" , justifyContent:"center", }}>
          <TouchableOpacity style={{ backgroundColor: "ivory", width: 130, height: 50, borderRadius: 10 }}
           onPress={()=>navigation.navigate("Register")}>
            <View style={{ flex: 1,  alignItems:"center" , justifyContent:"center", }}>
              <Text style={{  color: "#0782F9", fontWeight: "700",fontSize:20, }} >login&signin</Text>
              </View>
        </TouchableOpacity>
        </View>
      </ImageBackground>
      </View>
  )
}

export default FrontScreen 

const styles = StyleSheet.create({})