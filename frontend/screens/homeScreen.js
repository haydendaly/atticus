/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

import React, { useState } from "react";
import { Text, View, StyleSheet,TouchableOpacity,
  TextInput, Button } from "react-native";

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Book Club</Text>
      <Text>Your Clubs</Text>
      <Text>Our Top Picks</Text>
      <Text>Community Favorites</Text>
    
   
   <TouchableOpacity
      style={styles.clubViewButton}
      activeOpacity={0.75}
      onPress={() => navigation.navigate('ClubView')}
    >
      <View>
        <Text style={styles.buttonText}>Go to Club View</Text>
      </View>
    </TouchableOpacity>
    

    <TouchableOpacity
      style={styles.bookViewButton}
      activeOpacity={0.70}
      onPress={() => navigation.navigate('BookView')}
    >
      <View>
        <Text style={styles.buttonText}>Go to Book View</Text>
      </View>
    </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#eee",
    alignItems: "center"
  },
  text: {
    marginTop: 50,
    fontSize: 32
  },
  clubViewButton: {
    backgroundColor: '#5f9ea0',
    position: 'absolute',
    bottom: 110,
    width: '65%',
    height: 50,
    padding: 10,
    justifyContent: 'space-around',
    borderRadius: 8,
    flexDirection: 'row'
  },
  bookViewButton:{
    backgroundColor: '#5f9ea0',
    position: 'absolute',
    bottom: 190,
    width: '65%',
    height: 50,
    padding: 10,
    justifyContent: 'space-around',
    borderRadius: 8,
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '500'
  }
});
