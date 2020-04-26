/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity,
    TextInput, Button, AsyncStorage } from "react-native";
import clubs from '../functions/clubs';
import books from '../functions/books';
import { Global } from '../styles/Global';


export default function ClubView({ navigation }) {
  const [value, changeText] = React.useState('');

  return (
    <View style={styles.container}>

        <Text style={[Global.header, {position:'absolute', top: 70, fontSize: 30, fontWeight: "700"}]}> Enter an invite code</Text>

        <Text style={[Global.subHeader,
        {position:'absolute',
        top: 90,
        fontSize: 22,
        fontWeight: "500",
        textAlign: "center",
        color: '#3d3d3d'}]}>Get invite codes from your friends who have created a club for you to join.</Text>


      <TouchableOpacity
        style={styles.inviteCodeButton}
        activeOpacity={0.75}
      >
      <TextInput placeholder='Enter code here'
      placeholderTextColor={'#959595'}
       textAlign={'center'}
       style={styles.input}
       keyboardType={'default'} onChangeText={text => {changeText(text)}}/>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.joinClubButton}
        activeOpacity={0.75}
        onPress={() => {
          console.log(value)
          if (value.length > 4) {
            AsyncStorage.getItem('userID').then(userID => {
              clubs.join(value, userID, data => {
                clubs.get(value, (club) => {
                  books.get(club.bookID, (book) => {
                    var friends = [];
                    var currentProgress = 0;
                    for (var i = 0; i < club.users.length; i++) {
                      if (club.users[i].userID != userID) {
                        friends.push(club.users[i])
                      } else {
                        currentProgress = club.users[i].progress
                      }
                    }
                    navigation.navigate("ClubView", [club, book, friends, userID, currentProgress])
                  })
                })
              })
            })
          }
        }}
      >
        <Text style={{color: 'white', textAlign: 'center', fontSize: 26}}>Join</Text>
      </TouchableOpacity>


      <Text style={[Global.header, {position:'absolute', bottom: 250, fontSize: 30, fontWeight: "700"}]}> Create a club</Text>

        <Text style={[Global.subHeader,
        {position:'absolute',
        bottom: 180,
        fontSize: 22,
        fontWeight: "500",
        color: '#3d3d3d'}]}>Start a club by searching and selecting a book for your club.</Text>


      <TouchableOpacity
        style={styles.searchButton}
        activeOpacity={0.75}
        onPress={() => {
          navigation.navigate('SearchView');
        }}
      >
        <Text style={{color: 'white', textAlign: 'center', fontSize: 26}}>Search</Text>
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
    fontSize: 30,
    color: 'black',
    position: 'absolute',
    bottom: 280
  },
  inviteCodeButton:{
    backgroundColor: "#f0f8ff",
    height: 50,
    width: 220,
    borderBottomWidth: 2,
    borderBottomColor: '#5d8e98',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    position: 'absolute',
    top: 180,
    left: 20
  },
  joinClubButton:{
    backgroundColor: "#5d8e98",
    height: 50,
    width: 95,
    borderWidth: 2,
    borderColor: '#5d8e98',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    position: 'absolute',
    top: 180,
    right: 20
  },
  searchButton:{
    backgroundColor: "#8a797a",
    height: 50,
    width: 290,
    borderWidth: 2,
    borderColor: '#8a7979',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    position: 'absolute',
    bottom: 125
  },
  input: {
    width: '80%',
    fontSize: 26
  }
});
