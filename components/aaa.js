import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
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

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }
  

  return (
    <View style={styles.container}>
       <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.thumbnail} />
      

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
      
    </View>
  );
}



const styles = StyleSheet.create({
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  container: {

    flex: 1,

    padding: 30,

    alignItems: 'center',

    

    backgroundColor: '#fff'

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