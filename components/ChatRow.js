import { StyleSheet, Text, TouchableOpacity, Image,View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import getMatchedUserinfo from '../lib/getMatchedUserinfo';
import { auth, authentication } from '../App'
import { db } from '../firebase';
import { onSnapshot, orderBy,collection, query} from 'firebase/firestore';

const ChatRow = ({ matchDetails }) => {
  const navigation = useNavigation();
  const authUser = authentication.currentUser?.email
  const [matchedUserinfo, setMachedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState("");
  useEffect(() => {
    setMachedUserInfo(getMatchedUserinfo(matchDetails.users, authUser));
  }, [matchDetails, authUser]);
  useEffect(
    () => onSnapshot(query(collection(db, "matches", matchDetails.id, "messages"), orderBy("timestamp", "desc")
    ),(snapshot) => setLastMessage(snapshot.docs[0]?.data()?.message)
    ),
    [matchDetails, db])

  return (
    <TouchableOpacity style={styles.cardShadow}
    onPress={() => navigation.navigate("Message", {
          matchDetails,
        })}
    >
      <Image
        style={{ borderRadius: 100, height: 65, width: 65, margin:5, marginLeft:10 }}
        source={{ uri: matchedUserinfo?.photoURL.localUri }}
        
      />
      <View>
        <Text style={{ fontSize: 25,margin:5, marginTop:5,marginRight:10,  }}>
          {matchedUserinfo?.displayName}
        </Text>
        <Text style={{  margin: 5, marginLeft: 5 , color:"grey",fontStyle:"italic"}}>{lastMessage||"Say Hi To Your New Friend!" }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ChatRow

const styles = StyleSheet.create({

  cardShadow: {
    flex: 1,
    
    alignItems:"center",
    margin:5,
    marginTop:20,
    justifyContent:"flex-start",
    height: 75,
    width:340,
    flexDirection: "row", 
    backgroundColor:"#ffb6c1",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height:1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation:2,

  }
})