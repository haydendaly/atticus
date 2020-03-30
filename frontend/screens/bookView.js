/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, TextInput, Button, Image
} from 'react-native';
// import TextVerification from './textVerification';

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/infinite_jest.jpg')} />
        </View>

          <Text style={styles.bookTitle}>Infinite Jest</Text>
          <Text style={styles.subHeader}>David Foster Wallace</Text>

          <View style={styles.container}>

            <Text>Set in an addicts' halfway house and a tennis academy, 
            and featuring the most endearingly screwed-up family to come 
            along in recent fiction, Infinite Jest explores essential questions 
            about what entertainment is and why it has come to so dominate our 
            lives; about how our desire for entertainment affects our need to 
            connect with other people; and about what the pleasures we choose 
            say about who we are. Equal parts philosophical quest and screwball 
            comedy, Infinite Jest bends every rule of fiction without sacrificing 
            for a moment its own entertainment value. It is an exuberant, uniquely 
            American exploration of the passions that make us human—and one of 
            those rare books that renew the idea of what a novel can do.</Text>

          </View>

          <Button
          style={styles.buttoon}
          title="Create A Club" 
          />

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: '#20639B',
    fontWeight: '600'
  },
  imageContainer: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  buttoon: {
    borderRadius:20,
    color: '#20639B'
  },
  bookTitle: {
    fontSize:24,
    color:'black',
    paddingTop:10
  },
  subHeader: {
    fontSize: 20,
    color: '#20639B',
    padding: '2%',
    fontWeight: '400'
  },
  textContainer: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  doneButton: {
    backgroundColor: '#20639B',
    width: '85%',
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500'
  },
  input: {
    width: '60%',
    borderWidth: 2,
    borderColor: '#20639B',
    margin: 8,
    padding: 18,
    borderRadius: 8,
    fontSize: 24
  }
});
