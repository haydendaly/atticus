/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, TextInput, Button, Image
} from 'react-native';


export default class BookView extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.navigation.state.params
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#155149', flex: .25, width: '100%', flexDirection: 'row'}}>
          <View style={{flex: .3, marginTop: '1.75%', height: "90%", paddingLeft: '5%'}}>
            <Image source={{uri: this.state.imgURL}} style={{borderRadius: 8, height: '100%', width: '100%'}}>
            </Image>
          </View>
          <View style={{flex: .7}}>
            <Text style={styles.bookTitle}>{this.state.title}</Text>
            <Text style={styles.subHeader}>{this.state.author}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text>{this.state.description}</Text>
          <Button
          style={styles.button}
          title="Create A Club"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: '#20639B',
    fontWeight: '600'
  },
  buttoon: {
    borderRadius:20,
    color: '#20639B'
  },
  bookTitle: {
    fontSize: 24,
    color: '#fff',
    paddingTop:10
  },
  subHeader: {
    fontSize: 16,
    color: '#20639B',
    paddingTop: '2%',
    fontWeight: '400'
  },
  textContainer: {
    flex: .3,
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
