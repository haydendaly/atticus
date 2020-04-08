/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';
import users from '../functions/users';
var uuid = require('uuid');

export default function NameInput({ navigation }) {
  const number = navigation.getParam('number');

  const [value, changeText] = React.useState('');
  const [errorMsg, changeErrorMsg] = React.useState('#fff')

  var userID = uuid.v4();

  function doneTapped() {
    if (value.length > 1) {
      users.create(value, number, userID, (data) => {
        AsyncStorage.setItem('userID', userID);
        AsyncStorage.setItem('number', number);
        AsyncStorage.setItem('name', value);
        navigation.navigate('HomeStack');
      })
    } else {
      changeErrorMsg(text.length > 1 ? '#8b0000' : '#fff')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>What's your name?</Text>
        <Text style={styles.subHeader}>This is so your friends know who you are.</Text>
      </View>
      <TextInput style={styles.input}
        placeholder='Atticus Finch'
        textAlign={'center'}
        autoFocus={true}
        onChangeText={text => changeText(text)}
        value={value}
      />      
      <TouchableOpacity
        style={styles.doneButton}
        activeOpacity={0.75}
        onPress={doneTapped}
      >
        <View>
          <Text style={styles.buttonText}>Done</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{color: errorMsg}}>Invalid Input, Please Try Again</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: '#143e60',
    fontWeight: '600'
  },
  subHeader: {
    fontSize: 20,
    color: '#143e60',
    padding: '5%',
    fontWeight: '400',
    textAlign: 'center'
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
    borderColor: '#143e60',
    margin: 8,
    padding: 18,
    borderRadius: 8,
    fontSize: 24
  }
});
