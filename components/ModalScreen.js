import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { authentication } from '../App'
import { db } from '../firebase'
import { doc, serverTimestamp, setDoc, setdoc } from "firebase/firestore"
import * as ImagePicker from 'expo-image-picker';




const ModalScreen = ({ navigation }) => { 
   
 
  


  const authUser = authentication.currentUser?.email
  const [name, setName] = useState(null)
  const [image, setImage] = useState(null)
  const [job, setJob] = useState(null)
  const [age, setAge] = useState(null)
  const incompleteFom = !name || !image || !job || !age
  
 
    const create = () => {
      const myDoc = doc(db, "users", authUser)
      const docData = {
        "displayName": name,
      "photoURL": image,
        "job": job,
        "age": age,
        "id": authUser,
        "timestamp": serverTimestamp()
      }
      setDoc(myDoc,docData).then(() => {
      navigation.navigate("Home")
    }).catch((error) => {
      alert(error.message)
    })
  }
  




   const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setImage({ localUri: pickerResult.uri });
  };

  if (image !== null) {
    return (
       
      






    
    <View style={{ flex: 1, alignItems: "center", paddingTop: 25, backgroundColor: "rgba(90, 90, 90, 0.95)" }}>
      
      <Image
        style={{paddingTop:70,width:"50%",borderRadius:100, }}
        resizeMode='cover'
        
        source={{ uri: "https://links.papareact.com/2pf" }}
        

        />
        
        
      <View  style={{paddingTop:25,borderRadius:100, }}>
        <Text style={{fontSize:17, }}>Email: {authUser}</Text>
          </View>
         
          <ScrollView
            style={{width:"100%"}}
        showsVerticalScrollIndicator={false}
        >
        <View >
       <View style={styles.container}>
       <Image
          source={{ uri: image.localUri }}
          style={styles.thumbnail}
        />

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
      
    </View>

       <View style={{flex:1, alignItems:'center',}}>
    <View style={{width:"80%", alignItems: 'center'}}>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder='Enter Your name' />
     
     
      <TextInput
        value={job}
        onChangeText={setJob}
        style={styles.input}
        placeholder='your occupation' />
      
      <TextInput
      value={age}
        onChangeText={setAge}
        maxLength={2}
        keyboardType={"numeric"}
       style={styles.input}
                  placeholder='Enter your age' />
                </View>
      <View style={{ width: "60%",justifyContent: "center",marginTop: 20,height:100, }}>
        <Button
          disabled={incompleteFom}
          style={{ backgroundColor: "#ff5864", borderRadius:30 }}
          
        onPress={create}
        title="Update Profile"
        
                />
                 </View>
            </View>
            </ScrollView>
           
      </View>
    
      





      
    );
  }
  

 
 
  
  return (
  
      






    
    <View style={{ flex: 1, alignItems: "center", paddingTop: 25, backgroundColor: "rgba(90, 90, 90, 0.95)" }}>
      
      <Image
        style={{paddingTop:70,width:"50%",borderRadius:100, }}
        resizeMode='cover'
        
        source={{ uri: "https://links.papareact.com/2pf" }}
        

        />
        
        
      <View  style={{paddingTop:25,borderRadius:100, }}>
        <Text style={{fontSize:17, }}>Email: {authUser}</Text>
          </View>
         
          <ScrollView
            style={{width:"100%"}}
        showsVerticalScrollIndicator={false}
        >
        <View >
       <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.thumbnail} />

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
      
    </View>

       <View style={{flex:1, alignItems:'center',}}>
    <View style={{width:"80%", alignItems: 'center'}}>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder='Enter Your name' />
     
     
      <TextInput
        value={job}
        onChangeText={setJob}
        style={styles.input}
        placeholder='your occupation' />
      
      <TextInput
      value={age}
        onChangeText={setAge}
        maxLength={2}
        keyboardType={"numeric"}
       style={styles.input}
                  placeholder='Enter your age' />
                </View>
      <View style={{ width: "60%",justifyContent: "center",marginTop: 20,height:100, }}>
        <Button
          disabled={incompleteFom}
          style={{ backgroundColor: "#ff5864", borderRadius:30 }}
          
        onPress={create}
        title="Update Profile"
        
                />
                 </View>
            </View>
            </ScrollView>
           
      </View>
    
      

      
  )
}

export default ModalScreen

const styles = StyleSheet.create({
   container: {
    width: "100%",
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor:"#eee",
    width: "80%",
    height: 150,
  },
   input: {
    backgroundColor:"white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
     marginTop: 20,
     width: "60%",
    
  
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
   thumbnail: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  corntainer: {

    

    

    alignItems: 'center',

    

    

  },

  button: {

    width: 200,

    height: 50,

    backgroundColor: '#3740ff',

    alignItems: 'center',

    justifyContent: 'center',

    borderRadius: 4,

    marginBottom:12    

  },

  buttonText: {

    textAlign: 'center',

    fontSize: 15,

    color: '#fff'

  },
  logo: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor:"#eee",
    width: "80%",
    height: 150,
  },
})