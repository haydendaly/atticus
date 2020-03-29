/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, TextInput, Button
} from 'react-native';
// import TextVerification from './textVerification';

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>This is book view</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: '#20639B',
    fontWeight: '600'
  },
  subHeader: {
    fontSize: 20,
    color: '#20639B',
    padding: '5%',
    fontWeight: '400'
  },
  textContainer: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
