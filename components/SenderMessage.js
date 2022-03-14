import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'



const SenderMessage = ({ message, }) => {
    const date2 = new Date(message.timestamp?.seconds * 1000).toLocaleDateString()
  return (
    <View style={{flex:1, padding:10, paddingRight:10, paddingTop:17, backgroundColor:"#e6e6fa"}} >
    
    <View
      style={{ flexDirection:'row', alignItems:"center",  marginLeft: "auto",  borderRadius: 10,padding:9, alignSelf:"flex-start",paddingTop:10 }}
      >
       
        <View style={{ justifyContent: "center", borderRadius: 10, backgroundColor: "#0782F9", alignItems:"flex-end" }}>
          <View style={{padding:5,paddingLeft:15, paddingRight:15}} >
<Text style={{color:"white", fontSize:18}}>
        
              {message.message}</Text>
            
          </View>
      
         
              <View style={{ height:17, width:40, flex:1, alignItems:"flex-end",paddingRight:5}}>
           <Text style={{ color: "grey",alignItems:"flex-end", fontSize:14 }}>
            {new Date(message.timestamp?.seconds * 1000 ).toLocaleTimeString()}
         </Text>
          </View>
          
        </View>
       
       
        <View >
            <Image
        
        style={{height:35,width:35,borderRadius:100, alignItems:"flex-end",marginLeft:5,  }}
        source={{
          uri: message.photoURL.localUri
        }}
          />
        </View>
        
      </View>
      

      
      
      </View>
  )
}

export default SenderMessage


const styles = StyleSheet.create({})