import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"

const SenderMessage = ({message}) => {
  return (
    <View style={{flex:1, padding:10, paddingRight:10, paddingTop:17, backgroundColor:"#e6e6fa"}} >
    
    <View
      style={{ flexDirection:'row', alignItems:"center",  marginLeft: "auto",  borderRadius: 5,padding:9, alignSelf:"flex-start",paddingTop:10 }}
      >
        
        <View style={{ justifyContent:"center",   padding:10, borderRadius:5,backgroundColor: "#0782F9",}}>
      <Text style={{color:"white"}}>
        
            {message.message}</Text>
         
             
        </View>
        <View >
            <Image
        
        style={{height:35,width:35,borderRadius:10, alignItems:"flex-end",marginLeft:5,  }}
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