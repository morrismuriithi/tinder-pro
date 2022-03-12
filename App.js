import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import react from "react"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from './components/HomeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ChatScreen from './components/ChatScreen';
import FrontScreen from './components/FrontScreen';
import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
import RegisterScreen from './components/RegisterScreen';
import ModalScreen from './components/ModalScreen';
import MatchScreen from './components/MatchScreen';
import SwipesScreen from './backups/SwipesScreen';
import MessageScreen from './components/MessageScreen';
import AccountScreen from './components/AccountScreen';
LogBox.ignoreLogs([
  "Setting a timer",
  "Require cycle",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release"
])


const firebaseConfig = {
  apiKey: "AIzaSyAsLbSTddODVL1cxNoSoLBAkBs1VVgo3kg",
  authDomain: "instagram-pro-7a15a.firebaseapp.com",
  projectId: "instagram-pro-7a15a",
  storageBucket: "instagram-pro-7a15a.appspot.com",
  messagingSenderId: "386425951219",
  appId: "1:386425951219:web:819b88b0e7323aa794f886"
};
const app = initializeApp(firebaseConfig)
export const authentication= getAuth(app)


const Stack = createNativeStackNavigator();

  
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front">
       <Stack.Group>
        <Stack.Screen
          name="Front"component={FrontScreen }options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Register"component={RegisterScreen}options={{ headerShown: false }}
          />
           <Stack.Screen
          name="Account"component={AccountScreen }options={{ headerShown: false }}
          />
          <Stack.Screen
          name="Message"component={MessageScreen}options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"component={HomeScreen}options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"component={ChatScreen}options={{ headerShown: false }}
          />
           <Stack.Screen
          name="Swipes"component={SwipesScreen}options={{ headerShown: false }}
        />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation:"transparentModal"}}>
          <Stack.Screen
          name="Modal"component={ModalScreen}options={{ headerShown: false }}
          />
        </Stack.Group>
         <Stack.Group screenOptions={{presentation:"modal"}}>
          <Stack.Screen
          name="Match"component={MatchScreen}options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
     
      
    </NavigationContainer>
  ); 
}


  
