import { StyleSheet, Text,Button, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-deck-swiper'

const example = () => {
  return (
       <View style={styles.container}>
        <Swiper
            cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                        <Text style={styles.text}>{card}</Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}>
            <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button>
        </Swiper>
    </View>
  )
}

export default example



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});
import { StyleSheet, Text,Button, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-deck-swiper'

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

const example = () => {
  return (
       <View style={{flex:1,}}>
        <Swiper
          
         
          containerStyle={{ backgroundColor: "transparent" }}
          cards={dummy}
          renderCard={(card) => (
            <View key={card.id} style={{ backgroundColor: "red",  height:500, borderRadius:10 }}>
              <Text>{card.firstName}</Text>
            </View>
  )}
      />
    </View>
  )
}

export default example



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});