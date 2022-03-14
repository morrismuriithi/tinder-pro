import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";


const ReceiverMessage = ({ message,  }) => {
  const date1 = new Date(message.timestamp?.seconds * 1000).toLocaleDateString()
    const date2 = new Date()
  if (date1 !== date2) {
    return (
 <View style={{ flex: 1, padding: 5, backgroundColor: "#e6e6fa" }}>
     
        <View style={{flex:1, alignItems:'center'}}>
          <Text>{date1}</Text>
        </View>
    <View
      style={{alignSelf: "flex-end" ,marginRight: "auto", borderRadius: 5,padding:10, }}
      
      >
        
      <View style={{
        flexDirection: "row", alignItems: "center", justifyContent:"space-around", marginRight:20 }}>
      <Image
        
        style={{height:35,width:35,borderRadius:100,marginRight:5, alignItems:"flex-end", }}
        source={{
          uri: message.photoURL.localUri
        }}
          />
         
        
        <View style={{ paddindleft:5,justifyContent: "flex-start", borderRadius: 10, backgroundColor: "#ff6347", alignItems:"flex-start" }}>
          <View style={{padding:5, paddingLeft:15, paddingRight:15}} >
<Text style={{color:"white", fontSize:18}}>
        
            {message.message}</Text>
          </View>
      
         
              <View style={{ height:17, width:40, flex:1, alignItems:"flex-start",paddingLeft:5}}>
           <Text style={{ color: "grey",alignItems:"flex-start", fontSize:14,  }}>
            {new Date(message.timestamp?.seconds * 1000 ).toLocaleTimeString()}
         </Text>
          </View>
          </View>
        </View>
      </View>
      </View>

    );
  }

  return (
    <View style={{ flex: 1, padding: 5, backgroundColor: "#e6e6fa" }}>
     
    <View
      style={{alignSelf: "flex-end" ,marginRight: "auto", borderRadius: 5,padding:10, }}
      
      >
        
      <View style={{
        flexDirection: "row", alignItems: "center", justifyContent:"space-around", marginRight:20 }}>
      <Image
        
        style={{height:35,width:35,borderRadius:100,marginRight:5, alignItems:"flex-end", }}
        source={{
          uri: message.photoURL.localUri
        }}
          />
         
        
        <View style={{ paddindleft:5,justifyContent: "flex-start", borderRadius: 10, backgroundColor: "#ff6347", alignItems:"flex-start" }}>
          <View style={{padding:5, paddingLeft:15, paddingRight:15}} >
<Text style={{color:"white", fontSize:18}}>
        
            {message.message}</Text>
          </View>
      
         
              <View style={{ height:17, width:40, flex:1, alignItems:"flex-start",paddingLeft:5}}>
           <Text style={{ color: "grey",alignItems:"flex-start", fontSize:14,  }}>
            {new Date(message.timestamp?.seconds * 1000 ).toLocaleTimeString()}
         </Text>
          </View>
          </View>
        </View>
      </View>
      </View>
  )
}

export default ReceiverMessage

const styles = StyleSheet.create({})