import { StyleSheet, TextInput, View, Text } from 'react-native'
import React from 'react'


const FlowerScreen = () => {
  return (
  <View style={{flex:1,paddingRight:20, paddingLeft:20, paddingTop:200, }}>
    
      <View style={{   backgroundColor:"red",height:50, justifyContent:'center',}}>
         <TextInput
        style={{  fontSize: 18, paddingBottom: 2, paddingTop: 15, justifyContent:'center' }}
          placeholder='name' />
        </View>
        <TextInput
        style={{  fontSize: 18, paddingBottom: 2, paddingTop: 15, }}
          placeholder='Email' />
        <TextInput
        style={{  fontSize: 18, paddingBottom: 2, paddingTop: 15 }}
          placeholder='Pasword' />
        <TextInput
        style={{  fontSize: 18, paddingBottom: 2, paddingTop: 15 }}
        placeholder='Confirm password' />
       
      
    </View>
    
  )
}

export default FlowerScreen

const styles = StyleSheet.create({})