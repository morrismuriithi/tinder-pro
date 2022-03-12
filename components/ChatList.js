import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db, } from "../firebase"
import { auth, authentication } from '../App'
import ChatRow from './ChatRow';

const ChatList = () => {
  const [matches, setMatches] = useState([])
  
   const authUser = authentication.currentUser?.email

  useEffect(() => 
    onSnapshot(query(collection(db, "matches"), where("usersMatched",
      "array-contains", authUser)),
      (snapshot) => setMatches(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })))
    ),
    [authUser]);
  console.log (matches)
  return (
    matches.length > 0 ? (
      <FlatList
        
        data={matches}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ChatRow matchDetails={item}/>}
      />
    ) : (
        <View style={{ padding: 10, }}>
          <Text style={{textAlign:"center",textDecorationStyle:"double", color:"grey",fontStyle:"italic"}}>No matches at the moment</Text>

        </View>
    )
    
  )
}

export default ChatList

const styles = StyleSheet.create({})