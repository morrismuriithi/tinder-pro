

import { FontAwesome5, } from "@expo/vector-icons"
import { auth, authentication } from '../App'
import { FontAwesome } from "@expo/vector-icons"

import { db, } from "../firebase"
import SwipesScreen from '../backups/SwipesScreen';

import { StyleSheet, Text,Image, View,TouchableOpacity,} from 'react-native'
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import Swiper from 'react-native-deck-swiper'

import { doc, collection, onSnapshot, setDoc, query, where, getDocs, getDoc, serverTimestamp } from "@firebase/firestore"
import tw from "tailwind-react-native-classnames"





const HomeScreen = ({ navigation }) => {

  

   const authUser = authentication.currentUser?.email

  useLayoutEffect(() => {
     onSnapshot(doc(db, "users", authUser ), (snapshot) => {
      if (!snapshot.exists()) {
        navigation.navigate("Modal")
      }
     })
    
    
  }, [])



  const handleSignOut = () => {
  authentication
    .signOut()
    .then(() => {
    navigation.replace("Front")
    })
      .catch(error => alert(error.message))
    
  }
  

   const [profiles, setProfiles]= useState([])
  const swipeRef = useRef(null);
  
  const generateId = (id1, id2) => (id1 > id2 ? id1 + id2 : id2 + id1);
 
 useEffect(() => {
  let unsub;
   const fetchCards = async () => {
     const passes = await getDocs(collection(db, "users", authUser, "passes")).then(
       (snapshot) => snapshot.docs.map((doc) => doc.id)
     );
     
      const swipes = await getDocs(collection(db, "users", authUser, "swipes")).then(
       (snapshot) => snapshot.docs.map((doc) => doc.id)
     );
     const passedUserIds = passes.length > 0 ? passes : ["test"];
     const swipedUserIds = swipes.length > 0 ? swipes : ["test"];
     unsub = onSnapshot(query(collection(db, "users"), where("id", "not-in", [...passedUserIds,...swipedUserIds])),
       (snapshot) => {
      setProfiles(
        snapshot.docs. filter((doc)=>doc.id !== authUser).map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    })
  }
  fetchCards();
  return unsub;
 }, [db])
  const swipeLeft =  (cardIndex) => {
    if (!profiles[cardIndex]) return;
    const userSwiped = profiles[cardIndex];
   
    

    setDoc(doc(db, "users", authUser, "passes", userSwiped.id),
      userSwiped);
  }
   const swipeRight = async (cardIndex) => {
     if (!profiles[cardIndex]) return;
     const userSwiped = profiles[cardIndex];
      const loggedInprofile = await (await getDoc(doc(db, "users", authUser))).data();

        
     getDoc(doc(db, "users", userSwiped.id, "swipes", authUser)).then(
      (documentSnapshot) => {
         if (documentSnapshot.exists()) {
           console.log("yoo you mathched ");
          
           setDoc(
       doc(db,"users", authUser, "swipes", userSwiped.id), 
       userSwiped
     )
       
          setDoc(doc(db, "matches", generateId(authUser, userSwiped.id)), {
            users: {
              [authUser]: loggedInprofile,
              [userSwiped.id]: userSwiped,
            },
            usersMatched: [authUser, userSwiped.id],
            timestamp: serverTimestamp(),
          });
           navigation.navigate("Match", {
             loggedInprofile,
             userSwiped,
           })
           const foto1 = loggedInprofile.photoURL.localUri
  const foto2 =userSwiped.photoURL.localUri
         
        } else {
          setDoc(
       doc(db, "users", authUser, "swipes", userSwiped.id),
       userSwiped
     )
        }
      }
    )
     
  }
  return (
    
    <View style={{flex:1, backgroundColor:"#ffb6c1"}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSignOut}>
      <FontAwesome5 name="user" size={30} color="#ff4500" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Modal")}>
       <FontAwesome5 name="fire" size={40} color="#ff5864" />
       </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
      <FontAwesome5 name="comments" size={30} color="#ff4500" />
      </TouchableOpacity>
      
        
      </View>
        <View style={{flex:1 }}>
      
        <Swiper
          ref={swipeRef}
         
          containerStyle={{ backgroundColor: "#ff7f50", with: 100}}
        cards={profiles}
        stackSize={5}
        cardIndex={0}
        animateCardOpacity
        verticalSwipe={false}
        onSwipedLeft={(cardIndex) => {
          swipeLeft(cardIndex);
        }}
         onSwipedRight={(cardIndex) => {
          swipeRight(cardIndex);
        }}
        backgroundColor={"#4FD0E9"}
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                textAlign: "right",
                color: "red",
              },
            },
          },
          right: {
            title: "MATCH",
            style: {
              label: {
                textAlign: "left",
                color: "green",
              }
            }
          }
        }}
          renderCard={(card) =>  card ?(
            <View key={card.id} style={{  backgroundColor: "red", height:500, width:"100%",  borderRadius:10, }}>
              <Image style={{ backgroundColor: "white", height: 500, borderRadius: 10 }} source={{ uri: card.photoURL.localUri }} />
              <View style={styles.textContainer}>
        <View style={styles.textRow}>
                  <Text style={[styles.textPrimary, styles.textShadow]}>{card.displayName} </Text>
                  </View>
                  <View style={styles.textRow}>
          <Text style={[styles.textSecondary, styles.textShadow]}>{card.job}</Text>
        </View>
        <View style={styles.textRow}>
          
          <Text style={[styles.textSecondary, styles.textShadow]}>{ card.age}</Text>
        </View>
      </View>
       </View>
            
          ) : (
              <View style={{ backgroundColor: "#d2691e", height:500,width:"100%", justifyContent:"center",alignItems:"center"}}>
                <Text style={{ fontSize:15, paddingBottom: 10, }}>No more profiles </Text>
                <Image
                  style={{ height: 100, width: 100, paddingTop:10 }}
                  height={100}
                  width={100}
                  source={{uri: "https://links.papareact.com/6gb"}}
                />
                </View>
  )}
      />
      <View style={styles.corntainer}>
      <View />
        <TouchableOpacity style={styles.button1}
        onPress={() =>swipeRef.current.swipeLeft()}
        >
        <FontAwesome name='times' size={27} color="#F06795" />

      </TouchableOpacity>
        <TouchableOpacity
      onPress={() =>swipeRef.current.swipeRight()}
          style={styles.button2}>
        <FontAwesome name='heart' size={27} color="#00ced1" />

      </TouchableOpacity>
      <View />
      </View>
      
    </View>
      
      
      
    </View>
    
    
    
    
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop:35,
  },

  photo: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,

  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,

  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",

  },
  textPrimary: {
    color: "white",
    fontSize: 35,
    marginLeft: 10,
  },
  textSecondary: {
    color: "white",
    marginLeft: 10,
    fontSize: 25
  },
  textShadow: {
    textShadowColor: "rgba(0,0,0,0.80)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },


  corntainer: {
    height:1200,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: "#ffb6c1",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,

    },
    shadowOpacity: 0.15,
    shadowRadius: 4.45,
    elevation: 9,
  },
   button2: {
    width: 50,
    height: 50,
    backgroundColor: "#7fffd4",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,

    },
    shadowOpacity: 0.15,
    shadowRadius: 4.45,
    elevation: 9,
  },
  
});
