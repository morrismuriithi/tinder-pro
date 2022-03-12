import { ImageBackground,  StyleSheet, Text, Image, TouchableOpacity, View, Platform} from 'react-native'
import React from 'react'
import tw from "tailwind-rn"
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome5, } from "@expo/vector-icons"
import { AntDesign, entypto, Ionicons } from "@expo/vector-icons"
import { auth, authentication } from '../App'
import Swiper from 'react-native-deck-swiper'



const example= ({ navigation }) => {
  const dummy = [
    {
      firstName: "lemoh",
      lastName: "maure",
      occupation: "Software Developer",
      photoURL: "https://avatars.githubusercontent.com/u/24712956?n=4",
    age: 21,
      id:123,
    },
    {
      firstName: "sonny",
      lastName: "sangha",
      occupation: "Software Developer",
      photoURL: "https://avatars.githubusercontent.com/u/24712956?n=4",
      age: 27,
      id:456,
    },
    {
      firstName: "miles",
      lastName: "leisi",
      occupation: "Software Developer",
      photoURL: "https://avatars.githubusercontent.com/u/24712956?n=4",
      age: 18,
      id:789,
    }
  ]
  
const handleSignOut = () => {
  authentication
    .signOut()
    .then(() => {
    navigation.replace("Login")
    })
  .catch(error => alert(error.message))
}

  return (
    <View style={{flex:1, backgroundColor:"blue"}}>
      <View style={{
        flex: 1, flexDirection: "row", justifyItems: "center",
        justifyContent: 'space-around', backgroundColor: "green"
      }}>
      <View style={{ padding: 11, marginTop: 15, width: 70, borderRadius: 100, alignItems: "center", }}>
        <TouchableOpacity
        onPress={handleSignOut}
        >
        <FontAwesome5 name="user" size={30} color="#ff4500" />
        </TouchableOpacity>
    </View>
      <View style={{
        padding: 11, marginTop: 16, width: 70, borderRadius: 100, alignItems: "center",     }}>
      <TouchableOpacity>
        <FontAwesome5 name="fire" size={40} color="#ff5864" />
        </TouchableOpacity>
      </View>
      <View style={{
        padding: 11, marginTop: 15, width: 70, borderRadius: 100, alignItems: "center",     }}>
      <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
          <FontAwesome5 name="comments" size={30} color="#ff4500" />
          
        </TouchableOpacity>
      </View>
     
    </View>
      <View style={{flex:1}}>
          <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={dummy}
          renderCard={(card) => (
            <View key={card.id} style={{ backgroundColor: "red",  height:70, borderRadius:10 }}>
              <Text>{card.firstName}</Text>
            </View>
  )}
        />
        </View>
   </View>
  )
}

export default example;

const styles = StyleSheet.create({});
