/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function PhoneInput({ navigation }) {
  const number = navigation.getParam('number');
  const code = navigation.getParam('code');

  const [value, changeText] = React.useState('');
  const [errorMsg, changeErrorMsg] = React.useState('#fff')

  function onChangeText(text) {
    changeText(text);
    if (text == code) {
      navigation.navigate('NameInput', {
        number: number
      });
    } else {
      changeErrorMsg(text.length > 5 ? '#8b0000' : '#fff')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>What's your code?</Text>
        <Text style={styles.subHeader}>You should shortly receive an SMS verification code.</Text>
      </View>
      <TextInput style={styles.input}
        keyboardType={'phone-pad'}
        placeholder='123456'
        textAlign={'center'}
        autoFocus={true}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
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
