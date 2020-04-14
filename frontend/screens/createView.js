/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity,
    TextInput, Button, AsyncStorage } from "react-native";
import clubs from '../functions/clubs';

export default function ClubView({ navigation }) {
  const [value, changeText] = React.useState('');

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.inviteCodeButton}
        activeOpacity={0.75}
      >
      <TextInput placeholder='Invite Code' placeholderTextColor={'black'} textAlign={'center'} style={styles.input} keyboardType={'default'} onChangeText={text => {changeText(text)}}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.joinClubButton}
        activeOpacity={0.75}
        onPress={() => {
          console.log(value)
          if (value.length > 4) {
            AsyncStorage.getItem('userID').then(userID => {
              clubs.join(value, userID, data => {
                navigation.navigate('HomeScreen');
              })
            })
          }
        }}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>Join Club</Text>
      </TouchableOpacity>

      <Text style={styles.text}> Or </Text>
      <TouchableOpacity
        style={styles.searchButton}
        activeOpacity={0.75}
        onPress={() => {
          navigation.navigate('SearchView');
        }}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>Search and Create a Club</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center"
  },
  text: {
    marginTop: 285,
    fontSize: 30,
    color: 'black'
  },
  inviteCodeButton:{
    backgroundColor: "#f0f8ff",
    height: 50,
    width: 290,
    borderWidth: 2,
    borderColor: '#20639B',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    position: 'absolute',
    top: 140
  },
  joinClubButton:{
    backgroundColor: "#20639B",
    height: 50,
    width: 290,
    borderWidth: 2,
    borderColor: '#20639B',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    position: 'absolute',
    top: 205
  },
  searchButton:{
    backgroundColor: "#20639B",
    height: 50,
    width: 290,
    borderWidth: 2,
    borderColor: '#20639B',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    position: 'absolute',
    bottom: 205
  },
  input: {
    width: '80%',
    fontSize: 22
  }
});
