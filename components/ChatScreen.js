import { StyleSheet, Text, View,  SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'
import ChatList from './ChatList'

const ChatScreen = () => {
  return (
    <View style={{flex:1, alignItems:"center", paddingTop:40,backgroundColor:"#ffb6c1"}}>
      <Header title="Chat" />
      <ChatList/>
    </View>
  )
}

export default ChatScreen


const styles = StyleSheet.create({})