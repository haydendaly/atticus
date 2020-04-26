/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, AsyncStorage
} from 'react-native';
import clubs from '../functions/clubs';



export default class BookView extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.navigation.state.params
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#155149', flex: .33, width: '100%', flexDirection: 'row', top: 15}}>
          <View style={{flex: .6, marginTop: '1.75%', height: "90%", paddingLeft: '7%'}}>
            <Image source={{uri: this.state.imgURL}} style={{borderRadius: 8, height: '100%', width: '100%'}}>
            </Image>

            </View>

          <View style={{flex: 1.3, height: "50%", flexDirection: "column", alignContent: ""}}>
            <Text adjustsFontSizeToFit
              numberOfLines={3} style={styles.bookTitle}>{this.state.title}</Text>
            <Text style={styles.subHeader}>{this.state.author}</Text>
            
           <TouchableOpacity
              style={styles.button}
              activeOpacity={0.75}
              onPress={() => {
                AsyncStorage.getItem('userID').then(value => {
                clubs.create(this.state.bookID, value, (data) => {
                this.props.navigation.navigate('HomeScreen');
                 })
               })
              }}
               >
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Create a club</Text>
              </TouchableOpacity>
              </View>
       </View>

      <View style={{flex: .65, height: 180, paddingTop: 35}} >  
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style = {[styles.text, {fontWeight: "800"}]}>Description</Text>
          <Text style = {styles.text}>{this.state.description}</Text>
        </View>
        </ScrollView>
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
  button: {
    backgroundColor: "#5d8e98",
    height: 40,
    width: 115,
    borderWidth: 2,
    borderColor: '#5d8e98',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    position: 'absolute',
    top: 110,
    right: 110
  },
  bookTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: '#fff',
    paddingTop:10,
    paddingLeft:12,
  },
  subHeader: {
    fontSize: 21,
    color: '#e0ffff',
    paddingTop: '2%',
    fontWeight: '400',
    paddingLeft:12
  },
  textContainer: {
  flex: .3,
  padding: '6%',
  paddingTop: '0%'
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
  },
  text:{
    fontSize:22,
    marginTop: 10
  }
});
