import { Button, StyleSheet, Text, TextInput, View ,TouchableOpacity,Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import getMatchedUserinfo from '../lib/getMatchedUserinfo';
import { auth, authentication } from '../App'
import { useRoute } from '@react-navigation/core';
import SenderMessage from './SenderMessage';
import ReceiverMessage from './ReceiverMessage';
import { addDoc, collection, onSnapshot, query, serverTimestamp, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const MessageScreen = () => {
  const { params } = useRoute();
  const { matchDetails, } = params;
  useEffect(() => 
    onSnapshot(query(collection(db, "matches", matchDetails.id, "messages"), orderBy("timestamp", "desc")
    ), snapshot => setMessages(snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    )
    )
  , [matchDetails,db])
  
  const authUser = authentication.currentUser?.email
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const sendMessage = () => { 
    addDoc(collection(db, "matches", matchDetails.id, "messages"), {
      timestamp: serverTimestamp(),
      userId: authUser,
      displayName: matchDetails.users[authUser].displayName,
      photoURL: matchDetails.users[authUser].photoURL,
      message: input,
    });
    setInput("");
  };
  
  return (
    <View style={{ flex: 1, marginTop: 30, backgroundColor: "#e6e6fa" }}>
      <View  style={{  marginTop: 5, height:60, backgroundColor: "#fff5ee" }}>
      <Header title={getMatchedUserinfo(matchDetails.users, authUser).displayName} callEnabled
      backgroundColor={"#fff5e"}
      />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, marginTop:10 }}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1, backgroundColor:"#ff6347" }}>
          <FlatList
            data={messages}
            inverted= {-1}
            style={{ paddingLeft: 4, }}
            keyExtractor={item => item.id}
             
            renderItem={({ item: message }) =>
              message.userId === authUser ? (
                <SenderMessage key={message.id} message={message }/>
              ) : (
                  <ReceiverMessage key={message.id} message={message }/>
          )
          }
          />

        </TouchableWithoutFeedback>
      <View style={{backgroundColor:"#c0c0c0",}}>
      <View style={{ height:80,width:300,marginTop:20, flexDirection: "row", justifyContent: "center",}}>
        <TextInput
          style={{marginStart:60, marginLeft:50 ,height: 40, width:250, backgroundColor:"grey", borderRadius:10, }}
          placeholder="Type Message..."
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          value= {input}
        />
        <View style={{ marginLeft: 30 }}>
          
           <TouchableOpacity
          onPress={sendMessage}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>send</Text>
        </TouchableOpacity>
        
          </View>
        </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({
   button: {
    
    width: "100%",
    
    borderRadius: 10,
    alignItems:"center",
  },
  
  
  
  buttonOutlineText: {
     color: "#fa8072",
    fontWeight: "700",
    fontSize:25,
  },
})