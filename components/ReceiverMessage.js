import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"

const ReceiverMessage = ({message}) => {
  return (
    <View style={{ flex: 1, padding: 5, backgroundColor: "#e6e6fa" }}>
      <Text style={{ color: "white", paddingt: 10 }}>{new Date(message.timestamp.seconds * 1000).toLocaleDateString("en-US")}</Text>
    <View
      style={{alignSelf: "flex-end" ,marginRight: "auto", borderRadius: 5,padding:10, }}
      
    >
      <View style={{
        flexDirection: "row", alignItems: "center", justifyContent:"space-around", marginRight:20 }}>
      <Image
        
        style={{height:35,width:35,borderRadius:10, alignItems:"flex-end", }}
        source={{
          uri: message.photoURL.localUri
        }}
          />
          <View style={{marginLeft:5,backgroundColor:"#ff6347",  justifyContent:"center", padding:10, borderRadius:5, }}>
            <Text style={{ color: "white", paddingt: 10 }}>{message.message}</Text>
            
            </View>
        </View>
      </View>
      </View>
  )
}

export default ReceiverMessage

const styles = StyleSheet.create({})