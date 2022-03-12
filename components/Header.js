import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Foundation, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';

const header = ({  title, callEnabled }) => {
  const navigation = useNavigation
  return (
    <View style={{padding:2, flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <View style={{flex:1, flexDirection:"row", alignItems:"center",}}>
          <TouchableOpacity >
          <Ionicons name="chevron-back-outline" size={34 } color="greys"/>
        </TouchableOpacity>
        <Text style={{paddingLeft:20, fontSize: 40 }}>{ title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity style={{borderRadius:100, paddingRight:30, }} >
          <Foundation name="telephone" size={40} color="grey" />
        </TouchableOpacity>
      )}
    </View>
    
  )
}

export default header

const styles = StyleSheet.create({})